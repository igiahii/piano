const Note = document.querySelector('.nowplaying')
const keys = document.querySelectorAll('.key')
const hints = document.querySelectorAll('.hints')

window.addEventListener('keydown' , function(e){
    // console.log(e.keyCode);
  
    const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`)

    
    if(!key) return

    const keynote = key.getAttribute('data-note')
    
    key.classList.add("playing")
    Note.innerHTML = keynote

    audio.currentTime = 0 
    audio.play()
    
    // key.addEventListener('keyup' , function(){
    //     key.classList.remove('playing')
    // })
    key.addEventListener('transitionend' , function(){
        key.classList.remove('playing')
    })
    
   
})
hints.forEach((elm ,index) =>{
    elm.style = `transition-delay : ${index *50}ms`;
    

}
)