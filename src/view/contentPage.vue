<template>
    <!--<shadow-root>-->
    <section id="chrome-extension-content-app"
             class="px-4 py-2 notification" v-if="isModelLoading || isModelPredicting || hasPredicted">
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
                <PredictionError v-if="error !== undefined" :error="error" :closeCallback="() => { this.error=undefined }"></PredictionError>
                <div ref="resultContainer" v-if="error === undefined && label !== undefined && hasPredicted && showResult">
                    <ModelResult :label="label" :score="score" :text="textToCheck"
                    :closeCallback="hideResult"></ModelResult>
                </div>
            </div>
        </div>
    </section>
    <!--</shadow-root>-->
</template>

<script>
/* eslint-disable */
import ModelMixins from "@/mixins/ModelMixins";
import Readability from '@/utils/Readability';
import isProbablyReaderable from '@/utils/Readability-readerable';
import ModelStatus from "@/components/ModelStatus";
import ModelResult from "@/components/ModelResult";
import PredictionError from "@/components/PredictionError";

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
            showResult: false,
            isBackground: false
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
    created() {},
    methods: {
        analyzePage(isBackground) {
            this.showResult = false;
            if (isProbablyReaderable(document)) {
                let documentClone = document.cloneNode(true);
                let article = new Readability(documentClone).parse();
                this.textToCheck = article.textContent;
                this.predict();
            } else {
                this.error = {
                    type: "warning",
                    message: "The page you are reading is probably not an article or news item!"
                }
                if (!isBackground) {
                    this.hasPredicted = true;
                }
            }
            this.showResult = true;
        },
        hideResult() {
            this.showResult = false;
        },

    }
}

</script>

<style lang="scss" scoped>
.notification {
    width: 100%;
    z-index: 9999;
    position: fixed;
    top: 30px;
    background-color: transparent;
}

</style>
