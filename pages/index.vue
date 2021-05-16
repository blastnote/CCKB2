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
        <!-- Call/Hours -->
        <div class="hours w-100 d-flex justify-content-center align-items-center" style="height: 42rem;">
            <div class="text-white" style="background-color: ">
                <p>test</p>
            </div>
        </div>
        <!-- Map -->
        <div class="container my-5">
            <div class="row justify-content-around align-items-center">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.7521087488594!2d-84.54456508464868!3d38.92964307956565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841beb88e142a55%3A0x10c041b51ed4666a!2sCrewitts%20Creek%20Kitchen%20%26%20Bar!5e0!3m2!1sen!2sus!4v1621134440698!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                <div class="text-center">
                    <p style="font-size: 2rem;">Come Visit Us</p>
                    <hr class="bg-dark my-0">
                    <p>2037 Centennial Blvd, Independence, KY 41051</p>
                    <a class="mt-md-5 btn btn-primary" href="https://g.page/crewittscreek?share" role="button">Get Directions</a>
                </div>
            </div>
        </div>
        <!-- Keep in touch -->
        <div class="touch">
            <div class="container text-white" style="min-height: 30rem;">
                <div class="h-100 row justify-content-around align-items-center py-5">
                    <div class="text-center" style="max-width:25rem;">
                        <p style="font-size: 2rem;">Keep in Touch!</p>
                        <hr class="bg-white my-0">
                        <p>Let us know how we are doing and keep up to date with what we do on Facebook and Instagram!</p>
                        <a class="mx-1" href="https://www.facebook.com/crewittscreek/"><i class="fab fa-facebook-square text-white"></i></a>
                        <a class="mx-2" href="https://www.instagram.com/crewittscreek/"><i class="fab fa-instagram text-white"></i></a>
                    </div>
                    <div class="bg-white">
                        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="Ssk4Re41"></script>
                        <div class="fb-post" :data-href="fbLink" data-width="300px" data-show-text="true"></div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            fbLink: 'https://www.facebook.com/crewittscreek/photos/a.257669331366345/1154140221719247/?type=3&theater'
        }
    },
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

.hours {
    height: 42rem;
    background-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.8) 100%), url('~/assets/imgs/bar.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.touch {
    min-height: 30rem;
    background-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.8) 100%), url('~/assets/imgs/Find us.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

@media  screen and (max-width: 767px) {
    .dMenu { display: none; }
    .mMenu { display: inherit; }
    .Creek { font-size: 3rem; }
    .map { display: none; }
}

</style>