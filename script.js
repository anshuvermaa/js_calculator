let div1=document.getElementById("div1")
let priv=document.getElementById("left")
let buttons=document.querySelectorAll("button")
let div1Value="";
let privValue="";
for(i of buttons){
    i.addEventListener("click", (e)=>{
        buttonText =e.target.innerHTML
        
        if(buttonText=="x"){
            buttonText="*";
            div1Value+=buttonText;
            div1.value=div1Value;
        }
        else if (buttonText=="c"){div1.value="";div1Value=""; priv.innerHTML=""}
        else if (buttonText=="="){
            privValue=div1Value;
            div1.value=eval(div1Value)
            if(div1.value=="NaN"){
                console.log("hello")
                div1.value='∞';}
            div1Value=div1.value;
            priv.innerHTML=" :  " + privValue;
           
        }
        else{
            div1Value+=buttonText;
            div1.value=div1Value;
        }
    })
   
}
