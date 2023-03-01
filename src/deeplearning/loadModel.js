const ort = require("onnxruntime-web");

ort.env.wasm.numThreads = 1;

async function loadModel(byteArray) {
    const session = await ort.InferenceSession.create(byteArray,
        { executionProviders: ['wasm'] });
    return session;
}

exports.loadModel = loadModel;
