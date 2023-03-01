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
                    <div v-else>
                        <b-field label="Title">
                            <b-input :disabled="isModelPredicting"
                                     v-model="title"></b-input>
                        </b-field>
                        <b-field label="Body">
                            <b-input :disabled="isModelPredicting"
                                     maxlength="1600" type="textarea" v-model="body"></b-input>
                        </b-field>
                        <b-button class="is-primary is-fullwidth" :disabled="isModelPredicting"
                                  :class="`${isModelPredicting ? 'is-loading' : ''}`"
                                  @click="predict">Check news
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
import {loadModel} from "@/deeplearning/loadModel";
import {execute} from "@/deeplearning/execute";

const MODEL_FILEPATH = "/models/mobilebert-fakenews-model.onnx";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Playground',
    props: {},
    data() {
        return {
            isModelLoading: true,
            isModelPredicting: false,
            session: undefined,
            model: undefined,
            title: "",
            body: "",
            result: undefined,
            exampleId: undefined,
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
        this.isModelLoading = true;
        const response = await fetch(MODEL_FILEPATH, {headers: {'Content-Type': 'application/octet-stream'}});
        const arrayBuffer = await response.arrayBuffer();
        this.model = await loadModel(arrayBuffer);
        this.isModelLoading = false;
    },
    methods: {
        async predict() {
            this.isModelPredicting = true;
            let text = '<TITLE> ' + this.title + " --- <BODY>:" + this.body;
            this.result = await execute(this.model, text);
            this.isModelPredicting = false;
        },
        /*setExample() {
            if (this.exampleId === undefined || this.exampleId === "custom") {
                this.title = "";
                this.body = "";
            } else if (this.exampleId === "exampleFake" || this.exampleId === "exampleReal") {
                this.title = examples[this.exampleId].title;
                this.body = examples[this.exampleId].body;
            }
        }*/
    }
}
</script>

<style scoped>

</style>
