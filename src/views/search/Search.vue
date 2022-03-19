<template>
  <div class="search">
    <el-container>
      <el-header>
        <navbar>
          <div slot="left"><navleft></navleft></div>

          <div slot="right"><navright></navright></div>
        </navbar>
      </el-header>
      <el-main>
        <div class="search-head">
          <div class="search-head-search"></div>
          <div class="search-head-tab"></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";
import navleft from "../home/childComps/navleft";

import navright from "../home/childComps/navright";
export default {
  name: "search",
  components: {
    navbar,
    navleft,

    navright,
  },
  data() {
    return {
      // 搜索输入框的数据  url 上的keyword
      searchInput: this.$route.query.keyword,
      // 激活的tabs
      tabsActiveName: "first",
      // 展开name为1的折叠板 就是仅有的那个折叠板
      collapseActiveName: "1",
      // 激活的综合排序
      sortActive: "综合排序",
      // 当前的排序方式
      currentOrder: "default",
      // 激活的时长
      durationActive: "全部时长",
      // 激活的全部分区
      partitionActive: "全部分区",
      // 全部分区的数据 partitionData(静态数据)
      partitionList: partitionData,
      // 主要内容数据
      mainDataList: [],
      mainDataListCopy: [],
      // 判断是否有数据 显示没有数据图片
      mainDataYes: true,
      // 鼠标移进的当前item
      currentIndex: null,
      // 判断当前选择的时间
      currentTime: 0,
      // 当前页码
      currentPage: 1,
    };
  },
  created() {
    this.getData();
  },
  mounted() {},
  watch: {
    // 监听当前选择的时间
    currentTime() {
      this.allTimeMethods();
    },
    // 监听主要内容数据
    mainDataList(val) {
      if (val.length === 0) {
        this.mainDataYes = false;
        return;
      }
      this.mainDataYes = true;
    },
    // 监听激活的时长
    durationActive() {
      this.promptMessage();
    },
    partitionActive() {
      this.promptMessage();
    },
  },
  methods: {
    tabsClick() {
      console.log("点击了tabs栏");
    },
    // 获取内容数据
    async getData() {
      // let searchData = this.$lodash.cloneDeep(this.searchInput);
      const { data: res } = await this.$axiosbili({
        // url: `/bbsearch/x/web-interface/search/type?keyword=${this.searchInput}&search_type=video&page=${this.currentPage}&order=${this.currentOrder}`,
        url: "/bbsearch/x/web-interface/search/type",
        method: "get",
        params: {
          keyword: this.searchInput,
          search_type: "video",
          page: this.currentPage,
          order: this.currentOrder,
        },
      });
      // 如果请求失败 对象中就没有 result 这个属性
      if (res.code === -400 || res.data.result === undefined) {
        this.mainDataYes = false;
        return;
      }

      this.mainDataYes = true;
      this.mainDataList = res.data.result;
      this.mainDataListCopy = res.data.result;
      // 格式化获取的时间
      this.formatTime();
    },
    // 格式化获取的时间
    formatTime() {
      let arr = this.$lodash.cloneDeep(this.mainDataListCopy);
      // 将时间转化为秒
      arr = this.changeSeconds(arr);
      // 将时间格式化
      arr = this.formatSeconds(arr);
      this.mainDataList = this.$lodash.cloneDeep(arr);
    },
    // 确定搜索
    searchConfirm() {
      this.getData();
      // 修改地址栏
      let query = this.$router.history.current.query;
      let path = this.$router.history.current.path;
      // 对象深拷贝
      let newQuery = this.$lodash.cloneDeep(query);
      // 地址栏的参数重新赋值
      newQuery.keyword = this.searchInput;
      this.$router.push({ path, query: newQuery });
    },
    // 排序发生改变
    orderChange(val) {
      switch (val) {
        case "综合排序":
          this.currentOrder = "default";
          break;
        case "最多点击":
          this.currentOrder = "click";
          break;
        case "最新发布":
          this.currentOrder = "pubdate";
          break;
        case "最多弹幕":
          this.currentOrder = "damku";
          break;
        case "最多收藏":
          this.currentOrder = "stow";
          break;
      }
      this.getData();
    },
    // 综合排序的方法（得分最高）最多点击等其他同理
    /* comprehensiveSort() {
      // sort 不传参就是按照字符编码的顺序进行排序
      // 提供比较函数，该函数要比较两个值
      // obj1 小于 obj2，在排序后的数组中 obj1 应该出现在 obj2 之前 返回一个小于 0 的值
      // 1.0 没有分页时 直接对数据进行排序
      this.mainDataList.sort((obj1, obj2) => {
        return obj2.rank_score - obj1.rank_score;
      });
    }, */

    // 点击tab栏时间的方法
    allTimeMethods() {
      let arr = this.$lodash.cloneDeep(this.mainDataListCopy);
      // 将时间转化为秒
      let arr2 = this.changeSeconds(arr);
      // 返回值是true还是false决定保留还是丢弃该元素。
      arr2 = arr2.filter((item) => {
        switch (this.currentTime) {
          case 0:
            return item.duration;
          case 600:
            return item.duration < 600;
          case 1800:
            return 600 <= item.duration && item.duration < 1800;
          case 3600:
            return 1800 <= item.duration && item.duration < 3600;
          default:
            return item.duration >= 3600;
        }
      });
      // 将时间格式化
      arr2 = this.formatSeconds(arr2);
      this.mainDataList = this.$lodash.cloneDeep(arr2);
    },

    // 将接口中时间（3:23）转变为秒的方法
    changeSeconds(arr) {
      arr.forEach((value, index, array) => {
        let t = array[index].duration.split(":");
        array[index].duration = t[0] * 60 + parseInt(t[1]);
      });
      return arr;
    },
    // 将秒钟格式化
    formatSeconds(arr2) {
      let timeFormat = "";
      for (let i in arr2) {
        timeFormat = "";
        allTime(arr2[i].duration);
        arr2[i].duration = timeFormat;
      }
      function allTime(time) {
        if (time < 60) {
          let s = time > 0 ? time : "";
          s = s < 10 ? "0" + s : s;
          timeFormat = timeFormat + s;
          return;
        } else {
          let m = Math.floor(time / 60);
          m = m < 10 ? "0" + m : m;
          timeFormat = timeFormat + m + ":";
          allTime(time - m * 60);
        }
      }
      return arr2;
    },
    // 分区弹出框显示前 判断此刻是不是全部分区
    popoverShow(index) {
      if (index === 0) {
        this.partitionList[index].pvisible = false;
        return;
      }
    },
    // 分区弹出框隐藏后 index 清空
    popoverHide(index) {
      if (this.partitionList[index].index === undefined) {
        return;
      }
      this.partitionList[index].index = null;
    },
    // 分区被点击了
    partitionClick(i, item) {
      // 对话框的显示与隐藏
      this.partitionList.forEach((value, index) => {
        if (index === i) {
          this.partitionList[index].pvisible = true;
        } else {
          this.partitionList[index].pvisible = false;
        }
      });
      // 点击了全部分区
      if (i === 0) {
        this.mainDataList = this.$lodash.cloneDeep(this.mainDataListCopy);
        return;
      }
      // 处理其他分区数据
      let arr = this.$lodash.cloneDeep(this.mainDataListCopy);
      let arr2 = [];
      // 从所有数据中 筛选出符合点击的分区的内容
      // item 就是传入的分区
      arr.forEach((value) => {
        if (item.indexOf(value.typename) >= 0) {
          arr2.push(value);
        }
      });
      this.mainDataList = this.$lodash.cloneDeep(arr2);
    },
    // 分区里面的对话框被点击了
    partitionItemClick(e, item) {
      // 防止点击两次
      // 因为原生click事件会执行两次，第一次在label标签上，
      // 第二次在input标签上，故此处理
      if (e.target.tagName === "INPUT") return;
      this.promptMessage();
      let arr = this.$lodash.cloneDeep(this.mainDataListCopy);
      let arr2 = [];
      arr.forEach((value) => {
        if (value.typename === item) {
          arr2.push(value);
        }
      });
      this.mainDataList = this.$lodash.cloneDeep(arr2);
    },
    // 折叠区域的改变
    foldChange() {
      this.partitionList.forEach((value, i) => {
        this.partitionList[i].pvisible = false;
      });
    },
    // 当前页发生改变
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getData();
    },

    // 提示信息
    promptMessage() {
      this.$message({
        // 可关闭
        showClose: true,
        message: "由于数据问题，仅对当前页有效噢!",
        type: "warning",
        // 持续时间
        duration: "1500",
      });
    },
    // 鼠标事件
    enter(i) {
      this.currentIndex = i;
    },
    leave() {
      this.currentIndex = null;
    },
  },
};
</script>

<style>

.search-head-search{
  width: 588px;
  height: 40px;
}
.search-head{}
</style>
