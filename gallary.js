function gallary(srcVal)
{
    var allImg=document.images
    for(i=0;i<=allImg.length-1;i++)
    {
       allImg[i].src=`${i}.jpeg`
    }

console.log(srcVal)
document.getElementById("bigImage").style.backgroundImage=`URL(${srcVal})`
}