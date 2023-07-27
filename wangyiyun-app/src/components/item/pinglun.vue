<template>
    <div class="zong">
  <div class="pinglun">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-xiaoxi"></use>
    </svg>
    <span>{{ playlist.commentCount }}</span>
</div>
<div class="pinglun">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-fenxiang"></use>
    </svg>
    <span>{{ playlist.shareCount}}</span>

 
</div>
<div class="pinglun">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-xiazai"></use>
    </svg>
    <span>下载</span>
</div>
<div class="pinglun">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-todo_list"></use>
    </svg>
    <span>多选</span>
</div>
    </div>

</template>
<script>
export default{
  
  setup(Props)
  {
      if((Props.playlist.creator="")){
          Props.playlist.creator=JSON.parse(sessionStorage.getItem().playlist).creator
      }
  },
  props:['playlist']
  };
  
  
  
  
  
  

</script>

<style  lang="less" scoped>

.zong{
    width: 100%;
    height: 100px;
    justify-content: space-around;
    margin-top: 10px;
    align-items: center;
    display: flex;
    color:white;
    margin-left: 10px;
        margin-right: 10px;
    .pinglun{
        width: 25%;
        height: 50px;
        display: flex;
     margin-left: 10px;
     color:aliceblue
    }
}
</style>