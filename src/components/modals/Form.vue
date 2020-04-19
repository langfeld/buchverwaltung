<template>
    <div>
        <div v-if="showmodal" v-on:click="hidemodal" class="fixed z-50 top-0 left-0 right-0 bottom-0 overflow-auto flex" style="background-color: #ffffff87;">
            <div class="fixed border-2 border-red-400 max-w-md md:relative align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow-2xl flex flex-col">
                <h2 class="text-4xl text-center font-hairline md:leading-loose text-grey mb-4">Hinweis</h2>
                <p class="text-xl leading-normal mb-8 text-center">
                    Bitte alle Felder ausfüllen
                </p>
                <div class="inline-flex justify-center">
                    <button v-on:click="hidemodal" class="bg-blue-500 w-full hover:bg-blue-700 font-bold py-2 px-5 rounded text-white text-xl">
                        OK
                    </button>
                </div>
                <span v-on:click="hidemodal" class="absolute top-0 right-0 pt-4 px-4">
                    <svg class="h-8 w-8 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Schließen</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            hidemodal() {
                this.$emit('hidemodal');
            }
        },
        props: {
            showmodal: {
                type: Boolean,
                default: false
            },
        },
    }
</script>

<style></style>

<!--
In Modal in der Parent-Komponente einbinden (inkl. Zustand - data: showmodal):

<app-modalform v-on:hidemodal="hidemodal" v-bind:showmodal="showmodal"></app-modalform>

Die Schließen-Funktion wird an die Parent-Komponente "emitted" und dort ausgefuehrt.

    // Hinweis-Modal ausblenden
    hidemodal() {
        this.showmodal = false;
    },
-->