// Mobile Menu
const navbar = document.getElementById('navbar');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('hamburger-menu');
navbar.append(mobileMenu);
// const test = document.querySelector('.modal-btn');

const humburger = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
    class="bi bi-list text-dark modal-btn" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
</svg> `;

mobileMenu.insertAdjacentHTML('afterbegin', humburger);

const cardModalMenu = `
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg"
        viewBox="0 0 16 16">
        <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
    </svg> -->

    <button type="button" class="btn-close"></button>
    
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Show</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Join</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Sponsor</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">News</a>
        </li>
    </ul>
`;

mobileMenu.addEventListener('click', () => {
    const modalMenu = document.createElement('div');
    modalMenu.classList.add('mobile-menu');
    modalMenu.insertAdjacentHTML('afterbegin', cardModalMenu);
    navbar.append(modalMenu);

    const closeMenu = document.querySelector('.btn-close');

    closeMenu.addEventListener('click', () => {
        console.log('clicked');
        navbar.remove(modalMenu);
    });
});

// Main Program

const programCard = [
    {
        id: 0,
        cardImage: ['mic-fill', 70, 70],
        cardName: 'Mic',
        cardDetails: 'Upcoming comedians will get to showcase their skills',
    },
    {
        id: 1,
        cardImage: ['egg-fried', 70, 70],
        cardName: 'Food',
        cardDetails: 'A buffet menu will we available at venue',
    },
    {
        id: 2,
        cardImage: ['building', 70, 70],
        cardName: 'Hotel',
        cardDetails: 'Accommodation will be after the event, free for vvip ticket holders',
    },
    {
        id: 3,
        cardImage: ['car-front-fill', 70, 70],
        cardName: 'Uber',
        cardDetails: 'Transport with be avlaible a at a discount',
    },
    {
        id: 4,
        cardImage: ['people-fill', 70, 70],
        cardName: 'Community',
        cardDetails: 'You will have interestion with a wider network',
    },
];

let card = '';

function contentCard(program) {
    const cards = `
 <div class="card-holder">
 <img src="/assets/${program.cardImage[0]}.svg" alt="${program.cardImage[0]}" width="${program.cardImage[1]}" height="${program.cardImage[2]}">
 <h3 class="card-title">${program.cardName}</h3>
 <p class="card-details">${program.cardDetails}</p>
</div>
 `
    return cards;
};

const mainProgramHeader = document.querySelector('.heading-program');
const programContainer = document.createElement('div');
programContainer.classList.add('card-program-container');

programCard.forEach((program) => {
    card += contentCard(program);
});

programContainer.insertAdjacentHTML('afterbegin', card);
mainProgramHeader.after(programContainer);

// Featured Speaker

const speakerCard = [
    {
        id: 0,
        name: 'David Kau',
        image: '',
        role: 'Comedian',
        details: 'Join our community now and get to share the stage with avid Kau'
    },
    {
        id: 1,
        name: 'Ntsudeni Ndou',
        image: '',
        role: 'Comedian',
        details: 'Join our community now and get to share the stage with avid Kau'
    },
    {
        id: 2,
        name: 'Trevor Noah',
        image: '',
        role: 'Comedian',
        details: 'Join our community now and get to share the stage with avid Kau'
    },
    {
        id: 3,
        name: 'Loyiso Gala',
        image: '',
        role: 'Comedian',
        details: 'Join our community now and get to share the stage with avid Kau'
    },
];


function contentSpeakers(speaker) {

    const cards = `
    <div class="speaker-holder">
        <img src="/assets/${speaker.image}.svg" alt="${speaker.image}" width="${20}" height="${20}">
        <h3 class="speaker-title">${speaker.name}</h3>
        <h4 class="speaker-role">${speaker.role}</h3>
        <p class="speaker-details">${speaker.details}</p>
   </div>
    `
    return cards;
};

let cardSpeaker = '';


speakerCard.forEach((speaker, index) => {
    if (index < 2) {
        cardSpeaker += contentSpeakers(speaker);
    }
});

const heading = document.querySelector('.heading-speakers');
const speakerContainer = document.createElement('div');
speakerContainer.classList.add('speaker-container');
// console.log(cardSpeaker);
speakerContainer.insertAdjacentHTML('afterbegin', cardSpeaker);

heading.after(speakerContainer);

let moreCardSpeaker = '';
const moreSpeaker = document.getElementById('more-speakers');

moreSpeaker.addEventListener('click', () => {
    speakerCard.forEach((speaker, index) => {
        if (index >= 2) {
            moreCardSpeaker += contentSpeakers(speaker);
        }
    });
    console.log(moreCardSpeaker);
    speakerContainer.insertAdjacentHTML('afterbegin', moreCardSpeaker);

    moreSpeaker.style.display = 'none';


});



// Query Selectors




// Functions

// Event Listners


// Local Storage

