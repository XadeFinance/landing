const wrapper = document.querySelector('.wrap-overflow');
const headers = document.getElementsByClassName('headers-post');
const elements = document.getElementsByClassName('article-box');
let selectedElement = 0;
let yMovement = 0;
const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
elements[selectedElement].style.opacity = 1;
headers[selectedElement].style.opacity = 1;

let append_var = 0;
let escape = false;

wrapper.addEventListener("wheel", (evt) => {

    for(let element of elements)
    {
        element.style.opacity = 0.6;
    }

    for(let header of headers)
    {
        header.style.opacity = 0.3;
    }
    elements[selectedElement].style.opacity = 1;


    headers[selectedElement % 4].style.opacity = 1;

    if((evt.deltaY > 0 && (selectedElement == 3 || escape == true)))
    return true;

    if((evt.deltaY < 0 && selectedElement == 0))
    return true;


    evt.preventDefault('');
    yMovement += evt.deltaY;    
    console.log(yMovement);
    if(yMovement > 1000)
    {
        if(selectedElement < 3)
        {
        let offsetA = elements[selectedElement].offsetLeft - wrapper.offsetLeft;
        let offsetB = elements[++selectedElement].offsetLeft - wrapper.offsetLeft;



        if(fnBrowserDetect() == 'chrome')
        {
            wrapper.scrollTo({
            top: 0,
            left: offsetB,   
            behavior: 'smooth'
        })
        }

        else
            sideScroll(wrapper, 'left', 0.1, offsetB - offsetA, 10)
            
            escape = false;
    } 
        else {
            escape = true;
        }
      
        yMovement = -200;
    }
    if(yMovement < -800)
    {
        if(selectedElement > 0)
        {
        let offsetA = elements[selectedElement].offsetLeft - wrapper.offsetLeft;
            selectedElement--;
        let offsetB = elements[selectedElement].offsetLeft - wrapper.offsetLeft;

        if(fnBrowserDetect() == 'chrome')
        {
            wrapper.scrollTo({
            top: 0,
            left: offsetB,   
            behavior: 'smooth'
        })
        }
        else
            sideScroll(wrapper, 'right', 0.3, offsetA - offsetB, 10)
        }
        yMovement = 0;
    }

    
    // wrapper.scrollLeft += yMovement;
    
});
}


function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft += step;
        } else {
            element.scrollLeft -= step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}


function fnBrowserDetect(){
                 
         let userAgent = navigator.userAgent;
         let browserName;
         
         if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "chrome";
           }else if(userAgent.match(/firefox|fxios/i)){
             browserName = "firefox";
           }  else if(userAgent.match(/safari/i)){
             browserName = "safari";
           }else if(userAgent.match(/opr\//i)){
             browserName = "opera";
           } else if(userAgent.match(/edg/i)){
             browserName = "edge";
           }else{
             browserName="No browser detection";
           }
         
          return browserName;
  }