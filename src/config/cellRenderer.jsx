import React from 'react';

export const cellRenderer = (params) => {
    return (
        <a href={params.value} target="_blank">
            {/* {new URL(params.value).hostname}  */}
            View Listing
        </a>
    );
};