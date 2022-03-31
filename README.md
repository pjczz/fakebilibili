# fakerbilibili

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 本项目为仿b站项目 

**主要使用vue框架和elementUi编写**

项目主要分为两个模块

**首页**：

轮播图和部分图表使用elementUI美化

展示各类数据，如动画区，音乐区等推荐  由于接口原因，实际上的排行榜数据没有找到对应接口，在推荐中进行排序组成了右侧排行榜。

搜索功能可以获取b站热搜并展示 以及搜索跳转到搜索页面

为了更多使用搜索模块，在首页点击对应视频会跳转到搜索界面而不是直接到b站对应的视频地址

**搜索：**

对搜索结果进行分类和展示 点击可以跳转对应链接