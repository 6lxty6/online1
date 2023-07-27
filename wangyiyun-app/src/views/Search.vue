<template>
<div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
    <use xlink:href="#icon-fanhui"></use>
    </svg>
    <input type="text" placeholder="周杰伦" v-model="searchKey" @keydown.enter="enterKey">
</div>
<div class="searchHistory">
    <span class="searchspan">历史</span>
    <span v-for="item in keyWorldList" :key="item" class="spanKey" @click="lishi">{{ item }}</span>
    <svg class="icon" aria-hidden="true" @click="delHistory">
    <use xlink:href="#icon-shanchu"></use>
    </svg>
</div>
<div class="itemlist">
            <div class="item" v-for="(item,i) in searchList" :key="i">
<div class="itemleft" @click="(updateIndex(item))">
    <span class="leftspan">{{  i + 1 }}</span>
    <div>
<p >{{ item.name }}</p>
<span v-for="(item1,index) in item.artists" :key="index" class="name">{{ item1.name }}

</span>

    </div>

</div>
<div class="itemright">
    <svg class="icon" aria-hidden="true" v-if="item.mvid !=0">
    
    <use xlink:href="#icon-shipin">  </use>
    </svg>
    <svg class="icon2" aria-hidden="true">
    
    <use xlink:href="#icon-liebiao">  </use>
    
    </svg>
    

</div>
            </div>

        </div>
</template>
<script>
import {getSearchMusic} from"@/request/api/home.js"
export default{
    data(){
        return{
            keyWorldList:[],
            searchKey:"",
            searchList:[],
        }
    },
    mounted(){
        this.keyWorldList=JSON.parse(localStorage.getItem('keyWorldList')||'[]')
    },
    methods:{
        enterKey:async function(){
            if(this.searchKey !==""){  
this.keyWorldList.unshift(this.searchKey);
this.keyWorldList=[...new Set(this.keyWorldList)]  ///去重
if(this.keyWorldList.length>10){
    this.keyWorldList.splice(this.keyWorldList.length-1)
}
localStorage.setItem("keyWorldList  ",JSON.stringify (this.keyWorldList))  //刷新后历史记录保留
let res=await getSearchMusic(this.searchKey)
console.log(res);
this.searchList=res.data.result.songs
this.searchKey="";
            }
        },
        delHistory:function(){
localStorage.removeItem("keyWorldList")
this.keyWorldList=[];
        },
        lishi:async function(item){
            let res = await getSearchMusic(item)
console.log(res);
this.searchList=res.data.result.songs    
        
    },
    updateIndex:function(item){
        item.al=item.album
        item.al.picUrl=item.album.artist.img1v1Url
        this.$store.commit("pushPlaylist",item)
        this.$store.commit("updatePlayListIndex", this.$store.state.playlist.length-1)
    }
}
}

</script>
<style lang="less" scoped>
.searchTop{
    width: 100%;
    height: 1rem;
    padding: 0 .2rem;
    display: flex;
    align-items: center;
    input{
        margin-left: 30px;
        border: none;  //边框为空
        border-bottom: 1px solid #999;///设置下边框
        width: 80%;
        padding: .1rem;//内边距
    }
}
.searchHistory{
width: 100%;
padding: 10px;
position: relative;
.searchspan{
    font-size: 20px;
    font-weight: 700;
}
.spanKey{
    background-color: #dbabab;
    padding: 5px 10px;
    border-radius: 20px;
    margin: 5px 10px;
    display: inline-block;
}
.icon{
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
}
}
.itemlist{
        width:  100%;
       margin:50px auto; 
        padding: 10px;
       .itemright{
        height: 50px;
        margin: 10px;
        width:  100px;
        display: flex;
      margin-left: 300px;
      
      justify-content: space-around;
    .icon{
        height: 30px;
        width: 25px;
        display: flex;
        
    }
    .icon2{
        height: 30px;
        width: 25px;
        display: flex;
        margin-left: 0px;
     
    }
       }
     
       .itemleft{
        height: 1.4rem;
        margin: 10px;
        width: 85% auto;
        display: flex;
        font-size: 20px;
        padding: 15px;
    text-align: justify;
    .leftspan{
        display: inline-block;
        font-size: 20px;
        margin: 1px;
        width: 0.8rem;
        color: rgb(144, 151, 151);
    }
    .name{
        
 color: darkgray;
    }
       }
       
    }
</style>