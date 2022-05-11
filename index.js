let vr=document.getElementById('main');

const arr=["./gallery/images/0.jpg","./gallery/images/1.jpg","./gallery/images/2.jpg","./gallery/images/3.jpg",
"./gallery/images/4.jpg","./gallery/images/5.jpg","./gallery/images/6.jpg","./gallery/images/7.jpg",];

for(var i=0;i<arr.length;i++){
    var img=document.createElement("img");
    console.log(arr[i]);
    img.src=arr[i];
    vr.appendChild(img);
}



