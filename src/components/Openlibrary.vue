<template>
    <div v-bind:class="{'hidden': !isbn && !searchword }" class="max-w-lg mb-20 overflow-y-scroll lg:px-12" style="height: calc(100vh - 230px);">
        <div class="text-3xl mb-6 mt-6 lg:mt-0">
            OpenLibrary
        </div>

        <div v-if="isbn" class="text-blue-700">
            Informationen für die ISBN<br>
            <b>{{ isbn }}</b>
        </div>

        <div v-if="searchword" class="text-blue-700">
            Informationen für den Suchbegriff<br>
            <b>{{ searchword }}</b>
        </div>

        <div v-if="waitforapi" class="text-orange-500 mt-3">
            Bitte warten...
        </div>

        <div v-if="rueckgabenanzahl < 1 && !waitforapi" class="text-red-500 mt-3">
            Es wurden leider keine Informationen gefunden.
        </div>

        <div v-if="rueckgabenanzahl == 1" class="text-green-500 mt-3">
            Es wurde 1 Egebnis gefunden.
        </div>

        <div v-if="rueckgabenanzahl > 1" class="text-green-500 mt-3">
            Es wurden {{ rueckgabenanzahl }} Egebnisse gefunden.
        </div>

        <div v-if="!waitforapi">
            <div v-for="(book, index) in openlibrary" v-bind:key="index">
                <div class="flex flex-col break-all lg:flex-row items-center lg:items-start mt-5 p-2 border-green-500 border rounded shadow-lg">

                    <!-- Wort Suche -->
                    <template v-if="searchword">
                        <div>
                            <!-- Daten-Uebernahme-Button -->
                            <div v-on:click="emitDataToForm(book.title_suggest, false, book.author_name, book.isbn, false)" class="no-underline cursor-pointer bg-green-500 hover:bg-green-700 mb-2 lg:m-2 rounded p-2 text-sm shadow-lg text-white">
                                <i class="las la-check text-xl lg:text-2xl"></i>
                            </div>
                        </div>
                        <div>
                            <!-- Verfuegbare Daten -->
                            <p class="font-medium">{{ book.title_suggest }}</p>
                            <p v-if="book.author_name" class="">{{ book.author_name.toString() }}</p>
                            <p v-if="book.isbn" class="">{{ book.isbn.toString() }}</p>
                        </div>
                    </template>

                    <!-- ISBN Suche -->
                    <template v-if="isbn">
                        <div>
                            <!-- Daten-Uebernahme-Button -->
                            <div v-on:click="emitDataToForm(book.title, book.subtitle, autorenliste(book.authors), false, book.notes )" class="no-underline cursor-pointer bg-green-500 hover:bg-green-700 mb-2 lg:m-2 rounded p-2 text-sm shadow-lg text-white">
                                <i class="las la-check text-xl lg:text-2xl"></i>
                            </div>
                        </div>
                        <div>
                            <!-- Verfuegbare Daten -->
                            <p class="font-medium">{{ book.title }}</p>
                            <p v-if="book.subtitle" class="">{{ book.subtitle }}</p>
                            <p v-if="book.authors" class="">{{ autorenliste(book.authors) }}</p>
                            <!-- <p class="">{{ book.notes }}</p> -->
                        </div>
                    </template>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                waitforapi: true,
                openlibrary: null
            }
        },
        props: {
            isbn: {
                type: String,
                default: null
            },
            searchword: {
                type: String,
                default: null
            }
        },
        computed: {

            // Anzahl der Api-Rueckgaben ermitteln
            rueckgabenanzahl() {
                if(this.openlibrary !== null && typeof this.openlibrary === 'object') {
                    return Object.keys(this.openlibrary).length;
                }
                return 0;
            }
        },
        methods: {

            // Autor aus dem Object -> Array ermitteln
            autorenliste(el) {
                if(typeof(el) === 'object') {
                    if(el.length > 0) {
                        if(typeof(el[0].name) === 'string') {
                            return el[0].name;
                        }
                    }
                }
                return;
            },

            // Button fuer Daten-Uebernahme in das Formular
            emitDataToForm(title, subtitle, authors, isbn, text) {
                this.$emit('emitDataToForm', title, subtitle, authors, isbn, text);
            }

        },
        watch: {

            // Informationen zu ISBN von openlibrary.org holen
            isbn: function(val) {

                // Ist eine ISBN vorhanden?
                if(val) {

                    // Suchwort und Lib leeren, Waiter true
                    this.searchword = null;
                    this.openlibrary = null;
                    this.waitforapi = true;

                    // Buch per Axios zurueck geben
                    this.$axios.post(process.env.VUE_APP_AXIOS_URL + '/' + 'api_isbn' + '/', {
                        'action': 'api_isbn',
                        'isbn': val,
                    })
                    .then(response => {
                        this.waitforapi = false;
                        this.openlibrary = response.data;
                    })
                    .catch(error => console.log(error));

                }

            },

            // Informationen zu Suchwort von openlibrary.org holen
            searchword: function(val) {

                // Ist eine Suchwort vorhanden?
                if(val) {

                    // ISBN und Lib leeren, Waiter true
                    this.isbn = null;
                    this.openlibrary = null;
                    this.waitforapi = true;

                    // Buch per Axios zurueck geben
                    this.$axios.post(process.env.VUE_APP_AXIOS_URL + '/' + 'api_search' + '/', {
                        'action': 'api_search',
                        'searchword': val,
                    })
                    .then(response => {
                        this.waitforapi = false;
                        this.openlibrary = response.data.docs;
                    })
                    .catch(error => console.log(error));

                }

            }

        },
    }
</script>

<style></style>