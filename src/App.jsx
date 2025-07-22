/* eslint-disable no-undef */
import { useEffect, useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { colorSchemeDarkWarm, themeQuartz } from "ag-grid-community";
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
import { Columns } from "./config";

function App() {
	const [jobs, setJobs] = useState([]);
	const [gridApi, setGridApi] = useState(null);

	const modules = [ClientSideRowModelModule];

	const myTheme = themeQuartz
		.withPart(colorSchemeDarkWarm)
		.withParams({
			// We prefer red to blue. Because the built in colour schemes
			// derive all colours from foreground, background and
			// accent colours, changing these two values is sufficient.
			// backgroundColor: 'darkwarm',
			accentColor: 'gray',
		});


	const handleClearJobs = () => {
		chrome.storage.local.remove("jobStreak", () => {
		setJobs([]);
		console.log("All jobs cleared");
		});
	};

	const handleExport = useCallback(() => {
		if (gridApi) {
			gridApi.exportDataAsExcel({
				fileName: "jobstreak_saved_jobs.xlsx"
			});
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
		<div style={{ width: "800px", height: "500px", fontFamily: "sans-serif" }}>
			<header><span><img src="/assets/icon.png" alt="briefcase icon" /></span><h1>JobStreak</h1></header>
			<h2>Saved Jobs: {jobs.length}</h2>
			<button onClick={handleClearJobs} style={{ marginBottom: "10px", marginRight: 10 }}>
				Clear All Jobs
			</button>
			<button onClick={handleExport} style={{ marginBottom: "10px" }}>
				Export to Excel
			</button>
			<div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
				<AgGridReact
					rowData={jobs}
					columnDefs={Columns}
					onGridReady={onGridReady}
					theme={myTheme}
					modules={modules}
					//   defaultColDef={{ resizable: true, sortable: true, filter: true }}
					domLayout="autoHeight"
				/>
			</div>
		</div>
	);
}

export default App;
