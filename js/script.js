const aside = document.querySelector("#Profil Penulis");
const img = aside.querySelector("img");
const title = aside.querySelector("h2");
const table = aside.querySelector("table");

img.addEventListener("mouseover", () => {
  img.style.transform = "scale(1.2)";
});
img.addEventListener("mouseout", () => {
  img.style.transform = "scale(1)";
});

title.addEventListener("mouseover", () => {
  title.style.opacity = 1;
});
title.addEventListener("mouseout", () => {
  title.style.opacity = 0.5;
});

table.querySelectorAll("tr td").forEach((td) => {
  td.addEventListener("mouseover", () => {
    td.style.backgroundColor = "#ddd";
  });
  td.addEventListener("mouseout", () => {
    td.style.backgroundColor = "white";
  });
});
