<template>
    <section class="hero is-small is-white">
        <!-- HERO HEAD -->
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <div class="navbar-item">
                            <b-image src="logo.png"></b-image>
                            <b-image class="ml-3" src="/images/logo/logo-name-beta.png"></b-image>
                            <!--<p class="ml-3 subtitle"><strong>Fake News Detector</strong></p>-->
                        </div>
                    </div>
                    <div class="navbar-end is-hidden-touch">
                        <div class="navbar-item">
                            <div class="buttons">
                                <b-button class="is-primary is-inverted"
                                          @click="openFullPage('tutorial.html')"><strong>Tutorial</strong>
                                    <i class="ml-3 fa-sharp fa-solid fa-circle-info"></i>
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <hr class="rounded mx-2">
        <div class="hero-body px-2 py-1 is-hidden-desktop">
            <b-button class="is-primary is-inverted is-small" style="width: 50%;"
                      @click="openFullPage('popup.html')"><strong>Expand</strong>
                <i class="ml-3 fa-solid fa-arrow-up-right-from-square"></i>
            </b-button>

            <b-button class="is-primary is-inverted is-small" style="width: 50%;"
                      @click="openFullPage('tutorial.html')"><strong>Tutorial</strong>
                <i class="ml-3 fa-sharp fa-solid fa-circle-info"></i>
            </b-button>
        </div>
    </section>

</template>

<script>
import {openNewTabPage} from "@/utils/extensionUtils";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Banner',
    props: {},
    data() {
        return {}
    },
    computed: {},
    created() {
    },
    methods: {
        openFullPage(page) {
            openNewTabPage(page);
        },

    }
}
</script>

<style lang="css" scoped>
hr.rounded {
    margin: 0;
    border-top: 1px solid #bbb;
    border-radius: 2px;
}
</style>
