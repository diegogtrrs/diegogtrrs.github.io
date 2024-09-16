"use strict"

let affichage = document.getElementById("affichage");

async function recupererPays() {
    const reponse = await fetch("https://restcountries.com/v3.1/all");
    const pays = await reponse.json();
    
    return pays;
}

async function afficherTousLesPays() {
    const pays = await recupererPays();
    console.log(pays);
    let html = "";
    pays.forEach(pays => {
        html += "<tr>";
        html += `<td> ${pays.name.common} </td>`;
        html += `<td><img src="${pays.flags.svg}" alt=""></td>`;
        html += "</tr>";
    });
    affichage.innerHTML = html;
}

afficherTousLesPays();

