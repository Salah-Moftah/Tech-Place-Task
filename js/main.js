// Data for each list
const featuresData = [
  { text: "عن بنور", link: "#" },
  { text: "البرامج", link: "#" },
  { text: "العناية بالأطراف الصناعية", link: "#" },
  { text: "المركز الإعلامي", link: "#" },
];

const aboutCompanyData = [
  { text: "الأسئلة الشائعة", link: "#" },
  { text: "من نحن", link: "#" },
  { text: "تواصل معنا", link: "#" },
];

const contactUsData = [
  { type: "address", head: "العنوان", value: "الرياض - حي المروج" },
  {
    type: "email",
    head: "البريد الالكتروني",
    value: "APP@Gmail.com",
    link: "mailto:APP@Gmail.com",
  },
  {
    type: "phone",
    head: "للاستشارات",
    value: "(+966) 8896-2220",
    link: "tel:+96688962220",
  },
];


function createListItems(data, listId) {
  const ulElement = document.getElementById(listId);
  if (!ulElement) {
    console.error(`Element with ID '${listId}' not found.`);
    return;
  }

  ulElement.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");

    if (item.type === "address") {
      const headDiv = document.createElement("div");
      headDiv.className = "contact-head";
      headDiv.textContent = item.head;
      li.appendChild(headDiv);
      const spanValue = document.createElement("span");
      spanValue.textContent = item.value;
      li.appendChild(spanValue);
    } else if (item.type === "email" || item.type === "phone") {
      const headDiv = document.createElement("div");
      headDiv.className = "contact-head";
      headDiv.textContent = item.head;
      li.appendChild(headDiv);
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.value;
      li.appendChild(a);
    } else {
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.text;
      li.appendChild(a);
    }
    ulElement.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createListItems(featuresData, "featuresList");
  createListItems(aboutCompanyData, "aboutCompanyList");
  createListItems(contactUsData, "contactUsList");
});


window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

let wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup h3"),
  loginHeader = document.querySelector(".login h3");

loginHeader.addEventListener("click", function () {
  wrapper.classList.add("active");
});
signupHeader.addEventListener("click", function () {
  wrapper.classList.remove("active");
});

