<template>
    <div id="popupContainer">
        <Banner></Banner>
        <section class="hero" :class="isDesktop ? 'is-90vh': ''">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-half-widescreen is-offset-one-quarter-widescreen">
                        <ModelStatus v-if="isModelLoading || isModelPredicting"
                                     :card="false"
                                     :isModelLoading="isModelLoading"
                                     :isModelPredicting="isModelPredicting"></ModelStatus>
                        <PredictionError :card="false"
                                         v-if="error" :error="error"
                                         :closeCallback="hideError"></PredictionError>
                        <div ref="resultContainer" v-show="error === undefined && label !== undefined && hasPredicted">
                            <ModelResult :card="false"
                                         :label="label" :score="score" :error="error"
                                         :closeCallback="hideResult"></ModelResult>
                        </div>
                        <div class="mt-3" v-show="!hasPredicted">
                            <p>Text to check</p>
                            <b-field>
                                <b-input :disabled="isModelLoading || isModelPredicting"
                                         maxlength="1600" type="textarea" v-model="textToCheck"></b-input>
                            </b-field>
                            <b-button class="is-primary is-fullwidth" :disabled="isModelLoading || isModelPredicting"
                                      :class="`${isModelPredicting ? 'is-loading' : ''}`"
                                      @click="predict('This is a fake news')">Check
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
import ModelStatus from "@/components/ModelStatus";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import ModelResult from "@/components/ModelResult";
import PredictionError from "@/components/PredictionError";
import ModelMixins from "@/mixins/ModelMixins";
import {openNewTabPage} from "@/utils/extensionUtils";
import VueBreakpointMixin from 'vue-breakpoint-mixin';


export default {
    name: 'popupView',
    mixins: [ModelMixins, VueBreakpointMixin],
    components: {
        Banner,
        ModelStatus,
        ModelResult,
        PredictionError,
        Footer
    },
    data() {
        return {}
    },
    mounted() {},
    methods: {
        openTutorial() {
            openNewTabPage("tutorial.html");
        },
        hideResult() {
            this.hasPredicted = false;
        },
        hideError() {
            this.error = undefined;
            this.hasPredicted = false;
        }
    }
}
</script>

<style lang="scss" scoped>
#popupContainer {
    min-width: 350px;
}
.is-90vh {
    height: 90vh;
}

</style>
