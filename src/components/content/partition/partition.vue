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
          <el-button size="small" class="elbt1" @click="refreshMain"
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
import { refreshThrottle } from "common/throttle.js";
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
        timeout: null,
      },
    };
  },
  methods: {
    getrList() {
      this.rList = [];
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

    applyRefresh() {
      this.$bus.$emit("changeList", this.pName);
      console.log(111);
    },
    refreshMain() {
      //节流函数，抽离到throttle.js中 该方法返回一个函数，所以需要再调用一次
     let a= refreshThrottle(this.applyRefresh);
     a()
    },
    change(fun) {
      //节流函数，这里没有使用，只能在该组件使用，没有组件化所以不使用
      let that = this;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        fun.apply(that);
      }, 1000);
    },
  },
};
</script>

<style scoped>
.home-partition {
  position: relative;
  width: 84vw;
  margin: 5vh 8vw;
  min-width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  padding: 0;
  flex-direction: row;
}
.partition-recommend {
  display: flex;
  width: 78%;
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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20%;
}
.shit {
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  font-weight: 100;
  height: 10%;
}
</style>
