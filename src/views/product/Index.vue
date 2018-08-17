<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <div class="source">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>商品</el-breadcrumb-item>
              <el-breadcrumb-item>商品库</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <span>商品总数：3566</span>
          <div style="float: right;margin-top: -10px;">
            <el-button type="primary" icon="el-icon-menu" @click="dialogVisible = true">分类管理</el-button>
            <el-dialog
              title="分类管理"
              :visible.sync="dialogVisible"
              width="50%">
              <!--<el-menu
                default-active="2"
                class="el-menu-vertical-demo">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>肉类</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">猪肉</el-menu-item>
                    <el-menu-item index="1-2">牛肉</el-menu-item>
                    <el-menu-item index="1-3">羊肉</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>蔬果</span>
                  </template>
                  <el-menu-item-group>
                    <el-submenu index="2-1">
                      <template slot="title">蔬菜</template>
                      <el-menu-item index="2-1-1">叶菜类</el-menu-item>
                      <el-menu-item index="2-1-2">茄果瓜豆</el-menu-item>
                      <el-menu-item index="2-1-3">甘蓝类</el-menu-item>
                      <el-menu-item index="2-1-4">食用菌菇</el-menu-item>
                      <el-menu-item index="2-1-5">葱姜蒜</el-menu-item>
                      <el-menu-item index="2-1-6">根茎</el-menu-item>
                      <el-menu-item index="2-1-7">特野菜</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2-2">水果</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>水产</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">鱼类</el-menu-item>
                    <el-menu-item index="3-2">虾蟹类</el-menu-item>
                    <el-menu-item index="3-3">贝壳类</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>禽蛋</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1">冷鲜鸡类</el-menu-item>
                    <el-menu-item index="4-2">冷鲜鸭类</el-menu-item>
                    <el-menu-item index="4-3">其他禽类</el-menu-item>
                    <el-menu-item index="4-4">鸡蛋类</el-menu-item>
                    <el-menu-item index="4-5">鸭蛋类</el-menu-item>
                    <el-menu-item index="4-6">其他禽蛋类</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-share"></i>
                    <span>冻品</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="5-1">冻鸡鸭副类</el-menu-item>
                    <el-menu-item index="5-2">冻水产类</el-menu-item>
                    <el-menu-item index="5-3">箱装半成品</el-menu-item>
                    <el-menu-item index="5-4">腌腊制品</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>-->
              <el-row class="dialogCol">
                <el-col :span="8">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>一级分类</span>
                      <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-plus" @click="addClaFir(editClaValue2)">新增</el-button>
                    </div>
                    <ul v-model="editClaValue2">
                      <li index="1">肉类</li>
                      <li index="2">蔬果</li>
                      <li index="3">水产</li>
                      <li index="4">禽蛋</li>
                      <li index="5">冻品</li>
                    </ul>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>二级分类</span>
                      <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-plus">新增</el-button>
                    </div>
                    <ul>
                      <li index="1-1">猪肉</li>
                      <li index="1-2">牛肉</li>
                      <li index="1-3">羊肉</li>
                    </ul>
                    <ul>
                      <li index="2-1">蔬菜</li>
                      <li index="2-2">水果</li>
                    </ul>
                    <ul>
                      <li index="3-1">鱼类</li>
                      <li index="3-2">虾蟹类</li>
                      <li index="3-2">贝壳类</li>
                    </ul>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>三级分类</span>
                      <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-plus">新增</el-button>
                    </div>
                    <ul>
                      <li>猪肉</li>
                      <li>牛肉</li>
                      <li>羊肉</li>
                    </ul>
                    <ul>
                      <li>蔬菜</li>
                      <li>水果</li>
                    </ul>
                    <ul>
                      <li>鱼类</li>
                      <li>虾蟹类</li>
                      <li index="3-2">贝壳类</li>
                    </ul>
                  </el-card>
                </el-col>
              </el-row>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
            <el-button type="success" icon="el-icon-plus">新建商品</el-button>
          </div>
      </div>  
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item>
          <el-cascader
              expand-trigger="hover"
              :options="form.options"
              v-model="form.selectedClassify">
          </el-cascader>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.sales" placeholder="全部销售单状态">
            <el-option label="全部销售单状态" value="allstate"></el-option>
            <el-option label="只查看已激活状态" value="activated"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input expand-trigger="hover" placeholder="请输入商品名称或ID" v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-row>
        <el-table
        :data="tableData5"
        style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="规格名">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所在销售单">
                  <span>{{ props.row.salesOrder }}</span>
                </el-form-item>
                <el-form-item label="销售状态">
                  <span>
                    <el-switch
                      v-model="value2"
                      active-color="#13ce66"
                      inactive-color="#ff4949">
                    </el-switch>
                  </span>
                </el-form-item>
                <el-form-item label="单价">
                  <span>{{ props.row.price }}</span>
                </el-form-item>
                <el-form-item label="规格">
                  <span>{{ props.row.spec }}</span>
                </el-form-item>
                <el-form-item label="销售价">
                  <span>{{ props.row.salePrice }}</span>
                </el-form-item>
                <el-form-item label="库存">
                  <span>{{ props.row.inventory }}</span>
                </el-form-item>
                <el-form-item label="操作">
                  <span>
                    <template>
                      <el-button @click="editClick()" type="text" size="small"><i class="el-icon-view"></i></el-button>
                    </template>
                  </span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="商品名称"
            prop="name">
          </el-table-column>
          <el-table-column
            label="分类"
            prop="classify">
          </el-table-column>
          <el-table-column
            label="销售规格数(上架/全部)"
            prop="format">
          </el-table-column>
          <el-table-column
            label="所在报价单数"
            prop="quoNum">
          </el-table-column>
          <el-table-column
            label="基本单位"
            prop="unit">
          </el-table-column>
          <el-table-column
            label="销售价（元）"
            prop="priceRange">
          </el-table-column>
          <el-table-column
            label="分拣设置"
            prop="sorting">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small"><i class="el-icon-view"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="100">
        </el-pagination>
      </el-row>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio:'',
        elRate:2,
        dateVal:'',
        checkList: ['选中且禁用','复选框 A'],
        //分类管理
        dialogVisible: false,
        // 级联选择器
        form:{
          selectedClassify: '',
          options: [{
          value: 'meat',
          label: '肉类',
          children: [{
            value: 'pig',
            label: '猪肉',
          },{
            value: 'beefMutton',
            label: '牛羊肉',
          }]
          },{
          value: 'fruitVege',
          label: '蔬果',
          children: [{
            value: 'vegetables',
            label: '蔬菜',
          },{
            value: 'fruit',
            label: '水果',
          }]
          },{
          value: 'aquatic',
          label: '水产',
          children: [{
            value: 'fish',
            label: '鱼类',
          },{
            value: 'shrimpCrap',
            label: '虾蟹类',
          },{
            value: 'shell',
            label: '贝壳类',
          }]
          },{
          value: 'eggs',
          label: '禽蛋',
          children: [{
            value: 'chicken',
            label: '冷鲜鸡类',
          },{
            value: 'duck',
            label: '冷鲜鸭类',
          },{
            value: 'egg',
            label: '鸡蛋类',
          },{
            value: 'duckEgg',
            label: '鸭蛋类',
          }]
          },{
          value: 'frozenFood',
          label: '冻品',
          children: [{
            value: 'chickenVice',
            label: '冻鸡副类',
          },{
            value: 'frozenAquatic',
            label: '冻水产类',
          },{
            value: 'SemiFinished',
            label: '箱装半成品类',
          },{
            value: 'cured',
            label: '腌腊制品',
          }]
          },{
          value: 'dryCondiment',
          label: '干货调料',
          children: [{
            value: 'condiments',
            label: '调味品类',
          },{
            value: 'dryCargo',
            label: '干货类',
          }]
          },{
          value: 'grainOil',
          label: '粮油',
          children: [{
            value: 'grain',
            label: '粮食大米类',
          },{
            value: 'oil',
            label: '食用油类',
          }]
          },{
          value: 'bean',
          label: '豆制品',
          }],
          sales: '',
          id:'',
        },
        value1: true,
        value2: true,
        tableData5: [{
          id: '12987122',
          name: '鸡蛋干',
          classify: '调味品',
          format: '1',
          quoNum: '3',
          unit: '斤',
          priceRange: '3-20',
          salePrice: '3.5元/包',
          sorting: '统配',
          salesOrder: '政府单位',
          price: '4',
          spec: '500g/包',
          inventory: '不限库存'
        }, {
            id: '12987124',
            name: '鸡蛋',
            classify: '禽蛋',
            format: '1',
            quoNum: '2',
            unit: '箱',
            priceRange: '160-220',
            salePrice: '180元/包',
            sorting: '统配',
            salesOrder: '政府单位',
            price: '4',
            spec: '7.5kg/箱',
            inventory: '不限库存'
        }, {
            id: '12987145',
            name: '鸡胗',
            classify: '冻品',
            format: '1',
            quoNum: '6',
            unit: '箱',
            priceRange: '90-120',
            salePrice: '110元/包',
            sorting: '统配',
            salesOrder: '政府单位',
            price: '4',
            spec: '7kg/箱',
            inventory: '不限库存'
        }, {
            id: '12987105',
            name: '鸡胗2',
            classify: '冻品',
            format: '1',
            quoNum: '6',
            unit: '箱',
            priceRange: '90-120',
            salePrice: '110元/包',
            sorting: '统配',
            salesOrder: '政府单位',
            price: '4',
            spec: '7kg/箱',
            inventory: '不限库存'
        }, {
            id: '12987104',
            name: '鸡蛋2',
            classify: '禽蛋',
            format: '1',
            quoNum: '2',
            unit: '箱',
            priceRange: '160-220',
            salePrice: '180元/包',
            sorting: '统配',
            salesOrder: '政府单位',
            price: '4',
            spec: '7.5kg/箱',
            inventory: '不限库存'
        }, {
          id: '12987102',
          name: '鸡蛋干2',
          classify: '调味品',
          format: '1',
          quoNum: '3',
          unit: '斤',
          priceRange: '3-20',
          salePrice: '3.5元/包',
          sorting: '统配',
          salesOrder: '政府单位',
          price: '4',
          spec: '500g/包',
          inventory: '不限库存'
        }, {
            id: '12987105',
            name: '鸡胗2',
            classify: '冻品',
            format: '1',
            quoNum: '6',
            unit: '箱',
            priceRange: '90-120',
            salePrice: '110元/包',
            sorting: '统配',
            salesOrder: '政府单位',
            price: '4',
            spec: '7kg/箱',
            inventory: '不限库存'
        }, {
            id: '12987104',
            name: '鸡蛋2',
            classify: '禽蛋',
            format: '1',
            quoNum: '2',
            unit: '箱',
            priceRange: '160-220',
            salePrice: '180元/包',
            sorting: '统配',
            salesOrder: '政府单位',
            price: '4',
            spec: '7.5kg/箱',
            inventory: '不限库存'
        }],
      }
    },
    methods: {
      onSearch(){
        console.log('vae')
      },
      handleClick(row) {
        console.log(row);
      },
      editClick() {
        console.log('salePrice');
      },
    },
    mounted: function () {

    },
    components: {

    }
  }
</script>
<style lang="less">
   .demo-table-expand {
    font-size: 0;
  }
  .box-card .source{
    padding: 20px 0
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
  }
  // .el-form-item>.el-form-item__content{
  //   display: inline;
  // }
  // .el-form-item .el-form-item__content span{
  //   padding-right: 20px
  // }
  .demo-table-expand label{
    width: 100px;
  }
  .el-pagination{
    text-align: center;
    padding: 5px;
  }
  .dialogCol .el-col-8{
    padding-right: 10px;
    padding-left: 10px
  }
</style>