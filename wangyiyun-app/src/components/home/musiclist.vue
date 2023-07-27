<template>

    <div class="musiclist">
    <div class="musictop">
        <div class="title">推荐歌单</div>
    <div class="more">更多歌单</div>
      </div>
      <div class="musicku">
  <van-swipe
   :loop="false"
    :width="300"

     class="swpier" 
     :show-indicators="false" >
  <van-swipe-item  v-for="item in state.musiclist" key="item"  >
   <router-link :to="{path:'/itemmusic',query:{id:item.id}}">
<div class="tupian"><img :src="item.picUrl" alt=""   ></div>



<span class="bofangliang">
  
    <svg class="icon" aria-hidden="true">
     
    <use xlink:href="#icon-bofang">  </use>
    </svg>
    {{ changeCount(item.playCount) }}
</span>
<br>
<div class="name"><span >{{ item.name }}</span></div>
</router-link>
  </van-swipe-item>

</van-swipe></div>
    </div>
</template>


<script>
import { getmusic }from "@/request/api/home.js";
import{ reactive,onMounted }from'vue';
export default{
    // data(){
    //     return{
    //         musiclist:[],
    //     };
    // },
    // methods:{
    //     async getgedan(){
    //         let res = await getmusic();
    //         console.log(res);
    //         this.musiclist=res.data.result

    //     },
    //     changeCount:function(num){
    //         if(num>=100000000){
    //             return(num/100000000).toFixed(1) + "亿"
    //         }else if(num>=10000){
    //              return(num/10000).toFixed(1) + "万"
    //             }
    //     }
    // },
    // mounted(){
    //     this.getgedan()
    // }
    // vue3
setup(){
const state=reactive({
    musiclist:[],
});
function changeCount(num){
            if(num>=100000000){
                return(num/100000000).toFixed(1) + "亿"
            }else if(num>=10000){
                 return(num/10000).toFixed(1) + "万"
                }
        }
onMounted(async()=>{
    let res = await getmusic();
    console.log(res);
            state.musiclist=res.data.result;
});
return{state,changeCount}

}


}



</script>



<style lang="less" scoped>

.musiclist{
   
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
    
    .musictop{
        width: 100%;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        .title{
            font-size: 0.4rem;
            font-weight: 900;

        }
        .more{
            border: 1px solid;
            text-align: center;
            line-height: 0.6rem;
            padding: 0 0.2rem;
            border-radius: 0.4rem;
        }
    }
    .musicku{
        width: 100%;
        height: 500px;
        .tupian{
            width: 250px;
            height: 250px;
        
        }
        
        .swpier{
            height: 100%;
            font-size: 20px;
          
            width: 100%;
            img{
                width: 100%;
                height: 250px;
               
            }
        
    }
}
.name{
    width: 250px;

}
.bofangliang{
    
    .icon{
        width: 30px;
        height: 30px;
        
    }
  
}

    }
    </style>