document.getElementById("studentForm").style.display = "none";
document.getElementById("nonStudentForm").style.display = "none";

function studentClick1() {
    document.getElementById("studentForm").style.display = "block";
    document.getElementById("nonStudentForm").style.display ="none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("already").style.display = "none";
}

function studentClick2() {
    document.getElementById("nonStudentForm").style.display = "block";
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("already").style.display = "none";
}

function openForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("nonStudentForm").style.display = "none";

  }
  
  function closeForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("nonStudentForm").style.display = "none";
    document.getElementById("student").style.display = "none";
  }

  document.getElementById("student").style.display = "none";
  document.getElementById("nonStudent").style.display = "none";
  document.getElementById("arrowd").style.display = "none"

function start() {
  document.getElementById("arrowr").style.display = "none"
  document.getElementById("arrowd").style.display = "inline-block"
  document.getElementById("student").style.display = "inline-block";
  document.getElementById("nonStudent").style.display = "inline-block"
}
//   $(function () {
//     $(window).on('scroll', function () {
//         if ( $(window).scrollTop() > 10 ) {
//             $('.navbar').addClass('active');
//         } else {
//             $('.navbar').removeClass('active');
//         }
//     });
// });

var form = document.getElementById("studentForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('cancel', handleForm);