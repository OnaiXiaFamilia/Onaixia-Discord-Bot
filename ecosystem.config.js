module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
      name: 'Onaixiana',
      namespace: 'JoqniX',
      script: './index.js',
      watch: ["./index.js", "./ecosystem.config.js, ./configtws,json"],
      ignore_watch : ["node_modules"],
      args: '--config ./configtws.json --index ./index.js --force-open',
      env: {
        NODE_ENV: 'production',
        
      },
    },
  ],
}