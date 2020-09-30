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
    computed: {
        score() {
            const value = this.sequence.length - 1;
            return ( value < 0 ) ? `Level : 0` : `Level : ${value}`;
        }
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
            this.nextTurn();
        },
        nextTurn() {
            this.addNewElToSequence();
            this.reset();
            this.playSequence(this.temp[0]);
        },
        playSequence(square) {
            setTimeout(function () {
                vm[square] = true;
                setTimeout(function () {
                    vm.reset();
                    vm.temp.shift();
                    if (vm.temp[0]) {
                        vm.playSequence(vm.temp[0]);
                    } else {
                        vm.temp = vm.sequence.slice();
                    }
                }, 400);
            }, 400);
        },
        selectSquare(square) {
            if(square === this.temp[0]) {
                vm[square] = true;
                setTimeout(function() {
                    vm.reset();
                    vm.temp.shift();

                    if(!vm.temp[0]) {
                        vm.nextTurn();
                    }
                }, 400)
            }
            else {
                alert('Vous avez perdu')
            }
        }

    }
})
