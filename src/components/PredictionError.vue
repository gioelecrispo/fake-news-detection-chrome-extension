<template>
    <div>
        <div class="fab-container">
            <b-image class="is-16x16 fab-content" :src="require('@/assets/icons/logo-48x48.png')"></b-image>
        </div>
        <div :class="classValue" class="card-border rounded">
            <div class="card-header py-3 px-2 rounded">
                <a class="card-header-icon p-1">
                    <b-icon
                        pack="fas"
                        icon="fa-solid fa-triangle-exclamation"
                        size="is-large"
                        :type="`is-${error.type}-dark`">
                    </b-icon>
                </a>
                <p class="card-header-title px-2">
                    <strong>{{ error.message }}</strong>
                </p>
                <a class="card-header-icon" @click="closeCallback">
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PredictionError',
    props: {
        card: {
            type: Boolean,
            required: false,
            default: true
        },
        error: {
            type: Object,
            required: true
        },
        closeCallback: {
            type: Function,
            required: false,
            default: () => {
            }
        }
    },
    data() {
        return {}
    },
    computed: {
        classValue() {
            let value = "has-background-" + this.error.type;
            if (this.card) {
                value += " card"
            }
            return value;

        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

</style>
