const student = JSON.parse(
localStorage.getItem("student")
)

if(!student){

window.location.href = "login.html"

}

document.getElementById("studentInfo").innerHTML = `

<h3>${student.name}</h3>

<p><strong>Email:</strong> ${student.email}</p>

<p><strong>Course:</strong> ${student.course}</p>

<p><strong>Marks:</strong> ${student.marks}</p>

`

async function sendComplaint(){

const complaint =
document.getElementById("complaint").value

await fetch("https://script.google.com/macros/s/AKfycbw4ogBvGCINM25cXPdxjnbobI1wEskVjtTVi4b_S2stwt6mNhYujuP_KMYfC2CoS5Z5/exec",{

method:"POST",

body:JSON.stringify({

action:"complaint",

student:student.email,

complaint:complaint

})

})

alert("Complaint Submitted")

}

function logout(){

localStorage.clear()

window.location.href = "login.html"

}
