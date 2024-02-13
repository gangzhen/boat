<script>
export default {
  name: "PointsKayakRanking",
  data() {
    return {
      searchForm: {},
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      pageNum: 1,
      pageSize: 10,
      totalNum: 100,
    }
  },
  methods: {
    onSubmit() {
      console.log(1)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
}
</script>

<template>
  <div class="main-area">
    <div class="main-search">
      <el-form :model="searchForm" class="main-search-form">
        <el-form-item label="比赛项目">
          <el-input v-model="searchForm.user" placeholder="比赛项目"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="searchForm.user" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="searchForm.user" placeholder="年龄"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-input v-model="searchForm.user" placeholder="地区"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="searchForm.user" placeholder="排序"></el-input>
        </el-form-item>
        <el-form-item label="排名范围">
          <el-input v-model="searchForm.user" placeholder="排名范围"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="main-table">
      <el-table
          :data="tableData"
          stripe
          style="width: 100%">
        <el-table-column prop="date" label="日期" width="180" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>

      </el-table>
    </div>
    <div class="main-table-page">
      <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="totalNum">
      </el-pagination>
    </div>
  </div>
</template>

<style scoped>

</style>