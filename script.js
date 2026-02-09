const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetPage = link.dataset.page;

    pages.forEach(page => page.classList.remove("active-page"));
    navLinks.forEach(l => l.classList.remove("active"));

    document.getElementById(targetPage).classList.add("active-page");
    link.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
function toggleCap(block) {
  const allBlocks = document.querySelectorAll(".cap-block");

  allBlocks.forEach(b => {
    if (b !== block) {
      b.classList.remove("active");
    }
  });

  block.classList.toggle("active");
}
