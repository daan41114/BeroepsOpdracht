let fotonummer, fotobreedte, aantalfotos, fotoslider, reviews, reviewerNames, visitDates, reviewerScores;
      function setupFotoslider() {
        fotonummer = 0;
        fotobreedte = 480;
        reviews = [
          "I find the idea of a museum transforming food items into artwork fascinating. I'd love to visit again sometime", 
          "I found it very fun to explore the ins- and outs of the museum on my mobile device. I think i'll come again", 
          "When i came to the museum, i got a warm welcome, and I think everyone working there are great people.", 
          "Great event, i'm pretty sure everyone involved had a good experience and a lasting, positive impression.",
          "Luckily the museum can take big reservations, I can easily have a big party at the museum."
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
          "3 March, 2016",
          "15 October 2018",
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

      