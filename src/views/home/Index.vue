<template>
  <div>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>运营简报</span>
      </div>
      <div class="demo">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #673AB7;position: relative;">
                  <i class="el-icon-location-outline index-icon"></i>
                  <div style="position: absolute;left: 100px; top: 20px;">
                    <p style="padding-bottom: 10px">今日下单金额（元）</p>￥<strong>22222</strong>
                  </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #3c8dbc;position: relative">
                <i class="el-icon-picture index-icon"></i>
                <div style="position: absolute;left: 100px; top: 20px;">
                  <p style="padding-bottom: 10px">今日订单数（笔）</p>￥<strong>222</strong>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #009688;position: relative">
                <i class="el-icon-service index-icon"></i>
                <div style="position: absolute;left: 100px; top: 20px;">
                  <p style="padding-bottom: 10px">今日客单价（元）</p>￥<strong>101</strong>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 20px 10px 10px;background: #607D8B;height: 103px">
                <div style="display: table-cell;padding-right: 10px;">
                  <p style="padding-bottom: 10px">昨日下单金额（元）</p>￥<strong>101</strong>
                </div>
                <div style="border-left: 1px solid #fff;padding-left: 10px;display: table-cell">
                  <p style="padding-bottom: 10px;">昨日客单价<span>2500</span>（元）</p>
                  <p style="padding-bottom: 10px">昨日订单数<span>3</span>笔</p>
                </div>
               </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <br>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>销售趋势</span>
      </div>
      <el-row>
        <el-col :span="9">
          <div id="saleschart" :style="{width: '100%',height: '500px'}"></div>
        </el-col>
        <el-col :span="8">
          <div id="orderchart" :style="{width: '100%',height: '500px'}"></div>
        </el-col>
        <el-col :span="4">
          <h3 style="margin-bottom: 20px">待处理订单</h3>
          <div class="orderList">
            <span>等待分拣订单</span><span style="float: right">5</span>
          </div>
          <div class="orderList">
            <span>分拣中订单</span><span style="float: right">3</span>
          </div>
          <div class="orderList">
            <span>配送中订单</span><span style="float: right">1</span>
          </div>
          <div class="orderList">
            <span>待支付借款单</span><span style="float: right">2</span>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <br>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>Element ui组件</span>
      </div>

      <el-row>
        <el-col :span="14">
          <el-cascader
              expand-trigger="hover"
              :options="options"
              v-model="selectedOptions">
          </el-cascader>
          <el-date-picker
              v-model="dateVal"
              type="date"
              placeholder="选择日期">
          </el-date-picker>
          <el-input-number v-model="num"  :min="1" :max="10" label="计数器max=10,min=1"></el-input-number>
          <div style="display: inline-block">
            <el-rate
                v-model="elRate"
                show-score
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
          </div>
          <div style="margin-left: 40px;display: inline-block">
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
          </div>
          <br><br><br>
          <div style="display: inline-block">
            <el-steps :active="2">
              <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤 3" description="这段就没那么长了"></el-step>
            </el-steps>
          </div>
          <el-pagination
              style="display: inline-block"
              background
              layout="prev, pager, next"
              :total="100"
              @current-change="current_change">
          </el-pagination>
          <br><br><br>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
          </el-checkbox-group>

        </el-col>
        <el-col :span="10">
          <div>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </div>
          <div style="margin-top: 40px">
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </div>
        </el-col>
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
        selectedOptions:[],
        num:'',
        dateVal:'',
        checkList: ['选中且禁用','复选框 A'],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
      }
    },
    mounted: function () {
      this.drawLine();
      this.orderBar();
    },
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {  
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          }
        });
      },
      drawLine(){
        //基于准备好的dom,初始化echarts实例
        let salesChart = this.$echarts.init(document.getElementById('saleschart'))
        //绘制图表
        salesChart.setOption({
          title: {text: '销售报表'},
          tooltip: {
            trigger: 'axis'
          },
          //x轴信息样式
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["07-16","07-17","07-18","07-19","07-20","07-21","07-22"],
            //坐标轴颜色
            axisLine:{
              lineStyle:{
                color: 'red'
              }
            },
            //x轴文字旋转
            
          },
          yAxis: [{
              type: 'value',
              min: 2000,
              max: 10000
          }],
          series: [{
            name: '销量',
            type: 'line',
            data: [6056,5269,6988,8022,6200,3566,2911]
          }]
        });
      },
      orderBar(){
        let orderBar = this.$echarts.init(document.getElementById('orderchart'))
        //绘制图表
        orderBar.setOption({
          title: {
            text: '下单分析'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}({d}%)"
          },
          legend: {
			    	y : 50,//data文字距离title的距离
            data: ['蔬果','肉类','水产','禽蛋','冻品']
          },
          series: [{
            name: '产品种类',
            type: 'pie',
            radius: '55%',
            center: ['50%','60%'],
            data: [
              {value: 3522,name:'蔬果'},
              {value: 1522,name:'肉类'},
              {value: 922,name:'水产'},
              {value: 522,name:'禽蛋'},
              {value: 312,name:'冻品'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
              }
            }
          }]
        });
      }
      }

  }
</script>
<style lang="less">
  .demo{
    margin: 10px;
    .grid-content {
      border-radius: 4px;
      overflow: hidden;
      color: #fff;
      background: #d3dce6;
      .index-icon{
        font-size: 82px;
        color: #fff;
      }
    }
  }
  .orderList{
    border-bottom: 1px solid #ddd;
    padding: 5px 10px;
  }
  // .orderList span{
  //   float: right
  // }
</style>