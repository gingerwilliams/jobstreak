import { indeed } from "./indeed";
import { linkedIn } from "./linkedIn";


export const jobBoard = () => {
    const hostname = window.document.location.hostname;
    
    const jobBoardUrls = {
        "www.linkedin.com": linkedIn,
        "www.indeed.com": indeed
    };

    return jobBoardUrls[hostname];
}