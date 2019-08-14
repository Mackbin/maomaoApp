<template>
    <div class="login-wrap">
        <van-row type="flex" justify="center" class="login-add">
            <van-col span="30">
                <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" @click-icon="username=''" :error-message="userErr" />

                <van-field v-model="password" type="password" required clearable label="密码" placeholder="请输入密码" @click-icon="username=''" :error-message="passErr" />

                <van-field v-model="password2" type="password" required clearable label="重复密码" placeholder="请重复输入密码" @click-icon="username=''" :error-message="passErr" />
            <van-button size="small" round type="primary">注  册</van-button>
            <van-button class="login-up" size="small" round type="info" @click="login">登  录</van-button>
            </van-col>
        </van-row>
        
    </div>
</template>

<script>

export default {
   name: 'login',
  components: {},
   data() {
       return {
        msg:'注册页面',
		username:'',
		password:'',
		password2:'',
		userErr:'用户名不能为空',
		passErr:'密码不能为空'
       }
   },
    methods: {
        login() {
            this.$router.push({name:'movie'});
        }
  } 
}
</script>

<style scoped lang="stylus">
.login-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('../../assets/images/login_log.jpg') no-repeat ;
  background-size: 100% 100%;
//   background-position: left top -72px; //可以调整图片的位置
    .login-add{
        position absolute;
        border-radius: 2vh;
        box-shadow: 1px 1px 3px rgba(0,0,0,.3);
        margin-top: 40vh;
        margin-left: 6.5vh;
    }
    .van-cell{
        background-color: #ffffff4a;
    }
    .login-up{
        margin-left: 25vh
    }
}
</style>
