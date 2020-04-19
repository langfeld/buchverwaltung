<template>
    <div class="p-6 flex flex-col flex-wrap lg:flex-row lg:justify-center lg:p-16">

        <!-- Bild und Leih-Button -->
        <div class="flex flex-col justify-between text-center w-full xl:w-3/12">
            <img v-if="!(buch.lent > 0)" v-bind:src="require('@/assets/img/buch.png')" class="object-scale-down h-48 xl:h-auto xl:object-contain">
            <img v-if="(buch.lent > 0)" v-bind:src="require('@/assets/img/buch-lent.png')" class="object-scale-down h-48 xl:h-auto xl:object-contain">

            <div v-if="(buch.lent > 0)" class="lg:text-lg"><b>Dieses Buch ist bereits verliehen.</b></div>
            <div v-if="!(buch.lent > 0)" v-on:click="leihen('lent')" class="bg-green-500 hover:bg-green-700 shadow-lg text-white text-center text-lg lg:text-xl font-bold m-6 lg:mb-0 py-4 px-8 rounded cursor-pointer flex justify-center items-center">
                <i class="las la-book-reader mr-4 text-xl lg:text-4xl"></i> Buch ausleihen
            </div>

            <div v-if="(buch.lent > 0)" v-on:click="leihen('return')" class="bg-indigo-500 hover:bg-indigo-700 shadow-lg text-white text-center text-lg lg:text-xl font-bold m-6 lg:mb-0 py-4 px-8 rounded cursor-pointer flex justify-center items-center">
                <i class="las la-undo-alt mr-4 text-xl lg:text-4xl"></i> Buch zurück geben
            </div>
        </div>

        <!-- Beschreibung -->
        <div class="w-full xl:w-9/12 px-6 flex flex-col">
            <div class="text-2xl lg:text-4xl">{{ buch.title }}</div>
            <div class="text-xl lg:text-2xl">{{ buch.subtitle }}</div>

            <div class="text-lg lg:text-xl mt-4">Von {{ buch.author }}</div>
            <div class="text-lg lg:text-xl mt-16 leading-loose text-justify">{{ buch.text }}</div>
            <div class="text-lg lg:text-xl mt-16">ISBN: {{ buch.isbn }}</div>
        </div>

        <!-- Hinweis-Modal -->
        <app-deletemodal v-on:loeschen="loeschen" v-on:hidemodal="hidemodal" v-bind:showmodal="showmodal"></app-deletemodal>

        <!-- Zurueck Navigation -->
        <router-link to="/" class="absolute top-0 left-0 m-5 text-white lg:m-6 no-underline flex items-center cursor-pointer hover:text-teal-200">
            <i class="las la-arrow-circle-left text-3xl lg:text-5xl"></i>
            <div class="invisible text-2xl lg:visible lg:ml-4">Zurück</div>
        </router-link>

        <!-- Admin Panel -->
        <div v-if="admin" class="fixed bottom-0 right-0 mb-5 text-white flex items-center bg-purple-500 text-white p-5 rounded-l-full">
            <router-link v-bind:to="{ path: '/edit/' + buchnummer }" class="cursor-pointer no-underline flex items-center ml-3 mr-5 text-white hover:text-teal-200" title="Buch bearbeiten">
                <i class="las la-pen text-3xl lg:text-5xl"></i>
            </router-link>
            <div v-on:click="loeschfrage" class="cursor-pointer no-underline flex items-center ml-3 text-white hover:text-red-500" title="Buch löschen">
                <i class="las la-trash text-3xl lg:text-5xl"></i>
            </div>
        </div>

    </div>
</template>

<script>
    import DeleteModal from '@/components/modals/Delete';

    export default {

        data() {
            return {
                buch: [],
                showmodal: false
            }
        },
        components: {
            'app-deletemodal': DeleteModal,
        },
        methods: {

            // Hinweis-Modal ausblenden
            hidemodal() {
                this.showmodal = false;
            },

            // Buch entfernen
            loeschen() {

                // Buch per Axios zurueck geben
                this.$axios.post(process.env.VUE_APP_AXIOS_URL + '/' + 'del' + '/', {
                    'id': this.buchnummer,
                    'action': 'del'
                })
                .then(
                    // Zur Hauptseite
                    this.$router.push({ path: '/' })
                )
                .catch(error => console.log(error));

            },

            // Leihen oder zurueck geben
            leihen(action) {

                // Buch per Axios zurueck geben
                this.$axios.post(process.env.VUE_APP_AXIOS_URL + '/' + action + '/', {
                    'id': this.buchnummer,
                    'action': action
                })
                .then(response => {
                    this.buch.lent = response.data
                })
                .catch(error => console.log(error));

            },

            // Buch entfernen
            loeschfrage() {
                this.showmodal = true;
            }

        },
        computed: {

            // Ist der Benutzer ein Admin?
            admin() {
                return this.$store.state.admin;
            },

            // Aktuelle Buchnummer aus der URL zurueck geben
            buchnummer() {
                return this.$route.params.buchnummer;
            }
        },
        mounted() {

            // Buchdetails per Axios holen
            this.$axios.get(process.env.VUE_APP_AXIOS_URL + '/books/' + this.buchnummer, {})
            .then(response => {
                this.buch = response.data;
            })
            .catch(error => {
                console.log(error);
                // Zur Hauptseite
                this.$router.push({ path: '/' })
            });

        },
    }
</script>

<style></style>