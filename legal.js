// Контакты на юридических страницах (те же, что в CONFIG на главной)
(() => {
  const WA = "77067136752", TG = "dezzz34";
  document.querySelectorAll(".js-wa").forEach(a => { a.href = `https://wa.me/${WA}`; a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll(".js-tg").forEach(a => { a.href = `https://t.me/${TG}`; a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll(".js-year").forEach(el => el.textContent = new Date().getFullYear());
})();
