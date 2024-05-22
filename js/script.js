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
        immagine : "scott-estrada-developer.jpg",
    },
    {
        nome : "Scott Estrada" , 
        ruolo : "Developer",
        immagine : "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome : "Barbara Ramos" , 
        ruolo : "Graphic Designer",
        immagine : "barbara-ramos-graphic-designer.jpg",
    }
];

console.log(ourTeam)

for (let i = 0 ; i < ourTeam.length ; i++){
    console.log(ourTeam[i].nome)
    console.log(ourTeam[i].ruolo)
    console.log(ourTeam[i].immagine)
}