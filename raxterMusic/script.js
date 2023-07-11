var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x -100 +"px"
    blur.style.top = dets.y-100+"px"
})


gsap.to("#nav",{
backgroundColor:"#000",
height:"70px",
duration:1,
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
   // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
}
})

gsap.to("#main",{
    backgroundColor :"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -50vh",
        end:"top -80vh",
        scrub:3
    }
})

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "raginiipnwr02@gmail.com",
        Password : "F4C834A92E936D2E32126C441D7B2057D6C1",
        To : '9920102045@mail.jiit.ac.in',
        From : 'raginiipnwr02@gmail.com',
        Subject : "New contact form message",
        Body : "Name:" + document.getElementById("name").value
                + "<br> Email:" + document.getElementById("email").value
                + "<br> message:" + document.getElementById("message").value
    }).then(
      message => alert("Message")
    );
}

const toggleBtn= document.querySelector('.toggle_btn');
const toggleBtnIcon= document.querySelector('.toggle_btn i');
const dropDownMenu= document.querySelector('dropdown_menu');

toggleBtn.onclick() = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ?'fa-solid fa fa-times'
    :'fa-solid fa fa-bars'
}