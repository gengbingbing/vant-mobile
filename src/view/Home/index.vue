<template>
  <div style="overflow: hidden;">
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="shop" icon="search">商城</van-tabbar-item>
      <van-tabbar-item name="user" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>

    <div v-if="active === 'home'">
      <van-nav-bar title="首页" :left-arrow='false'> </van-nav-bar>

      <HomeComponent></HomeComponent>
    </div>
    <div v-if="active === 'shop'">
      <van-nav-bar title="商城" :left-arrow='false'>  </van-nav-bar>

      <GoodsComponent></GoodsComponent>
    </div>
    <div v-if="active === 'user'">
      <van-nav-bar title="我的" :left-arrow='false'></van-nav-bar>

      <UserComponent></UserComponent>
    </div>
  </div>
</template>

<script>
import { NavBar, Tabbar, TabbarItem } from 'vant';
import HomeComponent from '@/components/home/index'
import GoodsComponent from '@/components/goods/index'
import UserComponent from '@/components/user/index'

export default {
  data() {
    return {
      active: 'home',
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    HomeComponent,
    GoodsComponent,
    UserComponent
  }
};
</script>

<style lang="less">

</style>
