export default {
  manifest_version: 3,
  name: 'JobStreak',
  description: 'Track and manage your job applications directly from job boards.',
  version: '1.1',
  permissions: [
    'storage',
    'tabs',
    'activeTab',
    'contextMenus'
  ],
  host_permissions: [
    'https://*.linkedin.com/*',
    'https://*.indeed.com/*',
    'https://*.glassdoor.com/*',
    'https://*.ziprecruiter.com/*',
    'https://*.dice.com/*'
  ],
  action: {
    default_popup: 'index.html',
    default_icon: 'icon.png',
  },
  background: {
    service_worker: 'src/background.js',
    type: 'module',
  },
  content_scripts: [
    {
      matches: [
        '*://*.linkedin.com/*', '*://*.indeed.com/*', '*://*.glassdoor.com/*', 'https://*.ziprecruiter.com/*', '*://*.dice.com/*',],
      js: ['src/contentScript.js'],
      run_at: 'document_idle',
    },
  ],
};