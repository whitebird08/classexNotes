
<form>
  <label>name
    <input id='name'>
  <label>email
    <input id='email'>
  <button onclick='store()' type=button>store info</button>
    
</form>

function store(){
  var inputName= document.getElementById("name")
  var inputEmail= document.getElementById("email")
  localStorage.setItem("name", inputName.value);
  localStorage.setItem("email", inputEmail.value);

console.log('howdy ' + localStorage.getItem("name", inputName.value))
}

//something like this for jquery
$(.input).append('howdy ' + localStorage.getItem("name", inputName.value)