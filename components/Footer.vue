<template>
    <footer class="bg-primary flex pt-5 px-5 pb-1">
        <div class="container">
            <div class="d-md-inline-flex w-100">
                <div class="text-white mr-auto mb-4">
                    <h1 class="text-white">Crewitts Creek Kitchen & Bar</h1>
                    <p><a class="text-white text-decoration-none" href="https://g.page/crewittscreek?share">2037 Centennial Blvd, Independence, KY 41051</a> - 
                    <a class="text-white text-decoration-none" href="tel:+18593595121">(859) 359-5121</a></p>
                    <p class="mb-0 font-weight-bold">Follow Us</p>
                    <hr class="my-0 bg-white" style="width: 5rem;">
                    <a class="mx-1" href="https://www.facebook.com/crewittscreek/"><i class="fab fa-facebook-square text-white"></i></a>
                    <a class="mx-2" href="https://www.instagram.com/crewittscreek/"><i class="fab fa-instagram text-white"></i></a>
                </div>
                <div class="text-white mb-4">
                    <p class="mb-0">Hours</p>
                    <hr class="my-1 bg-white">
                    <table>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Sunday</td>
                            <td style="padding-left: 1rem;">{{ times.sunday }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Monday</td>
                            <td style="padding-left: 1rem;">{{ times.monday }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Tuesday</td>
                            <td style="padding-left: 1rem;">{{ times.tuesday }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Wednesday</td>
                            <td style="padding-left: 1rem;">{{ times.wednesday }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Thursday</td>
                            <td style="padding-left: 1rem;">{{ times.thursday }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Friday</td>
                            <td style="padding-left: 1rem;">{{ times.friday }}</td></tr>
                        <tr><td style="border-right: solid 2px; padding-right: 1rem;">Saturday</td>
                            <td style="padding-left: 1rem;">{{ times.saturday }}</td></tr>
                    </table>
                </div>
            </div>
            <p class="text-white">© 2021 Crewitts Creek Kitchen & Bar, All rights reserved. Designed and built by French Fry</p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            times: {
                sunday: '11am - 8pm',
                monday: 'Closed',
                tuesday: '4pm - 9pm',
                wednesday: '4pm - 9pm',
                thursday: '4pm - 9pm',
                friday: '4pm - 10pm',
                saturday: '11am - 10pm'
            }
        }
    },
}
</script>

<style scoped>
h1 {
    font-size: 2rem;
}

@media  screen and (max-width: 767px) {
    h1 {
        font-size: 1.5rem;
    }
}
</style>