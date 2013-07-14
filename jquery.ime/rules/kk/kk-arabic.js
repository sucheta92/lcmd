( function ( $ ) {
	'use strict';

	var kkArabic = {
		id: 'kk-arabic',
		name: 'Kazak arabic',
		description: 'Kazak arabic in Arabic script keyboard layout',
		date: '2013-02-12',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['a', 'ا'],
			['A', 'ٵ'],
			['b', 'ب'],
			['v', 'ۆ'],
			['g', 'گ'],
			['R', 'ع'],
			['d', 'د'],
			['e', 'ە'],
			['j', 'ج'],
			['z', 'ز'],
			['y', 'ي'],
			['k', 'ك'],
			['q', 'ق'],
			['l', 'ل'],
			['m', 'م'],
			['n', 'ن'],
			['N', 'ڭ'],
			['o', 'و'],
			['O', 'ٶ'],
			['p', 'پ'],
			['r', 'ر'],
			['s', 'س'],
			['t', 'ت'],
			['w', 'ۋ'],
			['u', 'ۇ'],
			['U', 'ٷ'],
			['f', 'ف'],
			['H', 'ح'],
			['h', 'ه'],
			['c', 'چ'],
			['S', 'ش'],
			['I', 'ى'],
			['i', 'ٸ'],
			[';', '؛'],
			[',', '،'],
			['\\?', '?'],
			['\\<', '>'],
			['\\>', '<'],
			['\\(', ')'],
			['\\)', '('],
			['\\[', ']'],
			['\\]', '['],
			['\\{', '}'],
			['\\}', '{']
		]
	};
	$.ime.register( kkArabic );

}( jQuery ) );

