(function() {
	'use strict';

	document.addEventListener('DOMContentLoaded', ready);

	function ready() {

		// Add/Remove active-class for input range
		var rangeTimeLine = document.getElementById('range-time-line').addEventListener('change', addRemoveClass);
		var rangeItem1 = document.getElementById('range-list-low');
		var rangeItem2 = document.getElementById('range-list-middle');
		var rangeItem3 = document.getElementById('range-list-hight');

		function addRemoveClass() {
			var rangeValue = document.getElementById('range-time-line').value;
			if(rangeValue == 1) {
				rangeItem1.classList.add('active');
			} else {
				rangeItem1.classList.remove('active')
			}
			if(rangeValue == 2) {
				rangeItem2.classList.add('active');
			} else {
				rangeItem2.classList.remove('active')
			}
			if(rangeValue == 3) {
				rangeItem3.classList.add('active');
			} else {
				rangeItem3.classList.remove('active')
			}
		}

		// Credit card/date fields
		var cardField = document.getElementById('card-number');
		var dateField = document.getElementById('date-field');

		document.getElementById('card-number').onkeypress = function(e) {
			e = e || event;
			if (e.ctrlKey || e.altKey || e.metaKey) return;
			var chr = getChar(e);

			if (chr == null) return;
			if (chr < '0' || chr > '9') {
				return false;
			}

			getSeparate();
		}

		document.getElementById('date-field').onkeypress = function(e) {
			e = e || event;
			if (e.ctrlKey || e.altKey || e.metaKey) return;
			var chr = getChar(e);

			if (chr == null) return;
			if (chr < '0' || chr > '9') {
				return false;
			}

			getSeparate();
		}

		function getChar(event) {
			if (event.which == null) {
				if (event.keyCode < 32) return null;
				return String.fromCharCode(event.keyCode);
			}

			if (event.which != 0 && event.charCode != 0) {
				if (event.which < 32) return null;
				return String.fromCharCode(event.which);
			}

			return null;
		}

		function getSeparate() {
			if (cardField.value.length == 4 || cardField.value.length == 9 || cardField.value.length == 14) {
				cardField.value = cardField.value + ' ';
			}

			if (dateField.value.length == 2 || dateField.value.length == 5) {
				dateField.value = dateField.value + '/';
			}
		}

		// Password meter
		var passwField = document.getElementById('password-input');
		passwField.addEventListener('keyup', enterPasswd);

		function enterPasswd(x) {
			var x = passwField.value;
			var level = 0;
			var p1 = /[a-z]/;
			var p2 = /[A-Z]/;
			var p3 = /[0-9]/;
			var p4 = /[\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\|\\\;\:\'\"\,\<\.\>\/\?\`\~]/;
			if(x.length >= 8)
				level++;
			if(p1.test(x))
				level++;
			if(p2.test(x))
				level++;
			if(p3.test(x))
				level++;
			if(p4.test(x))
				level++;
			prog_bar(level, 0, 5, 200, 5);
		}

		function prog_bar(cur_val,min_val,max_val) {
			var str = "",
				res = 0;
			if(cur_val >= min_val && cur_val <= max_val) {
				if(min_val < max_val) {
					res = ((cur_val - min_val) / (max_val - min_val)) * 100;
					res = Math.floor(res);
				} else {
					res = 0;
				}
			} else {
				res = 0;
			}

			var meter = document.getElementById('password-meter');
					meter.value = res;
		}

	}

} ());
