<template>
    <div class="diyi">
        <div class="dier">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-tuijianwei"></use>
    </svg> 
    <span>每日推荐</span>
        </div>
   
    
        <div class="dier">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-zhibo"></use>
    </svg> 
    <span>私人FM</span>
        
    </div>
   
        <div class="dier">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-gedan1"></use>
    </svg> 
    <span>歌单</span>
      
    </div>
   
        <div class="dier">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-paihangbang"></use>
    </svg> 
    <span>排行榜</span>
        </div>
    </div>
</template>
<style lang="less"  scoped>
.diyi{
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    .dier{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
            width: 1rem;
            height: 1rem;
        }
    }
}

</style>