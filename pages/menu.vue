<template>
    <div class="doc">
        <Nav mode="light" currentPage="Menu" />
        <!-- Menu -->
        <div class="container mb-5 pb-5">
            <!-- loading spinner -->
            <div v-if="Object.keys(menus).length == 0" style="height: 20rem;">
                <div class="d-flex justify-content-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="row">
                    <div class="m-3" v-for="(menu, index) in menus" :key="index">
                        <button v-if="currentMenu == index" type="button" class="btn btn-outline-primary active"
                        @click="currentMenu = index" style="font-size: 1.6rem;">{{index}}</button>
                        <button v-else type="button" class="btn btn-outline-primary"
                        @click="currentMenu = index" style="font-size: 1.6rem;">{{index}}</button>
                    </div>
                </div>
                <div v-for="(section, index) in menus[currentMenu]" :key="index"
                class="desktop">
                    <h2 class="mt-4">{{index}}</h2>
                    <hr class="bg-dark">
                    <div v-for="(item, index) in section" :key="index">
                        <div class="d-flex w-100 align-items-center">
                            <p class="mr-auto my-0 font-weight-bold" style="font-size: 1.2rem;">{{index}}</p>
                            <div v-if="item.new" class="bg-danger px-3 py-0 mr-2 rounded"><p class="mb-0 text-white" style="font-size: 1.1rem;">New</p></div>
                            <div class="bg-primary px-3 py-0 mr-2 rounded"><p class="mb-0 text-white" style="font-size: 1.1rem;">{{(typeof(item.price) == "number")? '$'+item.price: item.price}}</p></div>
                        </div>
                        <div>
                            <p class="my-0 text-muted">{{item.desc}}</p>
                        </div>
                    </div>
                </div>
                <vsa-list class="mobile">
                    <vsa-item :init-active="(index == Object.keys(menus[currentMenu])[0])?true:false" 
                    v-for="(section, index) in menus[currentMenu]" :key="index">
                        <vsa-heading>
                            {{index}}
                        </vsa-heading>
                        <vsa-content>
                            <div v-for="(item, index) in section" :key="index">
                                <div class="d-flex w-100 align-items-center">
                                    <p class="mr-auto my-0 font-weight-bold" style="font-size: 1.2rem;">{{index}}</p>
                                    <div v-if="item.new" class="bg-danger px-3 py-0 mr-2 rounded"><p class="mb-0 text-white" style="font-size: 1.1rem;">New</p></div>
                                    <div class="bg-primary px-3 py-0 mr-2 rounded"><p class="mb-0 text-white" style="font-size: 1.1rem;">{{(typeof(item.price) == "number")? '$'+item.price: item.price}}</p></div>
                                </div>
                                <div>
                                    <p class="my-0 text-muted">{{item.desc}}</p>
                                </div>
                            </div>
                        </vsa-content>
                    </vsa-item>
                </vsa-list>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from "axios";
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

export default {
    components: {
        VsaList,
        VsaItem,
        VsaHeading,
        VsaContent,
        VsaIcon
    },
    mounted() {
        this.getMenu();
    },
    data() {
        return {
            menuApiURL: 'https://script.google.com/macros/s/AKfycbyLY0BDQQQqrr3uT_xF8SvewWkX7eH__rSzfCMQ2YkeL0uqbsIXC_2QIocDbacCQB2X/exec?ID=1ZuwXTWvdm0NDR_SSYTwOQ-I00lRlVMVV3Yv6tar4zd0&SH=Menu&func=Menu',
            menus: {},
            currentMenu: ''
        }
    },
    methods: {
        getMenu() {
            axios.get(this.menuApiURL)
            .then((res) => {
                console.log('SUCCESS...', res);
                this.menus = res.data;
                this.currentMenu = Object.keys(this.menus)[0];
            })
            .catch((err) => {
                console.log('FAILED...', err);
                axios.get('/menus.json')
                .then((res) => {
                    console.log('SUCCESS...', res);
                    this.menus = res.data;
                    this.currentMenu = Object.keys(this.menus)[0];
                });
            });
        }
    }
}
</script>

<style scoped>
.doc {
    background-color: #F4F5F6;
}

.desktop {
    display: inherit;
}

.mobile {
    display:none;
    --vsa-highlight-color: #007bff;
}

@media  screen and (max-width: 767px) {
    .desktop { display: none; }
    .mobile { display: inherit; }
}

</style>