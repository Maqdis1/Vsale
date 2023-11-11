// !POST ADS FORMS
import { exampleAdvertData, userNewPost, showPopup } from "./index.js";

const imgFiles = [];

const uploadImgParent = document.querySelector(".uploadImg__content label");
const postForm = document.getElementById("postForm");
const uploadImgInput = document.getElementById("uploadImg");
uploadImgParent.addEventListener("click", () => uploadImgInput.click());

uploadImgInput.addEventListener("change", () => {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    let img = uploadImgInput.files;
    const fr = new FileReader();
    for (let i = 0; i < img.length; i++) {
      if (!img[i].type.match("image")) continue;
      if (imgFiles.every((e) => e.name !== img[i].name)) imgFiles.push(img[i]);
      fr.readAsDataURL(img[i]);

      fr.addEventListener("load", () => {
        let url = JSON.parse(localStorage.getItem("dropadImgs")) || [];
        if (url.every((el) => el !== fr.result)) {
          url.push(fr.result);
          localStorage.setItem("dropadImgs", JSON.stringify(url));
        }
      });
    }
    postForm.reset();
    showImages();
  } else {
    alert("not working because of Your old browser");
  }
});

const showImages = () => {
  let images = ``;
  const imagesParent = document.querySelector(".uploadImg__content-body");
  imgFiles.forEach((el, indx) => {
    images += `
    <div id="${indx}" class="uploadImg-display">
      <img src="${URL.createObjectURL(el)}" alt="">
      <span class="deleteImg">&times;</span>
    </div>
  `;
  });
  imagesParent.innerHTML = images;

  const deleteImg = document.querySelectorAll(".deleteImg");

  deleteImg.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      let indx = e.target.parentElement;
      imgFiles.splice(indx, 1);
      const checkLocal = JSON.parse(localStorage.getItem("dropadImgs"));
      checkLocal.splice(indx, 1);
      localStorage.setItem("dropadImgs", JSON.stringify(checkLocal));
      showImages();
    });
  });
};

uploadImgParent.addEventListener("drop", (e) => {
  e.preventDefault();
  let img = e.dataTransfer.files;
  const fr = new FileReader();
  for (let i = 0; i < img.length; i++) {
    if (!img[i].type.match("image")) continue;
    if (imgFiles.every((e) => e.name !== img[i].name)) {
      imgFiles.push(img[i]);
      fr.readAsDataURL(img[i]);

      fr.addEventListener("load", () => {
        let url = JSON.parse(localStorage.getItem("dropadImgs")) || [];
        if (url.every((el) => el !== fr.result)) {
          url.push(fr.result);
          localStorage.setItem("dropadImgs", JSON.stringify(url));
        }
      });
    }
  }
  showImages();
});
uploadImgParent.addEventListener("dragover", (e) => e.preventDefault());
uploadImgParent.addEventListener("dragleave", (e) => e.preventDefault());

// !SELECTIONS

const selectField = document.querySelectorAll(".selectField");
const selectFieldArrow = document.querySelector(".selectField i");
const selectedKpp = document.querySelector(".selectField__kpp");
const selectedFuel = document.querySelector(".selectField__fuel");
const selectedDrive = document.querySelector(".selectField__drive");
const selectedCity = document.querySelector(".selectField__city");
const selectFieldOptions = document.querySelectorAll(".options");

selectFieldOptions.forEach((item) => {
  item.addEventListener("click", (e) => {
    const selectedItem = e.target.dataset.target;
    const postFormList = e.target.closest("#postForm__list");
    postFormList.classList.toggle("menu");

    if (selectedItem === "select-kpp") {
      selectedKpp.innerHTML = e.target.innerHTML;
      selectedKpp.style.color = "#000";
    } else if (selectedItem === "select-fuel") {
      selectedFuel.innerHTML = e.target.innerHTML;
      selectedFuel.style.color = "#000";
    } else if (selectedItem === "select-drive") {
      selectedDrive.innerHTML = e.target.innerHTML;
      selectedDrive.style.color = "#000";
    } else if (selectedItem === "select-city") {
      selectedCity.innerHTML = e.target.innerHTML;
      selectedCity.style.color = "#000";
    }
  });
});

selectField.forEach((item) => {
  item.onclick = function () {
    this.nextElementSibling.classList.toggle("menu");
    this.lastElementChild.classList.toggle("rotate");
  };
});

const getPostData = () => {
  const carBrand = document.getElementById("carBrand");
  const carName = document.getElementById("carName");
  const carEngineSize = document.getElementById("carEnginesize");
  const carBodytype = document.getElementById("carBodytype");
  const carColor = document.getElementById("carColor");
  const carPower = document.getElementById("carPower");
  const carMileage = document.getElementById("carMileage");
  const carYear = document.getElementById("carYear");
  const carPrice = document.getElementById("carPrice");
  const userName = document.getElementById("userName");
  const userPhone = document.getElementById("userPhone");
  const carDescription = document.getElementById("carDescription");

  const postForm = document.getElementById("postForm");

  console.log();
  if (postForm) {
    postForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (JSON.parse(localStorage.getItem("userLogin"))) {
        postUserAds();
      } else {
        showPopup();
      }
    });
  } else null;

  carPrice.addEventListener("click", () => {});
  function postUserAds() {
    if (
      selectedKpp.textContent.textContent !== "КПП" &&
      selectedFuel.textContent !== "Топливо"
    ) {
      const userId = exampleAdvertData.length
        ? exampleAdvertData[exampleAdvertData.length - 1].id + 1
        : 0;
      const userPost = {
        id: userId,
        isFavorite: false,
        imgs: JSON.parse(localStorage.getItem("dropadImgs")) || [],
        carBrand: carBrand.value,
        carName: carName.value,
        carKpp: selectedKpp.innerText,
        carFuel: selectedFuel.innerText,
        carEnginesize: carEngineSize.value,
        carDrive: selectedDrive.innerText,
        carBodytype: carBodytype.value,
        carColor: carColor.value,
        carPower: carPower.value,
        userCity: selectedCity.innerText,
        userName: userName.value,
        userPhone: userPhone.value,
        carYear: carYear.value,
        carKm: +carMileage.value,
        carPrice: +carPrice.value,
        carDescription: carDescription.value,
      };
      userNewPost.push(userPost);
      exampleAdvertData.push(userPost);
      localStorage.setItem("userPost", JSON.stringify(userNewPost));
      localStorage.setItem("postData", JSON.stringify(exampleAdvertData));
      postForm.reset();
      localStorage.removeItem("dropadImgs");
      showPopup("Успешно опубликовано на главной странице", "green");
    } else {
      showPopup("Заполните форму правильно!", "red");
    }
  }
};

getPostData();

// !POST ADS FORMS END
