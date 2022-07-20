/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/

const navMenu=document.getElementById('sidebar'),
        navToggle=document.getElementById('nav-toggle'),
        navClose= document.getElementById('nav-close')
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContent = document.querySelectorAll('[data-content]')
        
        
        tabs.forEach(tab =>{
            tab.addEventListener("click",()=>{
                const target= document.querySelector(tab.dataset.target)
                

                tabContent.forEach(tabContents=>{
                    tabContents.classList.remove('skills__active')
                })
                target.classList.add('skills__active')

                tabs.forEach(tab =>{
                    tab.classList.remove('skills__active')
                })
                tab.classList.add('skills__active')
            })
        })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerportfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item');
function activeWork(){
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L=> L.addEventListener("click", activeWork))

/*===== Work Popup =====*/

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work__button")){
        toggleProtfolioPopup();
      portfolioItemDetails(e.target.parentElement);
       
    }

})
function toggleProtfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
document.querySelector('.portfolio__popup-close').addEventListener("click",toggleProtfolioPopup)
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src=portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML=
    portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML=
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;

}
/*=============== SERVICES MODAL ===============*/
const modalViews=document.querySelectorAll('.services__modal'),
      modelBtns=document.querySelectorAll('.services__button'),
      modalCloses=document.querySelectorAll('.services__modal-close')

  let modal= function( modalClick){
          modalViews[modalClick].classList.add('active-modal')
      }

      modelBtns.forEach((modelBtn,i) =>{
        modelBtn.addEventListener('click', () => {
            modal(i);
        })
      })

      modalCloses.forEach((modalClose) =>{
        modalClose.addEventListener('click', ()=>{
            modalViews.forEach((modalView)=>{
                modalView.classList.remove('active-modal')
            })
        })
      })

      /*============Swiper Testimonial=============================*/

      let swiper = new Swiper(".testimonials__container", {
        spaceBetween: 24,
        loop:true,
        grabCursor:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            567: {
              slidesPerView: 2,
            //   spaceBetween: 10,
            },
          768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
        
           
          },
      });

        /*============Input  Animation =============================*/
        const inputs= document.querySelectorAll('.input');

        function focusFunc(){
            let parent= this.parentNode;
            parent.classList.add('focus');

        }

        function blurFunc(){
            let parent= this.parentNode;
            if(this.value==""){
                parent.classList.remove('focus');
            }
        }

        inputs.forEach((input)=> {
            input.addEventListener("focus",focusFunc);
            input.addEventListener("blur",blurFunc);
        })

        /*============Scrool Section Active Link  =============================*/
        //get all section that have id defined
        const section= document.querySelectorAll("section[id]")
        //add an event lisner listing for Scroll
        window.addEventListener("scroll",'navHighlighter');
        function navHighlighter(){
            //get current scroll Position
            let scrollY=window.pageYoffest;
            //now we loop through section to get heghit, top  and Id value fore each
            section.forEach(current=>{
                const sectionHeight=current.offestHeght;
                const sectionTop=current.offestTop - 50,
                sectionId=current.getAttribute("id");

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
                }
                else{
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
                }

            })

        }