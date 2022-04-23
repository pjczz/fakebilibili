var count = 0
function isInsight(el){
    const rect = el.getBoundingClientRect()
    return rect.top < document.documentElement.clientHeight
}
function loadImg(el){
    if(!el.src){
        el.src = el.dataset.src
    }
}
function checkImgs(){
    let imgs = document.querySelectorAll('img')
    Array.from(imgs).forEach(item =>{
        if(isInsight(item)){
            loadImg(item)
        }
    })
    console.log( count ++)
}
function throtoll(fn,delay,time){
    let timeout = null
    let previous = +(new Date())
    return function(){
        let context = this
        let args = [...arguments]
        let now = +(new Date())
        clearTimeout( timeout )
        if( now - previous > time){
            fn.apply(context,args)
            previous = now
        }else{
            timeout = setTimeout( ()=>{
                fn.apply(context,args)
            },delay)
        }
    } 
}
window.addEventListener('scroll',throtoll(checkImgs ,200,1000) , false)
window.onload = checkImgs