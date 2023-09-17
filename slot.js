document.addEventListener("DOMContentLoaded", function () {
    const datePicker = document.getElementById("datePicker");
    const timeSlot = document.getElementById("timeSlot");
    const bookButton = document.getElementById("bookButton");
    const bookingDate = document.getElementById("bookingDate");
    const bookingTime = document.getElementById("bookingTime");

    bookButton.addEventListener("click", function () {
        const selectedDate = datePicker.value;
        const selectedTime = timeSlot.value;

        if (selectedDate && selectedTime) {
            bookingDate.textContent = selectedDate;
            bookingTime.textContent = selectedTime;
        } else {
            alert("Please select a date and time slot.");
        }
    });
});