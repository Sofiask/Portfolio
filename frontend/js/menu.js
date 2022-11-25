export default function handleHamburger () {
    const hamburgerIconEl = document.querySelector('.mobile-menu-icon');
    const overlayMenuEl = document.querySelector('.overlay-menu');
    const exitMenuEl = document.querySelector('.close');

    hamburgerIconEl.addEventListener('click', (e) => { // e=nullstiller naturliga uppförelsen av html tag - (a är en link)
        e.preventDefault();
        overlayMenuEl.classList.remove('hidden'); // tar vekk class hidden som blockerar menyn från att visas - så den visas
    });

    exitMenuEl.addEventListener('click', (e) => {
        e.preventDefault();
        overlayMenuEl.classList.add('hidden');
    });
}
