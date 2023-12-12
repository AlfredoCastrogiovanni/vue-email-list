const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: [],
        }
    },

    created() {
        for(let i=0; i < 10; i++) {
            this.getRandomEmail()
        }
    },

    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((answer) => {
                this.emailList.push(answer.data.response);
            })
        }
    }
}).mount('#app')