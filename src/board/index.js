import { indeed } from "./indeed";
import { linkedIn } from "./linkedIn";
/**
 * Wellfound (formerly AngelList)
 * Glassdoor
 * Greenhouse, Lever
 * RemoteOK, Wellfound (formerly AngelList)
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