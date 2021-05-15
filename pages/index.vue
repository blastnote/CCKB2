<template>
    <div>
        <div class="hero w-100">
            <Nav mode="dark" page="home"/>
            <div>
                <p class="text-white" style="font-size: 4rem;">Welcome To The Creek</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero {
    height: 48rem;
    background-image: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.7) 100%), url('~/assets/imgs/Hero.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>