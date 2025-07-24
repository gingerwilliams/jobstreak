const Constants =  {
    // job boards
    LI: "https://www.linkedin.com",
    LI_COLLECTIONS: "/jobs/collections/recommended/",
    LI_SEARCH_RESULTS: "/jobs/search-results/",

    INDEED: "https://www.indeed.com/",
    INDEED_Q: "q-",
    INDEED_L: "l-",
    INDEED_JOBS_Q: "jobs?q=",
    INDEED_JOBS_L: "jobs?l=",
    INDEED_JOBSEEKER: "?from=gnav",

    GD: "https://www.glassdoor.com",
    GD_JOBS: "/Job/",
    //entitlement
    // NDF_ADMIN_ENTITLEMENT = "NDF_BLOTTER_ADMIN",
    
    // UNIQUE_KEY = "tradeId",
}

export default Constants

export const whitelist = [
    `${Constants.LI}${Constants.LI_COLLECTIONS}`,
    `${Constants.LI}${Constants.LI_SEARCH_RESULTS}`,
    `${Constants.INDEED}${Constants.INDEED_Q}`,
    `${Constants.INDEED}${Constants.INDEED_L}`,
    `${Constants.INDEED}${Constants.INDEED_JOBS_L}`,
    `${Constants.INDEED}${Constants.INDEED_JOBS_Q}`,
    `${Constants.INDEED}${Constants.INDEED_JOBSEEKER}`,
    `${Constants.GD}${Constants.GD_JOBS}`,
]