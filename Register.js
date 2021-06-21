const addUser = async () => {
  const FullName = document.getElementById("FullName");
  const Gender = document.getElementById("Gender");
  const Address = document.getElementById("Address");
  const Age = document.getElementById("Age");
  const ContactNumber = document.getElementById("ContactNumber");
  const Email = document.getElementById("Email");
  const Password = document.getElementById("Password");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      responseType: "json",
    },
    body: JSON.stringify({
      FullName: FullName.value,
      Gender: Gender.value,
      Address: Address.value,
      Age: Age.value,
      ContactNumber: ContactNumber.value,
      Email: Email.value,
      Password: Password.value,
    }),
  };

  const response = await fetch(
    "http://localhost:8080/api/user/register",
    options
  );
  const resData = await response.json();
  console.log(resData);
};

const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addUser();
  alert("AccountCreated");
  window.location.replace("index.html");
});
