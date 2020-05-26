<template>
  <div style="overflow-y: auto; margin-bottom: 50px;">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img height="160px" width="100%" src="../../assets/1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img height="160px" width="100%" src="../../assets/2.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img height="160px" width="100%" src="../../assets/3.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img height="160px" width="100%" src="../../assets/4.jpg" />
      </van-swipe-item>
    </van-swipe>

    <van-cell class="infoList" title="业务列表" is-link value="编辑">
      <template #title>
        业务列表 <van-icon name="edit" style="vertical-align: middle;" />
      </template>
    </van-cell>

    <van-grid :gutter="10">
      <van-grid-item v-for="item in businessList" :key="item.key" :icon="item.icon" :text="item.value" :to="item.url" />
    </van-grid>

    <van-cell class="infoList" title="vantCheckBoxFor" is-link to="vantCheckBoxFor"></van-cell>

    <van-cell class="infoList" title="使用指南" />

    <van-row gutter="20" style="margin-left: 0px; margin-right: 0px; background: #FFFFFF; padding: 10px;">
      <van-col span="8" class="center">
        <router-link to="userHelp">
          <div>
            <img height="40px" src="../../assets/help.png" />
          </div>
          用户手册
        </router-link>
      </van-col>
      <van-col span="8" class="center">
        <router-link to="doc">
          <div>
            <img height="40px" src="../../assets/doc.png" />
          </div>
          资料
        </router-link>
      </van-col>
      <van-col span="8" class="center">
        <router-link to="faq">
          <div>
            <img height="40px" src="../../assets/faq.png" />
          </div>
          FAQ
        </router-link>
      </van-col>
    </van-row>

  </div>
</template>

<script>
import { Swipe, SwipeItem, Grid, GridItem, Cell, CellGroup, Col, Row, Image, Icon } from 'vant';

export default {
  name: 'HomeComponent',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Col.name]: Col,
    [Row.name]: Row,
    [Image.name]: Image,
    [Icon.name]: Icon,
  },
  data() {
    return {
      businessList: [],
    };
  },
  mounted () {
    this.businessList = [
      {
        icon: 'music-o',
        url: 'vantCheckBoxFor',
        key: '0',
        value: 'CheckBox'
      }, {
        icon: 'phone-circle-o',
        url: 'listShow',
        key: '1',
        value: 'listShow'
      }, {
        icon: 'bag-o',
        url: '',
        key: '2',
        value: '购物'
      }, {
        icon: 'vip-card-o',
        url: '',
        key: '3',
        value: 'VIP'
      }, {
        icon: 'video-o',
        url: '',
        key: '4',
        value: '视频'
      }, {
        icon: 'gift-o',
        url: '',
        key: '5',
        value: '活动'
      }, {
        icon: 'volume-o',
        url: '',
        key: '6',
        value: '通知'
      }, {
        icon: 'fire-o',
        url: '',
        key: '7',
        value: '热门'
      }
    ]
  },
}
</script>

<style scoped lang="less">
  a {
    color: #333333;
  }
  .infoList {
    margin: 10px 0px;
  }

  .center {
    text-align: center;
  }
</style>