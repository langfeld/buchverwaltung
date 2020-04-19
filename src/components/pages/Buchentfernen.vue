<template>
    <div>
        <app-modalform v-bind:showmodal="true"></app-modalform>
    </div>
</template>

<script>
    import ModalForm from '@/components/ModalForm';

    export default {
        components: {
            'app-modalform': ModalForm,
        },
    }
</script>

<style></style>