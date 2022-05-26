// Add your code here
function submitData(name, email) {
  const fetchReturn = fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "email": email
    })
  })
  .then(res => res.json())
  // .then(data => console.log(data['name']))
  .then(data => {
    const body = document.querySelector("body");
    body.innerHTML = `${data.id}`;
    })
  .catch(error => {
    alert("Error Found!");
    const body = document.querySelector("body");
    body.innerHTML = `${error.message}`;
    })
  return fetchReturn;
}

// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// }

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)