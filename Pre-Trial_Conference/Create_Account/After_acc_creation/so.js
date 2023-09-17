document.addEventListener('DOMContentLoaded', function () {
    const signOutButton = document.getElementById('signOutButton');

    signOutButton.addEventListener('click', function () {
        // Perform sign-out actions here (e.g., clear user session, tokens, or cookies).

        // For demonstration purposes, we'll simply redirect to a confirmation page.
        window.location.href = 'signout-confirmation.html';
    });
});
