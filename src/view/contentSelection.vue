<template>
    <!--<shadow-root>-->
    <div id="chrome-extension-content-app" class="bubble" ref="chromeExtensionSelectionContainer">
        <ModelStatus v-if="isModelLoading || isModelPredicting"
                     :isModelLoading="isModelLoading" :isModelPredicting="isModelPredicting"></ModelStatus>
        <PredictionError v-if="error !== undefined" :error="error" :closeCallback="hideError"></PredictionError>
        <ModelResult :label="label" :score="score"
                     v-if="error === undefined && label !== undefined && hasPredicted"></ModelResult>
        <div ref="buttonRequest" v-if="!isModelLoading && !isModelPredicting && !hasPredicted">
            <b-tooltip type="is-dark" label="Check if this news is fake">
                <div class="card p-2" @click="predict">
                    <b-image :src="require('@/assets/icons/logo-16x16.png')"></b-image>
                </div>
            </b-tooltip>
        </div>
    </div>
    <!--</shadow-root>-->
</template>

<script>
/* eslint-disable */
import ModelMixins from "@/mixins/ModelMixins";
import ModelStatus from "@/components/ModelStatus";
import ModelResult from "@/components/ModelResult";
import PredictionError from "@/components/PredictionError";

export default {
    name: 'contentView',
    mixins: [ModelMixins],
    components: {
        ModelStatus,
        ModelResult,
        PredictionError
    },
    data() {
        return {}
    },
    async mounted() {
        const _this = this;
        const chromeExtensionSelectionContainer = this.$refs.chromeExtensionSelectionContainer;
        const buttonRequest = this.$refs.buttonRequest;
        /*const clickOutside = function (e) {
            const selection = window.getSelection().toString();
            if (!chromeExtensionSelectionContainer.contains(e.target) && _this.hasPredicted) {
                _this.hasPredicted = false;
                _this.$el.style.visibility = 'hidden';
                document.addEventListener('mouseup', setVisible, true);
                document.addEventListener('mousedown', setHidden, true);
            } /*else if (selection.length > 0) {
                document.removeEventListener('mouseup', setVisible, true);
                document.removeEventListener('mousedown', setHidden, true);
                document.addEventListener('mouseup', clickOutside);
                _this.textToCheck = selection;
                _this.renderBubble(e.pageX, e.pageY - 40);
            }*/
        //}
        // eslint-disable-next-line no-unused-vars
        const setHidden = function (e) {
            if (!buttonRequest.contains(e.target) && !chromeExtensionSelectionContainer.contains(e.target)) {
                _this.$el.style.visibility = 'hidden';
                _this.hasPredicted = false;
                _this.error = undefined;
            }
        };
        const setVisible = function (e) {
            const selection = window.getSelection().toString();
            if (selection.length > 200) {
                _this.hasPredicted = false;
                _this.hasPredicted = undefined;
                //document.removeEventListener('mouseup', setVisible, true);
                //document.removeEventListener('mousedown', setHidden, true);
                //document.addEventListener('mouseup', clickOutside);
                _this.textToCheck = selection;
                _this.renderBubble(e.pageX, e.pageY - 40);
            } else {
                //console.log("MOUSE_UP - selection = 0", e)
            }
        }
        document.addEventListener('mouseup', setVisible, true);
        document.addEventListener('mousedown', setHidden, true);
    },
    methods: {
        renderBubble(mouseX, mouseY) {
            this.$el.style.top = mouseY + 'px';
            this.$el.style.left = mouseX + 'px';
            this.$el.style.visibility = 'visible';
        },
        hideError() {
            this.error = undefined;
        }
    }
}

</script>

<style lang="scss" scoped>
.bubble {
    z-index: 99999;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 350px !important;
    max-width: 500px !important;
}

</style>
