window.onload = function(){
var userName = document.getElementById('userName');
var face = document.getElementById('face');
var conBox = document.getElementById('conBox'); 
/* *网名 *头像组 *广播 */ 
var aImg = face.getElementsByTagName('input'); 
var maxNum = document.getElementsByClassName('maxNum')[0];
var countTxt  = document.getElementsByClassName('countTxt')[0];
var sendBtn = document.getElementById('sendBtn') //广播
    conBox.onkeyup = () => {
        var text = conBox.value;
        if(text.length > 140) {
            textLengthOverstep(text.length);
        }if(text.length<=140) {
            textlengthWithIn(text.length);
        }
    }

    function getText(){     //获取输入的文本
    return conBox.value;
    // alert(oMsg);
    }
    function getUserName(){   //获取网名
        return userName.value;
    }
    function getTime(){    //获取时间
        let newTime = new Date();
        return  ( `${newTime.getMonth()+1}月${newTime.getDate()}日
                    ${newTime.getHours()}:${newTime.getMinutes()}`)
            // newTime.getMonth()+1 + "月" + newTime.getDate() + "日" +"  "+ 
            //      newTime.getHours() + ":" +newTime.getMinutes());
    }

    //获取头像 ---颜色
    var color = '';   //保存头像 ---颜色
    for(let i =0 ;i<aImg.length;i++) {  
        aImg[i].onclick = () => {color = aImg[i].value;}
    }

    function textLengthOverstep(length){  //文本长度超出
        countTxt.innerHTML = "已超出";
        maxNum.style.color = "red";
        maxNum.innerHTML = length-140;
    }
    function textlengthWithIn(length){
        countTxt.innerHTML = "还可输入";
        maxNum.style.color = "#999";
        maxNum.innerHTML = 140-length;
    }

    sendBtn.onclick = function(){  //广播
        // 判断
        if(!getUserName()){alert('请输入网名！'); return;}
        if(!color)
        {alert("请选择头像！"); return;}
        if(!getText()){alert('请输入您想发表的内容！');return;}

        // 满足发表内容的条件
        add();  //发表后将网名、头像、内容清空
        userName.value = '';
        color = '';
        conBox.value = '';

    }
    var oUl = document.getElementsByTagName('ul')[0];
    var oLi = oUl.children;

    for(let j = 0;j<oLi.length;j++) {
        oLi[j].onmouseover = () => {   //鼠标移入
            let del = document.getElementsByClassName('del')[j];
            del.style.display = 'block';
            //点击删除
         }
         oLi[j].onmouseout = () => {   //鼠标移出
            let del = document.getElementsByClassName('del')[j];
            del.style.display = 'none';
         }
    }
    var del = document.getElementsByClassName('del');

    for(let k = 0;k<del.length;k++) {
        del[k].onclick = () => {
            oUl.removeChild(oLi[k]);
            return;
        }
    }

    function add() {
        var newLi = document.createElement('li');
        let addLi = `<li><div class="userPic"><img src="" style="${color};"></div><div class="content">
        <div class="userName"><a href="javascript:;">${getUserName()}</a>:<div class="msgInfo">${getText()}</div>
        </div><div class="times"><span>${getTime()}</span><a class="del" href="javascript:;" style="display:;">删除</a></div></div></li>`;
        newLi.innerHTML = addLi;
        oUl.insertAdjacentHTML('afterbegin',addLi);
    }
}