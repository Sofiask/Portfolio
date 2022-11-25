import handleHamburger from './menu.js';

handleHamburger()

// projectID from sanity
const projectID = 'hx9pahqx';

// henter data-query från sanity
// alt med _ er det sanity har laget automatisk
//GROC
const query = `
*[_type== "project"]{
    title,
    _id,
    slug,
    description,
    "bilde":cover.asset->url,
  }
`;
// ordet "bilde" är eget ord

//henter url fra sanity, legger in project ID och all data som ligger i vår query
// string literal
// fetch i sanity blir lik som denne koden, fetch - respons
const url = `https://${projectID}.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;


// fetch är en sync funktion, trenger 1ms att hämta data från en API
async function getData() {
    const response = await fetch(url);
    const {result} = await response.json();
    
    const projectEl = document.querySelector('.projectWrapper');
    

    //hämtar all information från query, loopar in och hämtar alla project i sanity
    //lagar card för varje project
    result.forEach(project => {
      const cardEl = document.createElement('a'); // bygger en 'a'-tag (variabel) för alla element från sanity
    
      cardEl.classList.add('card'); //bygger en class
      cardEl.setAttribute('href', `/${project.slug.current}`); // lagar en link - attribut - verdi av slug från sanity
      
      const coverEl = document.createElement('img'); //importera bilde från sanity
      coverEl.setAttribute('src', project.bilde); //importera bilde från sanity

      const titleEl = document.createElement('h3'); //importera title på project från Sanity
      titleEl.textContent = project.title; 

      const descriptionEl = document.createElement('p'); //importera beskrivelse från sanity
      descriptionEl.textContent = project.description;

      cardEl.append(coverEl); // setter sammen class och bilde inne i linken (a)
      cardEl.append(titleEl); // setter in H4 i card
      cardEl.append(descriptionEl); 
      projectEl.append(cardEl); // sätter in project-card in i gemensam class project wrapper
    })
}

//invoke function
getData()
