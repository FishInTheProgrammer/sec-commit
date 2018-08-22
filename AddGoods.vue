<template>
  <div>
    <div slot="header">
        商品详情
    </div>
    <el-form ref="form" :model="goods" label-width="80px">
        <el-form-item label="所属分类">
            <el-cascader
                expand-trigger="hover"
                :options="options"
                v-model="goods.options"
                @change="handleChange">
            </el-cascader>
        </el-form-item>
        <el-form-item label="商品名称">
            <el-input type="input" v-model="goods.name"></el-input>
        </el-form-item>
        <el-form-item label="商品别名">
            <el-input type="input" v-model="goods.alias"></el-input>
        </el-form-item>
        <el-form-item label="基本单位">
            <el-select v-model="goods.unit" placeholder="请选择">
                <el-option
                v-for="item in unit"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="商品图片">
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="描述">
            <el-input type="textarea" v-model="goods.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imageUrl: '',
        goods:{
            name: '',
            alias: '',
            unit: [{
               item:[{
                   value: 'kg',
                   label: '公斤'
               },{
                   value: 'catty',
                   label: '斤'
               },{
                   value: 'bottle',
                   label: '瓶'
               },{
                   value: 'jian',
                   label: '件'
               },{
                   value: 'bucket',
                   label: '桶'
               },{
                   value: 'pot',
                   label: '罐'
               },{
                   value: 'single',
                   label: '个'
               },{
                   value: 'bag',
                   label: '袋'
               },{
                   value: 'case',
                   label: '盒'
               },{
                   value: 'strip',
                   label: '条'
               },{
                   value: 'branch',
                   label: '支'
               },{
                   value: 'single',
                   label: '只'
               },{
                   value: 'double',
                   label: '双'
               },{
                   value: 'bunch',
                   label: '扎'
               },{
                   value: 'board',
                   label: '板'
               },{
                   value: 'bundle',
                   label: '把'
               },{
                   value: 'block',
                   label: '块'
               },{
                   value: 'volume',
                   label: '卷'
               },{
                   value: 'package',
                   label: '包'
               },{
                   value: 'meter',
                   label: '米'
               },{
                   value: 'box',
                   label: '箱'
               },{
                   value: 'piece',
                   label: '张'
               },{
                   value: 'cup',
                   label: '杯'
               },{
                   value: 'beam',
                   label: '束'
               },{
                   value: 'ruler',
                   label: '尺'
               },{
                   value: 'strike',
                   label: '打'
               },{
                   value: 'mention',
                   label: '提'
               },{
                   value: 'bundle',
                   label: '捆'
               },{
                   value: 'tin',
                   label: '听'
               },{
                   value: 'basket',
                   label: '筐'
               },{
                   value: 'suit',
                   label: '套'
               },{
                   value: 'part',
                   label: '份'
               },{
                   value: 'altar',
                   label: '坛'
               },{
                   value: 'slice',
                   label: '片'
               }]
            }],
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
        },
      };
    },
    methods: {
      //

      //上传图片
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>