<template>
    <div class="doc">
        <Nav mode="light" currentPage="Drinks"/>
        <div class="container mb-5 pb-5">
            <!-- loading spinner -->
            <div v-if="Object.keys(drinks).length == 0" style="height: 20rem;">
                <div class="d-flex justify-content-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            <div v-else>
                <div v-for="(section, index) in untappdData" :key="index"
                class="desktop">
                    <div class="d-flex w-100 align-items-center">
                        <h2 class="mt-4 mb-0 mr-auto">{{Object.keys(untappdData[index])[0]}}</h2>
                    </div>
                    <hr class="my-1 bg-dark">
                    <div v-for="(item, index) in section[Object.keys(section)[0]].items" :key="index">
                        <div class="d-flex w-100 align-items-center">
                            <p class="my-0 font-weight-bold" style="font-size: 1.2rem;">{{item.name}} <span class="font-weight-normal text-muted" style="font-size: 1rem;">
                                {{ (item.brewery != null)? item.brewery:'' }}
                                {{ (item.style != null)? '• '+item.style:'' }}
                                {{ (item.abv != null)? '• '+item.abv+'% ABV':'' }}
                                {{ (item.ibu != null)? '• '+Number(item.ibu)+' IBU':'' }}
                                {{ (item.calories != null)? '• '+item.calories+' CAL':'' }}
                                </span>
                            </p>
                        </div>
                        <div class="d-flex">
                            <div class="bg-primary px-3 py-0 mr-2 rounded"><p class="mb-0 text-white" style="font-size: 1.1rem;">{{(typeof(item.price) == "number")? '$'+item.price: item.price}}</p></div>
                        </div>
                    </div>
                </div>
                <div v-for="(section, index) in drinks" :key="index"
                class="desktop">
                    <div class="d-flex w-100 align-items-center">
                        <h2 class="mt-4 mb-0 mr-auto">{{index}}</h2>
                        <h2 class="mt-4 mb-0">{{(typeof(section.price) == "number")? '$'+section.price: section.price}}</h2>
                    </div>
                    <hr class="my-1 bg-dark">
                    <div v-for="(item, index) in section" :key="index">
                        <div v-if="index != 'price'" class="d-flex w-100 align-items-center">
                            <p class="my-0 font-weight-bold" style="font-size: 1.2rem;">{{index}} <span class="font-weight-normal text-muted" style="font-size: 1rem;">{{item.desc}}</span></p>
                        </div>
                        <div class="d-flex">
                            <div class="bg-primary px-3 py-0 mr-2 rounded"><p class="mb-0 text-white" style="font-size: 1.1rem;">{{(typeof(item.price) == "number")? '$'+item.price: item.price}}</p></div>
                        </div>
                    </div>
                </div>
                <vsa-list class="mobile">
                    <vsa-item :init-active="(Object.keys(section)[0] == Object.keys(untappdData[0])[0])?true:false" 
                    v-for="(section, index) in untappdData" :key="index" :id="Object.keys(section)[0].replace(/\s+/g, '')">
                        <vsa-heading>
                            <div class="d-flex">
                                <span class="mr-auto text-left">{{Object.keys(untappdData[index])[0]}}</span>
                            </div>
                        </vsa-heading>
                        <vsa-content>
                            <div v-for="(item, index) in section[Object.keys(section)[0]].items" :key="index">
                                <div v-if="index == 'price'" class="d-flex">
                                    <div class="bg-primary px-3 py-0 mr-2 rounded"><p class="mb-0 text-white" style="font-size: 1.1rem;">{{(typeof(section.price) == "number")? '$'+section.price: section.price}}</p></div>
                                </div>
                                <div v-else class="d-flex w-100 align-items-center">
                                    <p class="mr-auto my-0 font-weight-bold" style="font-size: 1.2rem;">{{item.name}}</p>
                                </div>
                                <div>
                                    <p class="my-0 text-muted">
                                        {{ (item.brewery != null)? item.brewery:'' }}
                                        {{ (item.style != null)? '• '+item.style:'' }}
                                        {{ (item.abv != null)? '• '+item.abv+'% ABV':'' }}
                                        {{ (item.ibu != null)? '• '+Number(item.ibu)+' IBU':'' }}
                                        {{ (item.calories != null)? '• '+item.calories+' CAL':'' }}
                                    </p>
                                </div>
                            </div>
                        </vsa-content>
                    </vsa-item>
                    <vsa-item v-for="(section, index) in drinks" :key="index">
                        <vsa-heading>
                            <div class="d-flex">
                                <span class="mr-auto text-left">{{index}}</span>
                            </div>
                        </vsa-heading>
                        <vsa-content>
                            <div v-for="(item, index) in section" :key="index">
                                <div v-if="index == 'price'" class="d-flex">
                                    <div class="bg-primary px-3 py-0 mr-2 rounded"><p class="mb-0 text-white" style="font-size: 1.1rem;">{{(typeof(section.price) == "number")? '$'+section.price: section.price}}</p></div>
                                </div>
                                <div v-else class="d-flex w-100 align-items-center">
                                    <p class="mr-auto my-0 font-weight-bold" style="font-size: 1.2rem;">{{index}}</p>
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
        this.getDrinks(),
        this.getUntappd()
    },
    data() {
        return {
            draftBeersApiURL: 'https://business.untappd.com/api/v1/sections/147378/items',
            drinksApiURL: 'https://script.google.com/macros/s/AKfycbyLY0BDQQQqrr3uT_xF8SvewWkX7eH__rSzfCMQ2YkeL0uqbsIXC_2QIocDbacCQB2X/exec?ID=1ZuwXTWvdm0NDR_SSYTwOQ-I00lRlVMVV3Yv6tar4zd0&SH=Drinks&func=Drinks',
            drinks: {},
            untappdData: {}
        }
    },
    methods: {
        getDrinks() {
            axios.get(this.drinksApiURL)
            .then((res) => {
                this.drinks = res.data;
            })
            .catch((err) => {
                console.log('FAILED...', err);
                axios.get('/drinks.json')
                .then((res) => {
                    console.log('SUCCESS...', res);
                    this.drinks = res.data;
                });
            });
        },
        getUntappd() {
            //Add Can Beers to Untappd Data
            axios.get(this.draftBeersApiURL, { headers: { 'Authorization':'Basic Y3Jld2l0dHNjcmVla0BnbWFpbC5jb206Qk15TndpdVJheEEtdlJkc3Y3eHY=' } })
            .then((res) => {
                this.untappdData[0] = { 'Draft Beers': res.data };
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