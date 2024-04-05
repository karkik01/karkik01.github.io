// Variables to reference form pages and elements
const formPage1 = document.getElementById("form-page1");
const formPage2 = document.getElementById("form-page2");
const formPage3 = document.getElementById("form-page3");
const formPage4 = document.getElementById("form-page4");
const formPage5 = document.getElementById("form-page5");
const progressBar = document.querySelector("progress");
const summaryName = document.getElementById("summary-name");
const formData = document.getElementById("collected-data");

// Function to show a specific form page and update progress
function showPage(pageNumber) {
    // Hide all form pages initially
    [formPage1, formPage2, formPage3, formPage4, formPage5].forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected form page based on pageNumber
    if (pageNumber >= 1 && pageNumber <= 5) {
        const currentPage = document.getElementById(`form-page${pageNumber}`);
        currentPage.style.display = 'block';

        // Update progress bar based on page number
        progressBar.value = pageNumber * 25;

        // Update summary on page 5
        if (pageNumber === 5) {
            updateSummary();
        }
    }
}

// Function to gather form data from different pages
function getFormData() {
    let formData = {};

    // Example: Gathering name from page 1
    formData.name = document.getElementById("name-first").value + " " + document.getElementById("name-last").value;

    // Example: Gathering vehicle type and make from page 2
    formData.vehicleType = formPage2.querySelector('input[name=vehicle]:checked').value;
    formData.vehicleMake = formPage2.querySelector('select').value;

    return formData;
}

// Function to update summary on page 5 based on gathered data
function updateSummary() {
    const data = getFormData();
    summaryName.innerHTML = data.name;
}

// Function to submit form data (example: adding to a table)
function submitData() {
    const data = getFormData();

    // Create a new row in the table with collected data
    const dataRow = document.createElement("tr");

    const cellName = document.createElement("td");
    cellName.textContent = data.name;

    const cellVehicleType = document.createElement("td");
    cellVehicleType.textContent = data.vehicleType;

    const cellVehicleMake = document.createElement("td");
    cellVehicleMake.textContent = data.vehicleMake;

    dataRow.appendChild(cellName);
    dataRow.appendChild(cellVehicleType);
    dataRow.appendChild(cellVehicleMake);

    formData.appendChild(dataRow);
}

// Event listener for form navigation buttons
document.querySelectorAll('.form-nav-button').forEach(button => {
    button.addEventListener('click', function() {
        const pageNumber = parseInt(button.dataset.page);
        showPage(pageNumber);
    });
});

// Event listener for form submission
document.getElementById('submit-button').addEventListener('click', function() {
    submitData();
    alert("Form submitted successfully!");
});

// Initial setup
showPage(1); // Show the first form page initially
