<template>
  <div class="partition-item" >
    <div @click="jumpPath(pItemObj.title)">
    <div class="main-img">
      <img :src="pItemObj.pic" alt="" />
      <div class="sanlian">
        <i class="el-icon-video-play" style="color: #ff4d4f"></i>
        {{ getPlayNumber }}
        <img src="~assets/img/dianzan.png" style="width: 12px" alt="" />
        {{ getLikeNumber }}
        <img src="~assets/img/bi.png" style="width: 12px" />{{ getCoinNumber }}
      </div>
      <div class="time-long">{{ getDuration }}</div>
    </div>
    <div class="title">{{ pItemObj.title }}</div>

    <div class="owner">
      <img src="~assets/img/bilitv.png" alt="" />{{ pItemObj.owner.name }}
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "partitionItem",
  props: {
    pItemObj: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    getPlayNumber() {
      let view = this.pItemObj.stat.view;
      return view > 10000 ? Math.round(view / 1000) / 10 + "万" : view;
    },
    getLikeNumber() {
      let like = this.pItemObj.stat.like;
      return like > 10000 ? Math.round(like / 1000) / 10 + "万" : like;
    },
    getCoinNumber() {
      let coin = this.pItemObj.stat.coin;
      return coin > 10000 ? Math.round(coin / 1000) / 10 + "万" : coin;
    },
    getDuration() {
      let time = this.pItemObj.duration;
      let h = parseInt(time / 3600);
      let min = parseInt(time / 60);
      let second = time % 60;
      if (second < 10) {
        second = "0" + second;
      }

      if (h > 0) {
        if (min < 10) {
          min = "0" + min;
        }
        return h + ":" + min + ":" + second;
      } else {
        return min + ":" + second;
      }
    },
    jumpPath(keyword) {
      
      this.$router.push(`/search?keyword=${keyword}`);
    },
  },
};
</script>

<style scoped>
.partition-item {
  width: 18%;
  display: flex;
  height: 50%;
  flex-direction: column;
  position: relative;
}
.main-img {
  position: relative;
  border: 2px solid #fff;
  border-radius: 10px;
  overflow: hidden;
  height: 60%;
}
.main-img img {
  width: 100%;
  height: auto;
}
.title {
  width: 100%;
  font-size: 14px;
}
.sanlian {
  font-size: 12px;
  position: absolute;
  left: 5px;
  bottom: 5px;

  color: #fff;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6),
    hsla(0, 0%, 46.7%, 0.1)
  );
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 20px;
}
.owner {
  font-size: 10px;
  position: absolute;
  left: 5px;
  bottom: 0px;
}
.owner img {
  width: 16px;
  height: auto;
  transform: translateY(5px);
}
.time-long {
  position: absolute;
  right: 5px;
  top: 0;
  color: #fff;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6),
    hsla(0, 0%, 46.7%, 0.1)
  );
  font-size: 12px;
}
</style>
