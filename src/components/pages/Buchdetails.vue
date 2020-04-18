<template>
    <div class="p-6 flex flex-col flex-wrap lg:flex-row lg:justify-center lg:p-16">

        <div class="flex flex-col justify-between text-center w-full xl:w-3/12">
            <img v-if="!buch.lent" v-bind:src="require('@/assets/img/buch.png')" class="object-scale-down h-48 xl:h-auto xl:object-contain">
            <img v-if="buch.lent" v-bind:src="require('@/assets/img/buch-lent.png')" class="object-scale-down h-48 xl:h-auto xl:object-contain">

            <div v-if="buch.lent" class="lg:text-2xl"><b>Dieses Buch ist bereits verliehen.</b></div>
            <div v-if="!buch.lent" class="bg-green-500 hover:bg-green-700 shadow-lg text-white text-center text-2xl font-bold m-6 lg:mb-0 py-4 px-8 rounded cursor-pointer">Buch ausleihen</div>

            <div v-if="buch.lent" class="bg-gray-500 shadow-lg text-white text-center text-2xl font-bold m-6 lg:mb-0 py-4 px-8 rounded cursor-not-allowed">Buch ausleihen</div>

        </div>

        <div class="w-full xl:w-9/12 px-6 flex flex-col">
            <div class="text-3xl lg:text-6xl">{{ buch.title }}</div>
            <div class="text-xl lg:text-3xl">{{ buch.subtitle }}</div>

            <div class="text-xl lg:text-2xl mt-4">Von {{ buch.author }}</div>
            <div class="text-xl lg:text-2xl mt-16 leading-loose text-justify">{{ buch.text }}</div>
            <div class="text-xl lg:text-2xl mt-16">ISBN: {{ buch.isbn }}</div>
        </div>

        <router-link to="/" class="absolute top-0 left-0 m-5 text-white lg:m-10 flex items-center cursor-pointer hover:text-teal-200">
            <i class="las la-arrow-circle-left text-4xl lg:text-6xl"></i>
            <div class="invisible text-3xl lg:visible lg:ml-4">Zurück</div>
        </router-link>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                buch: []
            }
        },
        mounted() {

            // Buchliste per Axios holen
            this.$axios.get(process.env.VUE_APP_AXIOS_URL + '/books/' + this.$route.params.buchnummer, {})
            .then(response => {
                this.buch = response.data;
            })
            .catch(error => console.log(error));

        },
    }
</script>

<style></style>