<template>
  <scroll :data="data" class="listview" ref="listview">
     <ul>
       <li v-for="group in data" class="list-group" ref="listGroup">
         <h2 class="list-group-title">{{group.title}}</h2>
         <ul>
           <li v-for="item in group.items" class="list-group-item">
             <img class="avatar" v-lazy="item.avatar">
             <span class="name">{{item.name}}</span>
           </li>
         </ul>
       </li>
     </ul>
     <div class="list-shortcut">
       <ul>
         <li v-for="(item, index) in shortcutList" class="item">
           {{item}}
         </li>
       </ul>
     </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
export default {
  name: 'ListView',
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {
    shortcutList() {
      return this.data.map((group) => {
        return group.title.substr(0, 1)
      })
    }
  },
  data () {
    return {
    }
  },
  components: {
    Scroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      width: 20px
      padding: 20px 0
      border-radius: 10px
      background: $color-background-d
      font-family: Helvetica
      transform: translateY(-50%)
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        

</style>
