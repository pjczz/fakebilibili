<template>
  <div class="home-partition">
    <div class="partition-recommend">
      <div class="partition-recommend-top">
        <div>
          <img src="~assets/img/magic.png" alt="" />
          <span style="font-size: 20px">
            {{ pName }}
          </span>
        </div>
        <div>
          <el-button size="small" class="elbt1"
          @click="refreshMain"
            >换一换 <i class="el-icon-refresh"></i
          ></el-button>
          <el-button size="mini" class="elbt2">更多</el-button>
        </div>
      </div>

      <div class="partition-recommend-main">
        <partitionItem
          v-for="(item, i) in pList"
          :key="i"
          :pItemObj="item"
        ></partitionItem>
      </div>
    </div>

    <div class="partition-rank">
      <div class="shit">排行榜：</div>
      <fakeRank
        v-for="(item, index) in rList"
        :key="index"
        :fakerRankObj="item"
        :fakeRankOrder="index"
      ></fakeRank>
    </div>
  </div>
</template>

<script>
import partitionItem from "./partitionItem.vue";
import fakeRank from "./fakeRank.vue";
export default {
  name: "partition",
  props: {
    pName: {
      type: String,
      default() {
        return "";
      },
    },
    pList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    partitionItem,
    fakeRank,
  },
  watch: {
    pList: "getrList",
  },
  mounted() {},
  updated() {},
  data() {
    return {
      rList: [],
      rListObj: {
        name: "",
        playnum: 0,
      },
    };
  },
  methods: {
    getrList() {
      for (let item of this.pList) {
        this.rList.push({ name: item.title, playnum: item.stat.view });
      }
      
      this.rList = this.rList.sort(function (a, b) {
        return b.playnum - a.playnum;
      });
     
    },
  
  ranking(obj1, obj2) {
    var val1 = obj1.playnum;
    var val2 = obj2.playnum;
    if (val1 < val2) {
      return 1;
    }
    if (val1 == val2) {
      return 0;
    }
    if (val1 > val2) {
      return -1;
    }
  },
  refreshMain(){
    
    this.$bus.$emit('changeList',this.pName)
  },
  },
};
</script>

<style>
.home-partition {
  position: relative;
  width: 84vw;
  margin: 5vh 8vw;
  min-width: 1170px;
  display: flex;

  align-items: center;
  height: 50vh;
  padding: 0;
  flex-direction: row;
}
.partition-recommend {
  display: flex;
  width: 100%;
  flex-direction: column;

  height: 100%;
}
.partition-recommend-top {
  top: 15%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 12.5%;

  justify-content: space-between;
}
/* 两个按钮 */
.elbt1 {
  color: black;
  font-size: 14px;
  width: 150px;
}
.elbt2 {
  color: black;
  font-size: 16px;
}
.partition-recommend-main {
  height: 87.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.partition-rank {
  height: 100%;
  width: 25%;
}
.shit {
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  font-weight: 100;
  height: 10%;
}
</style>
