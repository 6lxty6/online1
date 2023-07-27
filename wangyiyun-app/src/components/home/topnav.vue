<template>

<div class="topnav">
    <div class="lefttop">
        <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-liebiao"></use>
    </svg>  
    </div>
    
    <div class="topcontent">
        <span @click="$router.push('/infoUser')">我的</span>
        <span class="faxian">发现</span>
        <span>云村</span>
        <span>视频</span>
    </div >
    <div class="rightleft">
        <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
    <use xlink:href="#icon-sousuo"></use>
 </svg>
    </div>
</div>
</template>
<style lang="less" scoped>
.topnav{
    width:100%;
    height: 1rem;
    padding:.2rem;
    display:flex;
    justify-content: space-between;
    .topcontent{
        width: 80%;
        height: 70%;
        display:flex ;
        justify-content: space-around;
        align-items: center;
        font-size: 30px;
        .faxian{
            font-weight: 800;
        }
    }
}
</style>