import { createDate } from "./index.js";

export const scrapeJobs = (selectors) => {
    const jobTypeFilter = ['Remote', "On-site", "Hybrid", ];

    return Array.from(document.querySelectorAll(selectors.jobSelector)).map((el) => {
        const jobTypeText = el.innerText;
        // const isMatch = jobTypeFilter.some(type => jobTypeText.includes(type));
        // if (!isMatch) return;
        const title = el.querySelector(selectors.title)?.innerText ?? 'No title';
        const company = el.querySelector(selectors.company)?.innerText ?? 'No Company Name';
        const location = el.querySelector(selectors.location)?.innerText ?? 'No Location';
        const id = selectors.id(el) || "No ID";
        const url = selectors.url(el) || 'No URL';
        return {
            title,
            id,
            company,
            location,
            url,
            status: "saved",
            createdAt: createDate(),
            type: jobTypeFilter.find(type => jobTypeText.includes(type)) ?? '',};
    });
    
}