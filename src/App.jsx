/* eslint-disable no-undef */
import { useEffect, useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { colorSchemeDarkWarm, themeQuartz } from "ag-grid-community";
import { Columns } from "./config";
import icon from "./assets/JobStreak_Logo.png";
import './App.css'
import onExport from "./utils/exportFile";

function App() {
	const [jobs, setJobs] = useState([]);
	const [gridApi, setGridApi] = useState(null);


	const myTheme = themeQuartz
		.withPart(colorSchemeDarkWarm)
		.withParams({
			// We prefer red to blue. Because the built in colour schemes
			// derive all colours from foreground, background and
			// accent colours, changing these two values is sufficient.
			// backgroundColor: 'darkwarm',
			accentColor: 'gray',
		});
	
	const onCellValueChanged = useCallback((event) => {
		const { data, colDef } = event;

		console.log("EVENT: ", event)
		console.log("EVENT: ", event)

		if (colDef.field === "status") {
			chrome.storage.local.get(["jobStreak"], (result) => {
				const currentJobs = result.jobStreak || [];

				const updatedJobs = currentJobs.map((job) =>
					job.id === data.id ? { ...job, status: data.status } : job
				);

				chrome.storage.local.set({ jobStreak: updatedJobs }, () => {
					console.log(`Status updated for job id ${data.id}`);
				});
			});
		}
	},[]);

	const handleClearJobs = () => {
		chrome.storage.local.remove("jobStreak", () => {
			setJobs([]);
			console.log("All jobs cleared");
		});
	};

	const handleExport = useCallback(async () => {
		if (gridApi) {
			await onExport(gridApi);
		}
	}, [gridApi]);

	const onGridReady = useCallback((params) => {
		setGridApi(params.api)
	}, [])

	useEffect(() => {
		chrome.storage.local.get({ jobStreak: [] }, (result) => {
			setJobs(result.jobStreak);
		});
	}, []);

	return (
		<div className="window">
			<header>
				<span><img src={icon} alt="JobStreak Logo" style={{ height: 35, marginRight: 8 }}/></span>
				<div className="buttons">
					<button onClick={handleClearJobs}>Clear All Jobs</button>
					<button onClick={handleExport}>Export to Excel</button>
					<button
						className="donate-button"
						onClick={() => window.open("https://cash.app/$stardust151", "_blank")}					>
						☕ Donate
					</button>
				</div>
			</header>
			
			<div className="info"><span className="totals">Saved Jobs: {jobs.length}</span></div>
			<div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
				<AgGridReact
					rowData={jobs}
					columnDefs={Columns}
					onGridReady={onGridReady}
					onCellValueChanged={onCellValueChanged}
					theme={myTheme}
					//   defaultColDef={{ resizable: true, sortable: true, filter: true }}
					domLayout="autoHeight"
				/>
			</div>
		</div>
	);
}

export default App;
