<template>
    <div class="doc">
        <Nav mode="light" />
        <div class="container d-flex">
            <div class="application card p-4 mb-5 mx-auto">
                <h3>Employee application</h3>
                <b-form>
                    <label for="input-name">Name:</label>
                    <b-form-input v-model="form.name" id="input-name" placeholder="Enter your name"></b-form-input>
                    <label for="input-email">Email:</label>
                    <b-form-input v-model="form.email" id="input-email" placeholder="Enter your email"></b-form-input>
                    <label for="input-phone">Phone:</label>
                    <b-form-input v-model="form.phone" id="input-phone" placeholder="Enter your phone number"></b-form-input>
                    <label for="input-position">Position:</label>
                    <b-form-select v-model="form.position" id="input-position" :options="positionOptions"></b-form-select>
                    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                    <div class="g-recaptcha my-1" data-sitekey="your_site_key"></div>
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
            </div>
            <div>

            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                position: null
            },
            positionOptions: [
                { value: null, text: 'Please select an option' },
                { value: 'Server', text: 'Server' },
                { value: 'Bartender', text: 'Bartender' },
                { value: 'Host/ Hostess', text: 'Host/ Hostess' },
                { value: 'Food runner/ Expo', text: 'Food runner/ Expo' },
                { value: 'Line cook', text: 'Line cook' },
                { value: 'Dishwasher', text: 'Dishwasher' }
            ]
        }
    },
}
</script>

<style scoped>
.doc {
    background-color: #F4F5F6;
}

.application {
    background-color: #F4F5F6;
    box-shadow: 0 0.5rem 4rem rgba(0, 0, 0, 0.2);
}
</style>