// ---------- CARD CLASS ----------

class Card{

    constructor(color,value){

        this.color=color;
        this.value=value;

    }

    image(){

        return `assets/cards/${this.color}_${this.value}.png`;

    }

}


// ---------- PLAYER HAND ----------

let hand=[

    new Card("red",5),
    new Card("blue","skip"),
    new Card("green",2),
    new Card("yellow","reverse"),
    new Card("wild","draw4")

];

function drawHand(){

    const handDiv=document.getElementById("hand");

    handDiv.innerHTML="";

    hand.forEach(card=>{

        const div=document.createElement("div");

        div.className="card";

        div.style.backgroundImage=`url(${card.image()})`;

        div.onclick=()=>playCard(card);

        handDiv.appendChild(div);

    });

}

function playCard(card){

    document.getElementById("discard").innerHTML=
    `<img src="${card.image()}" width="120">`;

}

drawHand();
