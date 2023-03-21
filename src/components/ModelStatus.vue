<template>
    <section :class="card ? 'card' : ''">
        <div v-if="isModelLoading" class="p-3">
            <p class="subtitle mb-1">
                Model is loading...
            </p>
            <b-progress type="is-primary"></b-progress>
        </div>
        <div v-else-if="isModelPredicting" class="p-3">
            <p class="subtitle mb-1">
                Model is predicting...
            </p>
            <b-progress type="is-primary"></b-progress>
        </div>
    </section>
</template>

<script>

export default {
    name: 'ModelStatus',
    props: {
        card: {
            type: Boolean,
            required: false,
            default: true
        },
        isModelLoading: {
            type: Boolean,
            required: true,
            default: false
        },
        isModelPredicting: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data() {
        return {
        }
    },
    computed: {
    },
    async mounted() {

    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>

</style>
