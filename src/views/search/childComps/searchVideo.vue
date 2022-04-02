<template>
  <div class="search-video-item" @click="gogogo(mainData.arcurl)">
    <div class="search-video-img">
      <img v-lazy="mainData.pic" alt="" />
      <div class="video-duration">{{ mainData.duration }}</div>
    </div>
    <div class="search-video-bottom">
      <div v-html="mainData.title" class="search-video-title"></div>

      <div class="search-video-info">
        <div class="shit">
          <i class="el-icon-video-play"></i>
          {{ getPlayNumber(mainData.play )}}
          <i class="el-icon-refresh"></i>
          {{ getPublishTime(mainData.pubdate) }}
        </div>
        <div class="search-video-owner">
          <div class="owner-logo">
            <img src="~assets/img/bilitv.png" alt="" />
          </div>
          <div class="owner-name">{{ mainData.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainData: {
      type: Object,
      default: {},
    },
    duration: {
      type: String,
      default: "",
    },
    publishTime: {
      tyep: String,
      default: "",
    },
  },
  methods: {
    getPublishTime(time) {
      var ptime = new Date(time * 1000);
      return (
        ptime.getFullYear() +
        "-" +
        (ptime.getMonth() + 1) +
        "-" +
        ptime.getDate()
      );
    },
    getPlayNumber(view) {
     
      return view > 10000 ? Math.round(view / 1000) / 10 + "万" : view;
    },
    gogogo(val){
      
      window.location=val;
    }
  },
};
</script>

<style scoped>
.search-video-item {
  display: flex;
  width: 18%;
  height: auto;
  flex-direction: column;
  margin: 20px 0;
  border: 2px solid #E5E9EF;
  cursor: pointer;
}
.search-video-item:hover{
  background-color:#F5F5F5 ;
}
.search-video-img img {
  width: 100%;
  height: auto;
}
.search-video-img {
  position: relative;
  overflow: hidden;
  height: 114.23px;
  
}
.search-video-title {
  font-size: 12px;
  font-weight: 100;
  width: 100%;
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-video-owner {
  font-size: 8px;
  height: 30px;
  color: #99a2aa;

  display: flex;
  flex-direction: row;
  justify-content: start;
  line-height: 100%;
  align-items: center;
}
.search-video-info{
  
}
.owner-logo {
  height: 100%;
}
.owner-logo img {
  height: 100%;
}
.search-video-bottom {
}
.video-duration {
  width: 40px;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6),
    hsla(0, 0%, 46.7%, 0.1)
  );
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(-5px);
  color: #fff;
  font-weight: 100;
}
.shit{
  font-size: 13px;
  color: #99a2aa;
  padding: 10px 0;
}
</style>
