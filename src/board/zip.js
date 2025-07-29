import { scrapeJobs } from "../utils/scraper.js";
import Constants from "../constants/index.js";

export const zipRecruiter = () => {
    console.log("Zip board executed")
    const { ZIP, ZIP_JOBS} = Constants;
    // since we have a white list we dont need this condition
    const condition = window.document.documentURI.includes(`${ZIP}${ZIP_JOBS}`)

    const selectors = {
        id: (el) => el.getAttribute("id"),
        jobSelector:'[class*="job_result_two_pane"]',
        title:'h2 button',
        company:'[data-testid*="job-card-company"]',
        location:'[data-testid*="job-card-location"]',
        url: (el) => {
            const { origin } = window.document.location;
            const jobId = el.getAttribute("id").slice(9);
            return (origin + ZIP_JOBS + "lvk=" + jobId) || 'No URL'; // construct the URL from the job ID
        }
    };

    return scrapeJobs(selectors)
}