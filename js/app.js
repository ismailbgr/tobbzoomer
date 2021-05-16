console.log("Thank you for not eating my delicious ice cream cone")
//There are no easter eggs up here, Go Away!

//////////////////////////////////////////////////////////////////
/*

      ._ _  _. _| _  |_    
      | | |(_|(_|(/_ |_)\/ 
                        /  
             _____                             
            (, /               ,  /) /)        
              /  _  ___   _      // (/_ _   __ 
          ___/__/_)_// (_(_(__(_(/_/_) (_/_/ (_
        (__ /                         .-/      
                                     (_/        
*/
/////////////////////////////////////////////////////////////////7

var $ = Dom7;
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCwyPg64A1OgMR2V666yxFFRYx-I9Fd8U8",
  authDomain: "tobb-ai-ders-programi.firebaseapp.com",
  databaseURL:"https://tobb-ai-ders-programi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tobb-ai-ders-programi",
  storageBucket: "tobb-ai-ders-programi.appspot.com",
  messagingSenderId: "276822296550",
  appId: "1:276822296550:web:eb838de0786b24d31a3827"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var device = Framework7.getDevice();
var app = new Framework7({
  name: 'TOBB Zoomer', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element

  id: 'dev.ibgr.aidp', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,


  dialog: {
    // set default title for all dialog shortcuts
    title: 'TOBB Zoomer',
    // change default "OK" button text
    buttonOk: 'Tamam',
    buttonCancel: 'Iptal',
    preloaderTitle:"Yükleniyor...",
    progressTitle:"Yükleniyor..."
  },

  // Input settings
  on: {
    init: function () {
      
    },
  },
});

//var dersler = ["ALM0011","ALM00110","ALM0012","ALM0013","ALM0014","ALM0015","ALM0016","ALM0017","ALM0018","ALM0019","ALM001Y1","ALM001Y2","ALM002Y1","ALM002Y2","ALM0031","ALM0032","ALM0041","ALM0042","ALM0043","ALM0044","ALM0045","ARP0011","ARP0012","ARP0031","ARP0041","BMM1021","BMM3051","BMM3071","BMM3091","BMM309L1","BMM3111","BMM311L1","BMM4101","BMM4431","BMM5511","BMM5821","BMM6821","CIN0011","CIN0031","ELE1011","ELE201L1","ELE201L2","ELE2241","ELE224L1","ELE224L2","ELE2971","ELE3111","ELE3311","ELE3711","ELE3751","ELE4131","ELE4171","ELE4221","ELE4231","ELE4951","ELE5031","ELE5151","ELE5321","ELE5611","ELE5691","END0071","END0141","END0201","END0211","END0951","END2141","END3071","END3201","END3202","END3211","END3951","END4261","END4971","END5021","END5031","END5081","END6731","EÜT1101","EÜT1221","EÜT1222","EÜT2151","EÜT321A1","EÜT321A2","EÜT3311","EÜT4081","EÜT422A1","EÜT422A2","EÜT4251","EÜT4511","FİZ1011","FİZ101L1","FİZ1021","FİZ102L1","FİZ102L2","FİZ102L3","FİZ102L4","FRA0011","FRA0012","FRA0013","FRA0031","FRA0041","FRA0042","GİT1021","GİT1022","GİT1041","GİT1042","GİT2211","GİT3091","GİT3131","GİT3132","GİT4101","GİT4171","GİT4242","GRT3031","GRT3032","GRT3131","GRT3211","GRT3212","GRT3221","GRT4181","GRT4211","GRT4221","GRT4222","GUC5191","GUC5361","HUK1041","HUK1061","HUK1101","HUK1141","HUK1151","HUK1161","HUK1181","HUK3011","HUK3031","HUK3051","HUK3071","HUK3091","HUK3131","HUK3551","HUK3691","HUK3701","HUK4021","HUK4041","HUK4061","HUK4081","HUK4101","HUK4121","HUK4301","HUK4351","HUK4501","HUK4631","HUK4641","HUK5081","HUK5091","HUK5401","HUK5481","HUK5482","HUK5701","HUK5731","HUK5831","HUK5871","ITA0011","ITA0012","ITA0031","ITA0041","İÇT1221","İÇT1222","İÇT1223","İÇT1224","İÇT1261","İÇT1281","İÇT2202","İÇT2211","İÇT2221","İÇT3181","İÇT3231","İÇT3232","İÇT3251","İÇT3252","İÇT3271","İÇT3321","İÇT4241","İÇT4411","İÇT4421","İÇT4422","İDE1041","İDE1101","İDE1161","İDE3131","İDE3191","İDE3261","İDE3341","İDE4021","İDE4131","İKT1061","İKT1101","İKT3111","İKT3351","İKT3511","İKT4111","İKT4151","İKT4511","İKT4521","İKT4721","İKT5121","İKT5311","İKT5531","İKT6031","İNG0011","İNG0012","İNG0013","İNG0014","İNG0015","İNG0016","İNG0017","İNG0018","İNG0019","İNG0021","İNG00210","İNG00211","İNG00212","İNG00213","İNG00214","İNG00215","İNG00216","İNG00217","İNG00218","İNG0022","İNG00220","İNG00221","İNG00223","İNG00224","İNG0023","İNG0024","İNG0025","İNG0026","İNG0027","İNG0028","İNG0029","İNG0031","İNG00310","İNG00312","İNG0032","İNG0035","İNG0036","İNG0037","İNG0039","İNG0041","İNG00410","İNG00411","İNG00412","İNG00413","İNG00414","İNG0042","İNG0043","İNG0044","İNG0045","İNG0046","İNG0047","İNG0048","İNG0049","İSP0011","İSP0012","İSP0013","İSP0014","İSP0015","İSP0016","İSP0017","İSP0018","İSP0019","İSP001Y1","İSP002Y1","İSP0031","İSP0032","İSP003Y1","İSP0041","İSP0042","İSP0043","İSP0044","İSP0045","İSP004Y1","İŞL1121","İŞL3021","İŞL3351","İŞL3381","İŞL3431","İŞL3531","İŞL3611","İŞL3811","İŞL4061","İŞL4161","İŞL4301","İŞL4381","İŞL4461","İŞL4471","İŞL4481","İŞL4621","İŞL5141","İŞL5301","İŞL5591","İŞL5621","İŞL5651","İŞL5691","İŞL5901","JAP0011","JAP0031","JAP0041","KİM1011","KİM1012","KİM101L1","KİM101L2","MİM1021","MİM1061","MİM1081","MİM2011","MİM2012","MİM2013","MİM2014","MİM2015","MİM2016","MİM2017","MİM2018","MİM2019","MİM2021","MİM2022","MİM2023","MİM2024","MİM2025","MİM2026","MİM2027","MİM2028","MİM2029","MİM3011","MİM3012","MİM3013","MİM3014","MİM3015","MİM3016","MİM3017","MİM3018","MİM3019","MİM3021","MİM3022","MİM3023","MİM3024","MİM3025","MİM3026","MİM3027","MİM3028","MİM3029","MİM4011","MİM4012","MİM4013","MİM4014","MİM4015","MİM4016","MİM4017","MİM4018","MİM4019","MAK1011","MAK1012","MAK1013","MAK1041","MAK2011","MAK2061","MAK2171","MAK217L1","MAK3071","MAK3111","MAK311L1","MAK3161","MAK316L1","MAK4491","MAK4711","MAK4861","MAK4891","MAK4981","MAK5021","MAK5401","MAT1011","MAT1021","MAT1031","MAT1041","MAT1042","MAT2021","MAT309A1","MAT312A1","MAT4131","MAT5291","MAT5351","MAT5531","MBN1011","MBN3031","MBN303L1","MBN3051","MBN3071","MBN307L1","MBN3121","MBN4251","MBN4611","MBN4971","MIS5031","MIS5161","MIS5251","MIS5411","MİM1141","MİM2281","MİM3071","MİM3072","MİM3073","MİM3131","MİM3501","MİM4021","MİM4022","MİM4023","MİM4024","MİM4041","MİM4061","MİM4081","MİM4082","MİM5011","MİM5021","MİM5191","MLT5131","MLT6011","MLT6081","MLT6131","MNT5071","MNT5431","PSİ1041","PSİ1081","PSİ3121","PSİ3201","PSİ3261","PSİ3321","PSİ3331","PSİ4231","PSİ4311","PSİ4731","RUS0011","RUS0012","RUS001Y1","RUS002Y1","RUS0031","RUS0041","SAT1081","SAT1082","SAT2221","SAT2222","SB4201","SBE5021","SUİ1021","SUİ1061","SUİ1081","SUİ1141","SUİ3141","SUİ3171","SUİ3191","SUİ3251","SUİ3361","SUİ3431","SUİ3601","SUİ3621","SUİ4011","SUİ4161","SUİ4451","SUİ4661","SUİ4951","SUİ6021","SUİ6331","SUi6511","TAR1011","TAR1012","TAR113B1","TAR1461","TAR1921","TAR3131","TAR325E1","TAR3501","TAR361E1","TAR395E1","TAR4141","TAR4231","TAR4241","TAR4521","TAR5391","TAR5411","TAR5461","TAR5921","TDE1121","TDE1221","TDE1321","TDE1441","TDE1511","TDE2851","TDE3131","TDE3151","TDE3211","TDE3231","TDE3951","TDE4141","TDE4241","TDE4361","TDE4362","TDE4363","TDE4741","TDE5031","TDE5281","TSD1261","TSR5021","TSR5022","TSR5041","TSR5111","UGİ1041","UGİ1061","UGİ1081","UGİ3151","UGİ3181","UGİ3261","UGİ3611","UGİ3821","UGİ3841","UGİ390R1","UGİ398R1","UGİ4031","UGİ4111","ULU5051","ULU5081","ULU5341","ULU5401","ULU5971","YAP1011","YAP1911","EÜT2181","EÜT317A1","EÜT3231","EÜT3291","HUK5981","HUK5982","İÇT1241","İÇT1242","İÇT3311","İÇT3312","İÇT3313","İÇT3314","İÇT3315","İÇT3316","İKT1051","TAR364B1","İŞL5531","PSİ4611","PSİ4612","BİL1411","BİL1421","BİL1211","BİL1061","İŞL1611","MİM2291","MİM5261","MİM5041","TSD2011","BİL1131","BİL1321","BİL2111","BİL2141","BİL3611","BİL3311","BİL3951","BİL4811","BİL3451","BİL4521","BİL0121","BİL0611","BİL5311","BİL4481","BİL5481","BİL4011","BİL5011","BİL5781","BİL4711","BİL5711","BİL4731","BİL5951","BİL4411","BİL5411","GİT2221","MİM2015","BİL4821","PSİ4291","PSİ3281","TSR5921","İKT3961","ULU5431","BİL3621","BİL362L1","MİM3341","MİM3351","MİM4251","MAK5301","GİT1061","MAK5641","BİL264L1","MAK302L1","SBG5141","SBG5501","ELE4211","ELE4251","ELE4661","İÇT3241","SUİ0021","SUİ0041","SUİ0051","UGİ1311","eTY1011","eTY1021","ELE0711","HUK3081","MAK4511","eTY102L1","SUİ6341","GUC5501"] 
var selecteddersler = (window.localStorage.selected == undefined) ?  [] : JSON.parse(window.localStorage.selected);

function init() {


if(localStorage.loginday != new Date().getDate()){

  firebase.database().ref("logincounter").once("value").then((x)=>{

    firebase.database().ref("logincounter").set(x.val() + 1);
    localStorage.loginday = new Date().getDate();

  })

}

  

  if(localStorage.tadpDmode == "true"){

    document.body.classList.add("theme-dark");
    document.body.classList.add("color-theme-blue")

  }

  selecteddersler.forEach(element => {
    
    document.getElementById("btns").innerHTML += `<div class="card">
    <div class="card-header">${element.substring(0,6) + "-" + element.substring(6)}</div>
    <div class="card-footer"><a onclick="getDers('${element}',false)" class="button">Uygulamadan Katıl</a><a onclick="getDers('${element}',true)" class="button">Tarayıcıdan Katıl</a></div></div>`

  });

  if(selecteddersler.length == 0){

    app.dialog.preloader("Ders Seçim Ekranı Yükleniyor")
    app.views.main.router.navigate("/setup/")
    app.views.main.router.allowPageChange = false;

  }

  if(localStorage.tadpseenSettings != "1"){

    document.querySelectorAll(".settings_icon").forEach((x)=>{

      x.innerHTML = x.innerHTML + '<span class="badge color-red">1</span>'

    })

    

  }



  var countDownDate = new Date(new Date().getFullYear(),new Date().getMonth(),(new Date().getDate() + 1),02,00,00).getTime();


  var cdinterval = setInterval(function() {

    var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = `${hours} Saat ${minutes} Dakika ${seconds} Saniye `;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(cdinterval);
    document.getElementById("countdown").innerHTML = "Güncelleniyor";
  }
}, 1000);

}


function select() {
  /*
  dersler.forEach(element => {
    
    //document.getElementById("selectderslist").innerHTML += `<option value="${element}">${element}</option>`

    

  });
*/
  var smartSelect = app.smartSelect.create({
    el:"#selectders",
    searchbar:true,
    virtualList:true,
    searchbarPlaceholder:"Arama",
    appendSearchbarNotFound:"Aradığınız Ders Bulunamadı (Farklı Şekilde Yazmayı Deneyin)",
    on: {
      closed: function () {
        window.localStorage.selected = JSON.stringify(smartSelect.getValue())
        location.reload()
      }
    }
  })

}

function getDers(dersname,second) {

  //admob.showInterstitialAd();
  
  //app.dialog.alert("Bir Hata Oluştu")

    app.dialog.preloader("Yükleniyor...")

    firebase.database().ref("dersidv2/"+dersname).once("value").then((x)=>{

      app.dialog.close();
      //app.dialog.alert(x.val())

      if((x.val()).length == 0){
        
      }else if(x.val() == "NA"){

        app.dialog.alert("Bu Günün Programı Bu Dersi İçermemektedir")


      }else{

      if(!second){

        window.location = x.val()

      }else{

        let work = x.val();

        window.location = "https://us02web.zoom.us/wc/join/" + work.substring(work.indexOf("j/")+2);

      }
      

      
      }

    }).catch((x)=>{

      app.dialog.close();
      app.dialog.alert("Bir Hata Oluştu:"+x)

    })
    


  


}
