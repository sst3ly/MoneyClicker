cash = 0
clickAmount = 1

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function updateCashR() {
	document.getElementById("cc").innerHTML = "Cash: $" + cash.toString()
}

function getCash() {
	nc = getCookie("cash")
	nnc = Number(nc)
	if(nnc != 0) {
		cash = nnc
		updateCashR()
	}
}

function updateCashW() {
	document.cookie = "cash=" + cash.toString()
	updateCashR()
}

function clicked() {
	cash+=clickAmount
	updateCashW()
}

function reset() {
  cash = 0
  updateCashW()
}

document.getElementById("button").addEventListener("click", clicked)
document.getElementById("reset").addEventListener("click", reset)

getCash()