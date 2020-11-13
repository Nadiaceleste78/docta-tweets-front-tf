<template>
    <div>
        <div v-for='post in posts' :key='post._id'>
        <post @likePost='likePost' @deletePost='deletePost'/>
    </div>
    </div>
</template>

<script>
export default {
    created () {
        fetch("https://node-api-doctadevs.vercel.app/posts")
    .then(response => response.json())

    .then(result => {
        if (result.error) return console.log (result);

        this.posts = result.body;
        return true;
        }
    )
    
    .catch(error => console.log('error', error));
    },
    data () {
        return{
            posts:[],
        }
    },
}
</script>