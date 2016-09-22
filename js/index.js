/**
 * Created by wanghan on 16/4/20.
 */

//纯js 实现
window.onload=function (){

    //解决问题 1 未加js前 行现实问题  不规则     第二行的图片加到 第一行最矮的那张图片下
    //        2 运行到地方加载
    //        3 循环多个 无限下拉




    waterfall('main','box');

    window.onscroll = function () {

        
    }
}


    function waterfall(parentID,box){
        //

       var oParent =  document.getElementById(parentID)

       var oBoxs = getAllClassByArgus(oParent,box);

        //计算整个页面的列数   页面宽除以box 盒子宽

        var oBoxw = oBoxs[0].offsetWidth;

        //console.log(oBoxw)
        //console.info(window.getComputedStyle(oBoxs[0]).width);

        //得到列数
        var columns = Math.floor(document.documentElement.clientWidth/oBoxw); //不满统一不float 所以向下取整

        console.log(columns)

        //得到 每列的高的数组

        var heightArr = new Array();
        for(var i=0;i<oBoxs.length;i++){
            if(i<columns){
                //前(列数)张
                heightArr.push(oBoxs[i].offsetHeight)
            }
            else{
                var minHeight = Math.min.apply(null,heightArr);//min  只接受a,b,c,d,的参数
                var index  =    getFirstMinHIndex(heightArr,minHeight);
                //
                //console.log(11,index)
                //console.log(22,oBoxs[i].offsetWidth*index);
                //
                oBoxs[i].style.position="absolute";
                oBoxs[i].style.top=minHeight+"px";
                // oBoxs[i].style.left= oBoxs[i].offsetWidth*index;
                oBoxs[i].style.left = oBoxs[index].offsetLeft+"px";

                heightArr[index]+=oBoxs[i].offsetHeight;

            }
        }

        console.log(heightArr)

    }


    //得到parent下的所有class为className的元素
    function  getAllClassByArgus(parent,className){

        var classesArr = new Array(); //用来存取所有className 为参数的元素

        var oElements =  parent.getElementsByTagName("*");
        for(var i=0;i<oElements.length;i++){
            if (oElements[i].className == className){
                classesArr.push(oElements[i])
            }
        }
        return classesArr;
    }

    function  getFirstMinHIndex(arr,minh){

        for(var i in arr){
            if(arr[i] == minh){
                return i;
            }
        }

    }

    function addapend(){
        var img =  document.createElement("img");

        img.src = "images/"+Math.floor(Math.random()*10)+".jpg";

        var pic = document.createElement("div");
        pic.className = "pic";

        pic.appendChild(img);

        var box = document.createElement("div");
        box.className = "box test";

        box.appendChild(pic);

        document.getElementById("main").appendChild(box);

    }