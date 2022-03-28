<template>
  <div id="home">
    <div id="cover" v-if="isPhone">
      <div class="cover-content"><h2>本项目面向PC端 </h2>
      <h2>未做移动端相关的处理</h2> 
      <h2>不便之处，敬请体谅</h2>
      <img src="~assets/img/music_icon_pay_success.png" alt="">
      
      </div>
    </div>
    <el-container>
      <el-header>
        <navbar>
          <div slot="left"><navLeft></navLeft></div>

          <div slot="center"><navCenter :hotSearch="hotData"></navCenter></div>
          <div slot="right"><navRight></navRight></div>
        </navbar>
        <div class="banner"><img src="~assets/img/b-banner.jpg" alt="" /></div>
      </el-header>
      <el-main>
        <!-- tab栏 -->
        <div class="home-tab">
          <div class="home-tab-left">
            <img src="~assets/img/toulan.png" alt="" />
          </div>
          <div class="home-tab-right"></div>
          <img src="~assets/img/toulanla.png" alt="" />
        </div>
        <!-- 轮播图加推荐栏 -->
        <div class="home-recommend">
          <div class="home-swiper">
            <el-carousel trigger="click" :autoplay=false  height="100%">
              <el-carousel-item v-for="(item, i) in swiperList" :key="i">
                <div @click="jumpPath(item.title)" id="tobe">
                  <img class="swiper_img" v-lazy="item.pic" />
                  <div class="swiper_title">{{ item.title }}</div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="home-recommend-item">
            <div
              class="recommend-item"
              v-for="(item, i) in swiperList_r"
              :key="i"
              @click="jumpPath(item.title)"
            >
              <img v-lazy="item.pic" alt="" />
              <div>{{ item.title }}</div>
            </div>
          </div>
        </div>
        <!-- 分区 完结动画 -->
        <partition pName="连载动画" :pList="animationList"></partition>
        <partition pName="宅舞" :pList="danceList"></partition>
        <partition pName="单机游戏" :pList="gameList"></partition>
        <partition pName="原创音乐" :pList="musicList"></partition>
        <partition pName="美妆护肤" :pList="fashionList"></partition>
        <div class="home-bottom">
          <img src="~assets/img/footer.png" alt="" />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";
import navLeft from "./childComps/navleft.vue";
import navRight from "./childComps/navright.vue";
import navCenter from "./childComps/navcenter.vue";
import partition from "components/content/partition/partition";
import axios from "axios";
export default {
  name: "home",
  components: {
    navbar,
    navLeft,
    navRight,
    navCenter,
    partition,
  },
  data() {
    return {
      tabsLeftList: [
        { id: 1, name: "首页", background: "#ff5c7c", class: "icon-shouye" },
        {
          id: 2,
          name: "动态",
          background: "#73c9e5",
          class: "icon-iconfontdongtai",
        },
        { id: 3, name: "热门", background: "#ff716d", class: "icon-remen" },
        {
          id: 4,
          name: "频道",
          background: "#6dc781",
          class: "icon-icon_bilibili-circle",
        },
      ],
      tabsList: [],
      tabsRightList: [
        { name: "专栏", color: "#54e2e2", class: "icon-zhuanlan" },
        { name: "活动", color: "#f39800", class: "icon-huodong" },
        { name: "小黑屋", color: "#ffd043", class: "icon-tianping" },
        { name: "直播", color: "#23ade5", class: "icon-15" },
        { name: "课堂", color: "#ffea85", class: "icon-jingpinketang" },
        { name: "音乐PLUS", color: "#3da9d3", class: "icon-yinle" },
      ],
      // 页面数据
      mainDataList: [],
      // 轮播图数据
      swiperList: [],
      // 轮播图右边数据
      swiperList_r: [],
      // 动画模块数据
      animationList: [],
      // 舞蹈模块数据
      danceList: [],
      // 游戏模块数据
      gameList: [],
      // 音乐模块数据
      musicList: [],
      // 时尚模块数据
      fashionList: [],
      // 热搜数据
      hotData: [],
      isPhone:false,
    };
  },
  created() {
    // 获取tab栏数据
    this.getTabsList();
    // 获取所有的数据
    this.getMainDataList();

    // 获取热搜数据
    this.getHotData();
  },
  beforeMount(){
    if (!this.isPc()) {
  this.isPhone=true
}
  },
  
  watch: {
    animationList(val) {
      this.$forceUpdate();
    },
  },
  mounted() {
    // 事件总线 接收换一换发出的事件
    this.$bus.$on("changeList", (mdnameItem) => {
      if (mdnameItem === "连载动画") {
        this.getAnimationList();
      } else if (mdnameItem === "宅舞") {
        this.getDanceList();
      } else if (mdnameItem === "单机游戏") {
        this.getGameList();
      } else if (mdnameItem === "原创音乐") {
        this.getMusicList();
      } else if (mdnameItem === "美妆护肤") {
        this.getFashionList();
      } else {
        this.$message.error("换一换，数据更新失败");
      }
    });
  },
  methods: {
    // 获取tabs栏的数据
    async getTabsList() {
      const { data: res } = await axios.get(
        "https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList"
      );
      if (res.code !== 0) {
        return;
      }
      // console.log(res.data.navList);
      this.tabsList = res.data.navList;
    },
    // 获取所有的数据
    async getMainDataList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/index/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 保存所有数据
      this.mainDataList = res;
      // 获取轮播图和他旁边内容的数据
      for (let i = 0; i < 4; i++) {
        this.swiperList.push(res.douga[i]);
      }
      for (let i = 4; i < 10; i++) {
        this.swiperList_r.push(res.douga[i]);
      }
      // 获取动画数据
      for (let i in res.bangumi) {
        this.animationList.push(res.bangumi[i]);
      }
      // 获取舞蹈数据
      for (let i in res.dance) {
        this.danceList.push(res.dance[i]);
      }
      // 获取游戏数据
      for (let i in res.game) {
        this.gameList.push(res.game[i]);
      }
      // 获取音乐数据
      for (let i in res.music) {
        this.musicList.push(res.music[i]);
      }
      // 获取时尚数据
      for (let i in res.fashion) {
        this.fashionList.push(res.fashion[i]);
      }
    },
    // 获取动画数据
    async getAnimationList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/index/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 清空数组
      this.animationList.splice(0, this.animationList.length);
      for (let i in res.bangumi) {
        this.animationList.push(res.bangumi[i]);
      }
    },
    // 获取舞蹈数据
    async getDanceList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/index/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 清空数组
      this.danceList.splice(0, this.danceList.length);
      for (let i in res.dance) {
        this.danceList.push(res.dance[i]);
      }
    },
    // 获取游戏数据
    async getGameList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/index/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 清空数组
      this.gameList.splice(0, this.gameList.length);
      for (let i in res.game) {
        this.gameList.push(res.game[i]);
      }
    },
    // 获取音乐数据
    async getMusicList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/index/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 清空数组
      this.musicList.splice(0, this.musicList.length);
      for (let i in res.music) {
        this.musicList.push(res.music[i]);
      }
    },
    // 获取时尚数据
    async getFashionList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/index/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 清空数组
      this.fashionList.splice(0, this.fashionList.length);
      for (let i in res.fashion) {
        this.fashionList.push(res.fashion[i]);
      }
    },
    // 获取热搜数据
    async getHotData() {
      const { data: res } = await this.$axiosbili({
        url: "/hot/main/hotword",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      this.hotData = res.list;
    },
    // 点击跳转路径
    jumpPath(keyword) {
      console.log('hh')
      this.$router.push(`/search?keyword=${keyword}`);
    },
    isPc() {
      let identifier = navigator.userAgent;
      console.log(identifier);
      let Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod",
      ];
      let flag = true;
      for (let v = 0; v < Agents.length; v++) {
        if (identifier.indexOf(Agents[v]) > 0) {
          flag = false;
          return flag;
        }
      }
      return true;
    },
  },
};
</script>

<style scoped>
#cover{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
#cover .cover-content{
  position: absolute;
  width: 100vw;
  height: 100vh;
  text-align: center;

}
.home-swiper ul{
  height:50px ;
  
}
.cover-content img{
  width: 100%;

}
li {
  list-style: none;
  height: 100%;
}
#app {
  font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB,
    Heiti SC, WenQuanYi Micro Hei, sans-serif;
}
.el-container {
  min-width: 1300px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(97, 112, 94, 0.1));
}
.el-header ul {
  display: flex;
  padding: 0;
  margin-top: 16px;
  justify-content: space-around;
  height: 100%;
}
.el-header li {
  height: 20px;
  font-size: 14px;
  color: #fff;
}
.el-header a {
  text-decoration: none;
  color: #fff;
}
.banner {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 9.5vw;
  min-height: 155px;
  z-index: -1;
  min-width: 1300px;
}
.banner img {
  height: 100%;
  width: 100%;
}

/* main区域css */
.el-main {
  position: absolute;
  top: 200px;
  left: 0;
  width: 100%;
  overflow: hidden;
  padding: 0;
}
.home-tab {
  height: 108px;
  width: 84vw;
  margin: 0 8vw;
  min-width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 108px;
  padding: 0;
}
.home-tab-left {
  width: 200px;
  height: 86px;
}
.home-tab-right {
  width: 216px;
  height: 52px;
}
.home-swiper {
  width: 550px;
  height: 100%;
  border: 2px solid;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
}
.home-swiper ul{
  height: 50px;
}
.el-carousel__container, .el-carousel {
  height: 100%;
}
.el-carousel__container{
  height: 100%;
}
.home-swiper img {
  width: 100%;
  height: 100%;
}
.swiper_title {
  color: #fff;
  font-size: 20px;
  transform: translateY(-100px);
}
.home-recommend {
  height: 35vh;
  width: 84vw;
  margin: 0 8vw;
  min-width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}
.home-recommend-item {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: inherit;
  justify-content: space-between;

  height: 100%;
  margin-left: 15px;
}
.recommend-item:nth-child(n + 4) {
  align-self: flex-end;
}
.recommend-item {
  position: relative;
  width: 32%;
  height: 48%;
  display: flex;
  border: 2px solid #fff;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
}
.recommend-item div {
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  height: 20px;
  text-overflow: ellipsis;
  font-size: 16px;
  color: #fff;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6),
    hsla(0, 0%, 46.7%, 0.1)
  );
}
.recommend-item img {
  width: 100%;
  height: 100%;
}
</style>
