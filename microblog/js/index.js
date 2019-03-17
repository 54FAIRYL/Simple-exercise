window.onload = function(){

    var oLi = document.getElementsByTagName('li')[0];
    var aLi = document.getElementsByTagName('li');
    var oUl = document.getElementsByTagName('ul')[0];
    var aImg = document.getElementById('face').getElementsByTagName('img'); //头像
    var cenBox = document.getElementById('conBox');   //文本输入框
    var sendBtn = document.getElementById('sendBtn');   //广播按钮
    var showLength = document.getElementsByClassName('maxNum')[0];
    // var oTims = document.getElementsByClassName('times')[]
    var oTime;  //当前时间
    var userName = document.getElementById('userName');  //用户名
    var oMsg;
    var index = null;

    var acurrent = document.getElementsByClassName('current')[0];
    
    function removeLi () {          //删除元素
        
    }

    for(var i =0 ;i<aImg.length;i++) {  
        aImg[i].index = i;
        aImg[i].onclick = function(){
            index = this.index;
        };
    }

    for(var i =0;i<aLi.length;i++) {
        var Li = document.getElementsByTagName('li');
        var index;
        aLi[i].index = i;
        aLi[i].onmouseover = function() {
            aLi[this.index].className = 'cutrren';
            var k = this.index;
            var delLi = aLi[this.index].getElementsByClassName('del')[0];
            delLi.onclick = function() {
                alert(k);
                aLi[k].innerHTML = '';
                oUl.removeChild(aLi[k]);
            }
        };
    } 
    for(var i =0;i<aLi.length;i++) {
        var index;
        aLi[i].index = i;
        aLi[i].onmouseout = aLi[i].onmouseout = function() {
            aLi[this.index].className = '';

        }; 
    } 
    
    cenBox.onkeyup = function() {
        oMsg=getText();
        var strLength = oMsg.length;  //获取输入字符的长度；
        if(strLength>140) {   //超出
            var countTxt = document.getElementsByClassName('countTxt')[0];
            countTxt.innerHTML = "已超出";
            showLength.innerHTML = strLength-140;
            showLength.style.color = "red";
        } else showLength.innerHTML = 140-strLength;   //未超出长度时
    }

    function getUsername() {   //获取用户名
        // userName = document.getElementById('userName').value; 
        // alert(userName);
        return userName.value;
    }

    function getText(){     //获取输入的文本
        return cenBox.value;
        // alert(oMsg);
    }
    
    function getTime() {  //获取日期
        var newTime = new Date();
        oTime = newTime.getMonth()+1 + "月" + newTime.getDate() + "日" +"  "+ newTime.getHours() + ":" +newTime.getMinutes();
        return oTime;
    }



    function nullUserName () {  //判断是否输入用户名
        if(!getUsername()) return false;
        else return true;
    }
    function nullText () {  //判断是否有输入内容
        if(!getText()) return false;
        else return true;
    }
    
    function del() {  //广播后重置
        index = null;
        document.getElementsByTagName('input')[0].value = '';
        cenBox.value = cenBox.value ? '' : '';
        document.getElementById('conBox').value = '';
        showLength.innerHTML = '140';
    }

    sendBtn.onclick = function() { //点击广播，实现增加功能
        if(!nullUserName()) {alert('请输入用户名！');userName.focus();}
        else if (!nullText()) {alert('请输入你要广播的内容！');cenBox.focus();}
        else {
            hTml();
        }
    }
    
    function hTml() { 
        var newLi = document.createElement('li');
        var changeDiv = '<li>'+
        '<div class="userPic">'+
        '<img src="" style="background:'+aImg[index].style.background+';"></div><div class="content">'+
        '<div class="userName"><a href="javascript:;">'+getUsername()+'</a>:<div class="msgInfo">'+getText()+'</div>'+
        '</div><div class="times"><span>'+getTime()+'</span><a class="del" href="javascript:;" style="display:;">删除</a></div></div></li>';
        newLi.innerHTML = changeDiv;
        oUl.insertAdjacentHTML('afterbegin',changeDiv);
        del();
    }  
};
