<template>
  <div>
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="viewClick">
        <el-tab-pane label="按订单查看" name="first">
          <el-form :inline="true" :model="formInline" class="demo-form-inline formLine" label-width="80px">
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option label="按下单日期" value="orderTime"></el-option>
              <el-option label="按运营周期" value="operaCycle"></el-option>
              <el-option label="按收货日期" value="dateReceipt"></el-option>
            </el-select>
            <el-date-picker
              v-model="formInline.value7"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2">
            </el-date-picker>
            <el-form-item label="搜索">
              <el-input v-model="formInline.user" placeholder="输入订单号、商户信息搜索"></el-input>
            </el-form-item>
            <transition name="fade">
              <div v-show="!isShow">
                <el-form-item label="订单状态">
                  <el-select v-model="formInline.state" placeholder="全部状态">
                    <el-option label="全部状态" value="allSort"></el-option>
                    <el-option label="等待分拣" value="waitSort"></el-option>
                    <el-option label="分拣中" value="Sorting"></el-option>
                    <el-option label="配送中" value="distr"></el-option>
                    <el-option label="已签收" value="received"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="支付状态">
                  <el-select v-model="formInline.pay" placeholder="全部状态">
                    <el-option label="全部状态" value="allPay"></el-option>
                    <el-option label="未支付" value="noPay"></el-option>
                    <el-option label="未支付" value="noPay"></el-option>
                    <el-option label="部分支付" value="partPay"></el-option>
                    <el-option label="已支付" value="paied"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="报价单">
                  <el-select v-model="formInline.quotation" placeholder="全部报价单">
                    <el-option label="全部报价单" value="allQuo"></el-option>
                    <el-option label="连锁餐厅" value="chainQuo"></el-option>
                    <el-option label="政府机关" value="govQuo"></el-option>
                    <el-option label="教育机构" value="eduQuo"></el-option>
                    <el-option label="企业食堂" value="compQuo"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </transition>
            <el-form-item>
              <el-button type="primary" @click="exportClick">导出</el-button>
              <el-button>搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="text"  @click="toggle">
                 <span v-show="isShow">展开详细信息<i class="el-icon-arrow-down"></i></span><span v-show="!isShow">收起详细信息<i class="el-icon-arrow-down"></i></span>
              </el-button>
            </el-form-item>
          </el-form> 
          <div style="float: right">
            <el-select v-model="modify" placeholder="修改状态">
              <el-option label="修改选中订单" value="allSort"></el-option>
              <el-option label="按预设数修改" value="waitSort"></el-option>
            </el-select>
            <el-button type="primary">新建订单<i class="el-icon-plus el-icon--right"></i></el-button>
            <el-button type="primary">批量导入<i class="el-icon-upload el-icon--right"></i></el-button>
            <el-button type="success">补录订单<i class="el-icon-plus el-icon--right"></i></el-button>
            <el-button type="primary">列表自定义<i class="el-icon-menu el-icon--right"></i></el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableOrder"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="date"
              label="下单日期"
              sortable
              width="130">
            </el-table-column>
            <el-table-column
              prop="orderNum"
              label="订单号"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="商户名/ID"
              sortable
              width="150">
            </el-table-column>
            <el-table-column
              prop="orderAmount"
              label="下单金额(元)"
              sortable>
            </el-table-column>
            <el-table-column
              prop="outboundAmount"
              label="出库金额(元)"
              sortable>
            </el-table-column>
            <el-table-column
              prop="salesAmount"
              label="销售金额(元)"
              sortable>
            </el-table-column>
            <el-table-column
              prop="orderStatus"
              label="订单状态"
              sortable>
            </el-table-column>
            <el-table-column prop="payStatus" label="支付状态" width="100">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.payStatus === '已支付' ? 'primary' : 'success'"
                  disable-transitions>{{scope.row.payStatus}}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="按商品查看" name="second">
          <el-form :inline="true" :model="formProduct" class="demo-form-inline" label-width="80px">
            <el-select v-model="formProduct.region" placeholder="请选择">
              <el-option label="按下单日期" value="orderTime"></el-option>
              <el-option label="按运营周期" value="operaCycle"></el-option>
              <el-option label="按收货日期" value="dateReceipt"></el-option>
            </el-select>
            <el-date-picker
              v-model="formProduct.value6"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions1">
            </el-date-picker>
            <el-form-item label="搜索">
              <el-input v-model="formProduct.user" placeholder="输入商品信息、商户信息、订单号搜索或[商品、商户]组合搜索" size="large"></el-input>
            </el-form-item>
            <transition name="fade">
              <div v-show="!isShow">
                <el-form-item label="商品筛选">
                  <el-cascader
                    expand-trigger="hover"
                    :options="formProduct.options"
                    v-model="formProduct.selectedClassify">
                  </el-cascader>
                </el-form-item>
                <el-form-item label="订单状态">
                  <el-select v-model="formProduct.state" placeholder="全部状态">
                    <el-option label="全部状态" value="allSort"></el-option>
                    <el-option label="等待分拣" value="waitSort"></el-option>
                    <el-option label="分拣中" value="Sorting"></el-option>
                    <el-option label="配送中" value="distr"></el-option>
                    <el-option label="已签收" value="received"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="支付状态">
                  <el-select v-model="formProduct.pay" placeholder="全部状态">
                    <el-option label="全部状态" value="allPay"></el-option>
                    <el-option label="未支付" value="noPay"></el-option>
                    <el-option label="未支付" value="noPay"></el-option>
                    <el-option label="部分支付" value="partPay"></el-option>
                    <el-option label="已支付" value="paied"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="报价单">
                  <el-select v-model="formProduct.quotation" placeholder="全部报价单">
                    <el-option label="全部报价单" value="allQuo"></el-option>
                    <el-option label="连锁餐厅" value="chainQuo"></el-option>
                    <el-option label="政府机关" value="govQuo"></el-option>
                    <el-option label="教育机构" value="eduQuo"></el-option>
                    <el-option label="企业食堂" value="compQuo"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </transition>
            <el-form-item>
              <el-button>搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="text">
                 <span v-show="isShow">展开详细信息<i class="el-icon-arrow-down"></i></span><span v-show="!isShow">收起详细信息<i class="el-icon-arrow-down"></i></span>
              </el-button>
            </el-form-item>
          </el-form> 
        </el-tab-pane>
      </el-tabs>
    </el-card>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        //按订单查看
        modify: [],
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
        //时间
        //value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        formInline: {
          user: '',
          region: '',
          type: [],
          value7: '',
          state: '',
          pay: ''
        },
        isShow:true,
        tableOrder: [{
          date: '2018-08-15',
          orderNum: '20180815164829',
          name: '国税局',
          orderAmount: '4389',
          outboundAmount: '4389',
          salesAmount: '4389',
          orderStatus: '配送中',
          payStatus: '未支付'
        }, {
          date: '2018-08-14',
          orderNum: '20180814153245',
          name: '文化厅',
          orderAmount: '4459',
          outboundAmount: '4459',
          salesAmount: '4459',
          orderStatus: '配送中',
          payStatus: '未支付'
        }, {
          date: '2018-08-16',
          orderNum: '20180816155245',
          name: '安全厅',
          orderAmount: '8459',
          outboundAmount: '8459',
          salesAmount: '8459',
          orderStatus: '派单中',
          payStatus: '未支付'
        }, {
          date: '2018-08-16',
          orderNum: '20180816145245',
          name: '农行',
          orderAmount: '2459',
          outboundAmount: '2459',
          salesAmount: '2459',
          orderStatus: '派单中',
          payStatus: '未支付'
        }, {
          date: '2018-08-13',
          orderNum: '20180813145245',
          name: '电信',
          orderAmount: '4759',
          outboundAmount: '4759',
          salesAmount: '4759',
          orderStatus: '已收货',
          payStatus: '已支付'
        }, {
          date: '2018-07-13',
          orderNum: '20180713145245',
          name: '三馆中心',
          orderAmount: '5759',
          outboundAmount: '5759',
          salesAmount: '5759',
          orderStatus: '已收货',
          payStatus: '已支付'
        }],
        multipleSelection: [],
        //按商品查看
        formProduct: {
          user: '',
          region: '',
          type: [],
          value6: '',
          state: '',
          pay: '',
          selectedClassify: '',
          // 级联选择器
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
        pickerOptions1: {
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
        
      };
    },
    methods: {
      viewClick(tab,event){
        console.log(tab,event)
      },
      exportClick(){
        console.log(this.$refs + 'sucess')
      },
      toggle(){
        this.isShow = !this.isShow;
        // if(this.isShow == false){
        //   this.btnText = "展开详细信息"
        // }else if(this.isShow == true){
        //   this.btnText = "收起详细信息"
        // }
      },
      //页码
      created:function(){
        //加载数据
        var url ='http://127.0.0.1:8016/product/index';
        //向后台获取数据
        var vm = this;
        $.getJSON(url,function(data){
            vm.clazzInfo = data;
            vm.total = data.length;//设置数据总数目！！！
        }); 
      },
      current_change:function(currentPage){
        this.currentPage = currentPage;
      },
      //表格
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      //多选
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
      
    },
    mounted: function () {

    }
  }
</script>
<style lang="less">
  .el-date-editor .el-range-separator{
    padding: 0
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .searchUsers{
    width: 100px
  }
  //搜索框下方
  .formLine{
    border-bottom: 10px solid #eaeefb;
    margin-bottom: 20px
  }
</style>