const {createApp} = Vue

createApp({
    data() { 
        return {
            emailList: [],
        }
    },
    methods: {
        randomEmail() {
                this.emailList = [];

                for (i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                        console.log("Ricevuto: ", response.data);
                        let email = response.data.response;

                        console.log (this.emailList.length)
                        if (this.emailList.length < 10) {
                            this.emailList.push(email);
                        }
                    });
                }
        }
    },

    mounted(){
        console.log("ok");
    }
}).mount("#app")