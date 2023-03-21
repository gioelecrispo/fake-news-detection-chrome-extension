<template>
    <div class="mt-6 p-3 options">
        <b-switch
                  v-model="isAutomaticPageDetectionEnabled"
        :input="changeValue('OPTIONS.isAutomaticPageDetectionEnabled', isAutomaticPageDetectionEnabled)">
            <strong>Enable automatic page detection</strong></b-switch>
    </div>
</template>

<script>
export default {
    name: 'optionsView',
    data() {
        return {
            isAutomaticPageDetectionEnabled: true
        }
    },
    computed: {

    },
    async created() {
        let key = 'OPTIONS.isAutomaticPageDetectionEnabled'
        const data = await chrome.storage.sync.get(key);
        if (data === undefined) {
            await this.changeValue(key, true);
        } else {
            this.isAutomaticPageDetectionEnabled = data[key];
        }
    },
    methods: {
        async changeValue(key, value) {
            let obj = {};
            obj[key] = value;

            await chrome.storage.sync.set(obj);
        }
    }

}

</script>

<style lang="scss" scoped>
.options {
}
</style>
