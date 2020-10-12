document.getElementById("studentForm").style.display = "none";
document.getElementById("nonStudentForm").style.display = "none";

function studentClick1() {
    document.getElementById("studentForm").style.display = "block";
    document.getElementById("nonStudentForm").style.display ="none";
    document.getElementById("loginForm").style.display = "none";
}

function studentClick2() {
    document.getElementById("nonStudentForm").style.display = "block";
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
}

function openForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("nonStudentForm").style.display = "none";

  }
  
  function closeForm() {
    document.getElementById("loginForm").style.display = "none";
  }