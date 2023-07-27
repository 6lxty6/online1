<template>
<img :src="musicList.al.picUrl" alt="" class="bgimg">
    <div class="detailtop">
        <div class="detailtopleft">
            <svg class="icon" aria-hidden="true"  @click="updateDetailShow" >
     
     <use xlink:href="#icon-fanhui">  </use>
     </svg>
<div class="detailname">
    <Vue3Marquee style="color: #fff;">
        {{  musicList.name}}
  </Vue3Marquee>

    
    <span v-for="(item,i) in musicList.ar" :key="item" class="span">
    {{ item.name }}
    </span>
    <svg class="icon" aria-hidden="true">
     
     <use xlink:href="#icon-youjiantou">  </use>
     </svg>
</div>
        </div>
        <div class="detailtopright">
            <svg class="icon" aria-hidden="true">
     
     <use xlink:href="#icon-fenxiang" >  </use>
     </svg>

        </div>
    </div>
   
        <div class="detailcontent" v-show="!isLysicShow">
<img src="@/assets/cizhen.png" alt=""  class="cizhen" :class="{cizhen_active:!isbtnShow}">
<img src="@/assets/yuanpan.png" alt=""  class="yuanpan">
<img :src="musicList.al.picUrl" alt=""  class="gequ"  @click="isLysicShow=true" :class="{gequ_active:!isbtnShow,gequ_paused:isbtnShow}">
        </div>
        <div class="musicLyric" ref="musicLyric" v-show="isLysicShow">
         <p v-for="item in lyric" :key="item"   @click="isLysicShow=false" :class="{active: (currentTime*1000>=item.time && currentTime*1000<item.pre)}">{{ item.lrc }}</p>
 
        </div>
<div class="detailfooter">
    <div class="footer1">
        <svg class="icon" aria-hidden="true"  >
     
     <use xlink:href="#icon-aixin1">  </use>
     </svg>
     <svg class="icon" aria-hidden="true"  >
     
     <use xlink:href="#icon-xiazai1">  </use>
     </svg>
     <svg class="icon" aria-hidden="true"  >
     
     <use xlink:href="#icon-changge">  </use>
     </svg>
     <svg class="icon" aria-hidden="true"  >
     
     <use xlink:href="#icon-pinglun">  </use>
     </svg>
     <svg class="icon" aria-hidden="true"  >
     
     <use xlink:href="#icon-liebiao">  </use>
     </svg>
    </div>
    <div class="footer2">
        <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
    </div>
    <div class="footer3"><svg class="icon" aria-hidden="true"  >
     
     <use xlink:href="#icon-24gl-repeat2">  </use>
     </svg>
     <svg class="icon" aria-hidden="true"  @click="playnext(-1)" >
     
     <use xlink:href="#icon-shangyishoushangyige" >  </use>
     </svg>
     <svg class="icon" aria-hidden="true" v-if="isbtnShow" @click="play">
     
     <use xlink:href="#icon-bofang" >  </use>
     </svg>
     <svg class="icon" aria-hidden="true" v-else  @click="play">
     
     <use xlink:href="#icon-zanting1" >  </use>
     </svg>
     <svg class="icon" aria-hidden="true"  @click="playnext(1)"         >
     
     <use xlink:href="#icon-xiayigexiayishou" >  </use>
     </svg>
     <svg class="icon" aria-hidden="true"  >
     
     <use xlink:href="#icon-24gf-playlistMusic">  </use>
     </svg></div>
</div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import { mapMutations,mapState } from 'vuex';

export default{
    data(){
        return{
isLysicShow:false
        }
    },
    computed:{
...mapState(["lyricList",'currentTime','playlistIndex','playlist','duration']),
   lyric:function(){
    let arr;
    if(this.lyricList.lyric){
        arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item,i)=>{ ///切割
        let min = item.slice(1,3);
        let sec = item.slice(4,6);
        let mill = item.slice(7,10)
        let lrc = item.slice(11,item.length)
   let time = parseInt(min)*60*1000+parseInt(sec)*1000 + parseInt(mill);
        if(isNaN(Number(mill))){
            mill=item.slice(7,9);
            lrc=item.slice(10,item.length)
            time = parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill);
        }
        // console.log(min,sec,Number(mill),lrc  );
        return{min,sec,mill,lrc,time}
      })
      arr.forEach((item,i) => {
        if(i===arr.length-1 ||isNaN(arr[i+1].time)){
            item.pre=10000
        }else{
            item.pre=arr[i+1].time
        }
      });
    }
console.log(arr)
    return arr
}
    },
    mounted(){
        // console.log(this.musicList);
        // console.log(this.lyricList.lyric);
       this.addDuration()
    },
    props:["musicList","isbtnShow","play","addDuration"],
    methods:{
        playnext:function(num){
let index=this.playlistIndex+num          //上下首切换
if(index<0){
    index=this.playlist.length-1
}else if(index==this.playlist.length){
    index=0

}
this.updatePlayListIndex(index)
        },
...mapMutations(["updateDetailShow","updatePlayListIndex"]),
    },
    watch:{
        currentTime:function(newValue){
    let p=document.querySelector("p.active")             ///先拿到p，然后设置歌词offsetop距离
    console.log([p]);
    if(p&&p.offsetTop>300){
      this.$refs.musicLyric.scrollTop=p.offsetTop-300
    }
    // console.log([this.$refs.musicLyric]);
  
   if(newValue===this.duration){
 
    if(this.playlistIndex===this.playlist.length-1){
        this.updatePlayListIndex(0);
        this.play()
    }    else{
        this.updatePlayListIndex(this.playlistIndex+1);
    }
    }
   
}
},
    
    components:{
   Vue3Marquee,
    },
};
</script>


<style lang="less" scoped>

.bgimg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(50px);
}
.detailtop{
    width: 100%;
    height: 1rem;
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;
    align-items: center;
    fill: #fff;
    .detailtopleft{
        display: flex;
        align-items: center;
        .detailname{
            width: 3rem;
            height: 100%;
            margin-left: 0.4rem;
            .span{
                color: #999;
            }
            .icon{
                width: 0.3rem;
                height: 0.2rem;
              fill: #999;

            }
        }
        
    }
}
.detailcontent{
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .cizhen{
        width: 2rem;
        height: 3rem;
        position: absolute;
        left: 46%;
        transform-origin:0 0 ;
        transform: rotate(-15deg);
        transition: all 2s;
    }
    .cizhen_active{
        width: 2rem;
        height: 3rem;
        position: absolute;
        left: 46%;
        transform-origin:0 0 ;
        transform: rotate(0deg);
        transition: all 2s;
    }
    .yuanpan{
        width: 5rem;
        height: 5rem;
        position: absolute;
        bottom: 2.3rem;
        z-index: -1;
    }
    .gequ{
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 50%;
        position: absolute;
        bottom: 3.14rem;
        animation: rotate_gequ 10s linear infinite;  ///引用动画到歌曲 class
    }
///设置图片旋转动画  第一个播放，第二个暂停
    .gequ_active{
        animation-play-state: running;
    }
    .gequ_paused{
        animation-play-state:paused ;
    }
    @keyframes rotate_gequ {
        0%{
            transform: rotateZ(0deg);
        }
        100%{
            transform: rotateZ(360deg);
        }
    }
}
.musicLyric{
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    overflow:  scroll;  ///溢出滚动
    p{
        color: #766f6f;
        margin-bottom: 25px;
    }
    .active{
        color: #fff;
        font-size: 25px;
    }
}
.detailfooter{
    width: 100%;
    height: 3rem;
    position: absolute;
    bottom: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .footer1{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon{
            width: 0.5rem;
            height: 0.5rem;
            fill: rgb(245,234,234);
        }
    }
    .range{
        width: 100%;
        height: 0.06rem;
    }
     .footer3{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon{
            width: 0.5rem;
            height: 0.5rem;
            fill:rgb(245,234,234);
        }
    }
}


</style>