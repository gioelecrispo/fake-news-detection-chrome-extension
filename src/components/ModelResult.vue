<template>
    <div class="card" :class="`has-background-${color}-light`"
        :style="`border-left: 5px solid ${color};`">
        <header class="card-header">
            <p class="card-header-title">
                {{ message }}
            </p>
            <button class="card-header-icon" aria-label="close">
                <span class="icon">
                    <i class="fa-solid fa-circle-xmark"></i>
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                {{ description }}
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                <b-progress class="mt-2"
                            v-if="score !== undefined" show-value format="percent"
                            size="is-small"
                            :type="`is-${color}`" :value="80">
                </b-progress>
            </div>
        </div>
        <!--<footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </footer>-->
    </div>
    <!--<div class="result-container">
        <b-message class="mt-4" :class="`is-${color}`">
            <section class="hero is-small">
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <div class="navbar-item">
                                    <p class="ml-3"><strong> {{ message }}</strong></p>
                                </div>
                            </div>
                            <div class="navbar-menu">
                                <div class="navbar-end">
                                 <span class="navbar-item">
                                     <a>
                                        <i class="ml-3 fa-sharp fa-solid fa-circle-info"></i>
                                     </a>
                                 </span>
                                </div>
                            </div>
                        </div>
                        <i class="ml-3 fa-sharp fa-solid fa-circle-info"></i>
                    </nav>
                </div>
                <i class="ml-3 fa-sharp fa-solid fa-circle-info"></i>

            </section>
            <i class="ml-3 fa-sharp fa-solid fa-circle-info"></i>
            <b-progress class="mt-2"
                v-if="score !== undefined" show-value format="percent"
                        size="is-small"
                        :type="`is-${color}`" :value="80">
            </b-progress>
        </b-message>
    </div>-->
</template>

<script>

export default {
    name: 'ModelResult',
    props: {
        result: {
            type: Number,
            required: true,
            default: undefined
        },
        score: {
            type: Number,
            required: false,
            default: undefined
        }
    },
    data() {
        return {}
    },
    computed: {
        message() {
            return this.result === 1 ? "This news is a fact" : "This news is fake";
        },
        color() {
            return this.result === 1 ? "success" : "danger";
        }
    },
    async created() {

    },
    methods: {}
}
</script>

<style lang="scss" scoped>


.result-container {
    width: 400px;
}

hr.separator {
    margin: 0;
    border-top: 1px solid #bbb;
}

section.message-body {
    padding: 16px 12px;
}
</style>
