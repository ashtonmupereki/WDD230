// abc.js
document.addEventListener("DOMContentLoaded", function() {
    const rentalOptions = document.querySelector(".rental-options");

    // Fetch the JSON data
    fetch("rentals.json")
        .then(response => response.json())
        .then(data => {
            data.rentals.forEach(rental => {
                // Create a rental card
                const rentalCard = document.createElement("div");
                rentalCard.classList.add("rental-card");

                // Set the rental image
                const image = document.createElement("img");
                image.src = rental.image;
                image.alt = rental.name;
                rentalCard.appendChild(image);

                // Set the rental name
                const name = document.createElement("h2");
                name.textContent = rental.name;
                rentalCard.appendChild(name);

                // Set the rental description
                const description = document.createElement("p");
                description.textContent = rental.description;
                rentalCard.appendChild(description);

                // Set the rental price
                const price = document.createElement("p");
                price.classList.add("price");
                price.textContent = `$${rental.price} per day`;
                rentalCard.appendChild(price);

                // Create a "Rent Now" button
                const rentNowButton = document.createElement("a");
                rentNowButton.href = "reservations.html";
                rentNowButton.classList.add("btn");
                rentNowButton.textContent = "Rent Now";
                rentalCard.appendChild(rentNowButton);

                // Append the rental card to the rental options section
                rentalOptions.appendChild(rentalCard);
            });
        })
        .catch(error => console.error(error));
});