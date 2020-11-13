<template>
    <div class="container mx-auto">
            <form class="w-1/2 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent='login()'>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Usuario
                    </label>
                    <input
                        class="shadow appearance-none border border-yellow-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username" v-model='username'>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Contraseña
                    </label>
                    <input
                        class="shadow appearance-none border border-yellow-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="***********" v-model='password'>
                    
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-yellow-400 hover:bg-white-700 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Ingresar
                    </button>
                </div>
            </form>
        </div>
</template>

<script>
export default {
    name:"FormularioLogin",
    data() {
        return {
            loginURL:'https:node-api-doctadevs.vercel.app/login',
            username:'',
            pasword:'',
        }
    },
    methods:{
        loguin() {
            fetch (this.loginURL, {
                methods:"POST",
                headers:{"Content-Type": "application/jason"},
                body:JSON.stringify({
                    username: this.username,
                    password:this.password
                })
            })
            .then (response =>responnse.json())
            .then (result => {
                if (result.error) return console.log (result);

                sessionStorage.setItem("token", result.body.token);
                this.username = '';
                this.password = '';

                this.$router.push({name:"home"})
            })
            .catch(error => console.log('error', error));
        }
    },
}

</script>