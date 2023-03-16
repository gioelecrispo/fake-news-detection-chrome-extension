<template>
    <div id="popupContainer">
        <Banner></Banner>
        <section class="hero" :class="isDesktop ? 'is-90vh': ''">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-half-widescreen is-offset-one-quarter-widescreen">
                        <ModelStatus></ModelStatus>
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
                        <p>Text to check</p>
                        <b-field>
                            <b-input :disabled="isModelPredicting"
                                     maxlength="1600" type="textarea" v-model="textToCheck"></b-input>
                        </b-field>
                        <div ref="resultContainer" v-show="hasPredicted">
                            <ModelResult :result="result"></ModelResult>
                        </div>
                        <b-button class="is-primary is-fullwidth" :disabled="isModelPredicting"
                                  :class="`${isModelPredicting ? 'is-loading' : ''}`"
                                  @click="predict('This is a fake news')">Check
                        </b-button>

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
//import ModelContainer from "@/components/ModelContainer";
import ModelResult from "@/components/ModelResult";
import modelUtils from "@/mixins/modelUtils";
import {openNewTabPage} from "@/utils/utils";
import VueBreakpointMixin from 'vue-breakpoint-mixin';


export default {
    name: 'popupView',
    mixins: [modelUtils, VueBreakpointMixin],
    components: {
        Banner,
        ModelStatus,
        ModelResult,
        //ModelContainer
        //Playground,
        Footer
    },
    data() {
        return {}
    },
    created() {
        chrome.runtime.sendMessage({id: "PING"});
    },
    methods: {
        openTutorial() {
            openNewTabPage("tutorial.html");
        }
    }
}
</script>

<style lang="scss" scoped>
/*#popupContainer {
    width: 400px;
}*/
.is-90vh {
    height: 90vh;
}

</style>
