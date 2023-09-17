// Simulated data for available slots
const availableSlots = [
    { date: '2023-09-17', time: '10:00 AM' },
    { date: '2023-09-17', time: '11:00 AM' },
    { date: '2023-09-18', time: '9:00 AM' },
    // Add more available slots here
];

// Function to generate the calendar
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toISOString().split('T')[0];
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;

        if (isSlotAvailable(date)) {
            dayElement.classList.add('available');
        } else {
            dayElement.classList.add('unavailable');
        }

        calendar.appendChild(dayElement);
    }
}

// Function to check if a slot is available
function isSlotAvailable(date) {
    for (const slot of availableSlots) {
        if (slot.date === date) {
            return true;
        }
    }
    return false;
}

generateCalendar();
