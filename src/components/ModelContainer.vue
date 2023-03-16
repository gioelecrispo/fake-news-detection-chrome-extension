<template>
    <section class="hero">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-half-widescreen is-offset-one-quarter-widescreen">
                    <div v-if="isModelLoading">
                        <p class="subtitle">
                            Model is loading...
                        </p>
                        <b-progress type="is-primary"></b-progress>
                    </div>
                    <div v-else-if="isModelPredicting">
                        <p class="subtitle">
                            Model is predicting...
                        </p>
                        <b-progress type="is-primary"></b-progress>
                    </div>
                    <div v-else>
                        <!--<b-field label="Title">
                            <b-input :disabled="isModelPredicting"
                                     v-model="title"></b-input>
                        </b-field>
                        <b-field label="Body">
                            <b-input :disabled="isModelPredicting"
                                     maxlength="1600" type="textarea" v-model="body"></b-input>
                        </b-field>-->
                        <b-button class="is-primary is-fullwidth" :disabled="isModelPredicting"
                                  :class="`${isModelPredicting ? 'is-loading' : ''}`"
                                  @click="predict('This is a fake news')">Check news
                        </b-button>
                        <b-message v-if="result !== undefined && !isModelPredicting"
                                   class="mt-4" :class="`is-${messageColor}`">{{ message }}
                        </b-message>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'ModelContainer',
    props: {},
    data() {
        return {
            isModelLoading: false,
            isModelPredicting: false,
            result: undefined,
        }
    },
    computed: {
        message() {
            return this.result === 1 ? "The news is real" : "The news is fake";
        },
        messageColor() {
            return this.result === 1 ? "success" : "danger";
        }
    },
    async created() {
        chrome.runtime.onMessage.addListener((msg, sender, callback) => {
            console.log('Received msg:', msg, 'sender', sender, 'callback', callback);
            if (msg.id === "MODEL.isLoading") {
                this.isModelLoading = true;
            } else if (msg.id === "MODEL.isLoaded") {
                this.isModelLoading = false;
            } else if (msg.id === "MODEL.isPredicting") {
                this.isModelPredicting = true;
            } else if (msg.id === "MODEL.hasPredicted") {
                this.isModelPredicting = false;
            } else if (msg.id === "MODEL.result") {
                this.result = msg.message;
            } else if (msg.id === "CONTEXT_MENU_CLICK") {
                this.predict(msg.info.selectionText);
            }
        });
    },
    methods: {
        predict(text) {
            chrome.runtime.sendMessage({id: "POPUP.requestPrediction", text: text})
        }
    }
}
</script>

<style lang="css" scoped>

</style>
