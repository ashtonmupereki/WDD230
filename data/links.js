const baseURL = "https://ashtonmupereki.github.io/wdd230/";
const linksURL = "https://ashtonmupereki.github.io/wdd230/data/links.json";

// Asynchronous function to get the links data
async function getLinks() {
  try {
    // Fetch the links data from the linksURL
    var response = await fetch(linksURL);

    // Parse the JSON response
    var data = await response.json();

    // Call the displayLinks function to build out the available activity links
    displayLinks(data.lessons);

  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

// Function to build out the available activity links
function displayLinks(weeks) {
  // Get the <ul> element to append the links to
  var linksList = document.getElementById("links-list");

  // Clear the list before adding new links
  linksList.innerHTML = "";

  // Loop through each week
  weeks.forEach(function (week) {
    // Create a new <li> element for the week
    var listItem = document.createElement("li");

    // Create a new <h3> element for the week's title
    var weekTitle = document.createElement("h3");
    weekTitle.textContent = "Week " + week.lesson;

    // Append the week's title to the <li> element
    listItem.appendChild(weekTitle);

    // Create a new <ul> element for the week's links
    var weekLinksList = document.createElement("ul");

    // Loop through each link in the week
    week.links.forEach(function (link) {
      // Create a new <li> element for the link
      var linkItem = document.createElement("li");

      // Create a new <a> element for the link
      var linkAnchor = document.createElement("a");
      linkAnchor.textContent = link.title;
      linkAnchor.href = link.url;

      // Append the link to the <li> element
      linkItem.appendChild(linkAnchor);

      // Append the link item to the week's links list
      weekLinksList.appendChild(linkItem);
    });

    // Append the week's links list to the <li> element
    listItem.appendChild(weekLinksList);

    // Append the <li> element to the main links list
    linksList.appendChild(listItem);
  });
}

// Call the getLinks function to fetch the links and display them
getLinks();