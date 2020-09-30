const vm = new Vue({
    el: '#app',
    data: {
        topLeft: false,
        topRight: false,
        botLeft: false,
        botRight: false,
        temp: [],
        sequence: [],
        squareMap: ['topLeft','topRight','botLeft','botRight'],
        counter: 0
    },
    methods: {
        addNewElToSequence(){
           this.sequence.push(this.squareMap[Math.floor(Math.random() * 4)]);
           this.temp = this.sequence.slice();
        },
        reset() {
            this.topLeft = false;
            this.topRight = false;
            this.botLeft = false;
            this.botRight = false;
        },
        newGame() {
            this.sequence = [];
            this.nextTurn()
            // setTimeout(() => {
            //     this.reset()
            // }, 300);
        },
        nextTurn() {
            this.addNewElToSequence();
            this.reset();
            this.playSequence(this.temp[0]);
        },
        playSequence(int) {
            this[int] = true;
            setTimeout(() => {
                this.reset();
                this.temp.shift();
                if(this.temp[0]) {
                    this.playSequence(this.temp[0])
                } else {
                    this.temp = this.sequence.slice();
                }
            }, 400);
        },
        selectSquare(int) {
            if(int === this.temp[0]) {
                this[int] = true;
                setTimeout(() => {
                    this.reset();
                    this.temp.shift();

                    if(!this.temp[0]) {
                        this.nextTurn();
                    }
                    this.counter++
                }, 300)
            }
            else {
                this.counter = 0
            }
        }

    }
})
