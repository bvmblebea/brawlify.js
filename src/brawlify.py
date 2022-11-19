from requests import get

class Brawlify:
	def __init__(self) -> None:
		self.api = "https://api.brawlapi.com"
		self.second_api = "https://proxy.brawlapi.com"
		self.headers = {
			"user-agent": "Brawlify.com/app"
		}

	def get_brawlers(self) -> dict:
		return get(
			f"{self.api}/v1/brawlers",
			headers=self.headers).json()

	def get_icons(self) -> dict:
		return get(
			f"{self.api}/v1/icons",
			headers=self.headers).json()

	def get_maps(self) -> dict:
		return get(
			f"{self.api}/v1/maps",
			headers=self.headers).json()

	def get_map_info(self, map_id: int) -> dict:
		return get(
			f"{self.api}/v1/maps/{map_id}",
			headers=self.headers).json()

	def get_game_modes(self) -> dict:
		return get(
			f"{self.api}/v1/gamemodes",
			headers=self.headers).json()

	def get_player_graphs(self, player_tag: str) -> dict:
		return get(
			f"{self.api}/v1/graphs/player/{player_tag}",
			headers=self.headers).json()

	def get_club_graphs(self, club_tag: str) -> dict:
		return get(
			f"{self.api}/v1/graphs/club/{club_tag}",
			headers=self.headers).json()

	def get_club_info(self, club_tag: str) -> dict:
		return get(
			f"{self.second_api}/v1/clubs/#{club_tag}",
			headers=self.headers).json()

	def get_club_logs(self, club_tag: str) -> dict:
		return get(
			f"{self.api}/v1/clublog/{club_tag}",
			headers=self.headers).json()
	
	def get_events(self) -> dict:
		return get(
			f"{self.api}/v1/events",
			headers=self.headers).json()

	def get_translations(self, language_code: str) -> dict:
		return get(
			f"{self.api}/v1/translations/{language_code}",
			headers=self.headers).json()
	
	def get_brawler_info(self, brawler_id: int) -> dict:
		return get(
			f"{self.api}/v1/brawlers/{brawler_id}",
			headers=self.headers).json()
