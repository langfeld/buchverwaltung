<template>
    <div v-on:click="goto(buch.id)"
        class="p-3 m-3 rounded-lg shadow-lg flex flex-col cursor-pointer lg:items-center lg:flex-row hover:shadow-2xl"
        v-bind:class="{
            'bg-blue-100 text-gray-900 hover:bg-blue-200': !(buch.lent > 0),
            'bg-gray-100 text-gray-500 hover:bg-gray-200': (buch.lent > 0)
        }"
    >
        <div class="flex justify-center">
            <img v-if="!(buch.lent > 0)" v-bind:src="require('@/assets/img/buch.png')" class="object-contain h-12">
            <img v-if="(buch.lent > 0)" v-bind:src="require('@/assets/img/buch-lent.png')" class="object-contain h-12">
        </div>
        <div class="ml-5 text-2xl text-left lg:w-1/5" v-html="this.$options.filters.highlight(buch.title, suchwort)"></div>
        <div class="ml-5 text-xl text-left lg:w-1/5 " v-html="this.$options.filters.highlight(buch.subtitle, suchwort)"></div>
        <div class="ml-5 text-left lg:w-1/5" v-html="this.$options.filters.highlight(buch.author, suchwort)">>{{ buch.author }}</div>

        <div v-if="(buch.lent > 0)" class="ml-5"><b>Dieses Buch ist bereits verliehen.</b></div>
        <div v-if="!(buch.lent > 0)" class="ml-5 text-green-700"><b>Dieses Buch ist verfügbar.</b></div>
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