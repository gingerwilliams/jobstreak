import { createDate } from "../utils/index.js";
import { glassdoor } from "./glassdoor";
import { indeed } from "./indeed";
import { linkedIn } from "./linkedIn";
/**
 * Glassdoor
 * ZipRecruiter
 * Wellfound (formerly AngelList)
 * Greenhouse, Lever
 * RemoteOK,
 * Robert Half
 * @returns 
 */


export const jobBoard = () => {
    const hostname = window.document.location.hostname;
    
    const jobBoardUrls = {
        "www.linkedin.com": linkedIn,
        "www.indeed.com": indeed,
        "www.glassdoor.com": glassdoor
    };

    return jobBoardUrls[hostname];
}