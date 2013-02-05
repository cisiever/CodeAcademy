// Make your card constructor again here, but make sure to use private
// variables!
function Card(s,n) {
        var number = n;
        var suit = s;
        //getters
        this.getNumber = function(){
                switch(number)
                {
                	case 1:
                		return "Ace";
                	case 11:
                		return "Jack";
                	case 12:
                		return "Queen";
                	case 13:
                		return "King";
                	default:
                		return number;
                }
        };
        this.getSuit = function(){
        	var SuitsArray= new Array("Hearts","Diamonds","Clubs","Spades");
              return SuitsArray[suit-1];
               
        };
        this.getValue=function()
        {
        	if(number>=11)
        	{
        		return 10;
        	}
        	else if(number==1)
        	{
        		return 11;
        	}
        	else 
        	{
        		return number;
        	}
        };
}
function Hand(){
	var card1=deal();
	var card2=deal();
	this.score=function()
	{
		return card1.getValue()+card2.getValue();
	};
	this.displayCards=function(){
		var x= card1.getNumber() +" of "+card1.getSuit();
		var y=  card2.getNumber() +" of "+card2.getSuit();
		return x+" and "+ y;
	};
}
// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function(){
        var randNum = Math.floor(Math.random() * 13+1);
        var randSuit = Math.floor(Math.random() * 4+1);
        //the card
        return new Card(randSuit, randNum);
};

// examples of the deal function in action
var hand= new Hand();


var myHand = new Hand();
var yourHand = new Hand();
console.log("My Cards are: "+myHand.displayCards());
console.log("Your Cards are: "+yourHand.displayCards());
console.log("I scored a "+myHand.score()+" and you scored a "+
yourHand.score());

if(yourHand.score() > myHand.score())
console.log("you win!");
else if(yourHand.score() < myHand.score())
console.log("I win!");
else
console.log("We tied!");