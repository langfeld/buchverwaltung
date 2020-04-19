<template>
    <div>
        <app-suche></app-suche>

        <div v-if="Array.isArray(buchlisteFiltered) && buchlisteFiltered.length < 1" class="w-full px-10 lg:px-20 mt-16 text-2xl">
            Es sind leider keine Bücher vorhanden.
        </div>

        <div v-if="flacheliste" class="p-6 grid grid-cols-1 lg:justify-center lg:p-16">
            <template v-for="(buch, index) in buchlisteFiltered">
                <app-buch2 v-bind:buch="buch" v-bind:suchwort="suchwort" v-bind:key="index"></app-buch2>
            </template>
        </div>

        <!-- Cover-Liste -->
        <div v-if="!flacheliste" class="p-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 lg:justify-center lg:p-16">
            <template v-for="(buch, index) in buchlisteFiltered">
                <app-buch v-bind:buch="buch" v-bind:suchwort="suchwort" v-bind:key="index"></app-buch>
            </template>
        </div>

        <!-- Flache Liste -->
        <div v-on:click="ansichtUmschalten" class="absolute top-0 left-0 m-5 text-white lg:m-6 flex items-center cursor-pointer hover:text-teal-200" title="Anzeige-Layout wechseln">
            <i v-if="flacheliste" class="las la-table text-3xl lg:text-5xl"></i>
            <i v-if="!flacheliste" class="las la-list text-3xl lg:text-5xl"></i>
        </div>

        <!-- Admin Panel -->
        <div v-if="admin" class="fixed bottom-0 right-0 mb-5 text-white flex items-center bg-purple-500 p-5 rounded-l-full">
            <router-link to="/add" class="cursor-pointer no-underline flex items-center ml-3 mr-5 text-white hover:text-teal-200" title="Buch hinzufügen">
                <i class="las la-plus-circle text-3xl lg:text-5xl"></i>
            </router-link>
        </div>

    </div>
</template>

<script>
    import Suche from "@/components/Suche"
    import Buch from "@/components/Buch"
    import Buch2 from "@/components/Buch2"

    export default {
        components: {
            "app-buch": Buch,
            "app-buch2": Buch2,
            "app-suche": Suche
        },
        data() {
            return {
                buchliste: [],
                suchwort: '',
            }
        },
        methods: {

            // Suchen
            search(suchwort) {
                this.suchwort = suchwort;
            },

            // Ansicht (im Store) umschalten
            ansichtUmschalten() {
                this.$store.commit('ansichtUmschalten', {
                    flacheliste: !this.flacheliste
                })
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

            // Ist der Benutzer ein Admin?
            admin() {
                return this.$store.state.admin;
            },

            // Buch-Ansicht aus Store auslesen
            flacheliste() {
                return this.$store.state.flacheliste;
            },

            // Filter aus dem Suchfeld auf Buchliste anwenden
            buchlisteFiltered() {
                var that = this;
                if(Array.isArray(this.buchliste)) {
                    return this.buchliste.filter(function (buch) {
                        return buch.title.toLowerCase().indexOf( that.suchwort.toLowerCase() ) >= 0
                        || buch.subtitle.toLowerCase().indexOf( that.suchwort.toLowerCase() ) >= 0
                        || buch.author.toLowerCase().indexOf( that.suchwort.toLowerCase() ) >= 0
                        || buch.isbn.toLowerCase().indexOf( that.suchwort.toLowerCase() ) >= 0;
                    });
                }
                return {};
            }
        }
    }
</script>

<style></style>