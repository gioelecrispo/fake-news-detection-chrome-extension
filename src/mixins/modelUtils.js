export default {
    mounted() {},
    created () {
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
                this.hasPredicted = true;
            } else if (msg.id === "MODEL.result") {
                console.log("message", msg.message);
                this.result = msg.message;
                this.score = msg.message;
            }
        });
    },
    data() {
        return {
            isModelLoading: false,
            isModelPredicting: false,
            hasPredicted: false,
            textToCheck: undefined,
            result: 0,
            score: 0,
        }
    },
    methods: {
        predict() {
            chrome.runtime.sendMessage({id: "MODEL.requestPrediction", text: this.textToCheck});
        }
    }
}
