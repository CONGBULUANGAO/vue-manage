<template>
    <div class="header">
      <div class="header-title">后台管理系统</div>
      <div class="user-info">
        <el-dropdown @command="handlecommand" trigger="click">
          <span class="el-dropdown-link">
            <img class="user-logo" src="../../../static/img/img.jpg"/>
            {{username}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        name: 'www'
      }
    },
    computed: {
      username: function () {
        let username = localStorage.getItem('sys_username');
        return username ? username : this.name;
      }
    },
    methods: {
      handlecommand: function (command) {
        alert(command);
        if (command === 'logout') {
          localStorage.removeItem('sys_username');
          this.$router.push('/login');
        }
      }
    }
  }
</script>

<style>
  .header{
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #242f42;
  }
  .header .header-title{
    float: left;
    height: 100%;
    color: #fff;
    text-align: center;
  }
  .user-info{
    float: right;
    height: 100%;
  }
  .user-info .el-dropdown-link{
    vertical-align: middle;
    color: #fff;
  }
  .user-info .el-dropdown-link .user-logo{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top:15px;
  }
</style>
