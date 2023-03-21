<template>
    <div>
        <div v-if="card" class="fab-container">
            <b-image class="is-16x16 fab-content" :src="require('@/assets/icons/logo-48x48.png')"></b-image>
        </div>
        <b-collapse
            :class="card ? 'card' : ''"
            :open="false"
            class="rounded"
            animation="slide"
            aria-id="contentIdForA11y3">
            <template #trigger="props">
                <div class="card-header py-3 px-2 rounded"
                    role="button"
                    aria-controls="contentIdForA11y3"
                    :aria-expanded="props.open">
                    <a class="card-header-icon p-1">
                        <b-icon
                            pack="fas"
                            icon="fa-duotone fa-newspaper"
                            size="is-large"
                            :type="`is-${color}`">
                        </b-icon>
                    </a>
                    <div  class="card-header-title px-2" >
                        <div style="width: 100%;">
                            <strong>{{ message }}</strong>
                            <div v-if="score" class="my-2">
                                <b-progress v-if="score !== undefined" show-value format="percent"
                                            size="is-small"
                                            :type="`is-${color}`" :value="scorePercentage">
                                </b-progress>
                            </div>
                        </div>
                    </div>
                    <a class="card-header-icon px-2" v-if="text">
                        <i :class="props.open ? 'fa-solid fa-caret-up' : 'fa-solid fa-caret-down'"></i>
                    </a>
                    <a class="card-header-icon px-2" @click="closeCallback">
                        <i class="fa-sharp fa-solid fa-xmark"></i>
                    </a>
                </div>
            </template>
            <div :class="card ? 'card-content' : ''" v-if="text" class="rounded scrollable">
                <div>
                    <h1><strong>Evaluated text</strong></h1>
                    <div class="content">
                        {{ text }}
                    </div>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>

export default {
    name: 'ModelResult',
    props: {
        card: {
            type: Boolean,
            required: false,
            default: true
        },
        label: {
            type: Number,
            required: false,
            default: undefined
        },
        score: {
            type: Number,
            required: false,
            default: undefined
        },
        text: {
            type: String,
            required: false,
            default: undefined
        },
        closeCallback: {
            type: Function,
            required: false,
            default: () => {
            }
        }
    },
    data() {
        return {
            description: "",
        }
    },
    computed: {
        scorePercentage() {
            return this.score * 100;
        },
        message() {
            if (this.error) {
                return this.error;
            }
            return this.label === 1 ? "This news is a fact" : "This news is fake";
        },
        color() {
            return this.label === 1 ? "success" : "danger";
        }
    },
    async created() {
        //setTimeout(this.closeCallback, 5000);
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";
</style>
