window.onload = function () {
	var ie = (function(){
	    var undef,
	        v = 3,
	        div = document.createElement('div'),
	        all = div.getElementsByTagName('i'),
	        inputs = document.getElementsByTagName('input');
	    while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);
	    return v > 4 ? v : undef;
	}());
	var dropdownBars = document.getElementById("bars"),
		navItems = document.getElementById("nav-items"),
		as = navItems.getElementsByTagName('a');
	for (var i = as.length - 1; i >= 0; i--) {
		as[i].onfocus = function () {
			this.blur();
		}
	}
	dropdownBars.onclick = function () {
		if (navItems.className == "toggled") {
			navItems.className = "";
		} else {
			navItems.className = "toggled";
		}
	}
	if (ie < 10) {
		for (var i = inputs.length - 1; i >= 0; i--) {
			inputs[i].value = inputs[i].placeholder;
			inputs[i].onfocus = function () {
				inputs[i].value = '';
			}
			inputs[i].onblur = function() {
				if (inputs[i].value == '') {
					inputs[i].value = inputs[i].placeholder;
				}
			}
		}
	}
}