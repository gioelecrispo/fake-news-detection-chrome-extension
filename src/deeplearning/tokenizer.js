"use strict";
let __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let __generator = (this && this.__generator) || function (thisArg, body) {
    let _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTokenizer = exports.BertTokenizer = exports.NFKC_TOKEN = exports.SEP_TOKEN = exports.SEP_INDEX = exports.CLS_TOKEN = exports.CLS_INDEX = exports.UNK_INDEX = void 0;
let tf = require("@tensorflow/tfjs");
/**
 * Source: https://github.com/tensorflow/tfjs-models/blob/master/qna/src/bert_tokenizer.ts
 */
let SEPERATOR = "\u2581";
exports.UNK_INDEX = 100;
exports.CLS_INDEX = 101;
exports.CLS_TOKEN = "[CLS]";
exports.SEP_INDEX = 102;
exports.SEP_TOKEN = "[SEP]";
exports.NFKC_TOKEN = "NFKC";
let vocabBase = 'https://tfhub.dev/tensorflow/tfjs-model/mobilebert/1/';
let vocabUrl = vocabBase + 'processed_vocab.json?tfjs-format=file';
let TrieNode = /** @class */ (function () {
    function TrieNode(key) {
        this.key = key;
        this.children = {};
        this.end = false;
    }
    TrieNode.prototype.getWord = function () {
        let output = [];
        let node = this;
        while (node != null) {
            if (node.key != null) {
                output.unshift(node.key);
            }
            node = node.parent;
        }
        return [output, this.score, this.index];
    };
    return TrieNode;
}());
let Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode(null);
    }
    Trie.prototype.insert = function (word, score, index) {
        let node = this.root;
        let symbols = [];
        for (let _i = 0, word_1 = word; _i < word_1.length; _i++) {
            let symbol = word_1[_i];
            symbols.push(symbol);
        }
        for (let i = 0; i < symbols.length; i++) {
            if (node.children[symbols[i]] == null) {
                node.children[symbols[i]] = new TrieNode(symbols[i]);
                node.children[symbols[i]].parent = node;
            }
            node = node.children[symbols[i]];
            if (i === symbols.length - 1) {
                node.end = true;
                node.score = score;
                node.index = index;
            }
        }
    };
    Trie.prototype.find = function (token) {
        let node = this.root;
        let iter = 0;
        while (iter < token.length && node != null) {
            node = node.children[token[iter]];
            iter++;
        }
        return node;
    };
    return Trie;
}());
function isWhitespace(ch) {
    return /\s/.test(ch);
}
function isInvalid(ch) {
    return ch.charCodeAt(0) === 0 || ch.charCodeAt(0) === 0xfffd;
}
let punctuations = "[~`!@#$%^&*(){}[];:\"'<,.>?/\\|-_+=";
function isPunctuation(ch) {
    return punctuations.indexOf(ch) !== -1;
}
let BertTokenizer = /** @class */ (function () {
    function BertTokenizer() {
    }
    BertTokenizer.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            let _a, vocabIndex, word;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadVocab()];
                    case 1:
                        _a.vocab = _b.sent();
                        this.trie = new Trie();
                        for (vocabIndex = 999; vocabIndex < this.vocab.length; vocabIndex++) {
                            word = this.vocab[vocabIndex];
                            this.trie.insert(word, 1, vocabIndex);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BertTokenizer.prototype.encodeText = function (inputText, inputSize) {
        inputText = inputText.toString();
        inputText = inputText.replace(/\?/g, "");
        inputText = inputText.trim();
        let queryTokens = this.tokenize(inputText);
        let tokens = [];
        let segmentIds = [];
        tokens.push(exports.CLS_INDEX);
        segmentIds.push(0);
        for (let i = 0; i < queryTokens.length; i++) {
            let queryToken = queryTokens[i];
            tokens.push(queryToken);
            segmentIds.push(0);
        }
        tokens.push(exports.SEP_INDEX);
        segmentIds.push(0);
        let inputIds = tokens;
        let inputMask = inputIds.map(function () { return 1; });
        while (inputIds.length < inputSize) {
            inputIds.push(0);
            inputMask.push(0);
            segmentIds.push(0);
        }
        return { inputIds: inputIds, inputMask: inputMask, segmentIds: segmentIds };
    };
    BertTokenizer.prototype.loadVocab = function () {
        return __awaiter(this, void 0, Promise, function () {
            // eslint-disable-next-line no-unused-vars
            return __generator(this, function (_a) {
                return [2 /*return*/, tf.util.fetch(vocabUrl).then(function (d) { return d.json(); })];
            });
        });
    };
    BertTokenizer.prototype.processInput = function (text) {
        let _this = this;
        let charOriginalIndex = [];
        let cleanedText = this.cleanText(text, charOriginalIndex);
        let origTokens = cleanedText.split(" ");
        let charCount = 0;
        let tokens = origTokens.map(function (token) {
            token = token.toLowerCase();
            let tokens = _this.runSplitOnPunc(token, charCount, charOriginalIndex);
            charCount += token.length + 1;
            return tokens;
        });
        var flattenTokens = [];
        for (var index = 0; index < tokens.length; index++) {
            flattenTokens = flattenTokens.concat(tokens[index]);
        }
        return flattenTokens;
    };
    BertTokenizer.prototype.cleanText = function (text, charOriginalIndex) {
        let stringBuilder = [];
        let originalCharIndex = 0, newCharIndex = 0;
        for (let _i = 0, text_1 = text; _i < text_1.length; _i++) {
            let ch = text_1[_i];
            if (isInvalid(ch)) {
                originalCharIndex += ch.length;
                continue;
            }
            if (isWhitespace(ch)) {
                if (stringBuilder.length > 0 &&
                    stringBuilder[stringBuilder.length - 1] !== " ") {
                    stringBuilder.push(" ");
                    charOriginalIndex[newCharIndex] = originalCharIndex;
                    originalCharIndex += ch.length;
                }
                else {
                    originalCharIndex += ch.length;
                    continue;
                }
            }
            else {
                stringBuilder.push(ch);
                charOriginalIndex[newCharIndex] = originalCharIndex;
                originalCharIndex += ch.length;
            }
            newCharIndex++;
        }
        return stringBuilder.join("");
    };
    BertTokenizer.prototype.runSplitOnPunc = function (text, count, charOriginalIndex) {
        let tokens = [];
        let startNewWord = true;
        for (let _i = 0, text_2 = text; _i < text_2.length; _i++) {
            let ch = text_2[_i];
            if (isPunctuation(ch)) {
                tokens.push({ text: ch, index: charOriginalIndex[count] });
                count += ch.length;
                startNewWord = true;
            }
            else {
                if (startNewWord) {
                    tokens.push({ text: "", index: charOriginalIndex[count] });
                    startNewWord = false;
                }
                tokens[tokens.length - 1].text += ch;
                count += ch.length;
            }
        }
        return tokens;
    };
    BertTokenizer.prototype.tokenize = function (text) {
        // Source:
        // https://github.com/google-research/bert/blob/88a817c37f788702a363ff935fd173b6dc6ac0d6/tokenization.py#L311
        let outputTokens = [];
        let words = this.processInput(text);
        words.forEach(function (word) {
            if (word.text !== exports.CLS_TOKEN && word.text !== exports.SEP_TOKEN) {
                word.text = "".concat(SEPERATOR).concat(word.text.normalize(exports.NFKC_TOKEN));
            }
        });
        for (let i = 0; i < words.length; i++) {
            let chars = [];
            for (let _i = 0, _a = words[i].text; _i < _a.length; _i++) {
                let symbol = _a[_i];
                chars.push(symbol);
            }
            let isUnknown = false;
            let start = 0;
            let subTokens = [];
            let charsLength = chars.length;
            while (start < charsLength) {
                let end = charsLength;
                let currIndex = void 0;
                while (start < end) {
                    let substr = chars.slice(start, end).join("");
                    let match = this.trie.find(substr);
                    if (match != null && match.end != null) {
                        currIndex = match.getWord()[2];
                        break;
                    }
                    end = end - 1;
                }
                if (currIndex == null) {
                    isUnknown = true;
                    break;
                }
                subTokens.push(currIndex);
                start = end;
            }
            if (isUnknown) {
                outputTokens.push(exports.UNK_INDEX);
            }
            else {
                outputTokens = outputTokens.concat(subTokens);
            }
        }
        return outputTokens;
    };
    return BertTokenizer;
}());
exports.BertTokenizer = BertTokenizer;
function loadTokenizer() {
    return __awaiter(this, void 0, Promise, function () {
        let tokenizer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenizer = new BertTokenizer();
                    return [4 /*yield*/, tokenizer.load()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, tokenizer];
            }
        });
    });
}
exports.loadTokenizer = loadTokenizer;
