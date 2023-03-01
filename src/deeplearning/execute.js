const BertTokenizer = require("./tokenizer");
const ort = require('onnxruntime-web');

const Tensor = ort.Tensor;


function indexOfMax(arr) {
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


function toBigInt64Array(array) {
    for (let i in array) {
        array[i] = BigInt(array[i]);
    }
    return new BigInt64Array(array);
}


async function execute(session, text) {
    const tokenizer = await BertTokenizer.loadTokenizer();
    const data = tokenizer.encodeText(text);
    data.inputIds = data.inputIds.slice(0, 512)
    data.inputMask = data.inputMask.slice(0, 512)
    data.segmentIds = data.segmentIds.slice(0, 512)
    const numTokens = data.inputIds.length;
    // eslint-disable-next-line no-undef
    const inputIds = new Tensor('int64', new BigInt64Array(toBigInt64Array(data.inputIds)), dims=[1, numTokens]);
    // eslint-disable-next-line no-undef
    const attentionMask = new Tensor('int64', new BigInt64Array(toBigInt64Array(data.inputMask)),dims=[1, numTokens]);
    // eslint-disable-next-line no-undef
    const tokenTypeIds = new Tensor('int64', new BigInt64Array(toBigInt64Array(data.segmentIds)),dims=[1, numTokens]);

    const feeds = {
        'input_ids': inputIds,
        'attention_mask': attentionMask,
        'token_type_ids': tokenTypeIds,
    };

    console.log(feeds);

    const result = await session.run(feeds, ["logits"]);
    return indexOfMax(result.logits.data);
}


exports.execute = execute;
