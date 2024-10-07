# brawlify.js
Web-API for [brawlify.com](https://brawlify.com) website for brawlstars to get the most accurate stats, upcoming events, maps and more

## Example
```JavaScript
async function main() {
	const { Brawlify } = require("./brawlify.js")
	const brawlify = new Brawlify()
	const brawlers = await brawlify.getBrawlers()
	console.log(brawlers)
}

main()
```
