import { scrapeJobs } from "../utils/scraper.js";
import Constants from "../constants/index.js";

export const dice = () => {
    console.log("Dice board executed")
    const { DICE, DICE_JOBS, DICE_RECCOMMENDED} = Constants;
    // since we have a white list we dont need this condition
    const condition = 
        window.document.documentURI.includes(`${DICE}${DICE_JOBS}`) ||
        window.document.documentURI.includes(`${DICE}${DICE_RECCOMMENDED}`);

    const selectors = {
        id: (el) => {
            const url = el.querySelector('a').getAttribute('href');
            const id = url.slice(url.lastIndexOf('/') + 1);
            console.log(`Dice ID: ${id}`);
            return id;
        },
        jobSelector:'[role*="listitem"]',
        title:'.content a',
        company: '.header p',
        location:'.content > span > div > div:first-child p',
        url: (el) => {
            const url =  el.querySelector('a').getAttribute('href');
            console.log(`Dice URL: ${url}`);
            return url
        }
    };

    return scrapeJobs(selectors)
}