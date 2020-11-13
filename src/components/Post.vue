<template>
    <div>
        <div>
            <h4>{{autor}}</h4>
            <h4>{{fecha}}</h4>
            <h4>{{mensaje}}</h4>
        </div>
        <div class="botones">
            <div class="Likes">
                <boton-like @click="likePost"/>
            </div>
            <div>
                <BotonEliminarPost @click="deletePost"/>
            </div>
        </div>
    </div>
</template>

<script>
import BotonLike from '@/components/BotonLike';
import BotonEliminarPost from '@/components/BotonEliminarPost';


export default {
    name: "Post",
    components:{
        BotonLike,
        BotonEliminarPost
    },
    data(){
        return{
            post:{},
        }
    },
    props:{
        autor:String,
        fecha:String,
        likes:Number,
        mensaje:String,
    },
    methods: {
        getPosts(){
            fetch(this.fetchURL)
            .then (response => response.jason())
            .then(result => {
                if (result.error) return console.log (result);

                return this.posts = result.body;
            })
            .catch(error => console.log('error', error));
        },
        likePost(res){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${res.postID}/like`,{
                method:"POST",
                headers: {
                    "Authorization":`Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(response => response.json())
            .then(result => {
                if (result.error) return console.log (result);

                this.getPosts();
            })            
            .catch(error => console.log('error', error));
        },
        deletePost(res){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${res.postID}`,{
                method:"POST",
                headers: {
                    "Authorization":`Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(response => response.json())
            .then(result => {
                if (result.error) return console.log (result);

                this.getPosts();
            })            
            .catch(error => console.log('error', error));
        }
        
    },
}
</script>

