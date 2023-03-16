<template>
    <footer class="footer py-3 px-5">
        <div class="content mb-0">
            <p>
                <a class="feedback-description"
                   target="_blank"
                   href="https://gioelecrispo.github.io/fake-news-detection-chrome-extension/feedback">
                    Do you want to help us improve?
                    <i class="ml-1 fa-sharp fa-solid fa-message"></i>
                </a>
            </p>
        </div>
        <div class="content has-text-centered is-hidden-touch my-4">
            <hr class="rounded mb-4">
            <p>
                <strong>Fake News Detector (Playground)</strong> and <strong>Fake News Detector (Chrome Extension)</strong>
                by <a href="https://gioelecrispo.github.io">Gioele Crispo</a> and
                <a href="https://stefaniavallone.github.io">Stefania Avallone</a>.
            </p>
            <p>
                The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                <br>
                Icons and resources from FlatIcon.com and Freepik.com.
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
    props: {},
    data() {
        return {
        }
    },
    computed: {

    },
    created() {
    },
    methods: {

    }
}
</script>

<style lang="css" scoped>
.feedback-description {
    font-size: 0.8em;
    line-height: 1.2;
}
hr.rounded {
    margin: 0;
    border-top: 1px solid #bbb;
    border-radius: 2px;
}
</style>
