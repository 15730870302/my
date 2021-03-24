<template>
  <div class="container">
    <div class="van-calendar__header-title">已点列表</div>
    <div>
<!--      :disabled="item.id != 1"控制不删除的单元格-->
      <van-swipe-cell v-for="(item) in list" :key="item.id" :disabled="item.id != 1">
        <van-cell icon="shop-collect-o" :border="true" :title="item.title" :value="item.time" />
        <template #right>
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OrderList",
        data() {
          return {
            list: [
              {
                id: 1,
                title: '军事冒菜',
                time: '2020-12-23 16:32:12'
              },{
                id: 2,
                title: '重庆鸡公煲',
                time: '2020-12-13 09:32:12'
              },{
                id: 3,
                title: '罐罐米线',
                time: '2020-12-22 13:32:12'
              },{
                id: 4,
                title: '重庆猪脚饭',
                time: '2020-12-21 14:32:12'
              },{
                id: 5,
                title: '蟹黄包',
                time: '2020-12-23 16:32:12'
              }

            ]
          }
        }
    }
</script>

<style scoped>
</style>
