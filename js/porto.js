// Get the modal
var modal = document.getElementById("portfolioModal");

// Get the button that opens the modal
var buttons = document.querySelectorAll(".portfolio-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
buttons.forEach(function(button) {
    button.onclick = function() {
        var projectId = this.getAttribute("data-project");
        // Here you can load project-specific content if needed
        modal.style.display = "block";
    };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
