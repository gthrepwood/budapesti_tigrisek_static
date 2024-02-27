function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

function slugify(str, tolower = false) {
  var map = {
    "-": " |(|)",
    "-": "_",
    a: "á|à|ã|â|À|Á|Ã|Â|ä",
    e: "é|è|ê|É|È|Ê",
    i: "í|ì|î|Í|Ì|Î",
    o: "ó|ò|ô|õ|Ó|Ò|Ô|Õ|ö|Ö|ő|Ő",
    u: "ú|ù|û|ü|Ú|Ù|Û|Ü|ű|Ű",
    c: "ç|Ç",
    n: "ñ|Ñ",
  };

  for (var pattern in map) {
    str = str.replace(new RegExp(map[pattern], "g"), pattern);
  }

  str = str.replace(/\./g, "_").replace(/ /g, "_");

  if (tolower) {
    str = str.toLowerCase();
  }

  return str;
}

function print(v) {
  document.writeln(v);
}

// var getUrlParameter = function getUrlParameter(sParam) {
//   var sPageURL = window.location.search.substring(1),
//     sURLVariables = sPageURL.split("&"),
//     sParameterName,
//     i;

//   for (i = 0; i < sURLVariables.length; i++) {
//     sParameterName = sURLVariables[i].split("=");

//     if (sParameterName[0] === sParam) {
//       return sParameterName[1] === undefined
//         ? true
//         : decodeURIComponent(sParameterName[1]);
//     }
//   }
// };

var taekwondo_menu_macro = function taekwondo_menu_macro(obj) {
  return obj.replace(
    /@tkd_menu@/g,
    `<a href="#Taekwondo" onclick="pagechange(this)">Taekwondo</a> |
    <a href="#tkd_tortenelem" onclick="pagechange(this)">Történelem</a> |
    <a href="#tkd_esku" onclick="pagechange(this)">Eskü</a> |
    <a href="#tkd_esku" onclick="pagechange(this)">Szótár</a> |
    <a href="#tkd_choi" onclick="pagechange(this)">Choi Hong Hi</a> |
    <a href="#tkd_szabalyok" onclick="pagechange(this)">Szabályok</a>`
  );
  // [Taekwondo onclick="pagechange(this)"](#Taekwondo) |
  // [Történelem](#tkd_tortenelem) |
  // [Eskü](#tkd_esku)|
  // [Szótár](#tkd_szotar) |
  // [Choi Hong Hi](#tkd_choi) |
  // [Szabályok](#tkd_szabalyok)
};

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
