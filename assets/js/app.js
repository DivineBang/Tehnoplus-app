Vue.createApp({
  data() {
    return {  
      name:'',
      email:'',
      phone:'',
      comment:''

    };
  },
  methods: {
    createPost(){

    },
    inputName(event){
      this.name = event.target.value;
    },
    inputEmail(event){
      this.email = event.target.value;
    },
    inputPhone(event){
      this.phone = event.target.value;
    },
    textareaComment(event){
      this.comment = event.target.value;
    }
    
  }
}
).mount('#form');