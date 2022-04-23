<template>
  <div class="nav-bar">
    
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
  display: flex;
  height: 54px;
  width: 100%;
}
.nav-bar .left{
  
  width: 434px;
}
.nav-bar .center{
  flex: 1;
  margin: 10px;
}
.nav-bar .right{
  width: 454px;
}
</style>