const themeDialog = document.querySelector(".theme-dialog");
const previewImage = themeDialog.querySelector("img");
const previewCaption = themeDialog.querySelector("p");

for (const button of document.querySelectorAll(".phone")) {
  button.addEventListener("click", () => {
    const thumbnail = button.querySelector("img");
    previewImage.src = thumbnail.src;
    previewImage.alt = thumbnail.alt;
    previewCaption.textContent = button.nextElementSibling.textContent;
    themeDialog.showModal();
  });
}

themeDialog.querySelector(".close-dialog").addEventListener("click", () => {
  themeDialog.close();
});

themeDialog.addEventListener("click", (event) => {
  if (event.target === themeDialog) {
    const bounds = themeDialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) themeDialog.close();
  }
});

if (/MicroMessenger|XiaoHongShu/i.test(navigator.userAgent)) {
  document.querySelector(".browser-hint").hidden = false;
}
