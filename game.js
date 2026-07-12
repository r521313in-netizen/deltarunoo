const deck=createDeck();

const player=new Player("You");
const ai=new Player("Computer");

for(let i=0;i<7;i++){

    player.draw(deck);
    ai.draw(deck);

}

let discard=deck.pop();
