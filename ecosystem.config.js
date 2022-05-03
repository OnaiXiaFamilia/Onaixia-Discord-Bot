module.exports = {
  apps : [{
    script: 'index.js',
    watch: true
  }, {
      name: 'Onaixiana',
      namespace: 'JoqniX',
      watch: ["./index.js", "./ecosystem.config.js, ./configtws,json"],
      ignore_watch : ["node_modules"],
      args: '--config ./configtws.json --index ./index.js --force-open --notification --user joqnix,onaix_,suzukizuriko  ',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}

console.log('twspace-crawler is online');