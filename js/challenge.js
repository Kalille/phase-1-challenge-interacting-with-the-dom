const minusBtn = document.getElementById('minus')
const counter = document.getElementById('counter')
const plusBtn = document.getElementById('plus')
const heartBtn = document.getElementById('heart')
const pauseBtn = document.getElementById('pause')
const likesList = document.querySelector('.likes')

minusBtn.addEventListener('click',()=>
    counter.innerText = --counter.innerText);
    console.log('minus clicked');
    // console.log(counter)
  const timer =  setInterval(function() {
        counter.innerText = ++counter.innerText
    // console.log ("hello")
        }, 2000);

 plusBtn.addEventListener('click', ()=>
counter.innerText = ++counter.innerText);

const paused=pauseBtn.addEventListener('click',()=>
    clearInterval(timer)
    // console.log('paused');

);
heartBtn.addEventListener('click',likedAmount)
  
  
    
       function likedAmount(){
    //     const foundLi = document.querySelector(`li[data-num="${counter.innerText}"]`)
    //   if(!foundli) {
       const li = document.createElement('li');
        li.dataset.num = counter.innerText;
        li.innerHTML=  `${counter.innerText} has been liked <span>1</span> times`;
        likesList.appendChild(li);
      }
    //   else {foundLi.children[0].innerText = ++foundLi[0].innerText

    //   }


    // }

