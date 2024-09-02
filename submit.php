<!-- submit_form.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Here you can add code to send the email or save the data to a database

    echo "Thank you, " . $name . "! Your message has been sent.";
} else {
    echo "There was an error with your submission.";
}
?>
