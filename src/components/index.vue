<template>
  <div class="container">
    <div v-if="!isDisabled">
      <div class="van-calendar__header-title">张林康请点餐</div>
      <van-divider
        :style="{ color: '#f30909', borderColor: '#100000', padding: '0 16px' }"
      >
        在13:30之前
      </van-divider>
    </div>
    <div v-else>
      <div class="van-calendar__header-title">张林康同学，恭喜完成点餐</div>
      <van-divider
        :style="{ color: '#f30909', borderColor: '#100000', padding: '0 16px' }"
      >
        13:30
      </van-divider>
    </div>
    <div>
      <van-radio-group v-model="radio" :disabled="isDisabled">
        <van-cell-group>
          <van-cell v-for="(item, index) in radioList"
                    :title="item.title"
                    @click="clickRadio(item)">
            <template #right-icon>
              <van-radio
                :name="item.value" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="but-view">
      <van-button
        type="info"
        :loading="butLoading"
        loading-text="提交中"
        @click="Submit">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      radio: 1,
      butLoading: false,
      isDisabled: false,
      radioList: [
        {
          title: '测试',
          value: 1,
        },
        {
          title: '测试1',
          value: 2,
        },{
          title: '测试2',
          value: 3,
        },{
          title: '测试3',
          value: 4,
        }
      ]
    }
  },
  methods: {
    clickRadio(e){
      if (!this.isDisabled) {
        this.radio = e.value;
      }
      // console.log(e)
    },
    Submit(){
      this.butLoading = true;
      setTimeout(()=> {
        this.isDisabled = true
        this.butLoading = false;
      },2000)
    }
  }
}
</script>

<style scoped >
  .but-view {
    margin-top: 2rem;
    text-align: center;
  }
</style>
