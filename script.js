function startCountdown() {
    const eventDate = new Date("December 15, 2025 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText = `Annual Day in: ${days} days`;
    }, 1000);
}

window.onload = startCountdown;
