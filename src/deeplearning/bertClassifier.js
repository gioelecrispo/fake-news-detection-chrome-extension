/* eslint-disable */
//const {loadTokenizer} = require("./tokenizer");
//const ort = require('onnxruntime-web');
import * as tf from "@tensorflow/tfjs";
import {loadTokenizer} from "./tokenizer.js";
import * as ort from 'onnxruntime-web';
const Tensor = ort.Tensor;


ort.env.wasm.numThreads = 1;


export default class BertClassifier {
    constructor(modelUrl,
                vocabUrl,
                maxSeqLength = 512,
                onCreate = () => {}) {
        this.modelSession = null;
        this.tokenizer = null;
        this.modelUrl = modelUrl;
        this.vocabUrl = vocabUrl;
        this.maxSeqLength = maxSeqLength;
        this.onLoad = null;
        onCreate();
    }

    async loadModel(onLoad = () => {}) {
        if (onLoad !== this.onLoad) { this.onLoad = onLoad; }
        this.tokenizer = await loadTokenizer(this.vocabUrl);
        const response = await fetch(this.modelUrl, {headers: {'Content-Type': 'application/octet-stream'}});
        const byteArray = await response.arrayBuffer();
        this.modelSession = await ort.InferenceSession.create(byteArray,
            { executionProviders: ['wasm'] });
        this.onLoad();
    }

    async predict(text, onStartPrediction = (text) => {}, onCompletePrediction = (label, score) => {}) {
        if (this.modelSession == null) {
            await this.loadModel(this.onLoad);
        }

        onStartPrediction(text);
        const data = this.tokenizer.encodeText(text);
        data.inputIds = data.inputIds.slice(0, this.maxSeqLength);
        data.inputMask = data.inputMask.slice(0, this.maxSeqLength);
        data.segmentIds = data.segmentIds.slice(0, this.maxSeqLength);
        const numTokens = data.inputIds.length;
        const inputIds = new Tensor('int64', new BigInt64Array(this.toBigInt64Array(data.inputIds)), [1, numTokens]);
        const attentionMask = new Tensor('int64', new BigInt64Array(this.toBigInt64Array(data.inputMask)), [1, numTokens]);
        const tokenTypeIds = new Tensor('int64', new BigInt64Array(this.toBigInt64Array(data.segmentIds)), [1, numTokens]);

        const feeds = {
            'input_ids': inputIds,
            'attention_mask': attentionMask,
            'token_type_ids': tokenTypeIds,
        };

        const result = await this.modelSession.run(feeds, ["logits"]);
        const label = this.indexOfMax(result.logits.data);
        const score = tf.softmax(tf.tensor(Array.from(result.logits.data))).arraySync()[label];
        const prediction = {
            label: label,
            score: score,
        };
        console.log("prediction", prediction);
        onCompletePrediction(prediction);
        return prediction;
    }

    indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
        let max = arr[0];
        let maxIndex = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return maxIndex;
    }

    toBigInt64Array(array) {
        for (let i in array) {
            array[i] = BigInt(array[i]);
        }
        return new BigInt64Array(array);
    }
}



