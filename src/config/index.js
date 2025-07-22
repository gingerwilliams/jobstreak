import { cellRenderer } from "./cellRenderer"

export const Columns = [
    { 
        headerName: "Title", 
        field: "title", 
        colId: "title",
        type: "textColumn",
        flex: 1
    },
    { 
        headerName: "Company", 
        field: "company", 
        colId: "company",
        type: "textColumn",
        flex: 1 
    },
    {   
        headerName: "Location", 
        field: "location", 
        colId: "location", 
        type: "textColumn",
        flex: 1 
    },
    { 
        headerName: "Type", 
        field: "type", 
        colId: "type", 
        type: "textColumn",
        flex: 1 
    },
    {
        headerName: "URL",
        field: "url",
        colId: "url",
        type: "textColumn",
        cellRenderer
    },
    { 
        headerName: "Saved At", 
        field: "createdAt",
        colId: "createdAt",
        type: "dateColumn", 
        flex: 1 
    }
]