const xhr = new XMLHttpRequest();
xhr.open('get', 'aabb.php', true);
xhr.send(null);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){ // 请求完成
        if(xhr.status == 200){
            console.log(xhr.responseText);
        }
    }
}