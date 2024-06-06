const Params = window.location.search;
const UrlParam = new URLSearchParams(Params);
const data =UrlParam.get("");
document.getElementById("page2")