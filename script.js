
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

let menuIcon =document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar')
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{

sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop -100;
    let height=sec.offsetHeight;
    let id =sec.getAttribute('id');
    if(top>=offset && top< offset + height){
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' +id +']').classList.add('active');
        })
    }
})




    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // remove navbar when click on spcific nav element 

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}



function openPdf() {
   
    var pdfUrl = 'MyCv.pdf';
    var link = document.createElement('a');
  
    link.href = pdfUrl;
    link.target = '_blank';
    link.click();
  }



  function openWhatsApp() {
    // Replace '123456789' with the desired phone number, including the country code
    var phoneNumber = '923170508024';
  
    // Create the WhatsApp link
    var whatsappLink = 'https://wa.me/' + phoneNumber;
  
    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
  }

// contact form submit 



function  sendMail(){
    let parms={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }
    emailjs.send("service_3oroltp","template_em09fcj",parms).then(alert("Email Sents...!"))
}

