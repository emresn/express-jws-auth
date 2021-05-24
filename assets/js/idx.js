var activeTab;

if(window.location.pathname == '/'){
    activeTab = "home";
}else{
    activeTab = window.location.pathname.substr(1);
    
}

var activeEl = document.getElementById(activeTab);
activeEl.setAttribute("class","active");


  