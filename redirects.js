alert(window.top.location);

document.getElementsByTagName("nav")[0].getElementsByTagName("p")[0].onclick = logo;
document.getElementsByTagName("nav")[0].getElementsByTagName("p")[1].onclick = start;
document.getElementsByTagName("nav")[0].getElementsByTagName("p")[2].onclick = pricing;
document.getElementsByTagName("nav")[0].getElementsByTagName("p")[3].onclick = features;
document.getElementsByTagName("nav")[0].getElementsByTagName("p")[4].onclick = about;

function logo() {
  window.top.location.replace("http://super.script.cl/");
}

function start() {
  window.top.location.replace("http://super.script.cl/setup/");
}

function pricing() {
  window.top.location.replace("http://super.script.cl/pricing/");
}

function features() {
  window.top.location.replace("http://super.script.cl/features/");
}

function about() {
  window.top.location.replace("http://super.script.cl/about/");
}
