"use strict";

console.log(`Miło, ze tu zaglądasz`);

const list = document.querySelector('.cards--js');

fetch('https://api.github.com/users/PawelMrozikowski/repos')
.then(resp => resp.json())
.then(resp => {
    const repos = resp;
    for(const repo of repos){
        const{description, homepage, html_url, name}= repo;
        console.log(repo);
    list.innerHTML +=`
    <div class="card">
            
            <img class="card__icon" src="assets/img/card_icon.svg" alt="github_icon.">

            <h4 class="card__header">${name} </h4>
            ${
              description ? `<p class="card__paragraph">${description}</p>` : `<p class="card__paragraph"> No description</p>`
            }
          

            <div class="card__footer">
            ${
              homepage ? `<a class="card__footer-link" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}">Demo ></a>` : ''
            }
              <a class="card__footer-link card__footer-link--source" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="Source code: ${name}">GitHub ></a>
            </div>
          </div>`
    
    
    
    
    // <li class="list__item"><a href class="list__link" ="${url}"></a>
    // <p class="list__description">${description ? description : "brak opisu"} </p></li>`;
    }
});


