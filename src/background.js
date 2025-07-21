import { whitelist } from "./constants/index.js";

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
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    chrome.contextMenus.update('save-job', { visible: isWhitelisted(tab.url) });
  }
});

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const tab = await chrome.tabs.get(tabId);
  chrome.contextMenus.update('save-job', { visible: isWhitelisted(tab.url) });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'save-job') {
    chrome.tabs.sendMessage(tab.id, { action: 'extractAndSaveJob' });
  }
});
