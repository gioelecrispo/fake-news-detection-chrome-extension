<template>
    <div>
        <div v-if="card" class="fab-container">
            <b-image class="is-16x16 fab-content" :src="require('@/assets/icons/logo-48x48.png')"></b-image>
        </div>
        <div :class="card ? 'card' : ''" class="rounded py-3 px-2">
            <!--<div v-if="isModelLoading" class="p-3">
                <p class="subtitle mb-1">
                    Model is predicting...
                </p>
                <b-progress type="is-primary"></b-progress>
            </div>
            <div v-else-if="isModelPredicting" class="p-3">-->
            <div v-if="isModelLoading || isModelPredicting" class="p-3">
                <p class="subtitle mb-1">
                    Model is predicting...
                </p>
                <b-progress type="is-primary"></b-progress>
            </div>
        </div>
    </div>
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
@import "../assets/common.scss";
</style>
