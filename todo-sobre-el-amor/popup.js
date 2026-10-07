$(document).ready(function(){
    // Show popup when span with class "popup" is clicked
    // Add click event listener to the popup link
$('#popupLink').click(function() {
    // Open the popup page in a new tab with specified dimensions
    window.open('popup.html', '_blank', 'width=450,height=500');
});

});
