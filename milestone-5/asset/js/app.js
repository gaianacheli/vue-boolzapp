const app = new Vue ({
    el:"#app",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: './asset/img/avatar_1.jpg',
                visible: true,
                messages: [
                        {
                            id: '01',
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            id: '02',
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            id:'03',
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                      ],
            },
            {
                name: 'Fabio',
                avatar: './asset/img/avatar_2.jpg',
                visible: true,
                messages: [
                            {
                                id:'03',
                                date: '20/03/2020 16:30:00',
                                text: 'Ciao come stai?',
                                status: 'sent'
                            },
                            {
                                id:'04',
                                date: '20/03/2020 16:30:55',
                                text: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                            },
                            {
                                id:'05',
                                date: '20/03/2020 16:35:00',
                                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                            }
                          ],
             },
            {
                name: 'Samuele',
                avatar: './asset/img/avatar_3.jpg',
                visible: true,
                messages: [
                            {
                                id:'06',
                                date: '28/03/2020 10:10:40',
                                text: 'La Marianna va in campagna',
                                status: 'received'
                            },
                            {
                                id:'07',
                                date: '28/03/2020 10:20:10',
                                text: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                            },
                            {
                                id:'08',
                                date: '28/03/2020 16:15:22',
                                text: 'Ah scusa!',
                                status: 'received'
                            }
                          ],
            },
            {
                name: 'Luisa',
                avatar: './asset/img/avatar_4.jpg',
                visible: true,
                messages: [
                            {
                                id:'09',
                                date: '10/01/2020 15:30:55',
                                text: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent',
                            },
                            {
                                id:'10',
                                date: '10/01/2020 15:50:00',
                                text: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                            }
                          ],
                         
            },
            ],
            counter: 0,
            newMessages: '',
            search: '',
       
            
    },
    methods: {
        showChat(index) {
            this.counter = index
        },
        addMessage(){
            if (this.newMessages != '')
            this.contacts[this.counter].messages.push({
                date:new Date().toLocaleString(),
                text: this.newMessages,
                status: 'sent'
            })  
            setTimeout(() =>{
                this.contacts[this.counter].messages.push({
                 date: new Date().toLocaleString(),
                 text: 'ok',
                 status: 'received',
                });
             
            },1000) 
         
            this.newMessages=''
        },
        clickDown(idmessaggio){
            var click = document.getElementById('myDropdown' + idmessaggio);  
            if(click.style.display ==="none") {  
               click.style.display ="block";  
            } else {  
               click.style.display ="none";  
            }   
        }
        deleteMessage(){
            

        }
    },
    computed: {
        filterSearch (){
            return this.contacts.filter((contacts) => {
                return contacts.name.toLowerCase().includes(this.search.toLowerCase());
            });
        }
        }


    
})