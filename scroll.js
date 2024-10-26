var front=document.getElementById('arrow_front');
var back=document.getElementById('arrow_back');
var v_scroll=document.getElementById('you-history_video');

front.addEventListener("click",()=>{
  v_scroll.style.scrollBehavior="smooth";
  v_scroll.scrollLeft+=900;
  back.style.display='flex';
  front.style.display='none';
})


back.addEventListener("click",()=>{
  v_scroll.style.scrollBehavior="smooth";
  v_scroll.scrollLeft-=900;
  back.style.display='none';
  front.style.display='flex'
  
})


var watch = document.getElementById('watch_later_video_container');
var watch_front= document.getElementById('arrow_front2');
var watch_back= document.getElementById('arrow_back2');

watch_front.addEventListener("click",()=>{
  watch.style.scrollBehavior="smooth";
  watch.scrollLeft+=900;
  watch_back.style.display='flex';
  watch_front.style.display='none';
})


watch_back.addEventListener("click",()=>{
  watch.style.scrollBehavior="smooth";
  watch.scrollLeft-=900;
  watch_back.style.display='none';
  watch_front.style.display='flex';
  
})


var front3=document.getElementById('arrow_front3');
var back3=document.getElementById('arrow_back3');
var his=document.getElementById('hist_shorts_container');

front3.addEventListener("click",()=>{
  his.style.scrollBehavior="smooth";
  his.scrollLeft+=1200;
  back3.style.display='flex';
  front3.style.display='none';
})


back3.addEventListener("click",()=>{
  his.style.scrollBehavior="smooth";
  his.scrollLeft-=1200;
  back3.style.display='none';
  front3.style.display='flex';
  
})