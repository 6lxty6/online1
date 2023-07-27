<template>
<itemmusictou :playlist="state.playlist"/>
<pinglun :playlist="state.playlist" />
<itemmusiclist :itemlist="state.itemlist" :subscribedCount="state.playlist.subscribedCount" />
</template>

<script>
import { useRoute   } from 'vue-router';
import { onMounted,reactive } from 'vue';
import { getmusicitemlist,getitemlist } from '@/request/api/item'
import itemmusictou from'@/components/item/itemmusictou.vue';
import pinglun from '@/components/item/pinglun.vue';
import itemmusiclist from '@/components/item/itemmusiclist.vue';
export default{
    setup(){
        const state = reactive({
            playlist:{},//歌单详情页
            itemlist:[] //歌单歌曲
        });
onMounted(async ()=>{
    let id=useRoute().query.id;   //拿歌曲id
    console.log(id);
    let res=await getmusicitemlist(id);
    console.log(res);
    state.playlist=res.data.playlist;
    //获取歌单里的歌曲
    let gequ=await getitemlist(id);
    console.log(gequ);
    state.itemlist=gequ.data.songs
    sessionStorage.setItem('itemDetail',JSON.stringify(state))
});
return{state}
    },
    components:{
        itemmusictou,
        pinglun,
        itemmusiclist
    }
}; 
</script>