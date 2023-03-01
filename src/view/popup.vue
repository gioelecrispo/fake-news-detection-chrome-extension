<template>
    <div>

        <!--<Playground></Playground>-->
        <ModelContainer></ModelContainer>
        <div>{{pageText}}</div>
    </div>
</template>

<script>
//import Playground from "@/components/Playground";
import ModelContainer from "@/components/ModelContainer";

export default {
    name: 'popupView',
    components: {
        ModelContainer
        //Playground
    },
    data() {
        return {
            pageText: 'popup'
        }
    },
    created() {

    },
    methods: {

    }
}

</script>

<style>
</style>
