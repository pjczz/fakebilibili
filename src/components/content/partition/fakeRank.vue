<template>
  <div class="fake-rank">
    <div class="rank-number">{{ fakeRankOrder + 1 }}</div>
    <div class="rank-content" @click="jumpPath(fakerRankObj.name)">{{ fakerRankObj.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    fakerRankObj: {
      type: Object,
      default() {
        return {};
      },
    },
    fakeRankOrder: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  methods:{
    
      jumpPath(keyword) {
        this.$router.push(`/search?keyword=${keyword}`);
      },
    
  },
};
</script>

<style>
.fake-rank {
  width: 100%;
  height: 9%;
  display: flex;
  flex-direction: row;
}
.rank-number {
  font-size: 14px;
  width: 10%;
  color: #9fbcdf;
}
.rank-content {
  margin-left: 20px;
  font-size: 14px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 20px;
  margin: 0;
}
</style>
