function Sel() {
    let dropdown = document.getElementById("options");
    let selectedValue = dropdown.value;
    console.log(dropdown.value)
}
function Sel2() {
    let dropdownd = document.getElementById("options2");
    let selectedValued = dropdownd.value;
    console.log(dropdownd.value)
}
function KS(){
    document.getElementById("KS").style.display = "block";
    document.getElementById("KE").style.display = "none";
    document.getElementById("KEE").style.display = "none";
    document.getElementById("rezultat").innerHTML = " ";
    document.getElementById("rezultat2").innerHTML = "";
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("r").value = "";
}
function KE(){
    document.getElementById("KS").style.display = "none";
    document.getElementById("KE").style.display = "block";
    document.getElementById("KEE").style.display = "none";
    document.getElementById("rezultat2").innerHTML = "";
    document.getElementById("rezultat").innerHTML = "";
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("r").value = "";
}


let q1, q2, r, f, ee, koe;

const k = 9e9;
function KSR(){
let dropdown = document.getElementById("options");
let selectedValue = dropdown.value;
let dropdownd = document.getElementById("options2");
let selectedValued = dropdownd.value;
console.log(dropdownd.value)
console.log(dropdown.value)
let q1 = parseFloat(document.getElementById("q1").value); //parseFloat() is used to convert str to int.
let q2 = parseFloat(document.getElementById("q2").value);
let cq1 = parseFloat(q1 + selectedValue);

let cq2 = parseFloat(q2 + selectedValued);
console.log(cq1, cq2)
let r = parseFloat(document.getElementById("r").value);
f = (k * Math.abs(cq1) * Math.abs(cq2)) / (r * r);


f = f.toFixed(3)
console.log(f)
document.getElementById("rezultat").innerHTML = f + " N";
}
let p, t, e;
function KER(){
p = parseFloat(document.getElementById("p").value);
t = parseFloat(document.getElementById("t").value);
e = p*t;
document.getElementById("rezultat2").innerHTML = e + "Wh " + e/1000 + "kWh ";
}
// Get all calculator sections
const calculatorSections = [
    document.getElementById("KS"),
    document.getElementById("KE"),
    document.getElementById("KEE")
  ];
  
  // Clear inputs when clicking outside calculator sections
  document.addEventListener("click", function(event) {
    let clickedOutside = true;
    
    // Check if click was inside any calculator section
    calculatorSections.forEach(section => {
      if (section && section.contains(event.target)) {
        clickedOutside = false;
      }
    });
  
    // If clicked outside all calculator sections, clear inputs
    if (clickedOutside) {
      clearAllInputs();
    }
  });
  
  function clearAllInputs() {
    // Clear KS inputs
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("r").value = "";
    
    // Clear KE inputs
    document.getElementById("p").value = "";
    document.getElementById("t").value = "";
    
    // Clear results
    document.getElementById("rezultat").textContent = "";
    document.getElementById("rezultat2").textContent = "";
  }