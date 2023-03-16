<template>
    <!--<shadow-root>-->
        <div id="chrome-extension-content-app" class="bubble">
            <div v-if="isModelLoading">
                <p class="subtitle">
                    Model is loading...
                </p>
                <b-progress type="is-primary"></b-progress>
            </div>
            <div class="card p-2" v-else-if="isModelPredicting">
                <p class="subtitle">
                    Model is predicting...
                </p>
                <b-progress type="is-primary"></b-progress>
            </div>

            <div ref="resultContainer" v-show="hasPredicted">
                <ModelResult :result="result" :score="score"></ModelResult>
            </div>
            <div ref="buttonRequest" v-show="!isModelLoading && !isModelPredicting && !hasPredicted">
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
import modelUtils from "@/mixins/modelUtils";
import ModelResult from "@/components/ModelResult";

export default {
    name: 'contentView',
    mixins: [modelUtils],
    components: {
        ModelResult
    },
    data() {
        return {}
    },
    async mounted() {
        chrome.runtime.onMessage.addListener((msg, sender, callback) => {
            console.log('Received msg:', msg, 'sender', sender, 'callback', callback);
            if (msg.id === "CONTEXT_MENU_CLICK") {
                console.log("CONTEXT_MENU", msg, sender);
                console.log(document.body.innerText);
            }
        });



        const _this = this;
        const resultContainer = this.$refs.resultContainer;
        const buttonRequest = this.$refs.buttonRequest;
        const clickOutside = function (e) {
            const selection = window.getSelection().toString();
            if (!resultContainer.contains(e.target) && _this.hasPredicted) {
                _this.hasPredicted = false;
                _this.$el.style.visibility = 'hidden';
                document.addEventListener('mouseup', setVisible, true);
                document.addEventListener('mousedown', setHidden, true);
            } else if (selection.length > 0) {
                document.removeEventListener('mouseup', setVisible, true);
                document.removeEventListener('mousedown', setHidden, true);
                document.addEventListener('mouseup', clickOutside);
                _this.textToCheck = selection;
                _this.renderBubble(e.pageX, e.pageY - 40);
            }
        }
        // eslint-disable-next-line no-unused-vars
        const setHidden = function (e) {
            if (!buttonRequest.contains(e.target)) {
                _this.$el.style.visibility = 'hidden';
            }
        };
        const setVisible = function (e) {
            const selection = window.getSelection().toString();
            if (selection.length > 0) {
                document.removeEventListener('mouseup', setVisible, true);
                document.removeEventListener('mousedown', setHidden, true);
                document.addEventListener('mouseup', clickOutside);
                _this.textToCheck = selection;
                _this.renderBubble(e.pageX, e.pageY - 40);
            }
        }
        document.addEventListener('mouseup', setVisible, true);
        document.addEventListener('mousedown', setHidden, true);
    },
    created() {
        chrome.runtime.sendMessage({id: "PING"});
    },
    methods: {
        renderBubble(mouseX, mouseY) {
            this.$el.style.top = mouseY + 'px';
            this.$el.style.left = mouseX + 'px';
            this.$el.style.visibility = 'visible';
        },
    }
}

</script>

<style lang="scss" scoped>
.bubble {
    z-index: 9999;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
