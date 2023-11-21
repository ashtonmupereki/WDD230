const baseURL = "https://ashtonmupereki.github.io/wdd230/";
const linksURL = "https://ashtonmupereki.github.io/wdd230/prophets.json";

const getProphetData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.table(data);
    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error:', error);
  }
};

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');

    fullName.textContent = prophet.fullName; // Corrected property name to fullName
    portrait.setAttribute('src', prophet.imageUrl); // Corrected property name to imageUrl
    portrait.setAttribute('alt', prophet.fullName);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '200');

    card.appendChild(fullName);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getProphetData();