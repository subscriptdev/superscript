let nav = document.getElementsByTagName("nav")[0];
let elems = nav.getElementsByTagName("p")

elems[0].onClick = "logo()";
elems[1].onClick = "start()";
elems[2].onClick = "pricing()";
elems[3].onClick = "features()";
elems[4].onClick = "about()";

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
