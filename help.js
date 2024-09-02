document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-items a');
    const navbar = document.querySelector('.navbar');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to clicked link
            this.classList.add('active');
            
            // Change the navbar background color and links opacity
            navbar.classList.add('active');
        });
    });

    // Optional: Remove 'active' class from navbar when clicking outside the navbar
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navbar.classList.remove('active');
        }
    });
});
document.getElementById('downloadBtn').addEventListener('click', function() {
    const url = 'IIT_Dhanbad___Resume__OnCampus_ (2).pdf'; // Replace with the path to your file
    const fileName = 'Tanisha_resume.pdf'; // Replace with the name you want for the downloaded file

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    
    // Append the anchor to the body
    document.body.appendChild(a);
    
    // Trigger the download
    a.click();
    
    // Remove the anchor from the document
    document.body.removeChild(a);
});
