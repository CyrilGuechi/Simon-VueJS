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
        newGame() {
            this.addNewElToSequence();
        }
    }
})
