<template>
  <div class="progress-circle">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'progressCircle',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .progress-circle
    position: relative
</style>
