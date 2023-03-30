import {franc} from 'franc';

export default {
    mounted() {},
    created () {},
    data() {
        return {
            isModelLoading: false,
            isModelPredicting: false,
            hasPredicted: false,
            textToCheck: undefined,
            label: undefined,
            score: undefined,
            error: undefined
        }
    },
    methods: {
        predict(isBackground=false) {
            this.error = undefined;
            this.label = undefined;
            this.score = undefined;
            if (this.textToCheck.length < 200) {
                if (!isBackground) {
                    this.error = {
                        type: "warning",
                        message: "The text to be checked is too short. Please enlarge the text to get a more reliable prediction."
                    };
                    this.hasPredicted = true;
                }
            } else {
                const lang = franc(this.textToCheck);
                //console.log("LANGUAGE", lang)
                if (lang !== 'eng') {
                    if (!isBackground) {
                        this.error = {
                            type: "warning",
                            message: "The text is not in English. The Chrome extension Fake News Detection only supports English for the moment."
                        }
                        this.hasPredicted = true;
                    }
                } else {
                    let _this = this;
                    let port = chrome.runtime.connect({name: "MODEL.connection"});
                    port.postMessage({id: "MODEL.requestPrediction", text: this.textToCheck});
                    port.onMessage.addListener(function(msg) {
                        if (msg.id === "MODEL.isLoading") {
                            _this.isModelLoading = true;
                        } else if (msg.id === "MODEL.isLoaded") {
                            _this.isModelLoading = false;
                        } else if (msg.id === "MODEL.isPredicting") {
                            _this.hasPredicted = false;
                            _this.isModelPredicting = true;
                        } else if (msg.id === "MODEL.hasPredicted") {
                            setTimeout(() => {
                                _this.isModelPredicting = false;
                                _this.hasPredicted = true;
                            }, 100);
                        } else if (msg.id === "MODEL.result") {
                            _this.label = msg.payload.label;
                            _this.score = msg.payload.score;
                            port.disconnect();
                        }
                    });
                }
            }
        }
    }
}
