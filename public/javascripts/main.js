document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".delete-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const confirmDelete = confirm(
        "Are you sure you want to delete this goal?"
      );
      if (!confirmDelete) e.preventDefault();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const flashMessages = document.querySelectorAll(".flash");

  flashMessages.forEach((msg) => {
    setTimeout(() => {
      msg.style.transition = "opacity 0.5s ease-out";
      msg.style.opacity = "0";
      setTimeout(() => msg.remove(), 500); // remove from DOM
    }, 3000); // 3 seconds
  });
});
