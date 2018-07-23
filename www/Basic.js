// 各ページごとにJSファイルとCSSファイルを切り替え
var changeFile = function(routeToFile){
  $('.jsFileDesignation').html("<script class='jsFileDesignation' src='" + routeToFile + "/" + routeToFile +  ".js'><" + "/script>");
  document.getElementById("cssFileDesignation").href = "css/" + routeToFile +  ".css";
}

var push = function(routeToFile, params){
  var Url = routeToFile +"/" +routeToFile+".html";
  var appNavigator = document.getElementById("appNavigator");


  if(params ==" "){
    appNavigator.pushPage(Url);
    changeFile(routeToFile);
  }else{
    appNavigator.pushPage(Url, { 
      data: {
        param: params
      } 
    } ).then(changeFile(routeToFile));
  }
}

var pop = function(routeToFile){
  appNavigator.popPage(Url);
  changeFile(routeToFile);
}