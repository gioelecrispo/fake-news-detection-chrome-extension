<template>
    <div>
        <section class="hero is-fullheight is-white">
            <!-- HERO HEAD -->
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <b-image src="logo.png"></b-image>
                                <b-image class="ml-3" src="/images/logo/logo-name-beta.png"></b-image>
                            </a>
                            <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                                <span><b></b></span>
                                <span><b></b></span>
                                <span><b></b></span>
                            </div>
                        </div>
                        <div class="navbar-menu" :class="{ 'is-active': showNav }">
                            <div class="navbar-end">
                                <b-dropdown aria-role="list">
                                    <template #trigger="{  }">
                                        <a class="navbar-item">
                                            Authors
                                        </a>
                                    </template>
                                    <b-dropdown-item aria-role="listitem">
                                        <a href="https://gioelecrispo.github.io/">
                                            <strong>Gioele Crispo </strong> - Machine Learning Engineer</a>
                                    </b-dropdown-item>
                                    <b-dropdown-item aria-role="listitem">
                                        <a href="https://stefaniavallone.github.io/">
                                            <strong>Stefania Avallone </strong> - DevOps Engineer</a>
                                    </b-dropdown-item>
                                </b-dropdown>
                                <a class="navbar-item" href="https://gioelecrispo.github.io/projects">
                                    Other Projects
                                </a>
                                <span class="navbar-item">
                                    <a class="button is-primary is-inverted"
                                     href="https://github.com/gioelecrispo/fake-news-detection-chrome-extension">
                                         <span class="icon">
                                            <i class="fab fa-github"></i>
                                         </span>
                                         <span>Github</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- HERO BODY -->
            <div class="hero-body">
                <b-carousel :autoplay="false" :repeat="false" class="has-text-centered container content">
                    <b-carousel-item class="mb-6">
                        <div>
                            <h1 class="title">Check selected text</h1>
                            <p class="mb-0">Check if the selected text you are reading is fake news or fact.</p>
                            <p class="mb-3">The popup gives you other useful information, such as the objectivity of the
                                text.</p>
                            <img class="is-inline-block content-container" alt="tutorial1"
                                 src="/images/tutorial/tutorial1.png"/>
                        </div>
                    </b-carousel-item>
                    <b-carousel-item class="mb-6">
                        <div>
                            <h1 class="title has-text-success">Stay alerted, always.</h1>
                            <p class="mb-0">You are alerted to on every page you visit. </p>
                            <p class="mb-3">Automatically, the extension detects if the page you are reading is a news story and if it looks like fake news.</p>
                            <img class="is-inline-block content-container" alt="tutorial2"
                                 src="/images/tutorial/tutorial2.png"/>
                        </div>
                    </b-carousel-item>
                    <b-carousel-item class="mb-6">
                        <div>
                            <h1 class="title has-text-danger">Be aware!</h1>
                            <p class="mb-0">Neural networks are not infallible, and identifying fake news is a very
                                difficult task.</p>
                            <p class="mb-3">Make sure you always double-check the information you're reading!</p>
                            <img class="is-inline-block content-container" alt="tutorial3"
                                 src="/images/tutorial/tutorial3.png"/>
                        </div>
                    </b-carousel-item>
                    <b-carousel-item class="mb-6">
                        <div>
                            <h1 class="title has-text-warning-dark">Only in English, for the moment.</h1>
                            <p class="mb-0">English is the most widespread language on the web.</p>
                            <p class="mb-3">We work hard to support more languages and make this tool more effective for
                                everyone.</p>
                            <img class="is-inline-block content-container" alt="tutorial4"
                                 src="/images/tutorial/tutorial4.png"/>
                        </div>
                    </b-carousel-item>
                    <b-carousel-item class="mb-6">
                        <div class="has-text-centered container content">
                            <h1 class="title has-text-warning-dark">This is a Beta release.</h1>
                            <p class="mb-0">There are some adjustments to be made to the graphics and the neural network.</p>
                            <p class="mb-3">We are working hard to improve the product. Leave a comment <a
                                href="https://gioelecrispo.github.io/fake-news-detection-chrome-extension/feedback">here</a> to contribute and help us. Thank you!</p>
                            <img class="is-inline-block content-container" alt="tutorial5"
                                 src="/images/tutorial/tutorial5.png"/>
                        </div>
                    </b-carousel-item>
                    <b-carousel-item>
                        <div class="has-text-centered container content">
                            <h1 class="title has-text-primary">Are you ready?</h1>
                            <p class="mb-0">You can also use Fake News Detector from the dedicated page!</p>
                            <p class="mb-6">Copy and paste the text you want to check and browse the web more
                                securely!</p>
                            <div class="content-container">
                                <b-button style="height: 80px; width: 150px;" class="mt-6 is-primary"
                                          @click="openPopup">
                                    <strong>Try it!</strong>
                                </b-button>
                            </div>
                        </div>
                    </b-carousel-item>
                </b-carousel>
            </div>


            <div class="hero-foot pb-3">
                <div class="has-text-centered container content">
                    <a class="" @click="openAttributionDisclaimer = true">
                        Terms and policy <i class="ml-3 fa-sharp fa-solid fa-circle-info"></i>
                    </a>
                </div>
            </div>

            <b-modal v-model="openAttributionDisclaimer">
                <div class="card" style="width: auto">
                    <div class="p-3 card-header">
                        <p class="card-header-title">
                            Terms and Policy
                        </p>
                        <button class="card-header-icon" aria-label="more options"
                                @click="openAttributionDisclaimer = false">
                            <span class="icon">
                                <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <p class="mb-2">
                                To create this chrome extension, the following images and assets were used:
                            </p>
                            <p class="ml-3 mb-1">
                                - <a
                                href="https://it.freepik.com/vettori-gratuito/persone-minuscole-che-esaminano-l-avviso-di-errore-del-sistema-operativo-sulla-pagina-web-isolata-illustrazione-piatta_11235921.htm#query=aware&position=0&from_view=search&track=popular">
                                Aware - a pch.vector image</a> from Freepik.
                            </p>
                            <p class="ml-3 mb-1">
                                - <a
                                href="https://it.freepik.com/vettori-gratuito/minuscole-persone-in-piedi-vicino-a-gesto-proibito-isolato-illustrazione-piatta_11235950.htm#query=be%20aware&position=3&from_view=search&track=ais">
                                Alert - a pch.vector image</a> from Freepik.
                            </p>
                            <p class="ml-3 mb-1">
                                - <a
                                href="https://it.freepik.com/vettori-gratuito/modello-di-logo-della-scuola-inglese-disegnato-a-mano_28927036.htm#query=english&position=0&from_view=search&track=sph">
                                English - a Freepik image</a> from Freepik.
                            </p>
                        </div>
                    </div>
                </div>
            </b-modal>
        </section>
    </div>
</template>


<script>
export default {
    name: 'tutorialView',
    components: {},
    data() {
        return {
            openAttributionDisclaimer: false
        }
    },
    methods: {
        openPopup() {
            chrome.tabs.create({url: "popup.html"});
        }
    }
}

</script>

<style lang="scss" scoped>
.content-container {
    height: 270px;
}
</style>
