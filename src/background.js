import { whitelist } from "./constants/index.js";

console.log('JobStreak background script loaded');

function isWhitelisted(url) {
  return whitelist.some(allowed => url.startsWith(allowed));
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'save-job',
    title: 'Save Job to JobStreak',
    contexts: ['page', 'selection'],
    visible: true, // Default visible
  });

  chrome.tabs.query({}, (tabs) => {
    for (const tab of tabs) {
      if (tab.url && isWhitelisted(tab.url)) {
        chrome.tabs.reload(tab.id);
      }
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log('onUpdated URL:', tab.url);
  if (changeInfo.status === 'complete' && tab.url) {
    chrome.contextMenus.update('save-job', { visible: isWhitelisted(tab.url) });
  }
});

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const tab = await chrome.tabs.get(tabId);
  console.log('onActivated URL:', tab.url);
  chrome.contextMenus.update('save-job', { visible: isWhitelisted(tab.url) });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'save-job') {
    console.log('onClicked:', info);
    chrome.tabs.sendMessage(tab.id, { action: 'extractAndSaveJob' });
  }
});
