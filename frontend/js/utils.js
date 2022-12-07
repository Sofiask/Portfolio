import { cdnUrl } from "./env.js";

export function readUrl() {
    // lager en prosjektside kun for ett prosjekt fra sanity
        const urlString = window.location.search;
        if(urlString){
            return (urlString.slice(1))
        }
        return undefined;    
}

// hämtar array från block-content i sanity, bygger innehåll och hämtar 'p'
export function handleParagraphs(blockContent, container) {
   const blockContainer = document.getElementById(container);

   blockContent.map(p => {
       if(p._type === 'block') {
        let pEl = document.createElement('p');
            if (p.style === 'h1') {
                pEl = document.createElement('h1');
            }
            if (p.style === 'h2') {
                pEl = document.createElement('h2');
            }
            if (p.style === 'h3') {
                pEl = document.createElement('h3');
            }
            if (p.style === 'h4') {
                pEl = document.createElement('h4');
            }
            if(p.style === 'normal') {
                pEl = document.createElement('p');
            }

        pEl.textContent = p.children[0].text;
        blockContainer.append(pEl);
       }

       if(p._type === 'image') {
            const fileNameArray = p.asset._ref.split('-');
            const fileName = `${fileNameArray[1]}-${fileNameArray[2]}.${fileNameArray[3]}`;
            const imgEl = document.createElement('img');
            imgEl.setAttribute('src', `${cdnUrl}${fileName}`);
            imgEl.classList.add('containerBox');
            blockContainer.append(imgEl);
       }
   })
}