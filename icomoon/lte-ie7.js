/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-soundcloud' : '&#xe004;',
			'icon-youtube' : '&#xe005;',
			'icon-facebook' : '&#xe002;',
			'icon-twitter' : '&#xe000;',
			'icon-envelope' : '&#xe001;',
			'icon-mobile' : '&#xe003;',
			'icon-location' : '&#xe006;',
			'icon-location-2' : '&#xe007;',
			'icon-location-3' : '&#xe008;',
			'icon-location-4' : '&#xe009;',
			'icon-compass' : '&#xe00a;',
			'icon-compass-2' : '&#xe00b;',
			'icon-phone' : '&#xe00c;',
			'icon-phone-2' : '&#xe00d;',
			'icon-mobile-2' : '&#xe00e;',
			'icon-star' : '&#xe00f;',
			'icon-star-2' : '&#xe010;',
			'icon-star-3' : '&#xe011;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};