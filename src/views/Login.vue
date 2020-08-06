<template>
  <div>
    <mt-header title="学技术，到学问 ">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link to="/" slot="right">
        <mt-button icon="more">更多</mt-button>
      </router-link>
    </mt-header>
    <mt-field
      type="text"
      label="用户名"
      placeholder="请输入用户名"
      v-model="uname"
      :state="sname"
      @blur.native.capture="Checkname"
    ></mt-field>
    <mt-field
      type="password"
      label="密码"
      placeholder="请输入密码"
      v-model="password"
      :state="spassword"
      @blur.native.capture="Checkpass"
    ></mt-field>
    <mt-button type="primary" size="large" @click="log">快速登录</mt-button>
  </div>
</template>
<script >
export default {
  data() {
    return {
      uname: "",
      password: "",   
      sname:"",
      spassword:"",
  
    }
  },
  methods:{
      Checkname(){
          let unameRegExp=/^\w{6,10}$/;
          if(unameRegExp.test(this.uname)){
              this.sname="success";
              return true;
          }else{
              this.sname="error";
              return false;
          }
          
        },
    Checkpass(){
        let passwordRegExp=/^\w{8,20}$/;
          if(passwordRegExp.test(this.password)){
              this.spassword="success";
              return true;

          }else{
              this.spassword="error";
              return false;
          }
    },
      log(){
        if(this.Checkname()&& this.Checkpass()){
         
          // 如果所有信息都为合法的信息，则进行提交
          this.axios.post('/login','username='+this.uname+'&password='+this.password).then(res=>{
            // 登录成功
            if(res.data.code==1){
              this.$router.push('/');
            }else{
                this.$messagebox("登录提示","对不起，用户名或密码错误")

            }
          })
        }
      }
      
  }
}
</script>