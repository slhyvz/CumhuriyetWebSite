const menu = [
    {
        id:1,
        title: "Ankara Fişek Fabrikası",
        img: "./images/faaliyetler/1.jpg",
        desc: "(1924)",
    },
    {
        id:2,
        title: "Gölcük Tersanesi",
        img: "./images/faaliyetler/2.jpg",
        desc: "(1924)",
    },
    {
        id:3,
        title: "Şakir Zümre Fabrikası",
        img: "./images/faaliyetler/3.jpg",
        desc: "(1925)",
    },
    {
        id:4,
        title: "Eskişehir Hava Tamirhanesi",
        img: "./images/faaliyetler/4.jpg",
        desc: "(1925)",
    },
    {
        id:5,
        title: "Alpullu Şeker Fabrikası",
        img: "./images/faaliyetler/5.jpg",
        desc: "(1926)",
    },
    {
        id:7,
        title: "Uşak Şeker Fabrikası",
        img: "./images/faaliyetler/5.jpg",
        desc: "(1926)",
    },
    {
        id:9,
        title: "Bünyan Dokuma Fabrikası",
        img: "./images/faaliyetler/9.jpg",
        desc: "(1927)",
    },
    {
        id:10,
        title: "Eskişehir Kiremit Fabrikası",
        img: "./images/faaliyetler/10.jpg",
        desc: "(1927)",
    },
    {
        id:11,
        title: "Kırıkkale Elektrik Santrali Ve Çelik Fabrikası",
        img: "./images/faaliyetler/11.jpg",
        desc: "(1928)",
    },
      {
        id:12,
        title: "Ankara Çimento Fabrikası",
        img: "./images/faaliyetler/12.jpg",
        desc: "(1928)",
    },
      {
        id:13,
        title: "Ankara Havagazı Fabrikası",
        img: "./images/faaliyetler/13.jpeg",
        desc: "(1929)",
    },
      {
        id:14,
        title: "İstanbul Otomobil Montaj Fabrikası",
        img: "./images/faaliyetler/14.jpg",
        desc: "(1929)",
    },
      {
        id:15,
        title: "Kayaş Kapsül Fabrikası",
        img: "./images/faaliyetler/15.jpg",
        desc: "(1930)",
    },
      {
        id:16,
        title: "Nuri Killigil Tabanca, Havan Ve Mühimmat Fabrikası",
        img: "./images/faaliyetler/16.jpg",
        desc: "(1930)",
    },
      {
        id:18,
        title: "Eskişehir Şeker Fabrikası",
        img: "./images/faaliyetler/18.jpeg",
        desc: "(1934)",
    },
      {
        id:19,
        title: "Turhal Şeker Fabrikaları",
        img: "./images/faaliyetler/19.jpg",
        desc: "(1934)",
    },
      {
        id:20,
        title: "Konya Ereğli Bez Fabrikası",
        img: "./images/faaliyetler/20.jpg",
        desc: "(1934)",
    },
    {
        id:21,
        title: "Bakırköy Bez Fabrikası",
        img: "./images/faaliyetler/21.jpg",
        desc: "(1934)",
    },
    {
        id:22,
        title: "Bursa Süt Fabrikası",
        img: "./images/faaliyetler/22.jpg",
        desc: "(1934)",
    },
    {
        id:25,
        title: "Zonguldak Kömür Yıkama Fabrikası",
        img: "./images/faaliyetler/25.jpg",
        desc: "(1934)",
    },
    {
        id:26,
        title: "Keçiborlu Kükürt Fabrikası",
        img: "./images/faaliyetler/26.jpg",
        desc: "(1934)",
    },
    {
        id:27,
        title: "Isparta Gülyağı Fabrikası",
        img: "./images/faaliyetler/27.jpg",
        desc: "(1934)",
    },
    {
        id:28,
        title: "Ankara, Konya, Eskişehir Ve Sivas Buğday Siloları",
        img: "./images/faaliyetler/28.jpg",
        desc: "(1934)",
    },
    {
        id:29,
        title: "Paşabahçe Şişe Ve Cam Fabrikası",
        img: "./images/faaliyetler/29.jpg",
        desc: "(1935)",
    },
    {
        id:32,
        title: "Bursa Merinos Fabrikası",
        img: "./images/faaliyetler/32.jpg",
        desc: "(1935)",
    },
    {
        id:34,
        title: "Keçiborlu Kükürt Fabrikası",
        img: "./images/faaliyetler/34.jpg",
        desc: "(1935)",
    },
    {
        id:36,
        title: "Zonguldak Taş Kömür Fabrikası",
        img: "./images/faaliyetler/36.jpeg",
        desc: "(1935)",
    },

    {
        id:35,
        title: "Ankara Çubuk Barajı",
        img: "./images/faaliyetler/35.jpg",
        desc: "(1936)",
    },
    {
        id:37,
        title: "Barut, Tüfek Ve Top Fabrikası",
        img: "./images/faaliyetler/37.jpg",
        desc: "(1936)",
    },
    {
        id:38,
        title: "Nuri Demirağ Uçak Fabrikası",
        img: "./images/faaliyetler/38.jpg",
        desc: "(1936)",
    },
    {
        id:39,
        title: "Malatya Sigara Fabrikası",
        img: "./images/faaliyetler/39.jpg",
        desc: "(1936)",
    },
    {
        id:43,
        title: "Karabük Demir Çelik Fabrikası",
        img: "./images/faaliyetler/43.jpg",
        desc: "(1937)",
    },
    {
        id:44,
        title: "Divriği Demir Ocakları",
        img: "./images/faaliyetler/44.jpg",
        desc: "(1938)",
    },


  
];



let section = document.getElementById("listd");

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


 
    
