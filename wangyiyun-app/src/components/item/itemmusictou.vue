<template>


   <div class="itemmusictou">

<div class="itemleft">
    <img :src="playlist.coverImgUrl" alt="" class="tupian">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
    <use xlink:href="#icon-fanhui"></use>
    </svg>
    <span>歌单</span>
 
</div>
   <div class="itemright">
    <svg class="icon" aria-hidden="true">
     
     <use xlink:href="#icon-sousuo">  </use>
     </svg>
     <svg class="icon" aria-hidden="true">
     
     <use xlink:href="#icon-liebiao">  </use>
     </svg>

   </div>
</div>
<div >
    <span class="name">{{playlist.name }}</span>
     <img :src="playlist.coverImgUrl" alt="" class="touxiang">
     <span class="name">{{playlist.username }}</span>
     
   <span class="name">{{ playlist.creator.nickname }}</span>
   <img :src="playlist.creator.backgroundUrl" alt="" class="beijing">
   
  
   </div>
 
    <div class="zongmiaoshu">
   <p class="miaoshu"> <span>{{ playlist.description}}</span></p>
  
  <div>
  <svg class="icon" aria-hidden="true">
    
    <use xlink:href="#icon-youjiantou">  </use>
    </svg>
   </div>
   </div>
 
   
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
export default{
  
setup(Props)
{
    if((Props.playlist.creator="")){
        Props.playlist.creator=JSON.parse(sessionStorage.getItem().playlist).creator
    }
},
props:['playlist'],
components:{
    Vue3Marquee,
}
};






</script>


<style lang="less" scoped>

.itemmusictou{
    margin: 15px auto;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: .2rem;
    position: relative;
    .itemleft,.itemright{
    width:25% ;
    height: 100%;
    display: flex;
    justify-content: space-between;
    span{
        font-size: 20px;
        color: #fff;
    }
    .icon{
        fill: #fff;
      
    }
}
.tupian{
    width: 100%;
    height: 320px;
    position: fixed;
    z-index: -1;
    filter:blur(20px) ;       //虚化

}

}
.touxiang{
    margin: 30px auto;
    margin-left: 30px ;
    width: 30%;
    height:px;
    border-radius: 5%;
    float: left;
}
.beijing{
    margin: auto;
    margin-left: 20px ;
    width: 10%;
    height:px;
    border-radius: 100%;
    float: left;  
}
.name{
    margin: 5px auto;
    margin-left: 20px auto;
   text-align: left;
   font-size: 20px;
   color: #fff;
   float: right;
   width: 40%;
   

}
.zongmiaoshu{
    width: 40%;
   text-align: left;
   height: 100px;
   overflow: hidden;
   white-space: pre-line;
   text-overflow: ellipsis;
  
.miaoshu{
    height: 10px auto;
    text-overflow: ellipsis;
 
}
}

</style>