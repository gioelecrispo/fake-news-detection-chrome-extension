<template>
    <section>
        <div v-if="isLoading">
            <p class="subtitle">
                Model is loading...
            </p>
            <b-progress type="is-primary"></b-progress>
        </div>
        <div v-else-if="isPredicting">
            <p class="subtitle">
                Model is predicting...
            </p>
            <b-progress type="is-primary"></b-progress>
        </div>
    </section>
</template>

<script>

export default {
    name: 'ModelStatus',
    props: {},
    data() {
        return {
            isLoading: false,
            isPredicting: false,
            result: undefined,
        }
    },
    computed: {
    },
    async mounted() {
        let _this = this;
        /*chrome.storage.local.get(["MODEL.isLoading"]).then((result) => {
            console.log("Value currently is " + result.key);
            _this.isModelPredicting = result.key.split("MODEL.")[1];
        });
        chrome.storage.local.get(["MODEL.isPredicting"]).then((result) => {
            console.log("Value currently is " + result.key);
            _this.isModelPredicting = result.key.split("MODEL.")[1];
        });*/

        chrome.storage.onChanged.addListener((changes, namespace) => {
            for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
                console.log(
                    `Storage key "${key}" in namespace "${namespace}" changed.`,
                    `Old value was "${oldValue}", new value is "${newValue}".`
                );
                _this[key.split(".")[1]] = newValue;
                console.log(key.split("MODEL.")[1], _this[key.split("MODEL.")[1]]);
                console.log(_this)
            }
        });
    },
    methods: {
    }
}
</script>

<style lang="css" scoped>

</style>
