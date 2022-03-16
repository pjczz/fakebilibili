<template>
  <div id="home">
    <el-container>
      <el-header>
        <navbar>
          <div slot="left" class="left-slot">
            <ul>
              <li >
                <a href="/home" class="bili-font">blibili</a>
                
              </li>
              <li><a href="#">番剧</a> </li>
              <li>

<el-popover
    placement="bottom-start"
    
    trigger="hover">
    <div class="game-main">
    <div class="game-left">
      <div class="game-left-top"><img src="~assets/img/game1.png" alt=""></div>
      <div class="game-left-bottom">
        <div class="game-left-bottom-item"><img src="~assets/img/game2.png" alt=""></div>
      <div class="game-left-bottom-item"> <img src="~assets/img/game3.png" alt="">
</div>
       <div class="game-left-bottom-item">  <img src="~assets/img/game4.png" alt="">
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
              <li>直播</li>
              <li>会员购</li>
              <li>漫画</li>
              <li>赛事</li>
              <li>下载App</li>
              
            </ul>
          </div>
          <div slot="center"></div>
          <div slot="right"></div>
        </navbar>
        <div class="banner"><img src="~assets/img/b-banner.jpg" alt=""></div>
        <el-main>

        </el-main>
      </el-header>
    </el-container>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";

export default {
  name: "home",
  components: {
    navbar,
  },
};
</script>

<style>
li{
  list-style: none;
  height: 100%;
}
#app {
}
.el-container {
  min-width: 1300px;
  background-image: linear-gradient(rgba(0,0,0,.5),rgba(97,112,94,.1));


}
.el-header ul{
   display: flex;
  padding: 0;
  margin-top: 16px;
  justify-content: space-around;
  height: 100%;
}
.el-header li{
  height: 20px;
  font-size: 14px;
  color: #fff;
 
  
}
.el-header a{
  text-decoration: none;
  color: #fff;
}
.bili-font{

  font-weight: 300;
  font-size: 20px;
    
}


.left-slot{
  height: 100%;
}
.banner{
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
.banner img{
  height: 100%;
  width: 100%;
}
/* 隐藏的弹出栏 */
.game-main{
  width: 350px;
  height: 200px;
 
  background-color: #fff;
  display: flex;}
.game-left{
  flex:2;
  cursor: pointer;
}













.game-left-top img{
  width: 100%;
}
.game-left-bottom{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 210px;
}
.game-left-top img{
  width: 100%;
  height: 100%;
 
}
.game-left-bottom-item{
  display: flex;
  flex-direction: row;
  width: 60px;
  height: 60px;
  cursor: pointer;
  
}
.el-divider{
  height: 100%;
  width: 2px;
}

.game-right{
  display: flex;
  flex-direction: column;
  margin-top:16px ;
}
.game-right div{
  display: flex;
  flex: 1;
  flex-direction: column;
}
.game-left-top{
  margin: 10px 0px;
  width: 210px

}



/* main区域css */
.el-main{
  height: 100%;
  
  
}

</style>