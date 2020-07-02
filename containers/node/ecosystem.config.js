const path = require('path')

module.exports = {
  apps: [{
    name: 'server',
    script: 'server.js',
    instances: 1,
    autorestart: true, // THIS is the important part, this will tell PM2 to restart your app if it falls over
    watch: true,
    ignore_watch: ["node_modules", "public", "sql", "test", "package.json", "newrelic_agent.log"],
    max_memory_restart: '1G',
    env: {
      NODE_OPTIONS: '--inspect=0.0.0.0'
    }
  }]
}