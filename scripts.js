window.onload = function() {
    const utcTimeElement = document.getElementById('utc-time');
    const currentDayElement = document.getElementById('current-day');

    setInterval(() => {
        const now = new Date();
        utcTimeElement.textContent = now.toUTCString().split(' ')[4];
        currentDayElement.textContent = now.toLocaleString('en-US', { weekday: 'long' });
    }, 1000);
}
