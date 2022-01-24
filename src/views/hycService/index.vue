<template>
  <div>
    <!-- 余额 -->
    <div class="hycService-image">
      <div class="hycservice-money">账户余额 (元)</div>
      <div class="hycservice-balance">{{balance}}</div>
    </div>
    <!-- 列表 -->
    <div class="hycSetvice-list">
      <van-cell title="保养" is-link icon :to="{path:'hycTree'}">
      <template #icon>
        <img class="maintenance" src="@/assets/icon-maintenance.png" alt="">
        </template>
      </van-cell>
       <van-cell title="维修" is-link icon>
      <template #icon>
        <img class="maintenance" src="@/assets/icon-maintain.png" alt="">
        </template>
      </van-cell>
       <van-cell title="服务费" is-link icon>
      <template #icon>
        <img class="maintenance" src="@/assets/icon-carWash.png" alt="">
        </template>
      </van-cell>
       <van-cell title="其他" is-link icon>
      <template #icon>
        <img class="maintenance" src="@/assets/icon-carWash.png" alt="">
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { balance } from '../../api/hycService.js'
export default {
  name: 'HYCService',
  data () {
    return {
      balance: ''
    }
  },
  mounted () {
    this.getBalance()
  },
  methods: {
    async getBalance () {
      const { data: res } = await balance()
      console.log(res)
      this.balance = res.data.balance
    }
  }
}
</script>

<style lang="less" >
.hycService-image{
    display: block;
    width: 100vw;
    height: 270px;
    background-image: url('../../assets/images/bg5.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    .hycservice-money{
      font-size: 14px;
      color: rgba(255, 255, 255, .5);
      padding-top: 50px;
      padding-bottom: 15px;
      text-align: center;
    }
    .hycservice-balance{
      font-size: 48px;
      color: #BEA473;
      text-align: center;
    }
}
    .hycSetvice-list{
      margin-top: 15px;
     .van-cell{
        height:62px;
        line-height: 45px;
        font-size: 16px;
        i{
          line-height: 45px;
        }
      }
      .maintenance{
        display: flex;
        align-items: center;
        width: 34px;
        height: 34px;
        margin: auto;
        margin-left: 13px;
        margin-right: 23px;
        vertical-align: super;
      }
}

</style>
