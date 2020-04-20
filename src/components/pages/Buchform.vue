<template>
    <div>

        <!-- Formular -->
        <div class="flex flex-col md:flex-row text-lg lg:text-xl mt-16 w-full px-10 lg:px-20">

            <div class="flex-grow">

                <h1 v-if="buchnummer > 0" class="text-3xl mb-8">Buch bearbeiten ({{ buchnummer }})</h1>
                <h1 v-if="!buchnummer > 0" class="text-3xl mb-8">Buch hinzufügen</h1>

                <label class="block">
                    <span class="text-blue-700">Titel</span>

                    <div class="flex flex-col lg:flex-row">
                        <input v-model="buch.title" type="text" class="border-gray-600 border-1 form-input mt-1 block w-full" placeholder="Bitte Titel eingeben">

                        <div v-on:click="api_searchword = buch.title; api_isbn = null" class="bg-blue-500 hover:bg-blue-700 shadow-lg text-white text-center text-sm lg:text-lg font-bold mt-1 lg:ml-4 px-4 py-2 rounded cursor-pointer flex justify-center items-center" title="OpenLibrary mit Titel durchsuchen">
                            <i class="las la-cloud-download-alt text-xl lg:text-2xl mr-4"></i> OpenLibrary
                        </div>
                    </div>
                </label>

                <label class="block mt-5">
                    <span class="text-blue-700">Untertitel</span>
                    <input v-model="buch.subtitle" type="text" class="border-gray-600 border-1 form-input mt-1 block w-full" placeholder="Bitte Untertitel eingeben">
                </label>

                <label class="block mt-5">
                    <span class="text-blue-700">Autor(en)</span>
                    <input v-model="buch.author" type="text" class="border-gray-600 border-1 form-input mt-1 block w-full" placeholder="Bitte Autor(en) eingeben">
                </label>

                <label class="block mt-5">
                    <span class="text-blue-700">ISBN/EAN</span>

                    <div class="flex flex-col lg:flex-row">
                        <input v-model="buch.isbn" type="text" class="border-gray-600 border-1 form-input mt-1 block w-full" placeholder="Bitte ISBN oder EAN eingeben">

                        <div v-on:click="api_isbn = buch.isbn; api_searchword = null" class="bg-blue-500 hover:bg-blue-700 shadow-lg text-white text-center text-sm lg:text-lg font-bold mt-1 lg:ml-4 px-4 py-2 rounded cursor-pointer flex justify-center items-center" title="OpenLibrary mit ISBN durchsuchen">
                            <i class="las la-cloud-download-alt text-xl lg:text-2xl mr-4"></i> OpenLibrary
                        </div>
                    </div>
                </label>

                <label class="block mt-5">
                    <span class="text-blue-700">Text</span>
                    <textarea v-model="buch.text" class="border-gray-600 border-1 form-textarea mt-1 block w-full" rows="6" placeholder="Bitte Beschreibung / Text eingeben"></textarea>
                </label>

                <div v-on:click="speichern" class="bg-green-500 hover:bg-green-700 shadow-lg text-white text-center text-xl font-bold mt-5 py-4 px-8 rounded cursor-pointer flex justify-center items-center">
                    <i class="las la-save text-4xl mr-4"></i> Buch speichern
                </div>

            </div>
            <div>
                <app-openlibrary v-on:emitDataToForm="emitDataToForm" v-bind:isbn="api_isbn" v-bind:searchword="api_searchword"></app-openlibrary>
            </div>

        </div>

        <!-- Hinweis-Modal -->
        <app-formmodal v-on:hidemodal="hidemodal" v-bind:showmodal="showmodal"></app-formmodal>

        <!-- Zurueck Navigation -->
        <div v-on:click="$router.go(-1)" class="absolute top-0 left-0 m-5 text-white lg:m-6 no-underline flex items-center cursor-pointer hover:text-teal-200">
            <i class="las la-arrow-circle-left text-3xl lg:text-5xl"></i>
            <div class="invisible text-2xl lg:visible lg:ml-4">Zurück</div>
        </div>

    </div>
</template>

<script>
    import FormModal from '@/components/modals/Form';
    import OpenLibrary from '@/components/Openlibrary';

    export default {

        data() {
            return {
                buch: {
                    lent: 0,
                    title: null,
                    subtitle: null,
                    author: null,
                    isbn: null,
                    text: null
                },
                showmodal: false,
                api_isbn: null,
                api_searchword: null
            }
        },
        components: {
            'app-formmodal': FormModal,
            'app-openlibrary': OpenLibrary
        },
        methods: {

            // Hinweis-Modal ausblenden
            hidemodal() {
                this.showmodal = false;
            },

            // Leihen oder zurueck geben
            speichern() {

                // Wurden alle Felder ausgefüllt?
                if(!this.buch.title) {
                    this.showmodal = true;
                }
                else if(!this.buch.subtitle) {
                    this.showmodal = true;
                }
                else if(!this.buch.author) {
                    this.showmodal = true;
                }
                else if(!this.buch.isbn) {
                    this.showmodal = true;
                }
                else if(!this.buch.text) {
                    this.showmodal = true;
                }
                else {

                    // Buch per Axios zurueck geben
                    this.$axios.post(process.env.VUE_APP_AXIOS_URL + '/' + 'save' + '/', {
                        'id': this.buchnummer,
                        'action': 'save',
                        'title': this.buch.title,
                        'subtitle': this.buch.subtitle,
                        'author': this.buch.author,
                        'isbn': this.buch.isbn,
                        'text': this.buch.text,
                        'lent': this.buch.lent
                    })
                    .then(response => {
                        // Zur Detailseite wechseln
                        this.$router.push({ path: '/buch/'+response.data })
                    })
                    .catch(error => console.log(error));

                }

            },

            // Daten aus der OpenLibrary Komponente in Formular uebernehmen
            emitDataToForm(title, subtitle, authors, isbn, text) {
                console.log(title + " | " + subtitle + " | " + authors + " | " + isbn + " | " + text)
                if(title) {
                    this.buch.title = title;
                }
                if(subtitle) {
                    this.buch.subtitle = subtitle;
                }
                if(authors) {
                    this.buch.author = authors.toString();
                }
                if(isbn) {
                    this.buch.isbn = isbn.toString();
                }
                if(text) {
                    this.buch.text = text;
                }
            }

        },
        computed: {

            // Aktuelle Buchnummer aus der URL zurueck geben
            // Oder "0", damit eine ID in der Post-Uebergabe vorhanden ist
            buchnummer() {
                if(!this.$route.params.buchnummer > 0) {
                    return 0;
                }
                return this.$route.params.buchnummer;
            }

        },
        mounted() {

            // Buch bearbeiten (>0) oder neu erstellen?
            if(this.buchnummer > 0) {

                // Buchdetails per Axios holen
                this.$axios.get(process.env.VUE_APP_AXIOS_URL + '/books/' + this.buchnummer, {})
                .then(response => {
                    this.buch = response.data;
                })
                .catch(error => console.log(error));

            }

        },
    }
</script>

<style></style>