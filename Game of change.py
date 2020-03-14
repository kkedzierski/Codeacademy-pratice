import random
import sys

player_one_money = 100
player_two_money = 100

#method helpers
def win_info(result, bet):
  global player_one_money
  player_one_money += bet
  return "The result is: {0}, you won!. Your account results: {1}".format(result, player_one_money)

def lost_info(result,bet):
  global player_one_money
  player_one_money -= bet
  return "The result is: {0}, you lost!, Your account results: {1}".format(result, player_one_money)

def check_money(money):
  """Bool function to check correctness of beting money, return True if everything is correct, False if it find some mistakes"""
  if money > player_one_money:
    print("You don't have that money")
    return False
  if money < 0:
    print("You can't bet negative money")
    return False
  if money == 0:
    print("You must bet some money")
    return False
  if money < player_one_money and money > 0:
    return True

#Write your game of chance functions here
def coin_flip(guess, bet):
  if check_money(bet):
    coin_dicr = {0:"heads", 1:"tails"}
    result = coin_dicr.get(random.randint(0,1))
    if type(guess) == str and type(bet) == int:
      if guess == result:
        return win_info(result, bet)
      else:
        return lost_info(result, bet)
    else:
         return "First parametr must be string, second intiger"
  else:
    return "Check your wallet"
  
def dice_roll(guess, bet):
  if check_money(bet):
    dice1 = random.randint(1,6)
    dice2 = random.randint(1,6)
    result =  dice1 + dice2
    parity = True if result % 2 == 0 else False
    if type(guess) == bool and type(bet) == int:
      if guess == parity:
        return win_info(result, bet)
      else:
        return lost_info(result, bet)
    else:
      return "First parametr must be bool, second intiger"
  else:
    return "Check your wallet"
    
def higher_card(player_one_bet, player_two_bet):
  if check_money(player_one_bet) and check_money(player_two_bet):
    global player_one_money, player_two_money
    suits = {
      0: 'Clubs', 1: 'Diamonds', 2: 'Hearts', 3: 'Spades'
    }

    cards = { 0: 'Ace', 1: '2', 2: '3', 3: '4', 4: '5',
           5: '6', 6: '7', 7: '8', 8: '9', 9: '10', 
           10: 'Jack', 11: 'Queen', 12: 'King'
          }
    card_one_num = cards.get(random.randint(0,12))
    card_two_num = cards.get(random.randint(0,12))
    player_one_card = str(card_one_num) + " of " + str(suits.get(random.randint(0,3)))
    player_two_card = str(card_two_num) + " of " + str(suits.get(random.randint(0,3)))

    if type(player_one_bet) == int and type(player_two_bet) == int: 
      if card_one_num == card_two_num:
        return "Its a Tie!"
      else:
        if card_one_num > card_two_num:
          player_one_money += player_one_bet
          player_two_money -= player_two_bet
          win_player = "Player one"
        else:
          win_player = "Player two"
          player_one_money -= player_one_bet
          player_two_money += player_two_bet
  
        show_cards = "Player one card: {0},\nplayer two card: {1}, \n{2} win!, \nplayer one account: {3}, \nplayer two account: {4}, ".format(player_one_card, player_two_card, win_player, player_one_money, player_two_money)
        return show_cards
    else:
      return "First and second must be intiger"
  else:
    return "Check your wallet"
  
def roulette_game(guess, bet):
  if check_money(bet):
    ball_throw = random.randint(1,37)
    parity = True if ball_throw % 2 == 0 else False
    if type(guess) == bool and type(bet) == int:
      if guess == parity:
        return win_info(ball_throw, bet)
      else:
        return lost_info(ball_throw, bet)
    else:
      return "First parametr must be bool, second intiger"
  else:
    return "Check your wallet"
  
#Call your game of chance functions here
print("Flipping coin Game")
print(coin_flip("heads",5))
print("")

print("Cho-Han game")
print(dice_roll(True,5))
print("")

print("Who's card is higher game")
print(higher_card(5,5))
print("")

print("Roulette game")
print(roulette_game(True, 10))