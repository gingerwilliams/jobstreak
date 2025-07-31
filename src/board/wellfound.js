import { scrapeJobs } from "../utils/scraper.js";
import Constants from "../constants/index.js";

export const wellfound = () => {
    console.log("Wellfound board executed")
    const { WELL, WELL_JOBS } = Constants;
    const selectors = {
        id: (el) => {
            const jobEndpoint = el.querySelector('[class*="styles_jobLink"]').getAttribute("href");
            const slice = jobEndpoint.slice(jobEndpoint.lastIndexOf('/') + 1)
            console.log(`Wellfound ID: ${slice}`);
            return slice;

        },
        jobSelector:'[data-test*="StartupResult"]',
        title:'[class*="styles_titleBar__"] span',
        company:'h2',
        location:'[class*="styles_location__"]',
        url: (el) => {
            const jobId = el.querySelector('[class*="styles_jobLink"]').getAttribute("href");
            return `${WELL}${jobId}`;
        }
    };

    return scrapeJobs(selectors)
}