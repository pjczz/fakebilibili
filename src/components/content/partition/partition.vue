<template>
  <div class="home-partition">
    <div class="partition-recommend">
      <div class="partition-recommend-top">
        <div><img src="~assets/img/magic.png" alt="" /></div>
        <span
          ><slot
            ><div>{{ pName }}</div></slot
          ></span
        >
      </div>
      <div class="partition-recommend-main">

<partitionItem v-for="(item,i) in pList" key="i"></partitionItem>

      </div>
    </div>

    <div class="partition-rank"></div>
  </div>
</template>

<script>
import partitionItem from "./partitionItem.vue"
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
    rList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components:{
    partitionItem,
  },
};
</script>

<style>
.home-partition {
  position: relative;
  width: 84vw;
  margin: 0 8vw;
  min-width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35vh;
  padding: 0;
  flex-direction: row;
}
.partition-recommend {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
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
}
.partition-recommend-main {
  height: 87.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.partition-rank {
  height: 100%;
  width: 25%;
}
</style>
