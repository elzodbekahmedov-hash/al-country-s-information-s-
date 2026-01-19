const elLoginForm = document.getElementById("loginform");

elLoginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formData = new FormData(elLoginForm);
  let result = {};

  formData.forEach((value, key) => {
    result[key] = value;
  });  
  login(result)
});

function login(data) {
  fetch("https://json-api.uz/api/project/fn44-amaliyot/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      console.log(res)
      if(res=="User not found (check username and password)") {
        alert(res);
      } else {
        let responseObj = JSON.parse(res);      
        localStorage.setItem("token", responseObj.access_token);
        alert("Login successfuly!")
        setTimeout(()=>{
        location.href = location.origin+"/index.html";
        },2000)
      }
    })
    .catch(() => {
      alert("error");
    });
}