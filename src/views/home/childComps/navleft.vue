<template>
            <div class="left-slot">
            <ul>
              <li>
                <a href="/home" class="bili-font">blibili</a>
              </li>
              <li><a href="#">番剧</a></li>
              <li>
                <el-popover placement="bottom-start" trigger="hover">
                  <div class="game-main">
                    <div class="game-left">
                      <div class="game-left-top">
                        <img src="~assets/img/game1.png" alt="" />
                      </div>
                      <div class="game-left-bottom">
                        <div class="game-left-bottom-item">
                          <img src="~assets/img/game2.png" alt="" />
                        </div>
                        <div class="game-left-bottom-item">
                          <img src="~assets/img/game3.png" alt="" />
                        </div>
                        <div class="game-left-bottom-item">
                          <img src="~assets/img/game4.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <el-divider direction="vertical"></el-divider>
                    <div class="game-right">
                      <div>漫威超级战争</div>
                      <div>代号：弥弥尔</div>
                      <div>LOL全球总决赛</div>
                      <div>NBA决赛让3追4</div>
                      <div>数码宝贝：新纪元</div>
                      <div>我的世界66</div>
                    </div>
                  </div>

                  <a slot="reference">游戏中心</a>
                </el-popover>
              </li>
              <li>
                <el-popover placement="bottom-start" trigger="hover">
                  <div class="live-main">
                    <div class="live-left">
                      <div class="live-left-content">热门直播:</div>
                      <div class="live-left-top">
                        <div class="live-item">
                          <img src="~assets/img/zhubo1.png" alt="" />
                          <div>坏学姐</div>
                        </div>
                        <div class="live-item">
                          <img src="~assets/img/zhubo2.png" alt="" />
                          <div>喵喵喵</div>
                        </div>
                        <div class="live-item">
                          <img src="~assets/img/zhubo3.png" alt="" />
                          <div>甜幼学妹</div>
                        </div>
                      </div>
                      <div class="live-left-bottom">
                        <div class="live-item">
                          <img src="~assets/img/zhubo4.png" alt="" />
                          <div>要柔柔</div>
                        </div>
                        <div class="live-item">
                          <img src="~assets/img/zhubo5.png" alt="" />
                          <div>琉璃不琉璃</div>
                        </div>
                        <div class="live-item">
                          <img src="~assets/img/zhubo6.png" alt="" />
                          <div>梦里有我</div>
                        </div>
                      </div>
                    </div>
                    <el-divider direction="vertical"></el-divider>
                    <div class="live-right">
                      <div class="live-right-content">热门活动</div>
                      <div class="live-right-img">
                        <img src="~assets/img/hot.png" alt="" />
                        <img src="~assets/img/hot2.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <a slot="reference">直播</a>
                </el-popover>
              </li>
              <li><a href="#">会员购</a></li>
              <li>
                <el-popover
                  placement="bottom-start"
                  trigger="hover"
                  title="标题"
                  content="漫画漫画漫画"
                >
                <a slot="reference">漫画</a>
                </el-popover>
              </li>
              <li><a href="#">赛事</a></li>
              <li>
                <el-popover
   
   placement="bottom-start"
   trigger="hover"
 >
               
               
               
               
                <div class="download-app">
                  <img src="~assets/img/saoma.png" alt="">
                </div>
                  <a slot="reference"> <i class="el-icon-mobile-phone"></i>下载App</a>
                </el-popover>
              </li>
            </ul>
          </div>
</template>

<script>
export default {
name:'navLeft'
}
</script>

<style>
.bili-font {
  font-weight: 300;
  font-size: 20px;
}

.left-slot {
  height: 100%;
}















/* 隐藏的 游戏弹出栏 */
.game-main {
  width: 350px;
  height: 183.63px;

  background-color: #fff;
  display: flex;
}
.game-left {
  flex: 2;
  cursor: pointer;
}
.game-left-top {
  margin: 0;
  width: 210px;
}
.game-left-top img {
  width: 100%;
  height: 100%;
}
.game-left-bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 210px;
}
.game-left-bottom-item {
  display: flex;
  flex-direction: row;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.el-divider {
  height: 100%;
  width: 2px;
}

.game-right {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}
.game-right div {
  display: flex;
  flex: 1;
  flex-direction: column;
}

/* 弹出框直播模块 */
.live-main {
  width: 400px;
  height: 210.36px;
  display: flex;
}
.live-left {
  width: 220px;
  display: flex;
  flex-direction: column;
}
.live-left-content {
  width: 100%;
  height: 22.39px;
  font-size: 16px;
  color: #ec81a7;
}
.live-item {
  margin-top: 10px;
  display: flex;
  width: 61.59px;
  justify-content: space-between;
  flex-direction: column;
  font-size: 12px;
  text-align: center;

  overflow: hidden;
}
.live-item div {
  margin-top: 5px;
}

.live-item img {
  width: 100%;
  cursor: pointer;

  border-radius: 50%;
}
.live-left-top {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex: 1;
  justify-content: space-around;
}
.live-left-bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex: 1;
  justify-content: space-between;
}
.live-right {
  width: 160px;
}
.live-right-content {
  width: 100%;
  height: 22.39px;
  font-size: 16px;
  color: #ec81a7;
}
.live-right-img {
  width: 160px;
}
.live-right-img img {
  width: 100%;
  padding-top: 20px;
  cursor: pointer;
}
/* app下载区域 */
.download-app{
  width: 200px;
  height: 151.98px;
}
.download-app img{
  width: 100%;
}

</style>