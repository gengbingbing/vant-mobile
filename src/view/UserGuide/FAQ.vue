<template>
  <div style="overflow-y: auto;">
    <van-nav-bar  @click-left="onClickLeft" title="Vue FAQ" left-text="返回" left-arrow> </van-nav-bar>
    <iframe class="iframes" src="https://search.gitee.com/?skin=rec&type=issue&q=vue" />
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar,
  },
  methods: {
    onClickLeft() {
       this.$router.push({path:'./home'});
    }
  }
}
</script>

<style lang="less">
.iframes {
  width: 100%;
  height: -webkit-fill-available;
  overflow-x: hidden;
  border: 0px;
}
</style>