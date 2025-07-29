import { dice } from "./dice";
import { glassdoor } from "./glassdoor";
import { indeed } from "./indeed";
import { linkedIn } from "./linkedIn";
import { zipRecruiter } from "./zip";
/**
 * Wellfound (formerly AngelList)
 * Greenhouse, Lever
 * RemoteOK,
 * Robert Half
 * @returns 
 */


export const jobBoard = () => {
    const hostname = window.document.location.hostname;
    
    const jobBoardUrls = {
        "www.dice.com": dice,
        "www.glassdoor.com": glassdoor,
        "www.indeed.com": indeed,
        "www.linkedin.com": linkedIn,
        "www.ziprecruiter.com": zipRecruiter
    };

    return jobBoardUrls[hostname];
}