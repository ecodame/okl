window.onload = () =>{
    const tabs = document.querySelectorAll('.tab');
    const contenues = document.querySelectorAll('.contenue');
    let active = document.querySelector('.active');
    let target = active.dataset.target;

    affiche();
    document.querySelector(target).classList.add('show')
    function affiche(){
        for(let tab of tabs){
            if( tab !== active){
              tab.addEventListener("click",tabclic) 
              tab.classList.remove('active');
            }

            for(let contenue  of contenues){
                contenue.classList.remove('show')

            }
        }


    }

    function tabclic(){
        target = this.dataset.target;
        active = this;
        this.classList.add('active')
        this.removeEventListener('click',tabclic)

        affiche()
        document.querySelector(target).classList.add('show')

       
    }a
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



function appliquederoulement(){
    document.querySelector(".deroulement").classList.toggle('app')
    document.querySelector(".minus").classList.toggle('minuss')
    document.querySelector(".plus").classList.toggle('pluss')


}
function appliquederoulement2(){
    document.querySelector(".deroulement2").classList.toggle('app2')
    document.querySelector(".minus2").classList.toggle('minuss2')
    document.querySelector(".plus2").classList.toggle('pluss2')


}
function appliquederoulement3(){
    document.querySelector(".deroulement3").classList.toggle('app3')
    document.querySelector(".minus3").classList.toggle('minuss3')
    document.querySelector(".plus3").classList.toggle('pluss3')
}
function appliquederoulement4(){
    document.querySelector(".deroulement4").classList.toggle('app4')
    document.querySelector(".minus4").classList.toggle('minuss4')
    document.querySelector(".plus4").classList.toggle('pluss4')
}

function openfrorm(){
    document.querySelector('.show-service2').classList.toggle('clause-frorm2')
    document.querySelector('.show-service').classList.toggle('open-frorm')
}

function openfrorm2(){
    document.querySelector('.show-service').classList.toggle('clause-frorm')
    document.querySelector('.show-service2').classList.toggle('open-frorm2')
}



function sentmsg(){
    var phonnumbser = "+237657073440";
    var name_service  = document.querySelector('.nomservice').value;
    var type_service  = document.querySelector('.typeservice').value;
    var pays  = document.querySelector('.pays').value;
    var salary  = document.querySelector('.salary').value;
    var name  = document.querySelector('.name').value;
    var phone  = document.querySelector('.phone').value;
    var description  = document.querySelector('.description').value;

    var url = "https://wa.me/" + phonnumbser + "?text=" 
    +"*NAME-SERVICE :* " +name_service+"%0a"
    +"*TYPE-SERVICE :* " +type_service+"%0a"
    +"*SALARY :* " +salary+"%0a"
    +"*COUNTRY/CITY :* " +pays+"%0a"
    +"*NAME :* " +name+"%0a"
    +"*TEL :* " +phone+"%0a"
    +"*DESCRIPTION :* " +description+"%0a%0a"

    +"i would like to post a service at boncoin ....here is my information ";


    window.open(url,'_blank').focus();
    
}

function sentmsg2(){
    var phonnumbser = "+237657073440";
    var name_service  = document.querySelector('.nomservice2').value;
    var type_service  = document.querySelector('.typeservice2').value;
    var pays  = document.querySelector('.pays2').value;
    var salary  = document.querySelector('.salary').value;
    var name  = document.querySelector('.name2').value;
    var phone  = document.querySelector('.phone2').value;
    var description  = document.querySelector('.description2').value;

    var url = "https://wa.me/" + phonnumbser + "?text=" 
    +"*NAME-SERVICE :* " +name_service+"%0a"
    +"*TYPE-SERVICE :* " +type_service+"%0a"
    +"*SALARY :* " +salary+"%0a"
    +"*COUNTRY/CITY :* " +pays+"%0a"
    +"*NAME :* " +name+"%0a"
    +"*TEL :* " +phone+"%0a"
    +"*DESCRIPTION :* " +description+"%0a%0a"

    +"i would like to post a job offer at boncoin ....here is my information ";


    window.open(url,'_blank').focus();
    
}