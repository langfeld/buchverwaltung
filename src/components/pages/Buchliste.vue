<template>
    <div>
        <app-suche></app-suche>

        <div class="p-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 lg:justify-center lg:p-16">
            <template v-for="(buch, index) in buchlisteFiltered">
                <app-buch v-bind:buch="buch" v-bind:suchwort="suchwort" v-bind:key="index"></app-buch>
            </template>
        </div>
    </div>
</template>

<script>
    import Suche from "@/components/Suche"
    import Buch from "@/components/Buch"

    export default {
        components: {
            "app-buch": Buch,
            "app-suche": Suche
        },
        data() {
            return {
                buchliste: [],
                suchwort: '',
            }
        },
        methods: {
            search(suchwort) {
                this.suchwort = suchwort;
            }
        },
        mounted() {

            // Buchliste per Axios holen
            this.$axios.get(process.env.VUE_APP_AXIOS_URL + '/books/', {})
            .then(response => {
                this.buchliste = response.data;
            })
            .catch(error => console.log(error));

        },
        computed: {
            // Filter aus dem Suchfeld auf Buchliste anwenden
            buchlisteFiltered() {
                var that = this;
                return this.buchliste.filter(function (buch) {
                    return buch.title.toLowerCase().indexOf( that.suchwort.toLowerCase() ) >= 0
                    || buch.subtitle.toLowerCase().indexOf( that.suchwort.toLowerCase() ) >= 0
                    || buch.author.toLowerCase().indexOf( that.suchwort.toLowerCase() ) >= 0
                    || buch.isbn.toLowerCase().indexOf( that.suchwort.toLowerCase() ) >= 0;
                });
            }
        }
    }
</script>

<style></style>