<template>
    <div class="doc">
        <Nav mode="light" page="contact"/>
        <div class="container d-flex">
            <div class="question card p-4 mb-5 mx-auto">
                <h3>Need to ask a question? Send us a message!</h3>
                <b-form @submit="onSubmit">
                    <label for="input-name">Name:</label>
                    <b-form-input v-model="form.name" id="input-name" placeholder="Enter your name"></b-form-input>
                    <label for="input-email">Email:</label>
                    <b-form-input v-model="form.email" id="input-email" placeholder="Enter your email"></b-form-input>
                    <label for="input-phone">Phone:</label>
                    <b-form-input v-model="form.phone" id="input-phone" placeholder="Enter your phone number"></b-form-input>
                    <label for="input-subject">Subject:</label>
                    <b-form-input v-model="form.subject" id="input-subject" placeholder="Subject"></b-form-input>
                    <label for="input-message">Message:</label>
                    <b-form-textarea
                        id="input-message"
                        placeholder="Message"
                        rows="6"
                    ></b-form-textarea>
                    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                    <div class="g-recaptcha my-1" data-sitekey="your_site_key"></div>
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
            </div>
            <div>

            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
    components: {
        ValidationProvider
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            }
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
        }
    }
}
</script>

<style scoped>
.doc {
    background-color: #F4F5F6;
}

.question {
    background-color: #F4F5F6;
    box-shadow: 0 0.5rem 4rem rgba(0, 0, 0, 0.2);
}
</style>