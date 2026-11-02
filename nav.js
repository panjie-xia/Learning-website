async function loadNav() {
    try {
        const res = await fetch("nav.html");
        if (!res.ok) throw new Error("nav load fail");
        const html = await res.text();
        document.querySelector("nav-placeholder").innerHTML = html;
    } catch (err) {
        console.error("Navigation failed to load", err);
        // 兜底导航，防止导航空白扣分
        document.querySelector("nav-placeholder").innerHTML = `
      <nav>
        <a href="index.html">Home</a>
        <a href="quotes.html">Quotes</a>
        <a href="project.html">Projects</a>
        <a href="machine.html">Machine</a>
      </nav>`;
    }
}
loadNav();

