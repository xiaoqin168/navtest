window.onload=function(){
    var lists=document.getElementById("list").getElementsByTagName("li");
    for(var i=0;i<lists.length;i++){
        var obj=lists[i];
       
        obj.onclick=function(obj){
            this.setAttribute("class","act");
            console.log(this.children);
           
            var objsblings=this.parentNode.children;
            console.log(objsblings);
            for( var j=0;j<objsblings.length;j++){
                console.log(objsblings[j]);
                if(objsblings[j]!==this)
                objsblings[j].removeAttribute("class");
                
            }
    
        }
    }
    
}