<template>
  <div class="App">
    <van-nav-bar  @click-left="onClickLeft" title="自定义列表" left-text="返回" left-arrow> </van-nav-bar>
    <div class="App-header">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="搜索"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="App-main">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <!-- 自定义loading -->
        <div slot="loading">
          <div>拼命加载中...</div>
        </div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
        >
          <!-- 自定义loading -->
          <div slot="loading">
            <div>拼命加载中 <van-loading type="spinner" color="#1989fa" /></div>
          </div>
          <van-cell-group  v-for="item in list" :key="item" style="margin: 6px;">
            <van-cell title="+8618892087118" is-link label="发送时间   2020-05-22 11:25:30" />
            <van-cell value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" />
            <van-cell title="" value="回执结果  1 / 1" />
          </van-cell-group>
        </van-list>
      </van-pull-refresh>
    </div>
    <div class="App-footer">
      <van-button style="width: calc(100% - 20px);" color="#7232dd">发送短信</van-button>
    </div>
  </div>
</template>

<script>
import { List, PullRefresh, Cell, Form, Search, Toast, Button, CellGroup, Loading, NavBar  } from 'vant';
export default {
  data() {
    return {
      value: '',
      list: [],
      error: false,
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Form.name]: Form,
    [Search.name]: Search,
    [Button.name]: Button,
    [Loading.name]: Loading,
    [NavBar.name]: NavBar,
  },
  methods: {
    onClickLeft() {
      this.$router.push({path:'./home'});
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 30; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 80) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
};
</script>

<style lang="less" scoped>
.App {
  overflow: hidden;
  .App-header {
    height: 60px;
  }
  .App-main {
    height: calc(100vh - 150px);
    overflow-y: auto;
    background: #e6e6e6;
  }
  .App-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background: #e6e6e6;
  }
}
</style>
