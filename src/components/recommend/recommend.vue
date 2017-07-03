<template>
  <div class="recommend">
     推荐页面
  </div>
</template>

<script type="text/ecmascript-6">
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  name: 'recommend',
  data () {
    return {
    }
  },
  created() {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

</style>
