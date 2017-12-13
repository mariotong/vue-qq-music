<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">郑磊音乐盒</h1>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'MHeader',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      background-size: 30px 32px
      bg-image('logo')
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
      margin-left: 15px
</style>
