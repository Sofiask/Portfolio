import handleHamburger from './menu.js';
import { readUrl } from './utils.js';
import { sanityUrl } from './env.js';
import { handleParagraphs } from './utils.js';

// invoke hamburgermeny
handleHamburger();
// invoke read Url
const urlString = readUrl();

// henter data-query från sanity med alla prosjekt
// alt med _ er det sanity har laget automatisk, de andra har jag lagt selv
//GROC - query system från sanity
const queryAllProjects = `
*[_type== "project"]{
    title,
    _id,
    slug,
    description,
    "bilde":cover.asset->url,
  }
`;
// ordet "bilde" är eget ord

//henter all data från sanity for enkelt prosjekt
const querySingleProject = `
*[slug.current == "${urlString}"]{
    title,
    "cover":cover.asset->url,
    description,
    brief,
    research,
    coreProblem,
    solution, 
    links[],
    personas,
    lofiUsertest,
    hifiUsertest,
    projectSolution,
    designsystem,
    furtherDevelopment,
    thingsILearned,
    moodboard,
    developmentTools[]->,
    projectManagement[]->
}
`;

// string literal
// fetch i sanity blir lik som denne koden, fetch - respons
//lagar en funksjon for hvert prosjekt
async function getProject() {
      const response = await fetch (`${sanityUrl}${encodeURI(querySingleProject)}`);
      const { result } = await response.json();
      renderSingleProject(result);
}

function renderSingleProject(result){
  console.log(result)
    const titleEl = document.querySelector('.single-project-title');
    titleEl.textContent = result[0].title;
    const coverProjectEl = document.querySelector('.project-hero');
    coverProjectEl.setAttribute('style', `background-image: url(${result[0].cover}`);
    const textEl = document.querySelector('.textBoxSmall p');
    textEl.textContent = result[0].description;

    console.log(result[0])

    handleParagraphs(result[0].brief, 'briefContent'); // resultat av funktionen i utils.js där vi hämtar data från block-content i Sanity
    handleParagraphs(result[0].coreProblem, 'coreContent');
    handleParagraphs(result[0].research, 'researchContent');
    handleParagraphs(result[0].solution,'solutionContent');
    handleParagraphs(result[0].personas,'personasContent');
    handleParagraphs(result[0].lofiUsertest,'lofiContent');
    handleParagraphs(result[0].hifiUsertest,'hifiContent');
    handleParagraphs(result[0].projectSolution,'projectSolutionContent');
    handleParagraphs(result[0].designsystem,'designContent');
    handleParagraphs(result[0].furtherDevelopment,'developmentContent');
    handleParagraphs(result[0].thingsILearned,'thingsILearnedContent');
    handleParagraphs(result[0].moodboard,'moodboardContent');
    

    plotTools(result[0].developmentTools, 'devTools');
    plotLinks(result[0].links, 'linkContent');
}

function plotTools(tools, container) {
  const toolsContainer = document.getElementById(container);
  tools.map(tool => {
    const spanEl = document.createElement('span');
    spanEl.textContent = `${tool.developmentTools}, `;
    toolsContainer.append(spanEl);
  })
}

function plotLinks(links, container) {
  const linksContainer = document.getElementById(container);
  links.map(link => {
    console.log(linksContainer)
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link);
    linkEl.setAttribute('target', '_blank');
    linkEl.textContent = link;
    linksContainer.append(linkEl)
  });
}

if(urlString !== undefined) {
    getProject();
}

// funksjon for alle prosjekt fra Sanity
// fetch är en sync funktion, trenger 1ms att hämta data från en API
async function getAllProjects() {
    const response = await fetch(`${sanityUrl}${encodeURI(queryAllProjects)}`);
    const {result} = await response.json();
    renderProjectsList(result);   
}

function renderProjectsList (result) {
  const projectEl = document.querySelector('.projectWrapper');

    //hämtar all information från query, loopar in och hämtar alla project i sanity
    //lagar card för varje project
    result.forEach(project => {
      const cardEl = document.createElement('a'); // bygger en 'a'-tag (variabel) för alla element från sanity
    
      cardEl.classList.add('card'); //bygger en class
      cardEl.setAttribute('href', `/project/?${project.slug.current}`); // lagar en link - attribut - verdi av slug från sanity
      
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

if(urlString === undefined) {
  getAllProjects(); //invoke function
}
