// !USER FAVOURITE ADS
let userFavoriteAds = JSON.parse(localStorage.getItem("favorites")) || [];
// !USER REGISTRATION INFO
let userInfo = JSON.parse(localStorage.getItem("userData")) || [];
// !USER NEWS POST INFO
export let userNewPost = JSON.parse(localStorage.getItem("userPost")) || [];
// !USERS CAR DATA
export const exampleAdvertData = JSON.parse(
  localStorage.getItem("postData")
) || [
  {
    id: 1,
    isFavorite: false,
    imgs: ["./images/userAdd/audi.webp", "./images/userAdd/audi2.webp"],
    carBrand: "Audi",
    carName: "A4 1.8 CVT",
    carKpp: "Автомат",
    carFuel: "Бензин",
    carEnginesize: "1.8",
    carDrive: "Передний",
    carBodytype: "Седан",
    carColor: "Белый",
    carPower: 200,
    userCity: "Ташкент",
    userName: "Сардор",
    userPhone: "941231212",
    carYear: 2013,
    carKm: 149000,
    carPrice: 16655,
    carDescription: `B8 рестайлинг (2011—2015), Модификация: 1.8 TFSI Multitronic (120 л.с.), История пробега: 11 записей в отчёте Автотеки, Владельцев по ПТС: 1, Состояние: Не битый, Крч машина не едет а летит Вася!
    `,
  },
  {
    id: 2,
    isFavorite: false,
    imgs: ["./images/userAdd/audi3.webp", "./images/userAdd/audi4.webp"],
    carBrand: "Audi",
    carName: "Q3 2.0 AMT",
    carKpp: "Автомат",
    carFuel: "Бензин",
    carEnginesize: "2.0",
    carDrive: "4WD",
    carBodytype: "Внедорожник",
    carColor: "Чёрный",
    carPower: 200,
    userCity: "Ташкент",
    userName: "Рак с Горы",
    userPhone: "947770777",
    carYear: 2013,
    carKm: 116178,
    carPrice: 13500,
    carDescription: `Поколение: I (2011—2014), Модификация: 2.0 TFSI quattro S tronic (170 л.с.), История пробега: 26 записей в отчёте Автотеки, Владельцев по ПТС: 2, Состояние: Не битый если фоток не достаточно можете в любое время позвонить и приехать осмотреть машину, Комплектация: Base, Цена договорная`,
  },
  {
    id: 3,
    isFavorite: false,
    imgs: ["./images/userAdd/bmw.jpg", "./images/userAdd/bmw2.webp"],
    carBrand: "BMW",
    carName: "1 серия 1.6 AT",
    carKpp: "Автомат",
    carFuel: "Бензин",
    carEnginesize: "1.6",
    carDrive: "Задний",
    carBodytype: "Хетчбэк",
    carColor: "Оранжевый",
    carPower: 225,
    userCity: "Самарканд",
    userName: "Алишер",
    userPhone: "946550555",
    carYear: 2011,
    carKm: 283000,
    carPrice: 6800,
    carDescription: `Поколение: E81/E82/E87/E88 рестайлинг (2007—2011), История: 10 записей в отчёте Автотеки, Владельц 1, Состояние: Битый, Подробней по телефону, цену тоже можем обсудить по телефону`,
  },
  {
    id: 4,
    isFavorite: false,
    imgs: ["./images/userAdd/kiasport.jpg", "./images/userAdd/kiasport2.jpg"],
    carBrand: "KIA",
    carName: "Sportage ",
    carKpp: "Автомат",
    carFuel: "Бензин",
    carEnginesize: "2.0",
    carDrive: "4WD",
    carBodytype: "Внедорожник",
    carColor: "Красный",
    carPower: 300,
    userCity: "Самарканд",
    userName: "Влад",
    userPhone: "909099909",
    carYear: 2011,
    carKm: 218215,
    carPrice: 32000,
    carDescription: `Поколение: III (2010—2014), Модификация: 2.0 4WD AT (150 л.с.), Состояние: Не битый, фото оригинал не фейк!`,
  },
  {
    id: 5,
    isFavorite: false,
    imgs: ["./images/userAdd/lada.webp", "./images/userAdd/lada2.webp"],
    carBrand: "LADA",
    carName: "Priora 1.6 МТ",
    carKpp: "Автомат",
    carFuel: "Механика",
    carEnginesize: "1.6",
    carDrive: "Передний",
    carBodytype: "Седан",
    carColor: "Серый",
    carPower: 90,
    userCity: "Ташкент",
    userName: "Сардор",
    userPhone: "944048877",
    carYear: 2011,
    carKm: 68000,
    carPrice: 3400,
    carDescription: `Поколение: I (2007—2013), История пробега: 5 записей в отчёте Автотеки, Владельцев по ПТС: 1, Состояние: Не битый, Модификация: 1.6 MT (98 л.с.), Надежная и не убиваемся связка надежных силовых агрегатов и подвески, Реальный пробег! Можете смело звонить насчет инфы`,
  },
  {
    id: 6,
    isFavorite: false,
    imgs: ["./images/userAdd/kia.webp", "./images/userAdd/kia2.webp"],
    carBrand: "Kia",
    carName: "x6",
    carKpp: "Автомат",
    carFuel: "Бензин",
    carEnginesize: "2.5",
    carDrive: "Задний",
    carBodytype: "Седан",
    carColor: "Белый",
    carPower: 225,
    userCity: "Ташкент",
    userName: "Сардор",
    userPhone: "941231221",
    carYear: 2022,
    carKm: 10000,
    carPrice: 49000,
    carDescription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, nulla quidem pariatur blanditiis quis voluptates libero eum, a ipsum ratione consequatur quos fuga esse vel at, voluptate doloribus dolorum exercitationem ex inventore! Cupiditate, cum nulla?`,
  },
  {
    id: 7,
    isFavorite: false,
    imgs: [
      "./images/userAdd/tesla1.jpg",
      "./images/userAdd/tesla2.jpg",
      "./images/userAdd/tesla3.jpeg",
    ],
    carBrand: "Tesla",
    carName: "Model X",
    carKpp: "Автомат",
    carFuel: "Электро",
    carEnginesize: "6",
    carDrive: "4WD",
    carBodytype: "полноразмерный",
    carColor: "Белый",
    carPower: 420,
    userCity: "Ташкент",
    userName: "Ахрор",
    userPhone: "948080888",
    carYear: 2027,
    carKm: 0,
    carPrice: 109990,
    carDescription: `Новая тесла, Самая экстремальная комплектатция P100D,выстреливает до сотни всего за 3,1 секунду, проезжает до 542 км на одном заряде, слегкостью можно ехать в Самарканд да и Чарвак не думая что по дороге сядит заряд машины как это может случиться с Китайскими электро карами!
    `,
  },
];
const monhts = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
// !MOBILE MENU FUNCTIONAL
let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".nav__list");

MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

// !POP UP
export const showPopup = (
  itemText = "вы не вошли в свой аккаунт",
  bgColor = "red"
) => {
  const popUp = document.querySelector(".popup");
  popUp.innerHTML = `<p class="popup__text">${itemText}</p>`;
  popUp.style.background = `${bgColor}`;
  popUp.classList.add("popup");
  popUp.classList.add("show");

  setTimeout(() => {
    popUp.classList.remove("show");
  }, 3000);
};

// !LOGIN FUNCTIONAL

const showHideLogin = () => {
  const showLogin = () => {
    document.querySelector(".loginFormContainer").classList.add("active");
  };

  const hideLogin = () => {
    document.querySelector(".loginFormContainer").classList.remove("active");
  };

  document.getElementById("login-btn").addEventListener("click", showLogin);

  document
    .getElementById("CloseLoginForm")
    .addEventListener("click", hideLogin);
};
if (document.querySelector(".loginFormContainer")) {
  showHideLogin();
} else null;

// ! ABOUT SECTION CARDS

const aboutSection = () => {
  const aboutData = [
    {
      id: "info 1",
      icon: "fas fa-car",
      title: 74100,
      subtitle: "Продано авто",
    },
    {
      id: "info 2",
      icon: "fas fa-dollar",
      title: 2758720,
      subtitle: "Валютный оборот",
    },
    {
      id: "info 3",
      icon: "fas fa-users",
      title: 255160,
      subtitle: "Пользователей",
    },
    {
      id: "info 4",
      icon: "fas fa-gear",
      title: 451000,
      subtitle: "Продано запчастей",
    },
  ];
  if (document.querySelector(".about__content")) {
    const aboutCardParent = document.querySelector(".about__content");
    aboutCardParent.innerHTML = aboutData
      .map(
        ({ icon, title, subtitle }) =>
          `
            <article class="about__card">
              <i class="${icon}"></i>
        
              <div class="about__card-info">
                <h3 class="card-info__title" data-target="${title}">0+</h3>
                <p class="card-info__subtitle">${subtitle}</p>
              </div>
            </article>
            `
      )
      .join("");

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        let [entry] = entries;
        if (!entry.isIntersecting) return;

        let speed = 200;
        document.querySelectorAll(".card-info__title").forEach((item) => {
          const updateAboutInfo = () => {
            const finalNumber = +item.dataset.target;
            const initialNumber = parseInt(item.innerText);
            const increasePerCount = finalNumber / speed;
            if (initialNumber < finalNumber) {
              item.innerText = `${Math.ceil(
                initialNumber + increasePerCount
              )}+`;
              setTimeout(updateAboutInfo, 40);
            }
          };

          updateAboutInfo();
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );
    counterObserver.observe(aboutCardParent);
  } else return;
};

aboutSection();
// ! ADVERTISEMENTS SECTION CARDS
const userAdvertisement = () => {
  if (document.querySelector(".userAdvertisement__content")) {
    const userAdvertisementParent = (document.querySelector(
      ".userAdvertisement__content"
    ).innerHTML = exampleAdvertData
      .map(
        ({
          id,
          isFavorite,
          imgs,
          carBrand,
          carName,
          carYear,
          carBodytype,
          carKm,
          carPrice,
        }) => {
          return `
      <article class="userAdvertisement__item">
          <div class="userAdvertisement__item-img">
            <img src="${imgs[0]}" alt="${carName}" />
          </div>
  
          <div class="userAdvertisement__item-content">
            <h2 class="userAdvertisement__item-title">${carBrand} ${carName}</h2>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-car"></i>
                </div>
  
                <p>${carYear} года выпуска</p>
              </div>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-gas-pump"></i>
                </div>
  
                <p>${carBodytype}</p>
              </div>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-road"></i>
                </div>
  
                <p>${carKm.toLocaleString()} км пробега</p>
              </div>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-dollar-sign"></i>
                </div>
  
                <p>Цена: $${carPrice.toLocaleString()}</p>
              </div>
          </div>
  
          <div id="${id}" class="like__controller">
            <i id="addToFavourites" class="fa-solid fa-heart ${
              isFavorite ? "liked" : ""
            }"></i>
  
            <a class="moreInfo" href="#!">
              подробно
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
       </article>
      `;
        }
      )
      .join(""));
  } else return;
};

userAdvertisement();

const showPost = (e) => {
  const clickedId = +e.target.parentElement.id;
  const interestedPost = exampleAdvertData.find(
    (advert) => advert.id === clickedId
  );

  localStorage.setItem("interestedPost", JSON.stringify(interestedPost));
  location.href = "./mainAds.html";
};

window.addEventListener("load", () => {
  document.querySelectorAll(".moreInfo").forEach((link) => {
    link.addEventListener("click", showPost);
  });
});

// ! ADVERTISEMENTS SHOW PAGE
function showAdsPage() {
  const interestedPost =
    JSON.parse(localStorage.getItem("interestedPost")) || {};

  // ! CLICKED POST INFO
  const {
    id,
    isFavorite,
    imgs,
    carBrand,
    carName,
    carKpp,
    carFuel,
    carEnginesize,
    carDrive,
    carBodytype,
    carColor,
    carPower,
    userCity,
    userName,
    userPhone,
    carYear,
    carKm,
    carPrice,
    carDescription,
  } = interestedPost;

  const postPageContent = document.createElement("div");
  postPageContent.classList.add("container");
  postPageContent.innerHTML = `
    <div class="page__content">
    <div class="page__content-slider">
    <!-- Slider main container -->
    <div class="swiper reviesContent">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>

    <div class="user-contact">
      <div class="ads-date">

        <h5>Объявление опубликовано ${new Date().getDate()} ${
    monhts[new Date().getMonth()]
  } ${new Date().getFullYear()} года.</h5>
      </div>

      <div class="name">
        <h2>${userName}</h2>
        <h3>г. ${userCity}</h3>
      </div>
      <div class="call-user">
        <p class="user-phone">tel: ${userPhone}</p>
        <a href="tel:${userPhone}" class="userCall-btn">Позвонить</a>
      </div>
    </div>
  </div>
  <div class="product-info">
  <h1>Описание</h1>
  <br />
  <h2>${carBrand} ${carName}</h2>
  <ul class="info-text">
    <li>Двигатель - ${carFuel}, ${carEnginesize} л</li>
    <li>Мощность - ${carPower} л.с., налог</li>
    <li>Коробка передач - ${carKpp}</li>
    <li>Привод - ${carDrive}</li>
    <li>Тип кузова - ${carBodytype}</li>
    <li>Цвет - ${carColor}</li>
    <li>Пробег, км - ${carKm ? carKm.toLocaleString() : 0} км</li>
    <li>
      <h3 class="user__coments">Коментарий:</h3>
      <p>${carDescription}</p>
    </li>
  </ul>
  <div class="car-price"><h1>Цена: $ ${
    carPrice ? carPrice.toLocaleString() : 0
  }</h1></div>
  </div>
  </div>
    `;
  if (document.querySelector(".page")) {
    document.querySelector(".page").append(postPageContent);
    document.querySelector(".swiper-wrapper").innerHTML = imgs
      .map((img) => {
        return `
      <div class="swiper-slide">
      <img src="${img}" alt="${carName}"/>
      </div>
      `;
      })
      .join("");
  } else null;
}
showAdsPage();

// !ADD FAVORITES FUNCTIONAL

const addToFavoritsFunc = () => {
  if (document.getElementById("addToFavourites")) {
    const addToFavoritsBtn = document.querySelectorAll("#addToFavourites");
    addToFavoritsBtn.forEach((favoritsBtn) => {
      favoritsBtn.addEventListener("click", (e) => {
        const parentId = e.target.parentElement.id;
        if (JSON.parse(localStorage.getItem("userLogin"))) {
          addToFavorites(parentId);
        } else {
          showPopup();
        }
      });
    });
  } else null;
};
addToFavoritsFunc();

const deleteFavorits = () => {
  if (document.getElementById("deleteMyFavorits")) {
    const deleteMyFavoritsBtn = document.querySelectorAll("#deleteMyFavorits");
    deleteMyFavoritsBtn.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", (e) => {
        const parentId = e.target.parentElement.id;
        addToFavorites(parentId);
      });
    });
  } else null;
};

const addToFavorites = (parentId) => {
  const selectedId = +parentId;
  const exampleAdvert = exampleAdvertData.find(
    (item) => item.id === selectedId
  );

  if (selectedId === undefined) return;
  else {
    exampleAdvert.isFavorite = !exampleAdvert.isFavorite;

    if (!exampleAdvert.isFavorite) {
      userFavoriteAds = userFavoriteAds.filter(
        (userAds) => userAds.id !== selectedId
      );
      localStorage.setItem("favorites", JSON.stringify(userFavoriteAds));
      showPopup("Вы удалили из избранное", "red");
    } else {
      userFavoriteAds.push(...[exampleAdvert]);
      localStorage.setItem("favorites", JSON.stringify(userFavoriteAds));
      showPopup("Вы добавили в избранное", "green");
    }
    localStorage.setItem("favorites", JSON.stringify(userFavoriteAds));
    localStorage.setItem("postData", JSON.stringify(exampleAdvertData));
    userAdvertisement();
    favoritesPage();

    if (!document.getElementById("search")) addToFavoritsFunc();
  }
};
// !ADD TO FAVORITES FUNCTIONAL END
const searchPage = () => {
  if (document.getElementById("search")) {
    document.getElementById("search").addEventListener("keyup", (e) => {
      const carsData = exampleAdvertData || [];
      let typedValue = e.target.value.toLowerCase();

      const foundPosts = carsData.filter((car) =>
        (car.carBrand.toLowerCase() || car.carName.toLowerCase()).includes(
          typedValue
        )
      );

      createFoundPosts(foundPosts);
      addToFavoritsFunc();

      document.querySelectorAll(".moreInfo").forEach((link) => {
        link.addEventListener("click", showPost);
      });

      if (document.querySelectorAll(".fa-heart")) {
        document.querySelectorAll(".fa-heart").forEach((like) => {
          like.addEventListener("click", (e) => {
            JSON.parse(localStorage.getItem("userLogin"))
              ? e.target.classList.toggle("liked")
              : showPopup();
          });
        });
      } else null;
    });
  } else null;

  function createFoundPosts(foundPosts) {
    if (document.querySelector(".search__content-posts")) {
      if (foundPosts.length) {
        document.querySelector(".search__content-posts").innerHTML =
          foundPosts.map(
            ({
              id,
              isFavorite,
              imgs,
              carBrand,
              carName,
              carYear,
              carBodytype,
              carKm,
              carPrice,
            }) => {
              return `
          <article class="search__content-item">
          <div class="userAdvertisement__item-img">
            <img src="${imgs[0]}" alt="${carName}" />
          </div>
  
          <div class="userAdvertisement__item-content">
            <h2 class="userAdvertisement__item-title">${carBrand} ${carName}</h2>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-car"></i>
                </div>
  
                <p>${carYear} года выпуска</p>
              </div>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-gas-pump"></i>
                </div>
  
                <p>${carBodytype}</p>
              </div>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-road"></i>
                </div>
  
                <p>${null ? 0 : carKm.toLocaleString()} км пробега</p>
              </div>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-dollar-sign"></i>
                </div>
  
                <p>Цена: $${carPrice.toLocaleString()}</p>
              </div>
          </div>
  
          <div id="${id}" class="like__controller">
            <i id="addToFavourites" class="fa-solid fa-heart ${
              isFavorite ? "liked" : ""
            }"></i>
  
            <a class="moreInfo" href="#!">
              подробно
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
       </article>
          `;
            }
          );
      } else {
        document.querySelector(".search__content-posts").innerHTML = `
          <p>ничего не найдено</p>
        `;
      }
    } else null;
  }
};

searchPage();
// !SHOW MORE ADS FUNCTIONALS

const showMoreFn = () => {
  if (document.querySelector(".showMore-btn")) {
    const showMoreBtn = document.querySelector(".showMore-btn");
    let currentNum = 3;

    showMoreBtn.addEventListener("click", (e) => {
      const elementLists = [
        ...document.querySelectorAll(".userAdvertisement__item"),
      ];
      e.target.classList.add("show-loader");
      e.target.children[0].style.display = "block";

      for (let i = currentNum; i < currentNum + 3; i++) {
        setTimeout(() => {
          e.target.classList.remove("show-loader");
          e.target.children[0].style.display = "none";
          if (elementLists[i]) {
            elementLists[i].style.display = "flex";
          }
        }, 2000);
      }
      currentNum += 3;

      if (currentNum >= elementLists.length) {
        e.target.classList.add("loaded");
      }
    });
  } else return;
};

if (document.querySelector(".search__content-posts")) null;
else showMoreFn();

// ! BEST SELLERS CARDS

const bestSellers = () => {
  const bestSellersData = [
    {
      id: "car 1",
      img: "./images/carSlider/car1.jpg",
      name: "Chevrolet Malibu 2",
      price: "42 000",
      year: 2022,
      transmission: "Автомат",
      type: "Бензин",
      km: "10 000",
    },
    {
      id: "car 2",
      img: "./images/carSlider/car2.jpg",
      name: "Chevrolet Tracker 2",
      price: "35 000",
      year: 2022,
      transmission: "Автомат",
      type: "Бензин",
      km: "15 000",
    },
    {
      id: "car 3",
      img: "./images/carSlider/car3.jpg",
      name: "Chevrolet Tahoe",
      price: "82 000",
      year: 2022,
      transmission: "Автомат",
      type: "Бензин",
      km: "12 000",
    },
    {
      id: "car 4",
      img: "./images/carSlider/car4.png",
      name: "Chevrolet Traverse",
      price: "65 000",
      year: 2022,
      transmission: "Автомат",
      type: "Бензин",
      km: "8 000",
    },
    {
      id: "car 5",
      img: "./images/carSlider/car5.jpg",
      name: "Chevrolet Equinox",
      price: "42 000",
      year: 2022,
      transmission: "Автомат",
      type: "Бензин",
      km: "5 000",
    },
    {
      id: "car 6",
      img: "./images/carSlider/car6.jpg",
      name: "Chevrolet Trailblazer",
      price: "52 000",
      year: 2022,
      transmission: "Автомат",
      type: "Бензин",
      km: "9 000",
    },
  ];

  if (document.querySelector(".bestSellers__sliders")) {
    const bestSellersParent = (document.querySelector(
      ".bestSellers__sliders"
    ).innerHTML = bestSellersData
      .map(
        ({ img, name, price, year, transmission, type, km }) =>
          `
      <article class="swiper-slide bestSellers__content-item">
        <img src="${img}" alt="${name}" />
        <div class="bestSellers__content-info">
          <h3 class="content-info__title">${name}</h3>
          <div class="content-info__price">Цена: $ ${price}</div>
          <p>
            <span class="fas fa-circle"></span>${year}
            <span class="fas fa-circle"></span>${transmission}
            <span class="fas fa-circle"></span>${type}
            <span class="fas fa-circle"></span>${km} км
          </p>
        </div>
      </article>
      `
      )
      .join(""));
  } else return;
};

bestSellers();

// ! SERVICES CARDS

const services = () => {
  const servicesData = [
    {
      id: "service 1",
      serviceType: "it is page link",
      icon: "fas fa-tools",
      title: "Ремонт",
      info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Delectus facilis sapiente suscipit explicabo natus ducimus?`,
    },
    {
      id: "service 2",
      serviceType: "it is page link",
      icon: "fas fa-car-crash",
      title: "Страхование",
      info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Delectus facilis sapiente suscipit explicabo natus ducimus?`,
    },
    {
      id: "service 3",
      serviceType: "it is page link",
      icon: "fas fa-oil-can",
      title: "Замена масла",
      info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Delectus facilis sapiente suscipit explicabo natus ducimus?`,
    },
    {
      id: "service 4",
      serviceType: "it is page link",
      icon: "fas fa-car-on",
      title: "24/7 автозапчасти",
      info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Delectus facilis sapiente suscipit explicabo natus ducimus?`,
    },
  ];

  if (document.querySelector(".services__content")) {
    const servicesParent = (document.querySelector(
      ".services__content"
    ).innerHTML = servicesData
      .map(
        ({ id, serviceType, icon, title, info }) =>
          `
        <article class="services__item">
          <a class="services__item-link" href="./services.html">
            <i class="services__item-icon ${icon}"></i>
            <h3 class="services__item-title">${title}</h3>
            <p class="services__item-text">${info}</p>
  
            <p class="moreInfo">
              подробно
              <i class="fa-solid fa-arrow-right"></i>
            </p>
          </a>
        </article>
      `
      )
      .join(""));
  } else return;
};

services();

// ! REVIEWS CARDS
const userReviews = () => {
  const userReviewsData = [
    {
      id: "user 1",
      img: "./images/usersReviews/user1.png",
      review: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia exercitationem ratione voluptates aspernatur, eum
              sed.
              `,
      userName: `Анатолий Коваленко`,
    },
    {
      id: "user 2",
      img: "./images/usersReviews/user2.png",
      review: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia exercitationem ratione voluptates aspernatur, eum
              sed.
              `,
      userName: `Сардор Рахимов`,
    },
    {
      id: "user 3",
      img: "./images/usersReviews/user3.png",
      review: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia exercitationem ratione voluptates aspernatur, eum
              sed.
              `,
      userName: `Нигора Саттарова`,
    },
    {
      id: "user 4",
      img: "./images/usersReviews/user4.png",
      review: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia exercitationem ratione voluptates aspernatur, eum
              sed.
              `,
      userName: `Анна Демьяненко`,
    },
  ];

  if (document.querySelector(".reviews__sliders")) {
    const userReviewsParent = (document.querySelector(
      ".reviews__sliders"
    ).innerHTML = userReviewsData
      .map(
        ({ id, img, review, userName }) =>
          `
        <article class="reviews__item swiper-slide">
          <div class="reviews__item-img">
            <img src="${img}" alt="${userName}" />
          </div>
  
          <div class="reviews__item-content">
            <p class="reviews__item-userReview">${review}</p>
            <h3 class="reviews__item-userName">${userName}</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </article>
      `
      )
      .join(""));
  } else return;
};

userReviews();

// !TAGS FILTER
const searchFilter = () => {
  const liItem = document.querySelectorAll(".brands__list li");
  const imgItem = document.querySelectorAll(".product img");
  const imgParent = document.querySelector(".product");

  liItem.forEach((li) => {
    li.onclick = function () {
      //active
      liItem.forEach((li) => {
        li.className = "";
      });
      li.className = "active";

      //Filter
      const value = li.textContent;

      imgItem.forEach((img) => {
        img.style.display = "none";

        if (
          img.getAttribute("data-filter") === value.toLowerCase() ||
          value === "Все"
        ) {
          img.style.display = "block";
        }
      });
    };
  });
};

searchFilter();

// !REGISTRATION FORM

if (document.getElementById("login-btn")) {
  if (JSON.parse(localStorage.getItem("userLogin"))) {
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("account-link").style.display = "block";
  } else {
    document.getElementById("login-btn").style.display = "block";
  }
} else null;

if (document.querySelector(".signUp")) {
  document.querySelector(".signUp").addEventListener("submit", signUp);
} else null;

function signUp(e) {
  e.preventDefault();

  let name = document.getElementById("name").value,
    email = document.getElementById("email").value,
    pwd = document.getElementById("password").value,
    agreement = document.getElementById("agreement").checked;
  if (agreement) {
    const exist =
      userInfo.length &&
      JSON.parse(localStorage.getItem("userData")).some(
        (item) => item.email.toLowerCase() === email.toLowerCase()
      );

    if (!exist) {
      userInfo.push({ name, email, pwd });
      localStorage.setItem("userData", JSON.stringify(userInfo));
      document.querySelector("form").reset();
      document.getElementById("name").focus();

      showPopup(
        "вы успешно создали аккаунт. Что бы войти, нажмите кнопку Вход",
        "green"
      );
    } else {
      showPopup("Пользователь с таким Email уже существует", "red");
    }
  } else {
    showPopup("вы не приняли пользовательское соглашение", "red");
  }
}

// !LOG IN FORM
if (document.querySelector(".login-form")) {
  document.querySelector(".login-form").addEventListener("submit", signIn);
} else null;

function signIn(e) {
  e.preventDefault();

  let email = document.getElementById("loginEmail").value,
    pwd = document.getElementById("loginPassword").value;

  let userInfo = JSON.parse(localStorage.getItem("userData")) || [];

  const exist =
    userInfo.length &&
    JSON.parse(localStorage.getItem("userData")).some(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.pwd.toLowerCase() === pwd.toLowerCase()
    );

  if (!exist) {
    showPopup("данные не верны", "red");  
  } else {
    localStorage.setItem("userLogin", JSON.stringify({ email, pwd }));
    location.href = "./index.html";
  }
}

// !ACCOUNT PAGE
const accountPage = () => {
  userInfo.forEach((user) => {
    const { name, email } = user;
    if (document.querySelector(".user__info")) {
      const userInfoParent = (document.querySelector(
        ".user__info"
      ).innerHTML = `
        <p>Имя: ${name}</p>
        <p>Email: ${email}</p>
        <button id="deleteAccount" class="deleteAcc redBtn">Удалить аккаунт</button>
      `);
    } else null;
  });
  // !LOG OFF BTN
  if (document.querySelector(".btn-logOff")) {
    const logoffBtn = document
      .querySelector(".btn-logOff")
      .addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("userLogin");
        location.href = "./index.html";
      });

    const deleteUserAccount = document
      .getElementById("deleteAccount")
      .addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("userLogin");
        localStorage.removeItem("userData");
        localStorage.removeItem("favorites");
        localStorage.removeItem("userPost");
        const newExampleAdvert =
          JSON.parse(localStorage.getItem("postData")) || [];
        const deleteFavorites = newExampleAdvert.map(
          (item) => (item.isFavorite = false)
        );
        localStorage.setItem("postData", JSON.stringify(newExampleAdvert));
        location.href = "./index.html";
      });
  } else null;
};
accountPage();

// !FAVORITS PAGE
const favoritesPage = () => {
  const favoriteAdsParent = document.querySelector(".favorite__ads");
  if (favoriteAdsParent) {
    userFavoriteAds = JSON.parse(localStorage.getItem("favorites")) || [];
    if (userFavoriteAds.length) {
      favoriteAdsParent.innerHTML = userFavoriteAds.map(
        ({
          id,
          isFavorite,
          imgs,
          carName,
          carBrand,
          carYear,
          carBodytype,
          carKm,
          carPrice,
        }) => {
          return `
        <article class="favorite__ads-item">
        <div class="userAdvertisement__item-img">
          <img src="${imgs[0]}" alt="${carName}" />
        </div>
    
        <div class="userAdvertisement__item-content">
          <h2 class="userAdvertisement__item-title">${carBrand} ${carName}</h2>
            <div class="userAdvertisement__item-info">
              <div class="userAdvertisement__item-icon">
                <i class="fas fa-car"></i>
              </div>
    
              <p>${carYear} года выпуска</p>
            </div>
            <div class="userAdvertisement__item-info">
              <div class="userAdvertisement__item-icon">
                <i class="fas fa-gas-pump"></i>
              </div>
    
              <p>${carBodytype}</p>
            </div>
            <div class="userAdvertisement__item-info">
              <div class="userAdvertisement__item-icon">
                <i class="fas fa-road"></i>
              </div>
    
              <p>${carKm.toLocaleString()} км пробега</p>
            </div>
            <div class="userAdvertisement__item-info">
              <div class="userAdvertisement__item-icon">
                <i class="fas fa-dollar-sign"></i>
              </div>
    
              <p>Цена: $ ${carPrice.toLocaleString()}</p>
            </div>
        </div>
    
        <div id="${id}" class="like__controller">
          <i id="deleteMyFavorits" class="fa-solid fa-heart ${
            isFavorite ? "liked" : ""
          }"></i>
    
          <a class="moreInfo" href="#!">
            подробно
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
     </article>`;
        }
      );
    } else {
      favoriteAdsParent.innerHTML = `<h2 class="section__title">Ваши Избранные пусто</h2>`;
    }
  } else null;
  deleteFavorits();
};

favoritesPage();

const userPostPage = () => {
  const userPostParent = document.querySelector(".userNew__Posts");
  if (userPostParent) {
    const userNewPost = JSON.parse(localStorage.getItem("userPost")) || [];
    if (userNewPost.length) {
      userPostParent.innerHTML = userNewPost.map(
        ({
          id,
          imgs,
          carName,
          carBrand,
          carYear,
          carBodytype,
          carKm,
          carPrice,
        }) => {
          return `
        <article class="favorite__ads-item">
          <div class="userAdvertisement__item-img">
            <img src="${imgs[0]}" alt="${carName}" />
          </div>
      
          <div class="userAdvertisement__item-content">
            <h2 class="userAdvertisement__item-title">${carBrand} ${carName}</h2>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-car"></i>
                </div>
      
                <p>${carYear} года выпуска</p>
              </div>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-gas-pump"></i>
                </div>
      
                <p>${carBodytype}</p>
              </div>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-road"></i>
                </div>
      
                <p>${carKm.toLocaleString()} км пробега</p>
              </div>
              <div class="userAdvertisement__item-info">
                <div class="userAdvertisement__item-icon">
                  <i class="fas fa-dollar-sign"></i>
                </div>
      
                <p>Цена: $ ${carPrice.toLocaleString()}</p>
              </div>
          </div>
      
          <div id="${id}" class="like__controller like__controller-justifyEnd">
            <a class="moreInfo" href="#!">
              подробно
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
       </article>`;
        }
      );
    } else {
      userPostParent.innerHTML = `
      <h2 class="post__title">Вы еще не подали объявления, Объявления можно подать нажав сюда</h2>
      <a class="addPost-link" href="../postAds.html">
        Нажми на меня
        <img src="./images/headerImg/postMe.gif" alt="">
      </a>
      `;
    }
  } else null;
  deleteFavorits();
};
userPostPage();
// ! ACCOUNT MENU TABS
const accountTabs = () => {
  const tabBtns = document.querySelectorAll(".tab__list-item");
  const tabContents = document.querySelectorAll(".content-right__info");

  tabBtns.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((tab) => tab.classList.remove("active"));

      btn.classList.add("active");

      tabContents.forEach((content) => {
        content.classList.remove("show");
        content.style.transitionDelay = "0s";
      });
      tabContents[ind].classList.add("show");
      tabContents[ind].style.transitionDelay = ".4s";
    });
  });
};

accountTabs();

// !Swiper JS For BEST SELLERS Slider
const bestSellersSwiper = new Swiper(".bestSellers__content", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //This is For Responsive
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// !Swiper JS For Review Slider
const reviewsSwiper = new Swiper(".reviews__content", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //This is For Responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    560: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const mainPageSlider = new Swiper(".reviesContent", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
  },
});
