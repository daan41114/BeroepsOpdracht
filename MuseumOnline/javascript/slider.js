let fotonummer, fotobreedte, aantalfotos, fotoslider;
      function setupFotoslider() {
        fotonummer = 0;
        fotobreedte = 480;

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
      }

      function vorigeFoto() {
        fotonummer -= 1;

        if (fotonummer < 0) {
          fotonummer = aantalfotos - 1;
        }

        let afstandNaarLinks = -0.5 * (fotonummer * fotobreedte);
        fotoslider.style.left = afstandNaarLinks + "px";
      }

      document.addEventListener("DOMContentLoaded", setupFotoslider);

      //-------------------------------------------------------------

      