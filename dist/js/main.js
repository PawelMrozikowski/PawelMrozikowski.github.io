!function(c){var e={};function n(I){if(e[I])return e[I].exports;var g=e[I]={i:I,l:!1,exports:{}};return c[I].call(g.exports,g,g.exports,n),g.l=!0,g.exports}n.m=c,n.c=e,n.d=function(c,e,I){n.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:I})},n.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},n.t=function(c,e){if(1&e&&(c=n(c)),8&e)return c;if(4&e&&"object"==typeof c&&c&&c.__esModule)return c;var I=Object.create(null);if(n.r(I),Object.defineProperty(I,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var g in c)n.d(I,g,function(e){return c[e]}.bind(null,g));return I},n.n=function(c){var e=c&&c.__esModule?function(){return c.default}:function(){return c};return n.d(e,"a",e),e},n.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\nconsole.log(`Miło, ze tu zaglądasz`);\n\nconst list = document.querySelector(\'.cards--js\');\n\nfetch(\'https://api.github.com/users/PawelMrozikowski/repos\')\n.then(resp => resp.json())\n.then(resp => {\n    const repos = resp;\n    for(const repo of repos){\n        const{description, homepage, html_url, name}= repo;\n        console.log(repo);\n    list.innerHTML +=`\n    <div class="card">\n            \n            <img class="card__icon" src="assets/img/card_icon.svg" alt="github_icon.">\n\n            <h4 class="card__header">${name} </h4>\n            ${\n              description ? `<p class="card__paragraph">${description}</p>` : `<p class="card__paragraph"> No description</p>`\n            }\n          \n\n            <div class="card__footer">\n            ${\n              homepage ? `<a class="card__footer-link" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}">Demo ></a>` : \'\'\n            }\n              <a class="card__footer-link card__footer-link--source" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="Source code: ${name}">GitHub ></a>\n            </div>\n          </div>`\n    \n    \n    \n    \n    // <li class="list__item"><a href class="list__link" ="${url}"></a>\n    // <p class="list__description">${description ? description : "brak opisu"} </p></li>`;\n    }\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNDQUFzQztBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUNBQXVDLEtBQUs7QUFDNUM7QUFDQSwwREFBMEQsWUFBWTtBQUN0RTs7O0FBR0E7QUFDQTtBQUNBLCtEQUErRCxTQUFTLDJEQUEyRCxLQUFLO0FBQ3hJO0FBQ0EsNkVBQTZFLFNBQVMsa0VBQWtFLEtBQUs7QUFDN0o7QUFDQTs7Ozs7QUFLQSw2REFBNkQsSUFBSTtBQUNqRSxzQ0FBc0MseUNBQXlDO0FBQy9FO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnNvbGUubG9nKGBNacWCbywgemUgdHUgemFnbMSFZGFzemApO1xuXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLS1qcycpO1xuXG5mZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9QYXdlbE1yb3ppa293c2tpL3JlcG9zJylcbi50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4udGhlbihyZXNwID0+IHtcbiAgICBjb25zdCByZXBvcyA9IHJlc3A7XG4gICAgZm9yKGNvbnN0IHJlcG8gb2YgcmVwb3Mpe1xuICAgICAgICBjb25zdHtkZXNjcmlwdGlvbiwgaG9tZXBhZ2UsIGh0bWxfdXJsLCBuYW1lfT0gcmVwbztcbiAgICAgICAgY29uc29sZS5sb2cocmVwbyk7XG4gICAgbGlzdC5pbm5lckhUTUwgKz1gXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmRfX2ljb25cIiBzcmM9XCJhc3NldHMvaW1nL2NhcmRfaWNvbi5zdmdcIiBhbHQ9XCJnaXRodWJfaWNvbi5cIj5cblxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZF9faGVhZGVyXCI+JHtuYW1lfSA8L2g0PlxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPyBgPHAgY2xhc3M9XCJjYXJkX19wYXJhZ3JhcGhcIj4ke2Rlc2NyaXB0aW9ufTwvcD5gIDogYDxwIGNsYXNzPVwiY2FyZF9fcGFyYWdyYXBoXCI+IE5vIGRlc2NyaXB0aW9uPC9wPmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2Zvb3RlclwiPlxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgaG9tZXBhZ2UgPyBgPGEgY2xhc3M9XCJjYXJkX19mb290ZXItbGlua1wiIGhyZWY9XCIke2hvbWVwYWdlfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vcmVmZXJyZXJcIiB0aXRsZT1cIkRlbW86ICR7bmFtZX1cIj5EZW1vID48L2E+YCA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiY2FyZF9fZm9vdGVyLWxpbmsgY2FyZF9fZm9vdGVyLWxpbmstLXNvdXJjZVwiIGhyZWY9XCIke2h0bWxfdXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vcmVmZXJyZXJcIiB0aXRsZT1cIlNvdXJjZSBjb2RlOiAke25hbWV9XCI+R2l0SHViID48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgLy8gPGxpIGNsYXNzPVwibGlzdF9faXRlbVwiPjxhIGhyZWYgY2xhc3M9XCJsaXN0X19saW5rXCIgPVwiJHt1cmx9XCI+PC9hPlxuICAgIC8vIDxwIGNsYXNzPVwibGlzdF9fZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiBcImJyYWsgb3Bpc3VcIn0gPC9wPjwvbGk+YDtcbiAgICB9XG59KTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);