class Brawlify {
	constructor() {
		this.api = "https://api.brawlapi.com/v1"
		this.secondApi = "https://proxy.brawlapi.com"
		this.headers = {
			"User-Agent": "Brawlify.com/app"
		}
	}

	async getBrawlers() {
		const response = await fetch(
			`${this.api}/brawlers`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getIcons() {
		const response = await fetch(
			`${this.api}/icons`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMaps() {
		const response = await fetch(
			`${this.api}/maps`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getGameModes() {
		const response = await fetch(
			`${this.api}/gamemodes`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getEvents() {
		const response = await fetch(
			`${this.api}/events`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMapInfo(mapId) {
		const response = await fetch(
			`${this.api}/maps/${mapId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getPlayerGraphs(playerTag) {
		const response = await fetch(
			`${this.api}/graphs/player/${playerTag}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClubGraphs(clubTag) {
		const response = await fetch(
			`${this.api}/graphs/club/${clubTag}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClubInfo(clubTag) {
		const response = await fetch(
			`${this.api}/graphs/clubs/#${clubTag}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClubLogs(clubTag) {
		const response = await fetch(
			`${this.api}/graphs/clublog/${clubTag}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getBrawlerInfo(brawlerId) {
		const response = await fetch(
			`${this.api}/brawlers/${brawlerId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Brawlify}
