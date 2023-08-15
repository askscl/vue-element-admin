const getJson = function(url, type, data){
    const promise = new Promise(function(resolve, reject){
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open(type, url);
        if(type == 'get'){
            xmlHttp.send();
        }else{
            xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.send(JSON.stringify(data));
        }
        xmlHttp.responseType = "json";
        xmlHttp.onreadystatechange = function(){
            if(xmlHttp.readyState !== 4) return;
            if(xmlHttp.status === 200){
                //到底用哪一个，还是两个都可以？--
                /**
                 * Content-Type:为application/json时， 可以用response
                 * Content-Type:为text/html时，两者都可以，但是response获取到解析好的dom
                 * Content-Type:为媒体（视频，音频），二进制流时，可用response,需要设置responseType为blob, 在response上获取到Blob对象
                 * 
                 * this.response 获取到的结果会根据 this.responseType 的变化而变
                 * this.responseText 永远获取的是字符串形式的响应体
                 * 注意：在客户端这样设置responseType会有兼容问题，所以一般不这样写
                 * */
                resolve(xmlHttp.response);
                // resolve(xmlHttp.responseText);
            }else{
                reject(new Error(xmlHttp.statusText));
            }
        }
    });
    return promise
}