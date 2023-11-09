const baseURL = "https://ashtonmupereki.github.io/wdd230/";
const linksURL = "https://ashtonmupereki.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById("links-container");

  weeks.forEach((week) => {
    const weekHeader = document.createElement("h2");
    weekHeader.textContent = "Week " + week.week;
    linksContainer.appendChild(weekHeader);

    const linksList = document.createElement("ul");
    linksList.classList.add("links-list");

    week.links.forEach((link) => {
      const listItem = document.createElement("li");
      const linkTitle = document.createElement("a");
      linkTitle.textContent = link.title;
      linkTitle.href = link.url;
      linkTitle.target = "_blank";
      listItem.appendChild(linkTitle);
      linksList.appendChild(listItem);
    });

    linksContainer.appendChild(linksList);
  });
}

getLinks();