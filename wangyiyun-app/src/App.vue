<template>
  <footermusic v-show="$store.state.isFooter"/>
  <router-view/>
</template>
<script>

import footermusic from './components/item/footermusic.vue';
export default{
components:{
  footermusic
}
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: .4rem;
  height: .4rem;
}
a{
  color: black;
}
</style>
