const container = document.querySelector(".span_we_are_here");
const hideMap = document.querySelector(".wrapper_map_container");
const allItems = document.querySelectorAll("div");

// const hide = (e) => {
//   container.addEventListener("click", () => {
//     hideMap.classList.toggle("is-visibility");
//   });
// };

function windowsClose() {
  hideMap.classList.remove("is-visibility");
}

const openMap = (e) => {
  if (e.target.classList.contains("span_we_are_here")) {
    hideMap.classList.toggle("is-visibility");
  } else windowsClose();
};
window.addEventListener("click", openMap);

const panels = document.querySelectorAll(".card");
const text = document.querySelector(".content");
const paragraph = document.querySelector(".content_welcome");
const paragraphLorem = document.querySelector(".content_lorem");
const headerContentWelcome = document.querySelector(".head_content_welcome-h2");
const headerContent = document.querySelector(".head_content-h2");
const slaiderBox = document.querySelector(".slaider_opinion");
const slaiderContent = document.querySelectorAll(".slaider_content");
const leftBtn = document.querySelector(".slaider_btn_left");
const rightBtn = document.querySelector(".slaider_btn_right");
const first = document.querySelector(".one");
const second = document.querySelector(".two");
const third = document.querySelector(".three");
const slaiderWidth = 100;
const slaiderSpeed = 5000;

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
    switch (index) {
      case 0:
        headerContentWelcome.style.display = "block";
        headerContent.style.display = "none";
        paragraph.style.display = "block";
        paragraph.classList.add("see");
        text.style.display = "none";
        paragraphLorem.style.display = "none";
        break;

      case 1:
        headerContentWelcome.style.display = "none";
        headerContent.style.display = "block";
        paragraph.style.display = "none";
        text.style.display = "block";
        text.classList.add("see");
        paragraphLorem.style.display = "none";
        break;
      case 2:
        paragraph.style.display = "none";
        text.style.display = "none";
        paragraphLorem.style.display = "block";
        paragraphLorem.classList.add("see");
        break;
    }
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

let index = 0;

const handleSlaider = () => {
  index++;
  changeContent();
};
let start = setInterval(handleSlaider, slaiderSpeed);
const changeContent = () => {
  if (index > slaiderContent.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = slaiderContent.length - 1;
  }

  slaiderBox.style.transform = `translateX(${index * slaiderWidth}%)`;
};

const handleRightButton = () => {
  index++;

  resetInterval();
};
const handleLeftButton = () => {
  index--;

  resetInterval();
};

const resetInterval = () => {
  changeContent();
  clearInterval(start);
  start = setInterval(handleSlaider, slaiderSpeed);
};
rightBtn.addEventListener("click", handleRightButton);
leftBtn.addEventListener("click", handleLeftButton);

const openForm = document.querySelector(".form-bar_text");
const backdrop = document.querySelector(".backdrop_formular-contact");
const formButtonExit = document.querySelector(".form_exit-btn");
openForm.addEventListener("click", (e) => {
  backdrop.style.display = "block";
});

formButtonExit.addEventListener("click", (e) => {
  backdrop.style.display = "none";
});
// ==============================FORMULARZ==================================
const form = document.querySelector("#contactForm");
const fields = form.querySelectorAll("[required]");
const formMessage = form.querySelector(".form-message");
const url = "send-script.php";
form.setAttribute("novalidate", true);

for (const field of fields) {
  field.addEventListener("input", () =>
    field.classList.toggle("is-invalid", !field.checkValidity())
  );
}
function showSubmitError() {
  formMessage.innerHTML = "Wysłanie wiadomości się nie powiodło";
}

function showSubmitSuccess() {
  const div = document.createElement("div");
  div.classList.add("form-send-success");
  form.after(div);
  div.innerHTML = `
      <strong>Wiadomość została wysłana</strong>
      <span>Dziękujemy za kontakt. Postaramy się odpowiedzieć jak najszybciej</span>
  `;
  form.remove();
}
function checkRequiredFields() {
  let formErrors = false;

  for (const field of fields) {
    if (!el.checkValidity()) {
      field.classList.add("form-error");
      formErrors = true;
    } else {
      field.classList.remove("form-error");
    }
  }

  return formErrors;
}

function afterSubmit(res) {
  if (res.errors) {
    const selectors = res.errors.map((el) => `[name="${el}"]`);
    const fieldsWithErrors = form.querySelectorAll(selectors.join(","));
    for (const field of fieldsWithErrors) {
      field.classList.add("is-invalid");
    }
  } else {
    if (res.status === "success") {
      showSubmitSuccess();
    }
    if (res.status === "error") {
      showSubmitError(res.status);
    }
  }
}
async function makeRequest(data) {
  const res = await fetch(url, {
    method: "post",
    body: data,
  });
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}: ${res.statusText}`);
}
async function submitForm() {
  let formErrors = checkRequiredFields();

  if (!formErrors) {
    const formData = new FormData(form);

    const submit = form.querySelector(".form-submit");
    submit.disabled = true;
    submit.classList.add("loading");
    try {
      const response = await makeRequest(formData);
      afterSubmit(response);
    } catch (err) {
      showSubmitError();
    }

    submit.disabled = false;
    submit.classList.remove("loading");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm();
});

// ==========================MOBILE================================

(() => {
  const menuOverlay = document.querySelector(".header__menu-mobile");
  const closeMenuButton = document.querySelector(".header__exit-btn");
  const openMenuBtn = document.querySelector(".header__mobile-btn");
  openMenuBtn.addEventListener("click", (e) => {
    menuOverlay.classList.remove("d-none");
    openMenuBtn.style.display = "none";
  });
  closeMenuButton.addEventListener("click", (e) => {
    menuOverlay.classList.add("d-none");
    openMenuBtn.style.display = "block";
  });
})();
const acordeonBox = document.querySelectorAll(".acordeon_box");
const acordeonBtn = document.querySelectorAll(".acordeon_btn");
const acordeonText = document.querySelectorAll(".acordeon_info");
const acordeonH2 = document.querySelectorAll(".header_h2");
const acordeonDiv = document.querySelectorAll(".acordeon_div");
const acordeonIconsPlus = document.querySelectorAll(".icon-acordeon-plus");
const acordeonIconsMinus = document.querySelectorAll(".icon-acordeon-minus");
function openAcordeonInfo() {
  if (this.nextElementSibling.classList.contains("is-visible")) {
    this.nextElementSibling.classList.remove("is-visible");
    acordeonIconsPlus.forEach((plus) => plus.classList.toggle("is-hidden"));
    acordeonIconsMinus.forEach((minus) =>
      minus.classList.contains("is-hidden")
    );
  } else {
    closeAcordeonInfo();
    this.nextElementSibling.classList.add("is-visible");
    acordeonIconsPlus.forEach((plus) => plus.classList.add("is-hidden"));

    acordeonIconsMinus.forEach((minus) => minus.classList.remove("is-hidden"));
  }
}

const closeAcordeonInfo = () => {
  acordeonDiv.forEach((item) => item.classList.remove("is-visible"));
};

acordeonBtn.forEach((btn) => {
  btn.addEventListener("click", openAcordeonInfo);
});
