console.log("JS is connected! 🚀");

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  const dark = document.body.dataset.theme !== "dark";
  document.body.dataset.theme = dark ? "dark" : "light";
  toggle.setAttribute("aria-pressed", String(dark));
});
