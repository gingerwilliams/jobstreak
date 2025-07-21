/* eslint-disable no-undef */
import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  	const [jobs, setJobs] = useState([]);

    const handleClearJobs = () => {
    	chrome.storage.local.remove("jobStreak", () => {
      		setJobs([]);
      		console.log("All jobs cleared");
    	});
  	};

	useEffect(() => {
		if (typeof chrome !== "undefined" && chrome.storage) {
			chrome.storage.local.get({ jobStreak: [] }, (result) => {
				setJobs(result.jobStreak);
			});
		} else {
			console.warn("Chrome extension APIs not available in this environment");
		}
	}, []);

  	return (
    	<div style={{ width: "300px", padding: "10px", fontFamily: "sans-serif" }}>
      		<h2>Saved Jobs: {jobs.length}</h2>
      		<button onClick={handleClearJobs} style={{ marginBottom: "10px" }}>
        		Clear All Jobs
      		</button>
      		{jobs.map((job) => (
        		<div key={job.id} className="job">
          			<strong>{job.title}</strong>
          			<br />
          			<em>{job.company}</em>
          			<br />
					<a href={job.url} target="_blank">
						View
					</a>
					<br />
					Status: {job.status}
					<br />
					Type: {job.type}
					<br />
					<small>Save Date {job.createdAt}</small>
       			</div>
      		))}
    	</div>
  	);
}

export default App;
