// Modal
import { routes as routeData } from "./data.js"
// NavLink Listner
function navLinkActive(e){
  let elementsHTML = document.getElementsByClassName('nav-link');
  let elements = [...elementsHTML];
  let selectedElement = e.target.id;
  elements.forEach(element => {
    if(element.id === selectedElement){
      element.classList.add("active");
      routeSelector(selectedElement.split("vehicleType")[1]);
    }
    else {
      element.classList.remove("active");
    }
  });
}
function routeSelector(type){
  switch (type) {
    case "Bus":
      routeDropDown(routeData.bus);
      break;
    case "Train":
      routeDropDown(routeData.train, "Train");
      break;
    case "Commuter":
      routeDropDown(routeData.commuter);
      break;
    default:
      break;
  }
}
function routeStyle(route){
  if(routeData.train.includes(route)){
    let styleHTML  = `style="color: white; background-color:`;
    if(route.includes("Green")){
      styleHTML += 'Green;"';
    } else {
      styleHTML += route+';"';
    }
    return styleHTML;
  }
  return ""
}
function routeDropDown(routes, type= ""){
  let rHTML = "";
  routes.forEach(route => {
     rHTML += `<div class="panel" ${ routeStyle(route) }>${ route }</div>`  
  });
  document.getElementById("routeSelector").innerHTML = `
  <div class="container">
    <div class="routeGrid${ type }">
      ${ rHTML }
    </div>
  </div>
  `;

}
export { navLinkActive }