class Player{

    constructor(name){

        this.name=name;
        this.hand=[];

    }

    draw(deck){

        this.hand.push(deck.pop());

    }

}
