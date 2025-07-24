import { buttonRenderer, linkRenderer } from "./cellRenderer"

export const Columns = [
    {
        headerName: "Actions",
        field: "id",
        cellRenderer: buttonRenderer,
        width: 70,
        suppressMovable: true,
    },
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
        width: 80,
        flex: 1 
    },
    { 
        headerName: "Status", 
        field: "status", 
        colId: "status", 
        type: "textColumn",
        editable: true,
        width: 80,
        flex: 1 
    },
    { 
        headerName: "Saved At", 
        field: "createdAt",
        colId: "createdAt",
        type: "dateColumn", 
        flex: 1 
    },
    {
        headerName: "URL",
        field: "url",
        colId: "url",
        type: "textColumn",
        width: 70,
        cellRenderer: linkRenderer
    },
]