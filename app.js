const form = document.querySelector("form");
const firstName = form.querySelector("#firstName");
const secondName = form.querySelector("#secondName");
const age = form.querySelector("#age");
const formSelect = form.querySelector("select");
const phone = form.querySelector("#phone");
const email = form.querySelector("#email");
const submitButton = form.querySelector("button[type='submit']");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let genderOption = Array.from(
    form.querySelectorAll('input[type="radio"]')
  ).find((r) => r.checked);

  const data = {
    firstName: firstName.value,
    secondName: secondName.value,
    age: age.value,
    gender: genderOption.value,
    formSelect: formSelect.value,
    phone: phone.value,
    email: email.value,
  };

  // Создаем и отправляем запрос
  let response = fetch("https://eoyesn7cru0ofv2.m.pipedream.net", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => console.log(response));
});

// https://pipedream.com/@valdemarcheck/requestbin-p_ZJCorAk/inspect
