async function sendComplaint(){

const complaint = document.getElementById("complaint").value

const data = {
action:"complaint",
student:localStorage.getItem("studentEmail"),
complaint:complaint
}

await fetch("https://script.google.com/macros/s/AKfycbw4ogBvGCINM25cXPdxjnbobI1wEskVjtTVi4b_S2stwt6mNhYujuP_KMYfC2CoS5Z5/exec",{
method:"POST",
body:JSON.stringify(data)
})

alert("Complaint Submitted")

}

function logout(){

localStorage.clear()

window.location.href="login.html"

}
