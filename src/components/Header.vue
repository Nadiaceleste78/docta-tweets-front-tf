<template>
    <div class="header">
        <h1><slot></slot></h1>
    </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>
    .header{
        background-color:#EED870;
        padding: 20px 0;
    }

    h1{
        text-align: center;
        color:#000000;
        font-family:'ontserrat';
    }

</style>