/* eslint-disable no-undef */
import { useEffect, useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { colorSchemeDarkWarm, themeQuartz } from "ag-grid-community";
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
import { Columns } from "./config";
import icon from "./assets/JobStreak_Logo.png";
import './App.css'

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
		<div className="window">
			<header>
				<span><img src={icon} alt="JobStreak Logo" style={{ height: 35, marginRight: 8 }}/></span>
			</header>
			
			<div className="controls-row">
				<div className="buttons">
					<button onClick={handleClearJobs}>Clear All Jobs</button>
					<button onClick={handleExport}>Export to Excel</button>
				</div>
				<h3>Saved Jobs: {jobs.length}</h3>
			</div>
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
