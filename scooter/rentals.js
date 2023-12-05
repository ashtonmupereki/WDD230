// Function to fetch JSON data
async function fetchRentalData() {
    try {
      const response = await fetch('rentals.json');
      const data = await response.json();
      return data.rentals;
    } catch (error) {
      console.error('Error fetching rental data:', error);
      return [];
    }
  }
  
  // Function to generate the table rows
  function generateTableRows(rentals) {
    const tableBody = document.getElementById('rental-table-body');
    
    rentals.forEach((rental) => {
      const row = document.createElement('tr');
      
      const rentalTypeCell = document.createElement('td');
      rentalTypeCell.textContent = rental.type;
      row.appendChild(rentalTypeCell);
      
      const maxPersonsCell = document.createElement('td');
      maxPersonsCell.textContent = rental.maxPersons;
      row.appendChild(maxPersonsCell);
      
      const halfDayReservationCell = document.createElement('td');
      halfDayReservationCell.textContent = `$${rental.halfDayReservation}`;
      row.appendChild(halfDayReservationCell);
      
      const fullDayReservationCell = document.createElement('td');
      fullDayReservationCell.textContent = `$${rental.fullDayReservation}`;
      row.appendChild(fullDayReservationCell);
      
      const halfDayWalkInCell = document.createElement('td');
      halfDayWalkInCell.textContent = `$${rental.halfDayWalkIn}`;
      row.appendChild(halfDayWalkInCell);
      
      const fullDayWalkInCell = document.createElement('td');
      fullDayWalkInCell.textContent = `$${rental.fullDayWalkIn}`;
      row.appendChild(fullDayWalkInCell);
      
      tableBody.appendChild(row);
    });
  }
  
  // Function to initialize the rental table
  async function initializeRentalTable() {
    const rentals = await fetchRentalData();
    generateTableRows(rentals);
  }
  
  // Call the initialization function
  initializeRentalTable();