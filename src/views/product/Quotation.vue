<template>
  <div>
    <el-card style="border-radius: 0">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="formInline.type" placeholder="全部报价单类型">
            <el-option label="全部报价单类型" value="all"></el-option>
            <el-option label="政府单位" value="government"></el-option>
            <el-option label="公司" value="company"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.region" placeholder="全部报价单状态">
            <el-option label="全部报价单状态" value="allstate"></el-option>
            <el-option label="已激活" value="activated"></el-option>
            <el-option label="未激活" value="inactive"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input expand-trigger="hover" placeholder="请输入报价ID或报价单名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <br>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>我的报价单（对外）</span>
        <div style="float: right;margin-top: -10px;">
          <el-button type="primary" icon="el-icon-circle-plus-outline">批量新建商品</el-button>
          <el-button type="success" icon="el-icon-plus">新建销售报价单</el-button>
        </div>
      </div>

      <el-row>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="saleNum"
            label="在售商品数"
            width="120">
          </el-table-column>
          <el-table-column
            prop="operaTime"
            label="运营时间设置"
            width="120">
          </el-table-column>
          <el-table-column
            prop="quoType"
            label="报价单类型"
            width="120">
          </el-table-column>
          <el-table-column
            prop="quoState"
            label="报价单状态"
            width="120">
          </el-table-column>
          <el-table-column
            prop="note"
            label="备注">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">商品设置</el-button>
            </template>
          </el-table-column>
      </el-table>
      </el-row>
    </el-card>
  </div>
</template>
<script>
  //import Quotation from './Quotation.vue';

  export default {
    data() {
      return {
        radio:'',
        elRate:2,
        dateVal:'',
        checkList: ['选中且禁用','复选框 A'],
        formInline: {
          type: '',
          region: ''
        },
        tableData: [{
            name: '安全厅',
            saleNum: '253',
            operaTime: '正常服务时间',
            quoType: '自售单',
            quoState: '已激活',
            note: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            name: '国税局',
            saleNum: '223',
            operaTime: '正常服务时间',
            quoType: '自售单',
            quoState: '已激活',
            note: '上海市普陀区金沙江路 1517 弄',
            zip: 200333
          }, {
            name: '文化厅',
            saleNum: '153',
            operaTime: '正常服务时间',
            quoType: '自售单',
            quoState: '已激活',
            note: '上海市普陀区金沙江路 1519 弄',
            zip: 200333
          }, {
            name: '商务厅',
            saleNum: '205',
            operaTime: '正常服务时间',
            quoType: '自售单',
            quoState: '已激活',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }, {
            name: '华东林业局',
            saleNum: '353',
            operaTime: '正常服务时间',
            quoType: '自售单',
            quoState: '已激活',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }, {
            name: '海关',
            saleNum: '353',
            operaTime: '正常服务时间',
            quoType: '自售单',
            quoState: '未激活',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }]
      }
    },
    methods: {
      onSubmit(){
        console.log('提交')
      },
      handleClick(row){
        console.log(row);
      }
    },
    mounted: function () {

    }
  }
</script>
<style lang="less">
  .box-card {
    border-radius: 0;
  }

  .el-col {
    margin: 20px 0;
    text-align: center;
  }
</style>