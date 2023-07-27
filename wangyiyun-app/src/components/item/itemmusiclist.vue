<template>
<div class="itemmusiclist">
    <div class="itemlisttop">
        <div class="listleft">
        <svg class="icon" aria-hidden="true">
    
    <use xlink:href="#icon-bofang">  </use>
    </svg>
    <span>播放全部<span class="gong">(共{{ itemlist.length }}首)</span></span>
</div>
<div class="listright">
    <svg class="icon" aria-hidden="true">
    
    <use xlink:href="#icon-aixin">  </use>
    </svg>
    <span>收藏({{ subscribedCount }})</span>
</div>

        </div> 

        <div class="itemlist">
            <div class="item" v-for="(item,i) in itemlist" :key="i">
<div class="itemleft" @click="bfyinyue(i)">
    <span class="leftspan">{{  i + 1 }}</span>
    <div>
<p >{{ item.name }}</p>
<span v-for="(item1,index) in item.ar" :key="index" class="name">{{ item1.name }}

</span>

    </div>

</div>
<div class="itemright">
    <svg class="icon" aria-hidden="true" v-if="item.mv !=0">
    
    <use xlink:href="#icon-shipin">  </use>
    </svg>
    <svg class="icon2" aria-hidden="true">
    
    <use xlink:href="#icon-todo_list">  </use>
    
    </svg>
    

</div>
            </div>

        </div>

    </div>



</template>

<script>
import { mapMutations } from 'vuex';


export default{
    setup(props){
        console.log(props);
    },
    props:['itemlist','subscribedCount'],
    methods:{
        bfyinyue:function(i){
this.updatePlayList(this.itemlist)
this.updatePlayListIndex(i)

        },
        ...mapMutations(['updatePlayList','updatePlayListIndex'])
    }
};

</script>

<style lang="less" scoped>
.itemmusiclist{
    background-color: white;
    border-radius: 1%;
    width: 400px;


    .itemlist{
        width:  400px;
       margin:50px auto; 
       
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
        height: 50px;
        margin: 10px;
        width: 30% auto;
        display: flex;
        font-size: 20px;
        padding: 15px;
    text-align: justify;
    .leftspan{
        font-size: 30px;
        margin: 1px;
        color: aqua;
    }
    .name{
        
 color: darkgray;
    }
       }
       
    }
.itemlisttop{
    margin: 10px;
    width: 100%;
    height: 30px;
    display: flex;
    
 
    
.listleft{
width: 50%;
height: 30px auto;
margin-left: auto;
margin: 10px;
}

.listright{
    margin: 10px;
    height: 50px;
    width: 33%;
   background-color: red;
   border-radius: 12%;
    margin-right: auto;
    color: white;
  
}
}
}
</style>