class PokemonData:
  
  def __repr__(self):
    return "Pokomon data"
  
  pokemon_types = {
    'Fire': {
      'Water': 0.5,
      'Grass': 2.0
    },
    'Water': {
      'Fire': 2.0,
      'Grass': 0.5
    },
    'Grass': {
      'Fire': 0.5,
      'Water': 2.0
    }
  }
