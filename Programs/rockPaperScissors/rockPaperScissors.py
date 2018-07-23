def rockPaperScissors(hand1, hand2):
    if hand1 == "rock" and hand2 == "paper":
        print "Player 2 Wins"
    elif hand1 == "rock" and hand2 == "scissors":
        print "Player 1 Wins"
    elif hand1 == "paper" and hand2 == "rock":
        print "Player 1 Wins"
    elif hand1 == "paper" and hand2 == "scissors":
        print "Player 2 Wins"
    elif hand1 == "scissors" and hand2 == "rock":
        print "Player 2 Wins"
    elif hand1 == "scissors" and hand2 == "paper":
        print "Player 1 Wins"
    else:
        print "Draw!"

rockPaperScissors("paper", "rock")
rockPaperScissors("paper", "paper")
rockPaperScissors("scissors", "rock")