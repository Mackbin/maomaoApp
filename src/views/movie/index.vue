<template>
    <div>
        <headerTop title="首页">
            <span class="" slot="left">
                <van-icon name="arrow-left" />
            </span>
            <!-- <span slot="right">
                <van-icon name="arrow-left" />
            </span> -->
        </headerTop>
    </div>
</template>

<script>
import headerTop from '@/components/headerTop'

export default {
    name: 'movie',
    components: { headerTop },
    methods: {
        
    }

}
</script>

<style scoped lang="stylus">

</style>
