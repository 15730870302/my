<template>
    <div>
      <van-tabbar v-model="active">
        <van-tabbar-item v-for="(item, index) in tabBarDes"
                         :key="index"
                         :icon="item.icon"
                         :to="item.page"
        >
          {{item.txt}}
        </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
          return {
            active: 0,
            tabBarDes:[
              {
                txt: '点餐',
                icon: 'shop-o',
                page: 'index',

              },
              {
                txt: '已点',
                icon: 'certificate',
                page: 'index2',
              },
              {
                txt: '想吃',
                icon: 'coupon-o',
                page: 'index3',
              }
            ]
          }
        },
      created() {
        if (this.$route.path === '/') {
          this.$router.push('/index');
        }
      },
      methods: {

      }
    }
</script>

<style scoped>

</style>
