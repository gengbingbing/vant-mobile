<template>
  <div>
    <van-nav-bar  @click-left="onClickLeft" title="vant 循环复选框" left-text="返回" left-arrow> </van-nav-bar>
    <div v-for="(item, index) in list" :key="item.id" class="vantCheckBox">
      <div style="margin-left: 15px;">问：{{ item.name }}？</div>
      <van-checkbox-group v-model="modelList[index]" style="margin-bottom: 20px;">
        <van-cell-group>
          <van-cell
            v-for="(itemChildren, indexChildren) in item.children"
            clickable
            :key="'children'+itemChildren+index"
            :title="itemChildren.name"
            @click="toggle(itemChildren, indexChildren, index)"
          >
            <template #right-icon>
              <van-checkbox :name="itemChildren.name" :ref="'testCheckboxes'+index+indexChildren" shape="square" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </div>
  </div>
</template>
<script>
 
import { NavBar, Checkbox, CheckboxGroup, Cell, CellGroup } from 'vant';
export default {
  components:{ 
    [NavBar.name]:NavBar,
    [Checkbox.name]:Checkbox,
    [CheckboxGroup.name]:CheckboxGroup,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
  },
  data () {
    return {
      modelList: {},
      list: [{
        id: '01',
        name: 'A001',
        children: [
          {
            id: '0101',
            name: 'A001001'
          },
          {
            id: '0102',
            name: 'A001002'
          },
          {
            id: '0103',
            name: 'A001003'
          }
        ]
      }, {
        id: '02',
        name: 'A002',
        children: [
          {
            id: '0201',
            name: 'A002001'
          },
          {
            id: '0202',
            name: 'A002002'
          }
        ]
      }, {
        id: '03',
        name: 'A004',
        children: [
          {
            id: '0301',
            name: 'A003001'
          },
          {
            id: '0302',
            name: 'A003002'
          }
        ]
      }]
    }
  },
  created(){
    for (let key in this.list) {
      this.$set(this.modelList, key, [])
    }
    console.log(this.list, this.modelList)

  },
  methods:{
    toggle(item, index, i) {
      console.log(item, index)
      this.$refs['testCheckboxes'+i+index][0].toggle();
    },
    onClickLeft() {
       this.$router.push({path:'./home'});
    }
  }
}
</script>

<style lang="less" scoped>
.vantCheckBox {
  background:#FFFFFF;
}
</style>
 