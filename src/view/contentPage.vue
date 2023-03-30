<template>
    <section id="chrome-extension-content-app"
             class="notification p-0" v-if="isModelLoading || isModelPredicting || hasPredicted">
        <!--<h1 class="notification">asdawdasdwa</h1>
        <div class=" card rounded py-3 px-2">
                <p class="subtitle mb-1">
                    Model is predicting...
                </p>
                <b-progress type="is-primary"></b-progress>
        </div>-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
              integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
              crossorigin="anonymous" referrerpolicy="no-referrer"/>
        <div class="columns p-0">
            <div class="column p-0
                is-full
                is-three-fifths-tablet is-offset-one-fifth-tablet
                is-half-desktop is-offset-one-quarter-desktop
                is-one-third-widescreen is-offset-one-third-widescreen">
                <ModelStatus v-if="isModelLoading || isModelPredicting"
                             :isModelLoading="isModelLoading" :isModelPredicting="isModelPredicting"></ModelStatus>
                <PredictionError v-if="error !== undefined" :error="error"
                                 :closeCallback="() => { this.error=undefined }"></PredictionError>
                <ModelResult v-if="error === undefined && label !== undefined && hasPredicted && showResult"
                             :label="label" :score="score" :text="textToCheck"
                             :closeCallback="hideResult"></ModelResult>

            </div>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
import ModelMixins from "@/mixins/ModelMixins";
import Readability from '@/utils/Readability';
import isProbablyReaderable from '@/utils/Readability-readerable';
import ModelStatus from "@/components/ModelStatus";
import ModelResult from "@/components/ModelResult";
import PredictionError from "@/components/PredictionError";
import {extract} from '@extractus/article-extractor';


export default {
    name: 'contentPageView',
    mixins: [ModelMixins],
    components: {
        ModelStatus,
        ModelResult,
        PredictionError
    },
    data() {
        return {
            showResult: false
        }
    },
    async mounted() {
        chrome.runtime.onMessage.addListener((msg, sender, callback) => {
            if (msg.id === "CONTEXT_MENU_CLICK") {
                this.analyzePage(false);
            }
        });
        let key = "OPTIONS.isAutomaticPageDetectionEnabled";
        let data = await chrome.storage.sync.get(key);
        if (data === undefined || data[key] === true) {
            this.analyzePage(true);
        } else {
            console.log("FAKE NEWS DETECTION EXTENSION - Analysis skipped because the option <" + key + "> is disabled.");
        }
    },
    created() {
    },
    methods: {
        async analyzePage(isBackground) {
            this.showResult = false;
            const article = await extract(document.documentElement.innerHTML);
            console.log("article", article);
            this.showResult = true;
            if (article !== null) {
                const doc = this.htmlToDoc(article.content);
                if (isProbablyReaderable(doc, {minContentLength: 100, minScore: 50})) {
                    console.log("doc", doc)
                    let readableDoc = new Readability(doc).parse();
                    console.log("after", readableDoc.textContent);
                    this.textToCheck = readableDoc.textContent;
                    this.predict(isBackground);
                    return;
                }
            }
            if (!isBackground) {
                this.error = {
                    type: "warning",
                    message: "The page you are reading is probably not an article or news item!"
                }
                this.hasPredicted = true;
            }

        },
        hideResult() {
            this.showResult = false;
            this.hasPredicted = false;
        },
        htmlToDoc(markup) {
            const parser = new DOMParser();
            return parser.parseFromString(markup, "text/html");
        }
    }
}

</script>

<style lang="scss" scoped>
@import "../assets/content.css";

.notification {
    width: 100%;
    z-index: 999999;
    position: fixed;
    top: 50px;
    background-color: transparent;
}

</style>
