<template>
  <div class="center-slot">
    <div class="search-area" @mouseleave="changeIsShow" >
      <el-input placeholder="请输入内容" @focus="changeIsShow" v-model="input" >
      </el-input>
      <div class="hot-search-area" v-show="isShow">
        <div
          class="hot-search-item"
          v-for="(item, index) in hotSearch"
          :key="index"
          @click="jumpPath(item.keyword)"
        >
         <div style="font-size:14px;margin:10px 20px;">{{ index+1 }}</div >  <div style="font-size:14px;margin:10px 20px;">{{ item.keyword }}</div>  
          <img :src="item.icon" alt="" style="height: 14px;margin:10px 0;"  />
        </div>
      </div>
    </div>
    <el-button type="info" class="search-button" @click="jumpPath(input)">
      <i class="el-icon-search"></i>
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    hotSearch: {
      tyep: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    hotSearch: function (val) {
      this.hotSearch = val;
    },
  },
  data() {
    return {
      isShow: false,
      input: "",
    };
  },
  methods: {
    changeIsShow() {
      this.isShow = !this.isShow;
    },
    jumpPath(keyword) {
      
      if(keyword){this.$router.push(`/search?keyword=${keyword}`);}
      
    },
  },
};
</script>

<style scoped>
.center-slot {
  display: flex;
  flex-direction: row;
  padding: 0;
  flex: 1;
}
.search-area {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.hot-search-area {
  height: 300px;
  width: 100%;
  background-color: #fff;
  overflow-y: scroll;
  z-index: 100;
}
.hot-search-item {
  height: 12%;
  width: 100%;
  display: flex;
  justify-content: row;
  align-content: center;
}
.hot-search-item:hover {
  background-color: #f3f5f8;
  
  
}
.el-input__inner {
  height: 40px;
}
.search-button {
  background: #e7e7e7;
  width: 48px;
  height: 40px;
  margin: 0;
  padding: 0;
  transform: translateY(0px);
  color: #505050;
}
.el-icon-search {
  color: blue;
}
</style>
