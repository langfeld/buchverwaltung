<template>
    <div v-on:click="goto(buch.id)"
        class="p-10 m-5 rounded-lg shadow-lg flex flex-col justify-between cursor-pointer text-center hover:shadow-2xl"
        v-bind:class="{
            'bg-blue-100 text-gray-900 hover:bg-blue-200': !buch.lent,
            'bg-gray-100 text-gray-500 hover:bg-gray-200': buch.lent
        }"
    >
        <div class="text-2xl lg:text-3xl" v-html="this.$options.filters.highlight(buch.title, suchwort)"></div>
        <div class="text-xl" v-html="this.$options.filters.highlight(buch.subtitle, suchwort)"></div>
        <div class="flex justify-center pt-3">
            <img v-if="!buch.lent" v-bind:src="require('@/assets/img/buch.png')" class="object-contain h-48">
            <img v-if="buch.lent" v-bind:src="require('@/assets/img/buch-lent.png')" class="object-contain h-48">
        </div>
        <div class="py-4" v-html="this.$options.filters.highlight(buch.author, suchwort)">>{{ buch.author }}</div>

        <div v-if="buch.lent"><b>Dieses Buch ist bereits verliehen.</b></div>
        <div v-if="!buch.lent" class="text-green-700"><b>Dieses Buch ist verfügbar.</b></div>
    </div>
</template>

<script>
    export default {
        props: {
            buch: Object,
            suchwort: String
        },
        methods: {
            goto: function(buchnummer){
                this.$router.push({ path: '/buch/'+buchnummer })
            }
        },
        filters: {
            highlight: function(wort, suchwort){
                var check = new RegExp(suchwort, "ig");
                return wort.toString().replace(check, function(matchedText){
                    return ('<strong class="text-blue-700">' + matchedText + '</strong>');
                });
            }
        }
    }
</script>

<style></style>