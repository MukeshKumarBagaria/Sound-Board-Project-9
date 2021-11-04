const btn=document.querySelectorAll('.btn')
const backgroundColor=document.querySelector('.body')
console.log(btn);//to check that all button's showing in node list
btn.forEach(btn => {
    btn.addEventListener('click',()=>{
     const innerText= btn.innerText
        console.log(innerText)//to check everything working perfectly
        play(innerText)
    })
   
});
function play(src) {
   
    var audio = new Audio(`audio/${src}.mp3`);
    audio.play(); 
    // audio.pause()
}

//adding functionality to change background color on demand
btn.forEach(btn =>{
    
    btn.addEventListener("click",changeBackground);
    function changeBackground() {
        let i = Math.floor((Math.random() * 5) + 1);

        var color=["red","pink","yellow","green","black","orange"]
            document.body.style.background =color[i]; 
 console.log(i)

     }
})

 
 
    