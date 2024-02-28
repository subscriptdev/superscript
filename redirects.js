let nav = document.getElementsByTagName("nav")[0];
let elems = nav.getElementsByTagName("p")

elems[0].onclick = logo;
elems[1].onclick = start;
elems[2].onclick = pricing;
elems[3].onclick = features;
elems[4].onclick = about;

function logo() {
  window.top.location = "http://super.script.cl/";
}

function start() {
  window.top.location = "http://super.script.cl/setup/";
}

function pricing() {
  window.top.location = "http://super.script.cl/pricing/";
}

function features() {
  window.top.location = "http://super.script.cl/features/";
}

function about() {
  window.top.location = "http://super.script.cl/about/";
}
