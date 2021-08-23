var btn1=document.getElementById('send1');
var message1=document.getElementById('message1');
var btn2=document.getElementById('send2');
var message2=document.getElementById('message2');
var text1 = document.querySelector("#input1");
var text2 = document.querySelector("#input2");
var time = setInterval(function(){
    if ( text1.value == "")
    {
     
        btn1.style.backgroundColor= "red";
    }
    else
    {
        btn1.style.backgroundColor= "blue";
    }
    if ( text2.value == "")
    {
        btn2.style.backgroundColor= "red";
    }
    else
    {
        btn2.style.backgroundColor= "blue";
    }
},10);
btn1.addEventListener("click",function(){
        var p=document.createElement("P");
        p.setAttribute("style","width:170px;height:60px;line-height:60px;background-color:blue;color:white;border-top-left-radius:20px;float:right;");
        message1.appendChild(p);
        var p2=document.createElement("P");
        p2.setAttribute("style","margin-left:20px;width:170px;height:60px;line-height:60px;background-color:white;color:black;border-bottom-right-radius:20px;float:left;");
        message2.appendChild(p2);
       
        p.appendChild(document.createTextNode(text1.value));   
        p2.appendChild(document.createTextNode(text1.value));
        text1.value = "";
})
btn2.addEventListener("click",function(){

    var p=document.createElement("P");
    p.setAttribute("style","width:170px;height:60px;line-height:60px;background-color:blue;color:white;border-top-left-radius:20px;float:right;");
    message2.appendChild(p);
    var p2=document.createElement("P");
    p2.setAttribute("style","margin-left:20px;width:170px;height:60px;line-height:60px;background-color:white;color:black;border-bottom-right-radius:20px;float:left;");
    message1.appendChild(p2);
    p.appendChild(document.createTextNode(text2.value));   
    p2.appendChild(document.createTextNode(text2.value));
    text2.value = "";

})
