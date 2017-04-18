<template>
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i>表格</el-breadcrumb-item>
        <el-breadcrumb-item>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column label="日期" width="180">
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag>{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button size="small" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination layout="prev , pager, next" :total="1000"/>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'basetable',
    data: function () {
      return {
        tableData: [
          {date: '2016/01/01', name: '隔壁老王1', address: '火星一号'},
          {date: '2016/01/02', name: '隔壁老王2', address: '火星二号'},
          {date: '2016/01/03', name: '隔壁老王3', address: '火星三号'},
          {date: '2016/01/04', name: '隔壁老王4', address: '火星四号'},
          {date: '2016/01/05', name: '隔壁老王5', address: '火星五号'},
          {date: '2016/01/06', name: '隔壁老王6', address: '火星六号'}
        ]
      }
    },
    methods: {
      handleEdit: function (index, row) {
        alert('编辑第' + index + '行');
      },
      handleDelete: function (index, row) {
        alert('删除第' + index + '行');
      }
    }
  }
</script>

<style>

</style>
