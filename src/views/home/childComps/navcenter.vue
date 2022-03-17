<template>
  <div class="center-slot">
    <el-input
  
  
  
  placeholder="请输入内容"
  >
</el-input>
<el-button type="info" class="search-button">
  <i class="el-icon-search"></i>
</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.center-slot{
  display: flex;
  flex-direction:row ;
  padding: 0;
}
.el-input__inner{
  height: 40px;
}
.search-button{
      background: #e7e7e7;
      width: 48px;
    height: 40px;
    margin: 0;
    padding: 0;
    transform: translateY(0px);
    color: #505050;
}
.el-icon-search{
  color: blue;
}
</style>