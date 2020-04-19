from pokemon_data import PokemonData

class Pokemon:
  def __init__(self, name, level, pok_type):
    self.name = name
    self.level = level
    self.pok_type = pok_type
    self.health = level
    self.max_health = level
    self.is_knocked_out = False
  
  def __repr__(self):
    return "Hi my name is {name} i\'am on {level} level, my health: {health}. My type is {type}".format(name=self.name, level=self.level, health=self.health, type = self.pok_type)
  
  def lose_health(self, health):
    self.health -= health
    if self.health <= 0:
      self.health = 0
      self.knocked_out()
    else:
      print("{name}, now has {health} health".format(name=self.name, health=self.health))
    
  def gain_health(self, health):
    self.health += health
    # if self.health == 0:
    #   self.revieve_pokemon()
    if self.health >= self.max_health:
      self.health = self.max_health
    print("{name}, now has {health} health".format(name=self.name, health=self.health))
    
  def knocked_out(self):
    self.is_knocked_out = True
    print("{name} is knocked out".format(name=self.name))
  
  def revieve_pokemon(self):
    self.is_knocked_out = False
    self.health = 1
    print("{name} is revieve".format(name=self.name))
    
  def attack(self, enemy):
    if self.is_knocked_out:
      print(f"{self.name}, is knocked out: can\'t attack")
      return
    else:
      print("{attacking_pokemon} attack {attacked_pokemon}".format(attacking_pokemon=self.name, attacked_pokemon=enemy.name))
      attack_result = PokemonData.pokemon_types[self.pok_type][enemy.pok_type]
      if attack_result == 0.5:
        print("Not effective attack from {attacking_pokemon}".format(attacking_pokemon = self.name))
      if attack_result == 2.0:
        print("Effective attack from {attacking_pokemon}".format(attacking_pokemon = self.name))
      enemy.lose_health(attack_result)
    
# ------------------------------------------
class Trainer:
  
  def __init__(self, name, pokemon_content, potions):
    self.name = name
    self.actual_pokemon = 0
    self.pokemons = pokemon_content
    self.potions = potions
  
  def __repr__(self):
    self.list_of_pokemons = [pokemon.name for pokemon in self.pokemons]
    return "I am trainer {name}. I have on pocket ball: {list_of_pokemons}. My active pokemon is: {actual_pokemon}".format(name=self.name, list_of_pokemons=self.list_of_pokemons, actual_pokemon = self.pokemons[self.actual_pokemon].name)
  
  def attack_trainer(self, enemy):
    my_pokemon = self.pokemons[self.actual_pokemon]
    enemy_pokemon = enemy.pokemons[enemy.actual_pokemon]
    my_pokemon.attack(enemy_pokemon)
  
  def use_potions(self):
    choosen_pokemon = self.pokemons[self.actual_pokemon]
    if choosen_pokemon.health >=  choosen_pokemon.max_health:
      print("Your active pokemon has max health you cannot give you more")
    else:
      if self.potions <= 0:
        print("You don't have any potions to use {name}".format(self.name))
      else:
        choosen_pokemon.gain_health(20)
        
  def switch_pokemon(self, pokemon_num):
    if pokemon_num < len(self.pokemons) and pokemon_num >= 0:
      if self.pokemons[pokemon_num].is_knocked_out:
        print("{choosen_pokemon} is knocked out, you can't choose it".format(choosen_pokemon=self.pokemons[pokemon_num].name))
      else:
        self.actual_pokemon = pokemon_num
        print("You choose {choosen_pokemon}".format(choosen_pokemon=self.pokemons[pokemon_num].name))
    else:
      print("You don\'t have that pokemon")
  
class FirePokemon(Pokemon):
  def __init__(self, name, level):
    super().__init__(name, level, 'Fire')
    
class WaterPokemon(Pokemon):
  def __init__(self, name, level):
    super().__init__(name, level, 'Water')
    
class GrassPokemon(Pokemon):
  def __init__(self, name, level):
    super().__init__(name, level, 'Grass')
  
charmander = FirePokemon('Charmander', 5)
squirtle = WaterPokemon('Squirtle', 5)
bulbasaur = GrassPokemon('Bulbasaur', 5)

johny_trainer = Trainer("Johny", [charmander, squirtle, bulbasaur], 5)
alicja_trainer = Trainer("Alicja", [squirtle, bulbasaur, charmander], 5)

# print(johny_trainer)
# print(alicja_trainer)

# alicja_trainer.attack_trainer(johny_trainer)
# alicja_trainer.attack_trainer(johny_trainer)
# alicja_trainer.attack_trainer(johny_trainer)
# johny_trainer.attack_trainer(alicja_trainer)
# johny_trainer.switch_pokemon(2)
# johny_trainer.attack_trainer(alicja_trainer)
