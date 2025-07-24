import { createDate } from "./index.js";

export const scrapeJobs = (condition, selectors) => {
    const jobTypeFilter = ['Remote', "On-site", "Hybrid", ];

    if (condition) {
        return Array.from(document.querySelectorAll(selectors.jobSelector)).map((el) => {
            const jobTypeText = el.innerText;
            // const isMatch = jobTypeFilter.some(type => jobTypeText.includes(type));
            // if (!isMatch) return;
            const title = el.querySelector(selectors.title)?.innerText ?? 'No title';
            const company = el.querySelector(selectors.company)?.innerText ?? 'No Company Name';
            const location = el.querySelector(selectors.location)?.innerText ?? 'No Location';
            const url = el.querySelector(selectors.url.element)?.getAttribute(selectors.url.attribute) ?? 'No URL'; // only for glassdoor
            const id = el.getAttribute("data-jobid") // only for glassdoor
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
}