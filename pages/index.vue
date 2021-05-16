<template>
    <div class="doc w-100">
        <!-- Top -->
        <div class="hero">
            <Nav mode="dark" page="home"/>
            <div class="d-flex justify-content-center align-items-center" style="height: 30rem;">
                <i class="mx-3 text-white fas fa-circle"></i>
                <p class="text-white text-center" style="font-size: 4rem;">Welcome To The Creek</p>
                <i class="mx-3 text-white fas fa-circle"></i>
            </div>
        </div>
        <!-- Menu section -->
        <div class="custom-card flex">
            <div class="p-3">
                <h1>Menu</h1>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.doc {
    background-color: #F4F5F6;
    
}
.hero {
    height: 48rem;
    background-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.8) 100%), url('~/assets/imgs/Hero.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>