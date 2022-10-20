// Mobile Menu

const humburger = document.querySelector('.btn');
const closeBtn = document.querySelector('.btn-close');
const mobileMenu = document.querySelector('.main-nav');
const mobileNav = document.querySelector('.mobile-nav');
const navItem = document.querySelectorAll('.nav-item');

function mobileMenuToggle() {
  mobileNav.classList.toggle('open');
  humburger.classList.toggle('close');
  closeBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
}

humburger.addEventListener('click', mobileMenuToggle);
closeBtn.addEventListener('click', mobileMenuToggle);

navItem.forEach((item) => {
  item.addEventListener('click', mobileMenuToggle);
});

// Main Program

const programCard = [
  {
    id: 0,
    cardImage: 'mic-fill',
    cardName: 'Mic',
    cardDetails: 'Upcoming comedians will get to showcase their skills, and share the stage with the worlds renown comedians',
  },
  {
    id: 1,
    cardImage: 'egg-fried',
    cardName: 'Food',
    cardDetails: 'A buffet menu will we available at venue, free for vvip and vip ticket holders.',
  },
  {
    id: 2,
    cardImage: 'building',
    cardName: 'Hotel',
    cardDetails: 'Accommodation will be after the event, free for vvip and vip ticket holders.',
  },
  {
    id: 3,
    cardImage: 'car-front-fill',
    cardName: 'Uber',
    cardDetails: 'Transport with be available at a discount for all ticket holders to and from the hotel.',
  },
  {
    id: 4,
    cardImage: 'people-fill',
    cardName: 'Community',
    cardDetails: 'You will have interaction with a wider network, ranging from vvip guests to the comedians.',
  },
];

let card = '';

function contentCard(program) {
  const cards = `
 <div class="card-holder">
 <img src="./assets/${program.cardImage}.svg" alt="${program.cardImage}" width="${40}" height="${40}">
 <h3 class="card-title">${program.cardName}</h3>
 <p class="card-details">${program.cardDetails}</p>
</div>
 `;
  return cards;
}

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
    image: 'david-kau.jpg',
    role: 'Comedian',
    details: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    id: 1,
    name: 'Ntsudeni Ndou',
    image: 'trevor-gumbi.jpg',
    role: 'Comedian',
    details: 'By developing Asia&apos;s first Internet protocol network SDN and leading Korea&apos;s first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.',
  },
  {
    id: 2,
    name: 'Trevor Noah',
    image: 'trevor-noah.jpg',
    role: 'Comedian',
    details: 'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU&apos;s copyright law in July.',
  },
  {
    id: 3,
    name: 'Loyiso Gala',
    image: 'loyiso-gala.jpg',
    role: 'Comedian',
    details: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages every month to over 100 million people, nearly half of the world&apos;s population',
  },
];

function contentSpeakers(speaker) {
  const cards = `
    <div class="speaker-holder">
        <div class="speaker-img-holder">
            <img src="./assets/${speaker.image}" alt="${speaker.image}" class="speaker-img">   
        </div>
        <div >
        <h3 class="speaker-title">${speaker.name}</h3>
        <h4 class="speaker-role underline-role">${speaker.role}</h3>
        <p class="speaker-details">${speaker.details}</p>
        </div>

   </div>
    `;
  return cards;
}

let cardSpeaker = '';

speakerCard.forEach((speaker, index) => {
  if (index < 2) {
    cardSpeaker += contentSpeakers(speaker);
  }
});

const heading = document.querySelector('.heading-speakers');
const speakerContainer = document.createElement('div');
speakerContainer.classList.add('speaker-container');
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
  speakerContainer.insertAdjacentHTML('afterbegin', moreCardSpeaker);

  moreSpeaker.style.display = 'none';
});
