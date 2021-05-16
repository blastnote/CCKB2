<template>
    <div>
        <!-- Top bar -->
        <div class="w-100 bg-primary text-white text-nowrap flex">
            <span class="addressPhone ml-lg-5 ml-md-3 mx-auto pl-lg-5 pl-md-3 pl-sm-0">
                <a class="text-white text-decoration-none" href="https://g.page/crewittscreek?share">2037 Centennial Blvd, Independence, KY 41051</a> - 
                <a class="text-white text-decoration-none" href="tel:+18593595121">(859) 359-5121</a>
            </span>

            <span class="socials mr-lg-5 mr-md-3 mr-sm-2 pr-lg-5 pr-md-3 pr-sm-2 float-right">
                <a class="mx-2" href="https://www.facebook.com/crewittscreek/"><i class="fab fa-facebook-square text-white"></i></a>
                <a class="mx-2" href="https://www.instagram.com/crewittscreek/"><i class="fab fa-instagram text-white"></i></a>
            </span>
        </div>
        <!-- nav bar -->
        <div>
            <b-navbar toggleable="md" :type="mode" variant="transparent">
                <b-navbar-brand class="ml-4" to="/">
                    <img src="~/assets/imgs/ShortTransparent.png" alt="Crewitts Creek" />
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto mr-5">
                    <b-nav-item class="mx-4" style="font-size: 1.5rem;" to="/test">Home</b-nav-item>
                    <b-nav-item class="mx-4" style="font-size: 1.5rem;" to="/">Menu</b-nav-item>
                    <b-nav-item class="mx-4" style="font-size: 1.5rem;" to="/">Drinks</b-nav-item>
                    <b-nav-item class="mx-4" style="font-size: 1.5rem;" to="/">Contact</b-nav-item>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            default: 'light'
        },
        page: {
            type: String
        }
    }
}
</script>

<style scoped>
.socials {
    display: inline;
}

.addressPhone {
    display: inline;
}

@media screen and (max-width: 767px) {
    .socials {
        display: none;
    }
    .addressPhone {
        display: flex;
        justify-content: center;
    }
}
</style>