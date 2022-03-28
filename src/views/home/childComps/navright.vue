<template>
  <div class="right-slot">
    <ul class="right-slot-ul">
      <li><img src="~assets/img/game3.png" alt="" class="touxiang" /></li>
      <li>
        <el-popover
  trigger="hover"
  placement="bottom-start"
>
        <div class="big-member">
          <p>精彩推荐</p>
          <img src="~assets/img/bighuiyuan.png" alt="">
        </div>
        <a slot="reference">大会员</a>  
        </el-popover>
        </li>
      <li>
        <el-popover
          trigger="hover"
          placement="bottom-start"
          content="消息消息消息消息"
          title="消息"
        >
          <a slot="reference">
            <el-badge :value="8" class="item">消息</el-badge></a
          >
        </el-popover>
      </li>
      <li>
        <el-popover
          trigger="hover"
          placement="bottom-start"
          content="动态动态动态动态动态"
          title="动态"
        >
          <a slot="reference">
            <el-badge :value="99" type="danger">动态</el-badge></a
          >
        </el-popover>
      </li>
      <li>
        <el-popover
          trigger="hover"
          placement="bottom-start"
          content="收藏收藏收藏收藏"
          title="收藏"
        >
          <a slot="reference"> 收藏</a>
        </el-popover>
      </li>
      <li>
          <el-popover
    trigger="hover"
    placement="bottom-start"
    content="历史历史历史历史"
    title="历史"
  >
    <a slot="reference"> 历史</a>
  </el-popover>
      </li>
      <li>创作中心</li>
      <li><el-button type="danger" size="mini">投稿</el-button></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.right-slot {
  width: 100%;
  height: 20px;
}
.right-slot-ul {
  display: flex;
  justify-content: space-around;
  justify-items: flex-end;
}

.right-slot-ul li {
  display: flex;

  height: 100%;
  cursor: pointer;
}
.touxiang {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  transform: translateY(-25%);
}
.big-member{
  transform: translateY(-15%);
margin-top:0 ;
}
.el-button{
  width: 70px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  transform: translateY(-20%);
}
</style>
