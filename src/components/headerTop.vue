<template>
    <div>
        <header class="header">
            <slot name="left"></slot>
            <span class="header_title">
                <span>{{title}}</span>
            </span>
            <slot name="right"></slot>
        </header>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        title: String
    },
    methods: {
        onClickLeft() {
            this.$router.push({
                path: 'login'
            })
        },
        onClickRight() {
           
        }
    }

}
</script>

<style lang="stylus" scoped>
.header
    height: 7vh
    padding 0.5vh
    background: #0b9f70f2;
    .header_inco
        margin-left 1vh
    .header_title
        text-align center
        line-height 7vh
        margin-left 22vh
</style>
