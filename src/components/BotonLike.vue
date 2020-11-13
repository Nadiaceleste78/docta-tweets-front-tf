<template>
    <div>
        <button @click='click'>Like</button>
    </div>
</template>

<script>

export default {
    name:"BotonLike",
    method: {
        click (){
            this.$emit('click')
        }
    },
}

</script>
