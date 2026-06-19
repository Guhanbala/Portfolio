document.addEventListener("DOMContentLoaded", function () {
  const stored = localStorage.getItem("theme");
  if (stored === "light") document.body.classList.add("light");

  const btn = document.getElementById("toggleTheme") || document.getElementById("darkModeToggle");
  if (btn) {
    btn.textContent = document.body.classList.contains("light") ? "☾" : "☀";
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const isLight = document.body.classList.contains("light");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      btn.textContent = isLight ? "☾" : "☀";
    });
  }
});
