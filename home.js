console.log("hello");

const about = document.getElementById("About");
const contact = document.getElementById("Contact");
const home = document.getElementById("Home");
const portfolio = document.getElementById("Portfolio");
let main_cont = document.getElementById("container");
console.log(main_cont);
// Reloads Home
home.addEventListener("click",function(){
    fetch('./index.html')
    .then(Response => Response.text())
    .then(data => {
        // Condition to ensure no duplicate divs are created
        if (!document.getElementById("social")){
        const parser = new DOMParser();
        const parsed = parser.parseFromString(data, 'text/html');
        const container = parsed.querySelector('.main-container');
        let social = parsed.querySelector('.social');
        let duct = document.getElementById('main-container');
        duct.outerHTML=container.outerHTML+social.outerHTML;
        }
    })

})
// About Page, dynamic HTML 
about.addEventListener("click", function(){
    let duct = document.getElementById("main-container");
    main_cont.removeChild(duct);
    if (document.getElementById("social")){
        main_cont.removeChild(document.getElementById("social"));
    }

    const rediv = document.createElement("div");
    rediv.classList = "jsabout";
    rediv.id = "main-container";

    const heading = document.createElement("h1");
    heading.innerText = "About Me";

    // Create the image element
    const image = document.createElement("img");
    image.src = "about-removebg-preview.png"; // Replace with the actual path to your image
    image.alt = "About Me Image";
    image.style.position = "absolute";
    image.style.left = "130px"; // Adjust as needed
    image.style.top = "50%"; // Adjust as needed
    image.style.transform = "translateY(-50%)"; // Center vertically
    image.style.width = "300px"; // Adjust as needed
    image.style.height = "400px"; // Maintain aspect ratio


    const heading1 = document.createElement("h2");
    heading1.innerHTML = "<h4>Designing With Passion While Exploring The World </h4>";
    heading1.classList = "heading1";

    const para = document.createElement("p");
    const para1 = document.createElement("p");
    para.innerText = "Hello! I'm Kshitij Marwah, a driven and passionate BCA student at KR Mangalam University, currently diving deep into the world of computer science and web development. From a young age, I ve been fascinated by technology and the impact it has on our daily lives. My journey into tech has been fueled by a strong desire to understand how things work and to create innovative solutions that can make a difference";
    para1.innerText = "With a solid foundation in programming and web development, I’m skilled in HTML, CSS, JavaScript, and other key technologies. My interests extend to UI/UX design";

    para.classList = "jspara";
    para1.classList = "jspara";

    rediv.appendChild(heading);
    rediv.appendChild(heading1);
    rediv.appendChild(image); // Add the image to the div
    rediv.appendChild(para);
    rediv.appendChild(para1);
    main_cont.appendChild(rediv);
});

// Contact Page, Dynamic HTML
contact.addEventListener("click", function(){
    let duct = document.getElementById("main-container");
    main_cont.removeChild(duct);
    if (document.getElementById("social")){
        main_cont.removeChild(document.getElementById("social"));
    }

    const rediv = document.createElement("div");
    rediv.classList = "Contact";
    rediv.id = "main-container";
    
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
    

    const location = document.createElement("div");
    location.classList = "contact-item";
    location.innerHTML = `
        <ion-icon name="home"></ion-icon>
        <h3>Location</h3>
        <p>Hari Nagar Mig Flats</p>
        <p> F1 - 12/D </p>
    `;
    

    const email = document.createElement("div");
    email.classList = "contact-item";
    email.innerHTML = `
        <ion-icon name="mail"></ion-icon>
        <h3>Email</h3>
        <p>kmarwah@gmail.com</p>
        <p>Contact me anytime!</p>
    `;

    contactDetails.appendChild(phone);
    contactDetails.appendChild(location);
    contactDetails.appendChild(email);
    rediv.appendChild(heading);
    rediv.appendChild(contactDetails);
    main_cont.appendChild(rediv);
});
portfolio.addEventListener("click", function(){
    let duct = document.getElementById("main-container");
    main_cont.removeChild(duct);
    if (document.getElementById("social")){
        main_cont.removeChild(document.getElementById("social"));
    }
    const rediv = document.createElement("div");
    rediv.id = "main-container";
    const heading = document.createElement("h1");
    heading.innerText = "Skills";
    heading.id = "heading3";
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2>Python</h2>
        <h3>2020 - 2021</h3>
        <ul>
            <li> Experienced in AI Engineering</li>
            <li> Experienced in Django</li>
            <li> Experienced in Algorithms </li>
        </ul>
                            `;
    const card2 = document.createElement("div");
    card2.className = "card";
    card2.innerHTML = `
        <h2>Unity</h2>
        <h3>2022 - 2023</h3>
        <ul>
            <li> Experienced in prototype development
            <li> Experienced in designing spaces
            <li> Experienced in OOPS
        </ul>
                            `;
    let progress_bar = document.createElement("div");
    progress_bar.className = "progress-bar";
    
    
    
    
    const card3 = document.createElement("div");
    card3.className = "card";
    card3.innerHTML = `
        <h2>Adobe</h2>
        <h3>2022 - 2023</h3>
        <ul id="list">
            <li> Experienced in Photoshop</li>
            <li> Experienced in Premiere Pro</li>
            <li> Experienced in Unreal Engine</li>
        </ul>
                            `;
    const card4 = document.createElement("div");
    card4.className = "card";
    card4.innerHTML = `
        <h2>C</h2>
        <h3>2023-2024</h3>
        <ul>
            <li> Experienced in Functional Programming
            <li> Experienced in DSA
            <li> Experienced in arrays
        </ul>
                            `;
    const card5= document.createElement("div");
    card5.className = "card";
    card5.innerHTML = `
        <h2>C++</h2>
        <h3>2023-2024</h3>
        <ul>
            <li> Experienced in OOPS
            <li> Experienced in DSA
            <li> Experienced in QT
        </ul>
                            `;
    const card6= document.createElement("div");
    card6.className = "card";
    card6.innerHTML = `
        <h2>C++</h2>
        <h3>2021-2022</h3>
        <ul>
            <li> Experienced in OOPS
            <li> Experienced in Quantum Mechanics
            <li> Experienced in Moon Landing
        </ul>
                            `;
    
    let row = "";
    let cardArray = [
        card,
        card2,
        card3,
        card4,
        card5
    ];
    console.log(cardArray[0]);
    rediv.appendChild(heading);
    for (var i=0;i<cardArray.length;i++){
        const progress_container = document.createElement("div");
        progress_container.className = "progress-container";
        progress_container.id = `progress-bar${i+1}`;
        const clone = progress_bar.cloneNode(true);
        progress_container.appendChild(clone);
        if (i%3 == 0 || i==0){
            row = document.createElement("div");
            row.className = "row";
        }
        cardArray[i].appendChild(progress_container);
        row.appendChild(cardArray[i]);
        rediv.appendChild(row);
    }
    main_cont.appendChild(rediv);
})