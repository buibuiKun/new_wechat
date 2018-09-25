<template>
    <div class="">
        <detail @share="onShareAppMessage"></detail>
    </div> 
</template>
<script>
import detail from '@/components/detail'
export default {
    onShareAppMessage (aa) {
        console.log(aa,'199')
        return {
            title: '小乐乐的一天',
            path: '/pages/seeDetail'
        }
    },
    components:{
        detail
    }
}
</script>

<style>

</style>
