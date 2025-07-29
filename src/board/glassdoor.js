import { scrapeJobs } from "../utils/scraper.js";
import Constants from "../constants/index.js";

export const glassdoor = () => {
    console.log("Glassdoor board executed")
    const { GD, GD_JOBS } = Constants;
    // since we have a white list we dont need this condition
    const condition = window.document.documentURI.includes(`${GD}${GD_JOBS}`)

    const selectors = {
        id: (el) => el.getAttribute("selectors.id"),
        jobSelector:'[class*="JobsList_jobListItem"]',
        title:'[class*="JobCard_jobTitle"]',
        company:'[class*="EmployerProfile_compactEmployerName"]',
        location:'[class*="JobCard_location"]',
        url: (el) => {
            return el.querySelector("a")?.getAttribute("href") || 'No URL' 
        },
    };

    return scrapeJobs(selectors)
}