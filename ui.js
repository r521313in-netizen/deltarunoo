const hand=document.getElementById("hand");
const discardImg=document.getElementById("discard");

function render(){

    hand.innerHTML="";

    player.hand.forEach((card,index)=>{

        const img=document.createElement("img");

        img.src=card.sprite;

        img.className="card";

        img.onclick=()=>playCard(index);

        hand.appendChild(img);

    });

    discardImg.src=discard.sprite;

}

function playCard(index){

    const card=player.hand[index];

    if(
        card.color===discard.color ||
        card.value===discard.value ||
        card.color==="wild"
    ){

        discard=card;

        player.hand.splice(index,1);

        render();

    }

}

render();
