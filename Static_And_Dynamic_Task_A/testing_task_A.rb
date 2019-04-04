### Testing task A code:

# Carry out Static testing on the code below.
# Correct the errors below that you spotted in task 1.

class CardGame

  def initialize(suit, value)
    @suit = suit
    @value = value;
  end

  def checkforAce(card)
  #def check_for_ace(card)
  
    if card.value = 1
    #if card.value == 1

      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)  
  #def highest_card(card1, card2)

  #indentation for if
  if card1.value > card2.value
    return card.name
    #return card1

  else
    #return missing

    card2
  end
end
end
#the above end has to be deleted and add it on the last line to end class 

def self.cards_total(cards)
  total
  #total = 0

  for card in cards
    total += card.value
    return "You have a total of" + total
  end
#the return has to be here
#return "You have a total of #{total}"
end