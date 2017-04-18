<template>
    <div class="sidebar">
      <el-menu default-active="onRoute" theme="dark" unique-opened router>
        <el-menu-item index="readme">
         <i class="el-icon-setting"></i> 自述
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>表格
          </template>
          <el-menu-item index="basetable">基础表格</el-menu-item>
          <el-menu-item index="vuetable">Vue表格组件</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-date"></i>表单
          </template>
          <el-menu-item index="3-1"><img />表单1</el-menu-item>
          <el-menu-item index="3-2">表单2</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <span slot="title">
            <i class="el-icon-star-on"></i>图表
          </span>
          <el-menu-item index="4-1">图表1</el-menu-item>
          <el-menu-item index="4-2">图表2</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
  export default {
    name: 'slidebar',
    computed: {
      onRoute: function () {
        return this.$route.path.replace('/', '');
      }
    }
  }
</script>

<style>
  .sidebar{
    background-color: #324157;
    position: absolute;
    margin-top: 0px;
    height: 100%;
    width: 150px;
  }
</style>
