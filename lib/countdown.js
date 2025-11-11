    // Countdown Script
    const countdown = document.getElementById("countdown");
    const weddingDate = new Date("2026-06-13T00:00:01").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff <= 0) {
        countdown.innerHTML = "Heute ist der große Tag! 💖";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      countdown.innerHTML = `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;
    }

    setInterval(updateCountdown, 1000);