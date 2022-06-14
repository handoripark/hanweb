const headerTag = document.querySelector("header")

document.addEventListener("scroll", function(){
  const pixels = window.scrollY

  if(pixels >= headerTag.getBoundingClientRect().height){

    headerTag.classList.add("scrolled")
  }else{
    headerTag.classList.remove("scrolled")
  }
})

