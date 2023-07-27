<template>
<div class="login">
    <div class="logintop">欢迎登录网易云音乐</div>
    <div class="logincenter">
        <input type="text" name="phone" class="phone" v-model="phone" placeholder="请输入手机号/账号" />
        <input type="password" name="passworld" class="passworld" v-model="password" placeholder="请输入密码" />
        <button class="btn" @click="Login">登录</button>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            phone:'',
            passworld:''
        }
    },
    methods:{
        Login:function(){
           let res=this.$store.dispatch('getLogin',{phone:this.phone,password:this.password })

        }
    }
}

</script>
<style lang="less" scoped>
.login{
    width: 100%;
    height: 20rem;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(188, 158, 158);
    .logintop{
        margin-top: 1rem;
        font-size: 0.7rem;
        color: #fff;
    }
    .logincenter{
        width: 100%;
        height: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 2rem;
        .phone{
            width: 5rem;
            height:1rem;
            border: 0.02rem solid #999;
        }
        .passworld{
            width: 5rem;
            height:1rem;
            border: 0.02rem solid #999;
        }
        .btn{
            width: 2.5rem;
            height: 1rem;
        }
    }
}
</style>