<template>
    <div class="CerrarSesion">
        <button @click='click'>Cerrar Sesión</button>
    </div>
</template>

<script>

export default {
    name:"BotonCerrarSesion",
    method: {
        click (){
            this.$emit('click')
        }
    },
}

</script>