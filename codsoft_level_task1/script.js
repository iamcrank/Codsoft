const scroll = new LocomotiveScroll({
  el: document.querySelector('.wrapper'),
  smooth: true
});

document.querySelector(".foot i").addEventListener("click", () =>{
  scroll.scrollTo(0);
})

function menu(){
  const hamburgers = document.querySelector(".hamburger");
  navBar = document.querySelector(".navbar");
  hamburgers.addEventListener("click", function() {
      hamburgers.classList.toggle("active")
      navBar.classList.toggle("active")
      navBar.querySelectorAll(".items ").forEach((item) => {
          item.addEventListener("click", function(){
              hamburgers.classList.remove("active")
              navBar.classList.remove("active")
          })
      })
  })
}
 menu()