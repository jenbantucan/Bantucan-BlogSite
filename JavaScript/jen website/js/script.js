function postBlog() {
var input_title = document.getElementById("input_title").value;
var input_fname = document.getElementById("input_fname").value;
var input_mname = document.getElementById("input_mname").value;
var input_lname= document.getElementById("input_lname").value;
var input_content= document.getElementById("input_content").value;

document.getElementById("title").innerHTML = input_title;
document.getElementById("fullname").innerHTML = input_fname + " " + input_mname + " " + input_lname;
document.getElementById("content").innerHTML = input_content;
