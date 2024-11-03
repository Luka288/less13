const main = document.querySelector(".mainCon");

init();

function init() {
  axiosLoad();
}

function axiosLoad() {
  axios
    .get("https://jsonplaceholder.typicode.com/users/")
    .then(function (res) {
      console.log(res.data);

      displayUser(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayUser(users) {
  users.forEach((element) => {
    const p = document.createElement("p");
    p.textContent = `${element.name}`;

    main.appendChild(p);
  });
}
