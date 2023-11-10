const baseURL = "https://ashtonmupereki.github.io/wdd230/";
const linksURL = "https://ashtonmupereki.github.io/wdd230/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

function displayLinks(weeks) {
  const learningContainer = document.getElementById("learning-container");

  weeks.forEach((week) => {
    const weekContainer = document.createElement("div");
    weekContainer.classList.add("week-container");

    const weekHeading = document.createElement("h4");
    weekHeading.textContent = "Week " + week.lesson;

    const linksList = document.createElement("ul");
    linksList.classList.add("links-list");

    week.links.forEach((link) => {
      const listItem = document.createElement("li");
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.textContent = link.title;

      listItem.appendChild(linkElement);
      linksList.appendChild(listItem);
    });

    weekContainer.appendChild(weekHeading);
    weekContainer.appendChild(linksList);
    learningContainer.appendChild(weekContainer);
  });
}

getLinks();