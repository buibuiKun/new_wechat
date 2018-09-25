<template>
    <div class="pdf-view">
        <web-view src="https://h5.suyuan360.com/spsy/suy/temp/YUANfcl38.pdf"></web-view>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    mounted() {
        let url = this.$root.$mp.query.pdfSrc;
        this.url = url;
        console.log(url,'urlurlurlurlurlurlurlurlurlurl')
    }
}
</script>

