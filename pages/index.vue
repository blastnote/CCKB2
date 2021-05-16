<template>
    <div class="doc w-100">
        <!-- Top -->
        <div class="hero">
            <Nav mode="dark" page="home"/>
            <div class="d-flex justify-content-center align-items-center" style="height: 30rem;">
                <i class="mx-3 text-white fas fa-circle"></i>
                <p class="Creek text-white text-center">Welcome To The Creek</p>
                <i class="mx-3 text-white fas fa-circle"></i>
            </div>
        </div>
        <!-- Desktop menu section -->
        <div class="dMenu container">
            <div class="row justify-content-around">
                <div class="col-4">
                    <div class="customCard text-center">
                        <p style="font-size: 2rem;">Menu</p>
                        <p style="font-size: 1.1rem;">View some of our hand-crafted and perfected dishes from our own head chef.</p>
                        <nuxt-link to="/test"><button type="button" class="btn btn-primary">View Our Menu</button></nuxt-link>
                    </div>
                </div>
                <div class="col-4">
                    <div class="customCard text-center">
                        <p style="font-size: 2rem;">Drinks</p>
                        <p style="font-size: 1.1rem;">Take a look at what's on tap and our other bar specialty drinks.</p>
                        <nuxt-link to="/test"><button type="button" class="btn btn-primary">View Our Drinks</button></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile menu section -->
        <div class="mMenu container justify-content-center">
                <div class="customCard text-center">
                    <p style="font-size: 2rem;">Menu</p>
                    <p style="font-size: 1.1rem;">View some of our hand-crafted and perfected dishes from our own head chef.</p>
                    <nuxt-link to="/test"><button type="button" class="btn btn-primary">View Our Menu</button></nuxt-link>
                </div>
                <div class="customCard text-center" style="top: 1rem;">
                    <p style="font-size: 2rem;">Drinks</p>
                    <p style="font-size: 1.1rem;">Take a look at what's on tap and our other bar specialty drinks.</p>
                    <nuxt-link to="/test"><button type="button" class="btn btn-primary">View Our Drinks</button></nuxt-link>
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

.Creek {
    font-size: 4rem;
}

.customCard {
    background-color: #F4F5F6;
    width: 100%;
    min-height: 15rem;
    padding: 1.5rem;
    position: relative;
    top: -3rem;
    box-shadow: 0 0.5rem 4rem black;
}

.dMenu {
    display: inherit;
    height: 10rem;
}

.mMenu {
    display: none;
    height: 20rem;
}

@media  screen and (max-width: 767px) {
    .dMenu { display: none; }
    .mMenu { display: inherit; }
    .Creek { font-size: 3rem; }
}

</style>