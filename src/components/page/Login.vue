<template>
  <div class="login-wrap">
    <div class="login-title">Vue管理系统</div>
    <div class="login-form">
      <el-form :model="formModel" :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input v-model="formModel.username" placeholder="username"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formModel.password" @keyup.enter.native="submitForm('ruleForm')" type="password" placeholder="password"/>
        </el-form-item>
        <div class="login-submit">
          <el-form-item>
            <el-button class="submit-button" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <pre>{{$data}}</pre>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data: function () {
      return {
        formModel: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm: function (formName) {
        const self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            localStorage.setItem('sys_username', self.formModel.username);
            self.$router.push('/readme');
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login-title{
    margin: 60px auto;
    text-align: center;
  }

  .login-form{
    margin: 0 auto;
    width: 300px;
    height: 180px;
  }
  .login-submit .submit-button{
    width: 100%;
  }
</style>
