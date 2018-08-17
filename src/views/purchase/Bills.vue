<template>
  <div>
    <el-card class="box-card" :key="title">
      采购单据
    </el-card>
  </div>
</template>
<script>
  import Task from './Task.vue';

  export default {
    data() {
      return {
        task: Task,
      }
    },
    methods: {},
    mounted: function () {

    }
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