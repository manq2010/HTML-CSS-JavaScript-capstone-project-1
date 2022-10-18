// Mobile Menu
const humburger = document.querySelector('.btn');
const closeBtn = document.querySelector('.btn-close');
console.log(humburger);
const mobileMenu = document.querySelector('.main-nav');
const mobileNav = document.querySelector('.mobile-nav');


function mobileMenuToggle() {
    mobileNav.classList.toggle('open');
    humburger.classList.toggle('close');
    closeBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
}

humburger.addEventListener('click', mobileMenuToggle);
closeBtn.addEventListener('click', mobileMenuToggle);

// Main Program

const programCard = [
    {
        id: 0,
        cardImage: 'mic-fill',
        cardName: 'Mic',
        cardDetails: 'Upcoming comedians will get to showcase their skills',
    },
    {
        id: 1,
        cardImage: 'egg-fried',
        cardName: 'Food',
        cardDetails: 'A buffet menu will we available at venue',
    },
    {
        id: 2,
        cardImage: 'building',
        cardName: 'Hotel',
        cardDetails: 'Accommodation will be after the event, free for vvip ticket holders',
    },
    {
        id: 3,
        cardImage: 'car-front-fill',
        cardName: 'Uber',
        cardDetails: 'Transport with be avlaible a at a discount',
    },
    {
        id: 4,
        cardImage: 'people-fill',
        cardName: 'Community',
        cardDetails: 'You will have interestion with a wider network',
    },
];

let card = '';

function contentCard(program) {
    const cards = `
 <div class="card-holder">
 <img src="/assets/${program.cardImage}.svg" alt="${program.cardImage}" width="${40}" height="${40}">
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
    // console.log(moreCardSpeaker);
    speakerContainer.insertAdjacentHTML('afterbegin', moreCardSpeaker);

    moreSpeaker.style.display = 'none';


});



// Query Selectors




// Functions

// Event Listners


// Local Storage

