<template>

<div class="footermusic"> 
<div class="footleft" @click="updateDetailShow">
<img :src="playlist[playlistIndex].al.picUrl " alt="">
<div>
    <Vue3Marquee>
        {{playlist[playlistIndex].name}}
  </Vue3Marquee>

<span>横向滑动更换歌曲</span>
</div>
</div>

<div class="footerright">
    <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow">
    <use xlink:href="#icon-bofang" ></use>
    </svg>
    <svg class="icon" aria-hidden="true" @click="play" v-else>
    <use xlink:href="#icon-zanting" ></use>
    </svg>
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-24gf-playlistMusic"></use>
    </svg>
</div>
<audio ref="audio" :src=" `https://music.163.com/song/media/outer/url?id=${playlist[playlistIndex].id}.mp3`"></audio>
<van-popup
  v-model:show="detailShow"
  position="right"
  :style="{ width: '100%', height: '100%' }"
><MusicDetail :musicList="playlist[playlistIndex]" :play="play" :isbtnShow="isbtnShow" :addDuration="addDuration"/> </van-popup> 

</div>


</template>
<script>
import { mapMutations, mapState } from 'vuex';
import MusicDetail from './MusicDetail.vue';
import { Vue3Marquee } from 'vue3-marquee'
export default{
    data(){
        return{
            interVal:0
        }
    },
    computed:{
...mapState(['playlist','playlistIndex','isbtnShow','detailShow']),
},
mounted(){
    console.log(this.$refs);
   
this.$store.dispatch("getLyric",this.playlist[this.playlistIndex].id)

},
updated(){
this.$store.dispatch("getLyric",this.playlist[this.playlistIndex].id);
this.addDuration()
},
methods:{
    play:function(){
        //判断是否在播放
        if(this.$refs.audio.paused){
            this.$refs.audio.play();
            this.updateIsbtShow(false)
            this.updateTime()       ////////播放就屌用updateTime函数
        }else{
            this.$refs.audio.pause();
            this.updateIsbtShow(true)
            clearInterval(this.interVal)   //////暂停时清楚定时器
        }
    
    },
    addDuration:function(){
this.updateDuration(this.$refs.audio.duration)
    },
    updateTime:function(){
        this.interVal=setInterval(()=>{
this.updateCurrentTime(this.$refs.audio.currentTime)
        },1000)
    },
    ...mapMutations(['updateIsbtShow','updateDetailShow','updateCurrentTime','updateDuration'])
},
watch:{
    playlistIndex:function(){   ///监听器，下标改变自动播放
        this.$refs.audio.autoplay=true;
        if(this.$refs.audio.autoplay=true){   ///更换播放的图标
            this.updateIsbtShow(false)
    
}
    },
    playlist:function(){
        if(this.isbtnShow){
            this.$refs.audio.autoplay=true;
            this.updateIsbtShow(false)
        }
    }


},
components:{
    MusicDetail,
    Vue3Marquee,
}
};
</script>

<style lang="less" scoped>
.footermusic{
    width: 100%;
    height: 1.3rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top:1px solid #999 ;
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;
    .footleft{
        width: 60%;
        height: 100%;
        display: flex;
        padding: 10px;
       justify-content: space-around;
       align-items: center;
        img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
        
    }
    .footerright{
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon{
                width: 28px;
                height: 30px;
            }
        }
}
</style>