const Constants =  {
    // job boards
    LI: "https://www.linkedin.com",
    LI_COLLECTIONS: "/jobs/collections/recommended/",
    LI_SEARCH_RESULTS: "/jobs/search-results/",
    
    //entitlement
    // NDF_ADMIN_ENTITLEMENT = "NDF_BLOTTER_ADMIN",
    
    // UNIQUE_KEY = "tradeId",
}

export default Constants

export const whitelist = [
    `${Constants.LI}${Constants.LI_COLLECTIONS}`,
    `${Constants.LI}${Constants.LI_SEARCH_RESULTS}`,
]