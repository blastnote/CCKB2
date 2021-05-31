<template>
    <div class="doc">
        <Nav mode="light" />
        <div class="container d-flex">
            <div class="application card p-4 mb-5 mx-auto">
                <h3>Employee application</h3>
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
                        <validation-provider mode="lazy" name="Phone" :rules="{ required: true, numeric: true, min: 10 }" v-slot="validationContext">
                            <b-form-group id="PhoneGroup" label="Phone:" label-for="input-phone">
                                <b-form-input
                                    name="input-phone"
                                    id="input-phone"
                                    type="tel"
                                    v-model="form.phone"
                                    placeholder="Enter your phone number"
                                    :state="getValidationState(validationContext)"
                                    aria-describedby="input-phone-live-feedback"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-phone-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                        <validation-provider name="Position" :rules="{ required: true }" v-slot="validationContext">
                            <b-form-group id="PositionGroup" label="Position:" label-for="input-position">
                                <b-form-select
                                    name="input-position"
                                    id="input-position"
                                    v-model="form.position"
                                    :options="positionOptions"
                                    :state="getValidationState(validationContext)"
                                    aria-describedby="input-position-live-feedback"
                                ></b-form-select>
                                <b-form-invalid-feedback id="input-position-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                            <div
                                class="g-recaptcha my-1"
                                data-sitekey="6LcoDv0aAAAAAANS-aal3iMGZQiZUZ22lmfa7R5V"
                            ></div>
                        <b-button type="submit" variant="primary">Submit</b-button>
                    </b-form>
                </validation-observer>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import { init, emailjs } from 'emailjs-com';
import * as rules from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { messages } from 'vee-validate/dist/locale/en.json';

//init("YOUR_USER_ID");

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
    methods: {
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
        onSubmit() {
            this.nonRobotBool = grecaptcha.getResponse();
            if (this.nonRobotBool) { alert("Form submitted!") };
            // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.form)
            //     .then(function(response) {
            //     console.log('SUCCESS!', response.status, response.text);
            //     }, function(error) {
            //     console.log('FAILED...', error);
            //     });
        }
    }
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