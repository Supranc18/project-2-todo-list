const form = document.getElementById("form");
const input = document.getElementById("input");
const text = document.getElementById("text");
const time = document.getElementById("time");
const error = document.getElementById("error");
const notebox  = document.getElementById("notebox");

// code for add button
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("click")
    validation()
});

// validation for input part
const validation = () =>{
if (input,text,time.value==="") {
    error.innerHTML ="Plese fill all the detail"
    
} else {
    error.innerHTML =""
    pushdata()
    storedata()
    submitbox()
     
}
}
// creating blank object
let data ={}

// pushing value enter in imputs area to that blank object
let pushdata = () =>{
    data["text"]= text.value;
    data["time"]= time.value;
    data["input"]=input.value
    console.log(data)
    
}

// data push in object display in inner html
const storedata = ()=>{
    notebox.innerHTML +=
    `<div class="space"><h3>${data.text}</h3>
    <hr>
    <p>${data.time}</p>
    <hr>
    <p>${data.input}</p>
    <div class="buttons">
        <button ><i  onClick="edit(this)" class="fa-solid fa-pen-to-square"></i></button>
        <button ><i onClick="deletedata(this)" class="fa-regular fa-trash-can"></i></button>
    </div>
    </div>
    `
}

// delete data
const deletedata = (e)=>{
e.parentElement.parentElement.parentElement.remove();
}

// edit data
const edit =(e)=>{
    addbox();
    e.parentElement.parentElement.parentElement.remove();
   
}



// code to get back in main page if all data fills
const submitbox=()=> {
    document.querySelector(".addtask").style.display="none";
    document.querySelector(".main").style.display="flex"; 
    document.querySelector(".notebox").style.display="flex";  
}

// this is for add new task section
const addbox =()=> {
    document.querySelector(".addtask").style.display="block";
    document.querySelector(".main").style.display="none";  

}
// the is for closing add new task section
const closebox=()=> {
    document.querySelector(".addtask").style.display="none";
    document.querySelector(".main").style.display="flex";
    
    
}
console.log(closebox())
