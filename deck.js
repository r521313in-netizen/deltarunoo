const colors = [
    "red",
    "yellow",
    "green",
    "teal"
];

const values = [
    "0","1","2","3","4","5","6","7","8","9",
    "skip",
    "reverse",
    "draw2"
];

function createDeck(){

    const deck=[];

    colors.forEach(color=>{

        values.forEach(value=>{

            deck.push({
                color,
                value,
                sprite:`assets/cards/${color}_${value}.png`
            });

        });

    });

    for(let i=0;i<4;i++){

        deck.push({
            color:"wild",
            value:"wild",
            sprite:"assets/cards/wild.png"
        });

        deck.push({
            color:"wild",
            value:"draw4",
            sprite:"assets/cards/draw4.png"
        });

    }

    return shuffle(deck);

}

function shuffle(deck){

    for(let i=deck.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [deck[i],deck[j]]=[deck[j],deck[i]];
    }

    return deck;

}
