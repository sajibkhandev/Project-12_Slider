
let allSlide=document.querySelectorAll(".slide")

let formatingArray=Array.from(allSlide)
// console.log(formatingArray);


function activeFind(){                   // active er index find and active er  after,before index find
    let active=document.querySelector(".active")
    let  courrentIndex=formatingArray.indexOf(active)
    // console.log(courrentIndex);

    let pre;
    let next;
    if(courrentIndex==0){
        pre=formatingArray[formatingArray.length-1]
    }else{
        pre=formatingArray[courrentIndex-1]
    }
    if(courrentIndex==formatingArray.length-1){
        next=formatingArray[0]
    }else{
        next=formatingArray[courrentIndex+1]
    }
    // console.log("pre",pre);
    // console.log("next",next);

    return [pre,next]

}


function placement(){                 // eta amake ke kon jaygay ache ta thik kore dey //
    let active=document.querySelector(".active")
    let  courrentIndex=formatingArray.indexOf(active)

    let [pre,next]=activeFind()

    formatingArray.map((slide,index)=>{
        if(courrentIndex==index){
            slide.style.transform="translateX(0%)"
        }else if(slide==pre){
            slide.style.transform="translateX(-100%)"
        }else if(slide==next){
            slide.style.transform="translateX(100%)"

        }
        slide.addEventListener("transitionend",function(){
            slide.classList.remove("smooth")
            
        })
    })

}


let nextButton=document.querySelector(".next")

nextButton.addEventListener("click",function(){
    let active=document.querySelector(".active")
    let [pre,next]=activeFind()
    active.classList.add("smooth")
    next.classList.add("smooth")
    active.classList.remove("active")
    active.style.transform="translateX(-100%)"
    next.style.transform="translateX(0%)"
    next.classList.add("active")
    
    placement()

})

let preButton=document.querySelector(".pre")


preButton.addEventListener("click",function(){
    let active=document.querySelector(".active")
    let [pre,next]=activeFind()
    
    active.classList.add("smooth")
    pre.classList.add("smooth")
    active.classList.remove("active")
    pre.style.transform="translateX(100%)"
    active.style.transform="translateX(0%)"
    pre.classList.add("active")
    placement()

})


