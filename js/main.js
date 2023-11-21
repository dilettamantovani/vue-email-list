const {createApp} = Vue

createApp({
    data() { 
        return {
            emailList: [],
        }
    },
    methods: {
        eMail() {
            for (i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                    console.log("Ricevuto: ", response.data);
                    let email = response.data.response;
                    this.emailList.push(email);
                });
            }
        }
    },

    mounted(){
        console.log("ok");
    }
}).mount("#app")