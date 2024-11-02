// console.log("hello");
// const about = document.getElementById("About");
// const social = document.getElementById("social")
// const duct = document.getElementById("duction");
// const maintext = document.getElementById("maintext");
// const home = document.getElementById("Home");
// const contain = document.getElementById("container");

// about.addEventListener("click",function(){
//     const rediv = document.createElement("div");

//     rediv.classList="About intro";

//     rediv.id = "maintext"

//     const heading = document.createElement("h1");

//     heading.innerText = "About Me";

//     const para = document.createElement("p");

//     para.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio asperiores impedit mollitia vero quae minima labore natus ad assumenda incidunt! Facere sequi nihil earum fuga ex aut praesentium ipsum odit?";

//     para.classList = "jspara"

//     duct.removeChild(social);

//     rediv.appendChild(heading);

//     rediv.appendChild(para);

//     duct.replaceChild(rediv,maintext);
//  });

// home.addEventListener("click",function(){
    
//     const head = document.createElement("h1");

//     head.innerText = "I'm student Kshitij Marwah";
    
//     const rediv = document.createElement("div");

//     rediv.classList="intro";

//     rediv.id = "maintext"

//     rediv.appendChild(head)

//     rediv.replaceChild(rediv,maintext)
// });
console.log("hello");

const about = document.getElementById("About");
const contact = document.getElementById("Contact");
const social = document.getElementById("social");
const duct = document.getElementById("duction");
const maintext = document.getElementById("maintext");
const home = document.getElementById("Home");

about.addEventListener("click", function(){
    const rediv = document.createElement("div");
    rediv.classList = "About intro";
    rediv.id = "maintext";

    const heading = document.createElement("h1");
    heading.innerText = "About Me";

    const para = document.createElement("p");
    para.innerText = "Lorem ipsum , dolor sit amet consectetur adipisicing elit. Distinctio asperiores impedit mollitia vero quae minima labore natus ad assumenda incidunt! Facere sequi nihil earum fuga ex aut praesentium ipsum odit?";

    para.classList = "jspara";
    duct.removeChild(social);
    rediv.appendChild(heading);
    rediv.appendChild(para);
    duct.replaceChild(rediv, maintext);
});

contact.addEventListener("click", function(){
    const rediv = document.createElement("div");
    rediv.classList = "Contact intro";
    rediv.id = "maintext";
    
    const heading = document.createElement("h1");
    heading.innerText = "Contact Me";
    heading.classList = "heading-contact"

    const contactDetails = document.createElement("div");
    contactDetails.classList = "contact-details";

    const phone = document.createElement("div");
    phone.classList = "contact-item";
    phone.innerHTML = `
        <ion-icon name="call"></ion-icon>
        <h3>Phone</h3>
        <p>+91 8802888123</p>
        <p>Monday - Friday from 7am - 5pm</p>
    `;
    contactDetails.appendChild(phone);

    const location = document.createElement("div");
    location.classList = "contact-item";
    location.innerHTML = `
        <ion-icon name="home"></ion-icon>
        <h3>Location</h3>
        <p>Hari Nagar Mig Flats</p>
        <p> F1 - 12/D </p>
    `;
    contactDetails.appendChild(location);

    const email = document.createElement("div");
    email.classList = "contact-item";
    email.innerHTML = `
        <ion-icon name="mail"></ion-icon>
        <h3>Email</h3>
        <p>kmarwah@gmail.com</p>
        <p>Contact me anytime!</p>
    `;
    contactDetails.appendChild(email);

    duct.removeChild(social);
    rediv.appendChild(heading);
    rediv.appendChild(contactDetails);
    duct.replaceChild(rediv, maintext);
});


