const ourTeam = [
    {
        nome : "Wayne Barnett" , 
        ruolo : "Founder & CEO",
        immagine : "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome : "Angela Caroll" , 
        ruolo : "Chief Editor",
        immagine : "angela-caroll-chief-editor.jpg",
    },
    {
        nome : "Walter Gordon" , 
        ruolo : "Office Manager",
        immagine : "walter-gordon-office-manager.jpg",
    },
    {
        nome : "Angela Lopez" , 
        ruolo : "Social Media Manager",
        immagine : "angela-lopez-social-media-manager.jpg",
    },
    {
        nome : "Scott Estrada" , 
        ruolo : "Developer",
        immagine : "scott-estrada-developer.jpg",
    },
    {
        nome : "Barbara Ramos" , 
        ruolo : "Graphic Designer",
        immagine : "barbara-ramos-graphic-designer.jpg",
    }
];

console.log(ourTeam)

const container = document.querySelector("div.container")

console.log(container)
for (let i = 0 ; i < ourTeam.length ; i++){
    let article = document.createElement("article");
    let myImg = new Image();
    myImg.src = "./img/"+ourTeam[i].immagine ;
    let name = document.createElement("h2");
    let role = document.createElement("div");
    article.appendChild(myImg)
    article.appendChild(name)
    article.appendChild(role)
    container.appendChild(article);
    name.append(ourTeam[i].nome)
    role.append(ourTeam[i].ruolo)
    console.log(ourTeam[i].nome)
    console.log(ourTeam[i].ruolo)
    console.log(ourTeam[i].immagine)
}
