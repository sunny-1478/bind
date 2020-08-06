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
    <mt-field
      type="password"
      label="密码"
      placeholder="请再次输入密码"
      v-model="password2"
      :state="spassword2"
      @blur.native.capture="Checkpass2"
    ></mt-field>
    <mt-button type="primary" size="large" @click="reg">免费注册</mt-button>
  </div>
</template>
<script >
export default {
  data() {
    return {
      uname: "",
      password: "",
      password2: "",
      sname: "",
      spassword: "",
      spassword2: "",
    };
  },
  methods: {
    Checkname() {
      let unameRegExp = /^\w{6,10}$/;
      if (unameRegExp.test(this.uname)) {
        this.sname = "success";
        return true;
      } else {
        this.sname = "error";
        return false;
      }
    },
    Checkpass() {
      let passwordRegExp = /^\w{8,20}$/;
      if (passwordRegExp.test(this.password)) {
        this.spassword = "success";
        return true;
      } else {
        this.spassword = "error";
        return false;
      }
    },
    Checkpass2() {
      if (this.password2 == this.password) {
        this.spassword2 = "success";
        return true;
      } else {
        this.spassword2 = "error";
        return false;
      }
    },
    reg() {
      if (this.Checkname() && this.Checkpass() && this.Checkpass2()) {
        // 如果所有信息都为合法信息，则进行提交
        this.axios.post('/register','username='+ this.uname+'&password='+this.password).then((res) => {
          if(res.data.code==0){
            this.$messagebox("注册提示","对不起，用户已经存在");
          }else{
            this.$router.push('/');
          }
        });
      }
    },
  },
};
</script>