const headerTag = document.querySelector("header")

document.addEventListener("scroll", function(){
  const pixels = window.scrollY

  if(pixels >= headerTag.getBoundingClientRect().height){

    headerTag.classList.add("scrolled")
  }else{
    headerTag.classList.remove("scrolled")
  }
})



const photoWrap = document.querySelector("div.photo-wrap")
const photos = document.querySelectorAll("div.photo-wrap img")

photoWrap.addEventListener("mouseover", function(){
    

  photos.forEach(photo => {

    let randomX = Math.round(Math.random()*4)*20 - 40;
    let randomY = Math.round(Math.random()*4)*20 - 40;

    photo.style.transform = `translate(${randomX}px, ${randomX}px) scale(0.8)`;
  })

})

photoWrap.addEventListener("mouseout", function(){

  photos.forEach(photo =>{
    photo.style.transform = "translate(0, 0)";
  })
})


let clickNum = 0

photoWrap.addEventListener("click", function(){
  clickNum++
  console.log(clickNum)

  photos[clickNum%photos.length].style.zIndex = clickNum  
})

