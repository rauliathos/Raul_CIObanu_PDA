require('minitest/autorun')
require('minitest/rg')
require_relative('card')
require_relative('testing_task_B')

class CardGameTest < MiniTest::Test

    def setup

        @card1 = Card.new("hearts", 8)
        @card2 = Card.new("diamonds", 10)
        @card3 = Card.new("spades", 2)
        @card4 = Card.new( "clubs", 1)

        @cards1 = [@card1, @card2, @card3, @card4]

        @cardgame1 = CardGame.new()
    end

    def test_check_for_ace__true
        expected = true
        actual = @cardgame1.check_for_ace(@card4)
        assert_equal(expected, actual)
    end

    def test_check_for_ace__false
        expected = false
        actual = @cardgame1.check_for_ace(@card3)
        assert_equal(expected, actual)
    end

    def test_highest_card
        expected = @card2
        actual =  @cardgame1.highest_card(@card1, @card2)
        assert_equal(expected, actual)
    end

    def test_cards_total__array_with_cards
        expected = "You have a total of 21"
        actual = CardGame.cards_total(@cards1)
        assert_equal(expected, actual)
    end

    

end