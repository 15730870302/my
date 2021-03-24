<template>
  <div class="container">
<!--    <div class="van-calendar__header-title">想吃什么</div>-->
    <div class="header-text">
      我们关爱每一位员工 <br/>
      在吃这方面<br/>
      我们也不例外<br/>
      请说出你的需求<br/>
      剩下的交给我们
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="value1"
          required
          name="想吃"
          label="想吃"
          placeholder="意大利面"
          :rules="[{ required: true,  message: '不能为空' }]"
        />
        <van-field
          v-model="describe"
          name="describe"
          label="描述"
          placeholder="请输入描述"
          :rules="[{ required: true, message: '请输入描述' }]"
        />
        <van-field
          readonly
          clickable
          name="platform"
          :value="platform"
          label="平台"
          placeholder="点击选择平台"
          @click="showPicker1 = true"
        />
        <van-popup v-model="showPicker1" position="bottom">
          <van-picker
            show-toolbar
            :columns="platformList"
            @confirm="onConfirm1"
            @cancel="showPicker1 = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="business"
          :value="business"
          label="商家"
          placeholder="点击选择商家"
          @click="showPicker2 = true"
        />
        <van-popup v-model="showPicker2" position="bottom">
          <van-picker
            show-toolbar
            :columns="businessList"
            @confirm="onConfirm2"
            @cancel="showPicker2 = false"
          />
        </van-popup>
        <div style="margin: 16px;">
          <van-button block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index3",
        data() {
          return {
            value1: '',
            describe: '',
            platform: '',
            business: '',
            platformList: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            businessList:['杭州', '宁波', '温州', '嘉兴', '湖州'],
            showPicker1: false,
            showPicker2: false,
          }
        },
      methods: {
        onConfirm1(value) {
          this.platform = value;
          this.showPicker1 = false;
        },
        onConfirm2(value) {
          this.business = value;
          this.showPicker2 = false;
        },
        onSubmit(values) {
          console.log(values)
          // 表单提交
        }
      }
    }
</script>

<style scoped>
  .header-text{
    text-align: center;
    line-height: 1.8rem;
    padding: 0.5rem;
    background-color: #f3f2f2;
  }
</style>
