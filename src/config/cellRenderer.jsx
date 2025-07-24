import React from 'react';
import TrashIcon from '../components/TrashIcon';

export const linkRenderer = (params) => {
    return (
        <a href={params.value} target="_blank">
            {/* {new URL(params.value).hostname}  */}
            View Listing
        </a>
    );
};

export const buttonRenderer = (params) => {
    const handleDelete = () => {
        chrome.storage.local.get({ jobStreak: [] }, (result) => {
            const updatedJobs = result.jobStreak.filter(
                (job) => job.id !== params.data.id
            );
            chrome.storage.local.set({ jobStreak: updatedJobs }, () => {
                params.api.applyTransaction({ remove: [params.data] });
            });
        });
    };

    return (
        <button onClick={handleDelete}>
            <TrashIcon />
        </button>
    );
};