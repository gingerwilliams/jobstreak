import { jobBoard } from "./board/index.js";

console.log("JobStreak content script loaded");

// Sample selector for a job listing (adjust per site)
// Selector for LinkedIn job listings
// TODO: create a whitelist for available boards
function captureJobListings() {
  	console.log("captureJobListings executed")

  	const board = jobBoard() // switch object for job boards
	const jobs = board() || []
	
  	if (jobs.length > 0) {
    	chrome.storage.local.get(['jobStreak'], (result) => {
      		const existing = result.jobStreak || [];
			const existingIds = new Set(existing.map(j => j.id));
      		const newJobs = jobs.filter(j => !existingIds.has(j.id));

			const appendJobs = [...existing, ...newJobs];

			chrome.storage.local.set({ jobStreak: appendJobs }, () => {
				console.log(`Saved ${jobs.length} new job(s), total: ${appendJobs.length}`);
			});
    	});
		return true;
  	}
	return false;
}

// "Save Job to JobStreak" sent messege
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractAndSaveJob') {
    captureJobListings();
    sendResponse({ status: 'initiated' });
  }
});