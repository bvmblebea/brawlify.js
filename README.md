# brawlify.py
Web-API for [brawlify.com](https://brawlify.com) website for brawlstars to get the most accurate stats, upcoming events, maps and more

## Example
```python
import brawlify
brawlify = brawlify.Brawlify()
player_graphs = brawlify.get_player_graphs(player_tag="")
print(player_graphs)
```
