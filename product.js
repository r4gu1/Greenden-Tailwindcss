var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")


menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-70%"
})

//product search functionality
var container=document.getElementById("product-container")

var productList=document.querySelectorAll("div")
var search=document.getElementById("search")


search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    
for(i=0;i<productList.length;i++)
{
    if(productList[i].textContent.toUpperCase().indexOf(enteredValue)<0)
    {
        productList[i].style.display="none"
    }
    else{
    productList[i].style.display="block"
    }
}
})