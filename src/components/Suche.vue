<template>
    <div class="w-full px-10 lg:px-20 mt-16">
        <input v-model="suchwort" v-on:keyup="search" class="shadow border rounded w-full py-2 px-8 text-2xl text-gray-700 focus:outline-none focus:shadow-outline" type="text" placeholder="Suchbegriff">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                suchwort: ''
            }
        },
        methods: {
            search() {
                this.$parent.search(this.suchwort);
            }
        }
    }
</script>

<style></style>