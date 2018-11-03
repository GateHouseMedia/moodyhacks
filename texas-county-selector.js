// Declare the selector and value variables globally so they can be accessed by any function
var selector
var countySelection

// This is the function that actually changes the text on the page.
function changeVariables() {
	// Create a loop to move through the election data
	for (var i = electionData.length - 1; i >= 0; i--) {
  		// If the county value matches the county selection, do what's inside the brackets
    		if (electionData[i].County == countySelection) {
    			// Replace the HTML of these #'s with the variables defined in electiondata
   			document.getElementById('position1').innerHTML = electionData[i].Position;
   			document.getElementById('position2').innerHTML = electionData[i].Position;
    			document.getElementById('name').innerHTML = electionData[i].Name;
    			document.getElementById('phone').innerHTML = electionData[i].Phone;
    		// End the if statement
    		}
  	// End the loop
  	}
// End the function
}

// When the document loads (this prevents blanks from appearing)
(function() {
	// Get the document element called county selector
	selector = document.getElementById("countySelector");
	// Get the text value of the county selector and save it to the variable
	countySelection= selector.options[selector.selectedIndex].text;
	// Run the change variables function above now that the selector value is stored in the variable
	changeVariables();
})();

// The same function as lines 23-31, but this runs when the selector changes instead of window loads.
document.getElementById("countySelector").addEventListener("change", function() {
	selector = document.getElementById("countySelector");
	countySelection= selector.options[selector.selectedIndex].text;
  	changeVariables();
});
