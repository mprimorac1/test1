var searchText = document.getElementById("text");
var proba = document.querySelector(".test");

searchText.addEventListener("input", () => {
  const searchTerm = searchText.value;

  // Do some processing with the search term here
  // For example, you could make an API request to get data based on the search term

  // Once you have the results, display them in the results div
  proba.innerHTML = `<p> ${searchTerm}</p>`;

  // Define the API URL
  // const apiUrl = "https://api.tvmaze.com/search/shows?q=" + searchTerm;
  const apiUrl =
    "https://itunes.apple.com/search?term=" + searchTerm + "&entity=song";
  // resultsTable.innerHTML = "";
  // Fetch the data from the API
  fetch(apiUrl, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Get the table body element
      const tbody = document.querySelector("#results-table tbody");

      if (data.results == "") {
        tbody.textContent = "Insert new query";
      } else {
        // Loop through the data and create a new row for each item
        data.results.forEach((item) => {
          // Create a new row element
          // if (!item) {
          //   tbody.innerHTML = "Insert new query111";
          // }
          const row = document.createElement("tr");

          // Create the cells and populate them with the data
          // const idCell = document.createElement("td");
          // idCell.textContent = item.show.id;

          // const nameCell = document.createElement("td");
          // nameCell.textContent = item.show.name;

          // const emailCell = document.createElement("td");
          // emailCell.textContent = item.show.rating.average;
          // const genreCell = document.createElement("td");
          // genreCell.textContent = item.show.genres;
          // const summaryCell = document.createElement("td");
          // summaryCell.innerHTML = item.show.summary;
          // Create the cells and populate them with the data
          const idCell = document.createElement("td");
          idCell.textContent = item.trackId;

          const nameCell = document.createElement("td");
          nameCell.textContent = item.artistName;

          const emailCell = document.createElement("td");
          emailCell.textContent = item.trackName;

          // Add the cells to the row
          row.appendChild(idCell);
          row.appendChild(nameCell);
          row.appendChild(emailCell);
          // row.appendChild(genreCell);
          // row.appendChild(summaryCell);
          // Add the row to the table body
          tbody.appendChild(row);
        });
      }
    })
    .catch((error) => console.log(error));
});

// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Fetch Data from API and Display in Table</title>
// </head>
// <body>
// 	<label for="search-input">Search:</label>
// 	<input type="text" id="search-input">
// 	<button id="search-button">Search</button>
// 	<table id="results-table">
// 		<thead>
// 			<tr>
// 				<th>Result 1</th>
// 				<th>Result 2</th>
// 				<th>Result 3</th>
// 			</tr>
// 		</thead>
// 		<tbody></tbody>
// 	</table>

// 	<script>
// 		const searchInput = document.querySelector('#search-input');
// 		const searchButton = document.querySelector('#search-button');
// 		const resultsTable = document.querySelector('#results-table tbody');

// 		// Event listener for the search button click
// 		searchButton.addEventListener('click', () => {
// 			const searchTerm = searchInput.value;

// 			// Clear the table for each new search
// 			resultsTable.innerHTML = '';

// 			// Fetch data from the API based on the search term
// 			fetch(`https://api.example.com/search?q=${searchTerm}`)
// 				.then(response => response.json())
// 				.then(data => {
// 					// Once you have the data, display it in the table
// 					if (data.results.length > 0) {
// 						data.results.forEach(result => {
// 							const row = resultsTable.insertRow();
// 							row.insertCell().textContent = result.field1;
// 							row.insertCell().textContent = result.field2;
// 							row.insertCell().textContent = result.field3;
// 						});
// 					} else {
// 						resultsTable.innerHTML = '<tr><td colspan="3">No results found.</td></tr>';
// 					}
// 				})
// 				.catch(error => {
// 					resultsTable.innerHTML = `<tr><td colspan="3">Error: ${error.message}</td></tr>`;
// 				});
// 		});
// 	</script>
// </body>
// </html>
