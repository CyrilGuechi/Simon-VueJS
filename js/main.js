const vm = new Vue({
    el: '#app',
    data: {
        topLeft: false,
        topRight: false,
        botLeft: false,
        botRight: false,
        tmp: [],
        sequence: [],
        squareMap: ['topLeft','topRight','botLeft','botRight']
    },
    methods: {
        addNewElToSequence(){
           this.sequence.push(this.squareMap[Math.floor(Math.random() * 4)]);
        },
        reset() {
            this.topLeft = false;
            this.topRight = false;
            this.botLeft = false;
            this.botRight = false;
        },
        newGame() {
            this.sequence = [];
            this.addNewElToSequence();
            this[this.sequence[0]] = true
            setTimeout(() => {
                this.reset()
            }, 300)
        },

    }
})
