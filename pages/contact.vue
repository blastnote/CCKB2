<template>
    <div class="doc">
        <Nav mode="light" currentPage="Contact"/>
        <div class="container d-flex">
            <div class="question card p-4 mb-5 mx-auto">
                <h3>Need to ask a question? Send us a message!</h3>
                <validation-observer ref="observer" v-slot="{ handleSubmit }">
                    <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
                        <validation-provider mode="lazy" name="Name" :rules="{ required: true }" v-slot="validationContext">
                            <b-form-group id="NameGroup" label="Name:" label-for="input-name">
                                <b-form-input
                                    name="input-phone"
                                    id="input-name"
                                    type="text"
                                    v-model="form.name"
                                    placeholder="Enter your name"
                                    :state="getValidationState(validationContext)"
                                    aria-describedby="input-name-live-feedback"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-name-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                        <validation-provider mode="lazy" name="Email" :rules="{ required: true, email: true }" v-slot="validationContext">
                            <b-form-group id="EmailGroup" label="Email:" label-for="input-email">
                                <b-form-input
                                    name="input-email"
                                    id="input-email"
                                    type="email"
                                    v-model="form.email"
                                    placeholder="Enter your email"
                                    :state="getValidationState(validationContext)"
                                    aria-describedby="input-email-live-feedback"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-email-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                        <validation-provider mode="lazy" name="Phone" :rules="{ numeric: true, min: 10 }" v-slot="validationContext">
                            <b-form-group id="PhoneGroup" label="Phone:" label-for="input-phone">
                                <b-form-input
                                    name="input-phone"
                                    id="input-phone"
                                    type="tel"
                                    v-model="form.phone"
                                    placeholder="Enter your phone number (optional)"
                                    :state="getValidationState(validationContext)"
                                    aria-describedby="input-phone-live-feedback"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-phone-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                        <validation-provider mode="lazy" name="Subject" :rules="{ required: true }" v-slot="validationContext">
                            <b-form-group id="SubjectGroup" label="Subject:" label-for="input-subject">
                                <b-form-input
                                    name="input-subject"
                                    id="input-subject"
                                    v-model="form.subject"
                                    placeholder="Subject"
                                    :state="getValidationState(validationContext)"
                                    aria-describedby="input-subject-live-feedback"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-subject-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                        <validation-provider mode="lazy" name="Message" :rules="{ }" v-slot="validationContext">
                            <b-form-group id="MessageGroup" label="Message:" label-for="input-message">
                                <b-form-textarea
                                    name="input-message"
                                    id="input-message"
                                    placeholder="Message"
                                    rows="6"
                                    :state="getValidationState(validationContext)"
                                    aria-describedby="input-message-live-feedback"
                                ></b-form-textarea>
                                <b-form-invalid-feedback id="input-message-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                        <div class="g-recaptcha my-1" data-sitekey="6LcoDv0aAAAAAANS-aal3iMGZQiZUZ22lmfa7R5V"></div>
                        <b-button type="submit" variant="primary">Submit</b-button>
                    </b-form>
                </validation-observer>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from "axios";
import * as rules from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { messages } from 'vee-validate/dist/locale/en.json';

Object.keys(rules).forEach(rule => {
  extend(rule, { ...rules[rule],message: messages[rule] });
});

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            nonRobotBool: false,
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
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
        onSubmit() {
            this.nonRobotBool = grecaptcha.getResponse();
            if (this.nonRobotBool) { 
                axios.post('https://api.emailjs.com/api/v1.0/email/send', {
                    service_id: 'service_2psgefq',
                    template_id: 'template_xw6vtru',
                    user_id: 'user_uioIfrRIm77FykSiVOyeI',
                    template_params: this.form
                })
                .then((res) => {
                    console.log('SUCCESS!', res.status, res.text);
                    this.form = {name: '', email: '', phone: '', subject: '', message: ''};
                    alert("Thank you for submitting your application");
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
            }
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