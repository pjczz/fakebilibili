
 let timeout=null; 
export function refreshThrottle(cb, wait = 1000) {   
  
  let that=this
  
  return function(...args){
    
    // 判断定时器是否存在，存在的话进行清除，重新进行定时器计数
    if(timeout){clearTimeout(timeout);//清除之前的事件
    timeout=null
  
  } 
    timeout = setTimeout(()=>{
      cb.call(that,args);//执行事件
    },wait);
  }

}
