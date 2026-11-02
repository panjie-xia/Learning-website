// 读取nav.html，插入页面顶部
async function loadNav() {
    const res = await fetch("nav.html");
    const html = await res.text();
    document.querySelector("nav-placeholder").innerHTML = html;
}
loadNav();
