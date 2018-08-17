<template>
  <div>
    <el-card class="box-card">
      采购列表
      <el-form action="" id="demo">
        <input type="text" value="调试 vuejs 2.0" ref="input1">
        <a href="javascript:void(0)" v-on:click="test1">测试</a>
        <br>
        <span>{{ result1 }}</span>
        <br>

        <input type="text" v-model="input2">
        <a href="javascript:void(0)" v-on:click="test2">测试</a>
        <br>
        <span>{{ result2 }}</span>
      </el-form>
      <div>
        <button @click="sort">排序</button>
        <i class="el-icon-arrow-up" v-show="downIcon"></i>
        <i class="el-icon-arrow-down" v-show="!downIcon"></i>
      </div>
      <div>
        <div v-if="activeId">正在播放</div><div v-else>点击试听</div>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        result1: null,
        result2: null,
        input2: "",
        input3: '',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        downIcon: true,
        activeId: false,
        //新增li
      }
    },
    methods: {
      test1: function () {
          this.result1 = this.$refs.input1.value + " 成功!";
      },
      test2: function () {
          this.result2 = this.input2 + " 成功!";
      },
      sort(){
        this.downIcon = !this.downIcon
      },
      onPlay(item){
        this.activeId = item.id === this.activeId ? -1 : item.id
      },
    },
    mounted: function () {

    },
  }
</script>
<style lang="less">
  .box-card {
    border-radius: 0;
  }

  .task .el-col {
    margin: 20px 0;
    text-align: center;
  }
</style>