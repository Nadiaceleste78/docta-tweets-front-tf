<template>
    <div class="eliminarCuenta">
        <button @click='click'>Eliminar Cuenta</button>
    </div>
</template>

<script>

export default {
    name:"BotonEliminarCuenta",
    method: {
        click (){
            this.$emit('click')
        }
    },
}