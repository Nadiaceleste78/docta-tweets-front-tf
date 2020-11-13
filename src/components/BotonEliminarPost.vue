<template>
    <div class="EliminarPost">
        <button @click='click'>Eliminar</button>
    </div>
</template>

<script>

export default {
    name:"BotonEliminarPost",
    method: {
        click (){
            this.$emit('click')
        }
    },
}

</script>