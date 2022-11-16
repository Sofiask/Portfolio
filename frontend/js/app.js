console.log('js loaded');

// projectID from sanity
const projectID = 'hx9pahqx';

// henter data-query från sanity
// alt med _ er det sanity har laget automatisk
const query = `
*[_type== "project"]{
    title,
    _id,
    slug,
    gallery []
  }
`;

//henter url fra sanity, legger in project ID och all data som ligger i vår query
// string literal
// fetch i sanity blir lik som denne koden, fetch - respons
const url = `https://${projectID}.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;


// fetch är en sync funktion, trenger 1ms att hämta data från en API
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

//invoke function
getData()
