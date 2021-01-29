let fotonummer, fotobreedte, aantalfotos, fotoslider, reviews, reviewerNames, visitDates, reviewerScores;
      function setupFotoslider() {
        fotonummer = 0;
        fotobreedte = 480;
        reviews = [
          "Ik vind het een enorm interessant idee van het Lisser Art Museum om het thema van hun museum eten te maken.", 
          "Ik vond het erg leuk dat je met je telefoon alles te weten kan komen over de kunstwerken die hier allenmaal staan.", 
          "ik vond de ontvangst in het museum erg vriendelijk en je kon ook erg goed merken dat de mensen die er werken erg enthousiast zijn.", 
          "Geweldig evenement en voor al onze mensen een ervaring die een blijvende positieve indruk over dit park achterlaat.",
          "Het museum neemt gelukkig reserveringen met grote aantallen wat ik dus erg handig vind als ik daar een feestje wil vieren."
        ]

        reviewerNames = [
          "Anna Bloem",
          "Bryan Pique",
          "Kimberly Bakker",
          "Natasha van Harte",
          "Miguel de Vries"
        ]

        visitDates = [
          "22 December, 2020",
          "26 Juni, 2015",
          "3 Maart, 2016",
          "15 Oktober 2018",
          "3 Januari, 2021"
        ]

        fotoslider = document.getElementById("fotoslider");
        let volgendeKnop = document.getElementById("nextPortraitDiv");
        let vorigeKnop = document.getElementById("previousPortraitDiv");

        aantalfotos = fotoslider.children.length;
        console.log(aantalfotos);

        volgendeKnop.addEventListener("click", volgendeFoto);
        vorigeKnop.addEventListener("click", vorigeFoto);
      }

      function volgendeFoto() {
        fotonummer += 1;

        if (fotonummer === aantalfotos) {
          fotonummer = 0;
        }

        let afstandNaarLinks = -0.5 * (fotonummer * fotobreedte);
        fotoslider.style.left = afstandNaarLinks + "px";

        document.getElementById("review").innerHTML = reviews[fotonummer]
        document.getElementById("visitor").innerHTML = reviewerNames[fotonummer]
        document.getElementById("date").innerHTML = visitDates[fotonummer]


      }

      function vorigeFoto() {
        fotonummer -= 1;

        if (fotonummer < 0) {
          fotonummer = aantalfotos - 1;
        }

        let afstandNaarLinks = -0.5 * (fotonummer * fotobreedte);
        fotoslider.style.left = afstandNaarLinks + "px";

        document.getElementById("review").innerHTML = reviews[fotonummer]
        document.getElementById("visitor").innerHTML = reviewerNames[fotonummer]
        document.getElementById("date").innerHTML = visitDates[fotonummer]

      }

      document.addEventListener("DOMContentLoaded", setupFotoslider);

      //-------------------------------------------------------------

      