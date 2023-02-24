const vm = new Vue({
    el: "#app",
    data: {
        advice: ""
    },
    methods: {
        getAdvice(){
            fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.advice = json.slip.advice
            })
        }
    }
})