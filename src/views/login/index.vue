<template>
  <div class="login-countainer">
      <div class="login-title">惠养车</div>
      <!-- 用户登陆 -->
    <div class="login-phone">
      <van-form @submit="onSubmit" ref="loginIndex">
        <van-field
          v-model="user.mobile"
          name="mobile"
          placeholder="请填写手机号"
          class="containet-cell"
          autocomplete="off"
          type="number"
          :rules="username.mobile"
          maxlength='11'
        >
        <i slot="left-icon"><img src="../../assets/tydl/phone.png" alt="" class="login-icon"></i>
        </van-field>
        <van-field
          v-model="user.code"
          name="code"
          placeholder="请填写验证码"
          class="containet-cell"
          autocomplete="off"
          :rules="username.code"
          maxlength='6'
          >
        <i slot="left-icon"><img src="../../assets/tydl/code.png" alt="" class="login-icon"></i>
        <template #button>
            <!--
                :time==倒计时间
             -->
            <van-count-down
            :time="1000 * 10"
            format="ss s"
            style="color:#fff"
            v-if="isCountDownShow"
            @finish="isCountDownShow = false"
            />
            <van-button
            v-else
            size="small"
            type="default"
            class="send-sms-btn"
            @click="onClick"
            native-type="button">发送验证码</van-button>
        </template>
        </van-field>
        <div style="margin: 16px; ">
          <van-button class="login-span" block type="info" native-type="submit" color="linear-gradient(to right, #BFA06E, #F5DEB3)"
            >登陆</van-button
          >
        </div>
      </van-form>
    </div>
    <!-- 用户协议 -->
    <div class="login-deal">
    <van-checkbox v-model="checked"  shape="square" icon-size="14px"><span style="color:#F2F2F2;font-size:14px;">我阅读并同意</span><a href="javascript:;" style="color:#BEA473;font-size:14px">《惠养车用户协议》</a></van-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      username: {
        mobile: [{
          required: true,
          message: '手机号码不能为空'
        }, {
          pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
          message: '手机号码格式错误'
        }],
        code: [{
          required: true,
          message: '请填写用户名'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      },
      checked: false,
      isCountDownShow: false
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      this.$router.push({ path: '/hycService' })
    },
    async onClick () {
      try {
        await this.$refs.loginIndex.validate('mobile')
      } catch (err) {
        return console.log('验证失败', err)
      }
      this.isCountDownShow = true
    }
  }
}
</script>

<style lang="less">
.login-countainer{
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background-image: url("../../assets/tydl/bg.png");
    background-size: cover;
    justify-content: center;
    align-items: center;
    .login-title{
        color: #fff;
        font-weight: 800;
    }
    .login-phone{
        display: inline-block;
        width: 90%;
    .login-icon{
        width: 16px;
        height: 20px;
        vertical-align: middle;
        margin-right: 12px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    }
}
.containet-cell /deep/{
// align-content: center;
align-items: center !important;;
background-color: transparent !important;
.van-field__control{
    color:#fff
}
::placeholder{
    color: #5C5C5C;
}
}
.login-span/deep/{
    .van-button__text{
    color:#624B0C;
    font-size: 20px;
    }
}
.send-sms-btn{
background-color: transparent;
color: #BEA473;
font-size: 14px;
border: transparent;
}
.login-deal{
    width: 90%;
    padding-left: 32px;
}
</style>
