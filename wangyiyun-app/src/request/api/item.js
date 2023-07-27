import service from "..";
//获取歌单数据
export function getmusicitemlist(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
///获取歌单所有歌曲
export function getitemlist(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}
//获取歌单歌词  /lyric?id=33894312
export function getMusicLyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}
