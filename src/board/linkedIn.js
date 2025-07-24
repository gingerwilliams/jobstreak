import Constants from "../constants/index.js";
import { createDate } from "../utils/index.js";

const { LI, LI_SEARCH_RESULTS, LI_COLLECTIONS } = Constants;

const jobTypeFilter = ['Remote', "On-site", "Hybrid", ]; // Customize this

export const linkedIn = () => {
    console.log("linkedIn board executed")
    if (window.document.location.pathname === LI_SEARCH_RESULTS) {
        const jobSelector = '.job-card-job-posting-card-wrapper__card-link';
    
        return Array.from(document.querySelectorAll(jobSelector)).map((el) => {
            const jobTypeText = el.innerText;
            // const isMatch = jobTypeFilter.some(type => jobTypeText.includes(type));
            // if (!isMatch) return;

            const title = el.querySelector("strong")?.innerText ?? 'No title';
            const company = el.querySelector('.artdeco-entity-lockup__subtitle > div')?.innerText.trim() ?? 'No company';
            const location = el.querySelector('.artdeco-entity-lockup__caption > div')?.innerText.trim() ?? 'No location';
            const id = getParams(el.href);
            const createdAt = createDate()
            const status = "saved"

            return {
                id,
                title,
                createdAt,
                status,
                company,
                location,
                type: jobTypeFilter.find(type => jobTypeText.includes(type)) ?? 'Unknown',
                url: LI + "/jobs/view/" + id
            };
        });
    } else if (window.document.location.pathname === LI_COLLECTIONS) {
        const jobSelector = '.job-card-container';

        return Array.from(document.querySelectorAll(jobSelector)).map((el) => {
            const jobTypeText = el.innerText;
            // const isMatch = jobTypeFilter.some(type => jobTypeText.includes(type));
            // if (!isMatch) return;

            const title = el.querySelector(".job-card-list__title--link strong")?.innerText ?? 'No title';
            const company = el.querySelector('.artdeco-entity-lockup__subtitle > span')?.innerText.trim() ?? 'No company';
            const location = el.querySelector('.artdeco-entity-lockup__caption span')?.innerText.trim() ?? 'No location';
            const id = el.getAttribute("data-job-id")
            const createdAt = createDate
            const status = "saved"

            return {
                id,
                title,
                company,
                createdAt,
                status,
                location,
                type: jobTypeFilter.find(type => jobTypeText.includes(type)) ?? 'Unknown',
                url: LI + "/jobs/view/" + id
            };
        });
    }
}

function getParams(url) {
    const searchParams = new URLSearchParams(url);
    let id

    for (const param of searchParams){
        if (param[0].includes("https://www.linkedin.com")) {
            id = param[1]
        } 
    }
   return id
}

// function getParams(url) {
//   try {
//     const idMatch = url.match(/\/(\d+)(?:[/?]|$)/);
//     return idMatch ? idMatch[1] : null;
//   } catch (e) {
//     return null;
//   }
// }