import { indeed } from "./indeed";
import { linkedIn } from "./linkedIn";
/**
 * Glassdoor
 * ZipRecruiter
 * Robert Half
 * @returns 
 */


export const jobBoard = () => {
    const hostname = window.document.location.hostname;
    
    const jobBoardUrls = {
        "www.linkedin.com": linkedIn,
        "www.indeed.com": indeed
    };

    return jobBoardUrls[hostname];
}