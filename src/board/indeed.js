import Constants from "../constants/index.js";
import { createDate } from "../utils/index.js";

const { INDEED, INDEED_L, INDEED_Q, INDEED_JOBSEEKER, INDEED_JOBS_L, INDEED_JOBS_Q } = Constants;

const jobTypeFilter = ['Remote', "On-site", "Hybrid", ];

export const indeed = () => {
    console.log("Indeed board executed")
    if (
        window.document.documentURI.includes(`${INDEED}${INDEED_Q}`) || 
        window.document.documentURI.includes(`${INDEED}${INDEED_L}`) || 
        window.document.documentURI.includes(`${INDEED}${INDEED_JOBS_L}`) || 
        window.document.documentURI.includes(`${INDEED}${INDEED_JOBS_Q}`) || 
        window.document.documentURI.includes(`${INDEED}${INDEED_JOBSEEKER}`) || 
        window.document.documentURI === INDEED
    ) {
        const jobSelector = '.job_seen_beacon';

        return Array.from(document.querySelectorAll(jobSelector)).map((el) => {
            const jobTypeText = el.innerText;
            // const isMatch = jobTypeFilter.some(type => jobTypeText.includes(type));
            // if (!isMatch) return;

            const title = el.querySelector(".jobTitle span")?.innerText ?? 'No title';
            const company = el.querySelector('.company_location span')?.innerText.trim() ?? 'No company';
            const location = el.querySelector(`.company_location div div[data-testid]`)?.innerText.trim() ?? 'No location';
            const id = el.querySelector("a").getAttribute("id")
            const createdAt = createDate()
            const pathname = el.querySelector("a").getAttribute("href")
            const status = "saved"

            return {
                id,
                title,
                createdAt,
                company,
                status,
                location,
                type: jobTypeFilter.find(type => jobTypeText.includes(type)) ?? 'On-Site',
                url: INDEED + pathname.slice(1)
            };
        });
    }
} 