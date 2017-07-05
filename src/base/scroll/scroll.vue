<template>
  <div ref="wrapper">
     <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default: 1   // 1 会截流,只有在滚动结束的时候派发一个 scroll 事件。
       // 2在手指 move 的时候也会实时派发 scroll 事件，不会截流。
       // 3除了手指 move 的时候派发scroll事件，在 swipe（手指迅速滑动一小段距离）的情况下，列表会有一个长距离的滚动动画，这个滚动的动画过程中也会实时派发滚动事件
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      scroll: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    enable() {
      this.scroll && this.scroll.enbale()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh() // 强制 scroll 重新计算，当 better-scroll 中的元素发生变化的时候调用此方法。
      }, this.refreshDelay)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

</style>
