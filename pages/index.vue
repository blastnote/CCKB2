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
                        <hr class="bg-dark my-0">
                        <p style="font-size: 1.1rem;">View some of our hand-crafted and perfected dishes from our own head chef.</p>
                        <nuxt-link to="/menu"><button type="button" class="btn btn-primary">View Our Menu</button></nuxt-link>
                    </div>
                </div>
                <div class="col-4">
                    <div class="customCard text-center">
                        <p style="font-size: 2rem;">Drinks</p>
                        <hr class="bg-dark my-0">
                        <p style="font-size: 1.1rem;">Take a look at what's on tap and our other bar specialty drinks.</p>
                        <nuxt-link to="/drinks"><button type="button" class="btn btn-primary">View Our Drinks</button></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile menu section -->
        <div class="mMenu container justify-content-center">
                <div class="customCard text-center">
                    <p style="font-size: 2rem;">Menu</p>
                    <hr class="bg-dark my-0">
                    <p style="font-size: 1.1rem;">View some of our hand-crafted and perfected dishes from our own head chef.</p>
                    <nuxt-link to="/menu"><button type="button" class="btn btn-primary">View Our Menu</button></nuxt-link>
                </div>
                <div class="customCard text-center" style="top: 1rem;">
                    <p style="font-size: 2rem;">Drinks</p>
                    <hr class="bg-dark my-0">
                    <p style="font-size: 1.1rem;">Take a look at what's on tap and our other bar specialty drinks.</p>
                    <nuxt-link to="/drinks"><button type="button" class="btn btn-primary">View Our Drinks</button></nuxt-link>
                </div>
        </div>
        <!-- Call/Hours -->
        <div class="hours w-100 d-flex justify-content-center align-items-center" style="height: 42rem;">
            <div class="dHours text-white row p-5" style="background-color: rgba(58, 58, 58, 0.74);">
                <div class="col d-flex align-items-center">
                    <div class="text-center">
                        <p class="my-0" style="font-size: 1.5rem">Call Today</p>
                        <hr class="bg-white my-1" style="width: 10rem;">
                        <a class="text-white text-decoration-none" href="tel:+18593595121">(859) 359-5121</a>
                    </div>
                </div>
                <div class="col" style="min-width: 16rem;">
                    <p class="mb-0">Hours</p>
                    <hr class="my-1 bg-white">
                    <table>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Sunday</td>
                            <td style="padding-left: 1rem;">{{ times.sunday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Monday</td>
                            <td style="padding-left: 1rem;">{{ times.monday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Tuesday</td>
                            <td style="padding-left: 1rem;">{{ times.tuesday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Wednesday</td>
                            <td style="padding-left: 1rem;">{{ times.wednesday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Thursday</td>
                            <td style="padding-left: 1rem;">{{ times.thursday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Friday</td>
                            <td style="padding-left: 1rem;">{{ times.friday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Saturday</td>
                            <td style="padding-left: 1rem;">{{ times.saturday.time }}</td></tr>
                    </table>
                </div>
            </div>
            <div class="mHours text-white mt-5 p-5" style="background-color: rgba(58, 58, 58, 0.74);">
                    <div class="text-center mb-4">
                        <a class="mt-md-5 btn btn-primary" style="font-size: 1.5rem" href="tel:+18593595121" role="button">Call Today</a>
                    </div>
                    <div>
                    <p class="mb-0">Hours</p>
                    <hr class="my-1 bg-white">
                    <table>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Sunday</td>
                            <td style="padding-left: 1rem;">{{ times.sunday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Monday</td>
                            <td style="padding-left: 1rem;">{{ times.monday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Tuesday</td>
                            <td style="padding-left: 1rem;">{{ times.tuesday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Wednesday</td>
                            <td style="padding-left: 1rem;">{{ times.wednesday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Thursday</td>
                            <td style="padding-left: 1rem;">{{ times.thursday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Friday</td>
                            <td style="padding-left: 1rem;">{{ times.friday.time }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Saturday</td>
                            <td style="padding-left: 1rem;">{{ times.saturday.time }}</td></tr>
                    </table>
                    </div>
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
                    <div class="text-center mb-5" style="max-width:20rem;">
                        <p style="font-size: 2rem;">Keep in Touch!</p>
                        <hr class="bg-white my-0">
                        <p>Let us know how we are doing and keep up to date with what we do on Facebook and Instagram!</p>
                        <a class="mx-1" href="https://www.facebook.com/crewittscreek/"><i style="font-size:3rem;" class="fab fa-facebook-square text-white"></i></a>
                        <a class="mx-2" href="https://www.instagram.com/crewittscreek/"><i style="font-size:3rem;" class="fab fa-instagram text-white"></i></a>
                    </div>
                    <div class="bg-white" style="width: 320px; height: 500px">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcrewittscreek%2F&tabs=timeline&width=320&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" width="320" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
import axios from "axios";

export default {
    mounted() {
        this.getTimes(this.apiURL)
    },
    data() {
        return {
            apiURL: 'https://script.google.com/macros/s/AKfycbyLY0BDQQQqrr3uT_xF8SvewWkX7eH__rSzfCMQ2YkeL0uqbsIXC_2QIocDbacCQB2X/exec?ID=1ZuwXTWvdm0NDR_SSYTwOQ-I00lRlVMVV3Yv6tar4zd0&SH=Time&func=Time',
            times: {
                "sunday": { "time": "11am - 8pm", "special": false },
                "monday": { "time": "Closed", "special": false },
                "tuesday": { "time": "4pm - 9pm", "special": false },
                "wednesday": { "time": "4pm - 9pm", "special": false },
                "thursday": { "time": "4pm - 9pm", "special": false },
                "friday": { "time": "4pm - 10pm", "special": false },
                "saturday": { "time": "11am - 10pm", "special": false }
            }
        }
    },
    methods: {
        getTimes(URL) {
            axios.get(URL).then((res) => {
                this.times = res.data;
            });
        }
    }
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

.dHours {
    display: inherit;
}

.mHours {
    display: none;
}

.touch {
    min-height: 30rem;
    background-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.8) 100%), url('~/assets/imgs/Find us.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

@media  screen and (max-width: 767px) {
    .Creek { font-size: 3rem; }
    .dMenu { display: none; }
    .mMenu { display: inherit; }
    .dHours { display: none; }
    .mHours { display: block; }
    .map { display: none; }
}

</style>