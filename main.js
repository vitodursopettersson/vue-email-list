'use strict'

const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmail: []
        }
    },
    created() {

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((responses) => {

                this.randomEmail.push(responses.data.response)

            })

        }
    },
    mounted() {
        console.log(this.randomEmail)
    }
}).mount('#app')