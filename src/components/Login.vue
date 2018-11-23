<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="login">Connection</button>
        <p>You don't have an account? You can create one</p>
    </div>    
</template>

<script>
    export default {
        name: 'login',
        data: function(){
            return{}
        },
        methods:{
            signUp: function() {
                firebase.auth().createWithEmailAndPassword(this.email, this.password).then(
                    function (user){
                        alert('your account has been created!')
                    },
                    function (err){
                        alert('oops.' +err.message)
                    }
                )
            }
        }
    }

</script>
