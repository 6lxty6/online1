import service from "..";
export function getBanner(){
return service({
    method:"GET",
    url:"/banner?type=2",
})
}
export function getmusic(){
    return service({
    method:"GET",
    url:"/personalized?limit=10",
    })
}
//搜索/search?keywords= 海阔天空

export function getSearchMusic(data){
    return service({
    method:"GET",
    url:`/search?keywords= ${data}`,
    })
}
//登录/login/cellphone?phone=xxx&password=yyy
export function getPhoneLogin(data){
    return service({
    method:"GET",
    url:`/login/cellphone?phone=${data.phone}&password=${data}`,
    })
}