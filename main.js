const menu = [
    {
        id:1,
        title: "Mustafa Kemal Atatürk",
        img: "../images/atatürk2.png",
        desc: " 1923 - 1938",
    },
    {
        id:2,
        title: "İsmet İnönü",
        img: "../images/baskanlar/inönü.jpg",
        desc: " 1938 - 1950",
    },
    {
        id:3,
        title: "Celal Bayar",
        img: "../images/baskanlar/bayar.png",
        desc: " 1950 - 1960",
    },
    {
        id:4,
        title: "Cemal Gürsel",
        img: "../images/baskanlar/gursel.jpg",
        desc: " 1960 - 1966",
    },
    {
        id:5,
        title: "Cevdet Sunay",
        img: "../images/baskanlar/sunay1.jpg",
        desc: " 1966 - 1978",
    },
    {
        id:6,
        title: "Fahri Korutürk",
        img: "../images/baskanlar/Fahri_Korutürk.jpg",
        desc: " 1973 - 1980",
    },
    {
        id:7,
        title: "Kenan Evren",
        img: "../images/baskanlar/evren.png",
        desc: " 1982 - 1989",
    },
    {
        id:8,
        title: "Turgut Özal",
        img: "../images/baskanlar/özal.jpg",
        desc: " 1989 - 1993",
    },
    {
        id:9,
        title: "Süleyman Demirel",
        img: "../images/baskanlar/demirel.jpg",
        desc: " 1993 - 2000",
    },
    {
        id:10,
        title: "A. Necdet Sezer",
        img: "../images/baskanlar/sezer.jpg",
        desc: " 2000 - 2007",
    },
    {
        id:11,
        title: "Abdullah Gül",
        img: "../images/baskanlar/gül.jpg",
        desc: " 2007 - 2014",
    },
    {
        id:12,
        title: "Recep Tayyip Erdoğan",
        img: "../images/baskanlar/erdogan.jpg",
        desc: " 2014...",
    },
]



let section = document.getElementById("section");

window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
     
      return `
      <div class="col-md-3 p-3 m-3">
          <div class=" h-100 card" style="background:transparent; border: 0px; ">
              <img src= ${item.img} class="card-img-top h-75" alt="${item.img}">
              <div class="card-body">
                <h5 class="card-title" style="color:black;">${item.title}</h5>
                <p class="card-text fst-italic fs-6" style="color:grey;">${item.desc}</p>
              </div>
            </div>
            <hr style="color:black;">
         </div>
      
    `;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    section.innerHTML = displayMenu;
  }


 
    
