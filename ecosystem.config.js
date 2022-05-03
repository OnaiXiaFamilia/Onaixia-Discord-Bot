module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
      name: 'twspace-crawler',
      namespace: 'crawler',
      script: './dist/index.js',
      watch: ["./index.js", "./ecosystem.config.js, ./configtws,json"],
      ignore_watch : ["node_modules"],
      args: '--config ./configtws.json --index ./index.js',
      env: {
        NODE_ENV: 'production',
        
      },
    },
  ],
}