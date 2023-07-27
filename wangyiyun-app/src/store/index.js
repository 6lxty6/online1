import { getPhoneLogin } from '@/request/api/home';
import { getMusicLyric } from '@/request/api/item.js';
import { createStore } from 'vuex'


export default createStore({
  state: {
    playlist:[{           //播放列表
      al:{
        id
        : 
        80754209,
        name
        : 
        "山楂树之恋 (完整版)",
        pic
        : 
        109951164260611200,
        picUrl
        : 
        "http://p2.music.126.net/G00sAe86sPi5gFQyuJHU7A==/109951164260611202.jpg",
        pic_str
        : 
        "109951164260611202"
      },
      id:1381755293,
      ar:[{
    
name:"程佳佳"
      }]
    }],
    playlistIndex:0,  //默认下标
    isbtnShow:true,   ///暂停按钮
detailShow:false,//详情页  
lyricList:{},  //歌词
currentTime:0,//当前时间
duration:0 ,//歌曲总时长
isLogin:false,//判断登录状态
isFooter:true//判断是否显示底部组件
  },
  getters: {
  },
  mutations: {
   updateIsbtShow:function(state,value){
    state.isbtnShow=value
   },
   pushPlaylist:function(state,value){
  state.playlist.push(value)
   },
   updatePlayList:function(state,value){
    state.playlist=value
    console.log(state.playlist);
   
   },
   updatePlayListIndex:function(state,value){
    state.playlistIndex=value

   },
   updateDetailShow:function(state){
    state.detailShow=!state.detailShow
   },
   updateLyricList:function(state,value){
    state.lyricList=value
   },
   updateCurrentTime:function(state,value){
    console.log(state.currentTime);
state.currentTime=value
   },
   updateDuration:function(state,value){
    state.duration=value
   }
   },
  
  actions: {
    getLyric:async function(context,value){
let res =await getMusicLyric(value)
console.log(res);
context.commit("updateLyricList",res.data.lrc)
    },
    getLogin:async function(context,value){
      let res=await getPhoneLogin(value);
      console.log(res);
    }
  },
  modules: {
  }
})
