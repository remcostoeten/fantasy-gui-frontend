function _0x44d2(_0x115784, _0x3b5017) {
	var _0x3bf14d = _0x3bf1();
	return (
		(_0x44d2 = function (_0x44d2fd, _0x305382) {
			_0x44d2fd = _0x44d2fd - 0x105;
			var _0x3b69ec = _0x3bf14d[_0x44d2fd];
			return _0x3b69ec;
		}),
		_0x44d2(_0x115784, _0x3b5017)
	);
}
var _0x5144f3 = _0x44d2;
(function (_0x2af4cd, _0x3c9f60) {
	var _0xd67582 = _0x44d2,
		_0x17db25 = _0x2af4cd();
	while (!![]) {
		try {
			var _0x580f49 =
				parseInt(_0xd67582(0x143)) / 0x1 +
				-parseInt(_0xd67582(0x157)) / 0x2 +
				parseInt(_0xd67582(0x14c)) / 0x3 +
				(-parseInt(_0xd67582(0x125)) / 0x4) *
					(-parseInt(_0xd67582(0x11b)) / 0x5) +
				(parseInt(_0xd67582(0x159)) / 0x6) *
					(-parseInt(_0xd67582(0x148)) / 0x7) +
				(parseInt(_0xd67582(0x127)) / 0x8) *
					(-parseInt(_0xd67582(0x133)) / 0x9) +
				parseInt(_0xd67582(0x119)) / 0xa;
			if (_0x580f49 === _0x3c9f60) break;
			else _0x17db25['push'](_0x17db25['shift']());
		} catch (_0x202a43) {
			_0x17db25['push'](_0x17db25['shift']());
		}
	}
})(_0x3bf1, 0x8a4c3);
var constellation_async = ![],
	constellation = {
		port: '9281',
		game: function () {
			var _0x29dba2 = _0x44d2,
				_0x2212fc = '';
			return (
				$[_0x29dba2(0x128)]({
					url:
						'http://127.0.0.1:' +
						constellation['port'] +
						_0x29dba2(0x11e),
					async: constellation_async,
					success: function (_0x597e39) {
						var _0x8d2c2c = _0x29dba2;
						if (_0x597e39 == null) return null;
						if (_0x597e39['length'] == 0x0) return null;
						_0x2212fc = _0x597e39[_0x8d2c2c(0x152)];
					},
				}),
				_0x2212fc[_0x29dba2(0x130)] == 0x0 ? null : _0x2212fc
			);
		},
		forums: function () {
			var _0x3b1686 = _0x44d2,
				_0x81de5d = '';
			return (
				$[_0x3b1686(0x128)]({
					url:
						_0x3b1686(0x137) +
						constellation['port'] +
						'/fantasy_cmd?cmd=forums&element=&val=0',
					async: constellation_async,
					success: function (_0x23940e) {
						if (_0x23940e == null) return null;
						if (_0x23940e['length'] == 0x0) return null;
						_0x81de5d = _0x23940e;
					},
				}),
				_0x81de5d[_0x3b1686(0x130)] == 0x0 ? null : _0x81de5d
			);
		},
		get: {
			localplayer: function () {
				var _0x14f67d = _0x44d2,
					_0x3cb8ff = '';
				return (
					$[_0x14f67d(0x128)]({
						url:
							_0x14f67d(0x137) +
							constellation[_0x14f67d(0x12b)] +
							'/fantasy_cmd?cmd=get\x20localplayer&element=&val=0',
						async: constellation_async,
						success: function (_0x204110) {
							var _0x173751 = _0x14f67d;
							if (_0x204110 == null) return null;
							if (_0x204110[_0x173751(0x130)] == 0x0) return null;
							_0x3cb8ff = _0x204110;
						},
					}),
					_0x3cb8ff['length'] == 0x0 ? null : _0x3cb8ff
				);
			},
			players: function () {
				var _0x2daefd = _0x44d2,
					_0x501d5f = '';
				return (
					$['get']({
						url:
							'http://127.0.0.1:' +
							constellation[_0x2daefd(0x12b)] +
							_0x2daefd(0x136),
						async: constellation_async,
						success: function (_0x4a3ef8) {
							var _0xc39ee9 = _0x2daefd;
							if (_0x4a3ef8 == null) return null;
							if (_0x4a3ef8[_0xc39ee9(0x130)] == 0x0) return null;
							_0x501d5f = _0x4a3ef8;
						},
					}),
					_0x501d5f['length'] == 0x0 ? null : _0x501d5f
				);
			},
			weapon: function () {
				var _0x3bc077 = _0x44d2,
					_0x377312 = '';
				return (
					$[_0x3bc077(0x128)]({
						url:
							_0x3bc077(0x137) +
							constellation[_0x3bc077(0x12b)] +
							_0x3bc077(0x12d),
						async: constellation_async,
						success: function (_0x4127ff) {
							if (_0x4127ff == null) return null;
							if (_0x4127ff['length'] == 0x0) return null;
							_0x377312 = _0x4127ff;
						},
					}),
					_0x377312[_0x3bc077(0x130)] == 0x0 ? null : _0x377312
				);
			},
		},
		mouse: {
			move: function (_0x48a62a, _0x5d730a) {
				var _0xb027a9 = _0x44d2,
					_0x3cd435 = {
						x: parseInt(_0x48a62a),
						y: parseInt(_0x5d730a),
					},
					_0x4b31d3 = JSON[_0xb027a9(0x149)](_0x3cd435);
				$[_0xb027a9(0x128)]({
					url:
						_0xb027a9(0x137) +
						constellation[_0xb027a9(0x12b)] +
						(_0xb027a9(0x134) + _0x4b31d3 + _0xb027a9(0x142)),
					async: constellation_async,
				});
			},
		},
		constelia: {
			say: function (_0x3dee95) {
				var _0x17a5ca = _0x44d2,
					_0x118aef = { data: _0x3dee95 },
					_0x13012f = JSON['stringify'](_0x118aef);
				$[_0x17a5ca(0x128)]({
					url:
						_0x17a5ca(0x137) +
						constellation[_0x17a5ca(0x12b)] +
						('/fantasy_cmd?cmd=constelia&element=' +
							_0x13012f +
							_0x17a5ca(0x142)),
					async: constellation_async,
				});
			},
		},
		memory: {
			read: function (_0x3e7dd2) {
				var _0x3e15fb = _0x44d2,
					_0x3beedc = { data: _0x3e7dd2 },
					_0x277e3a = JSON['stringify'](_0x3beedc),
					_0x1b740e = '';
				return (
					$[_0x3e15fb(0x128)]({
						url:
							'http://127.0.0.1:' +
							constellation[_0x3e15fb(0x12b)] +
							(_0x3e15fb(0x113) + _0x277e3a + _0x3e15fb(0x142)),
						async: constellation_async,
						success: function (_0xf01f17) {
							var _0x4632f8 = _0x3e15fb;
							if (_0xf01f17 == null) return null;
							if (_0xf01f17[_0x4632f8(0x130)] == 0x0) return null;
							_0x1b740e = _0xf01f17[_0x4632f8(0x12c)];
						},
					}),
					_0x1b740e[_0x3e15fb(0x130)] == 0x0 ? null : _0x1b740e
				);
			},
			read_string: function (_0x4b5204) {
				var _0x57a3cf = _0x44d2,
					_0x1ef894 = { data: _0x4b5204 },
					_0x586a41 = JSON[_0x57a3cf(0x149)](_0x1ef894),
					_0x7cb312 = '';
				return (
					$[_0x57a3cf(0x128)]({
						url:
							_0x57a3cf(0x137) +
							constellation[_0x57a3cf(0x12b)] +
							(_0x57a3cf(0x10f) + _0x586a41 + _0x57a3cf(0x142)),
						async: constellation_async,
						success: function (_0xe8c560) {
							var _0x1e000c = _0x57a3cf;
							if (_0xe8c560 == null) return null;
							if (_0xe8c560[_0x1e000c(0x130)] == 0x0) return null;
							_0x7cb312 = _0xe8c560[_0x1e000c(0x12c)];
						},
					}),
					_0x7cb312[_0x57a3cf(0x130)] == 0x0 ? null : _0x7cb312
				);
			},
			read_float: function (_0x39c2b3) {
				var _0x4e8cea = _0x44d2,
					_0x9e137f = { data: _0x39c2b3 },
					_0xe3408d = JSON['stringify'](_0x9e137f),
					_0x5bf84b = '';
				return (
					$['get']({
						url:
							'http://127.0.0.1:' +
							constellation[_0x4e8cea(0x12b)] +
							(_0x4e8cea(0x138) + _0xe3408d + _0x4e8cea(0x142)),
						async: constellation_async,
						success: function (_0x3a873f) {
							var _0x12b776 = _0x4e8cea;
							if (_0x3a873f == null) return null;
							if (_0x3a873f[_0x12b776(0x130)] == 0x0) return null;
							_0x5bf84b = _0x3a873f[_0x12b776(0x12c)];
						},
					}),
					_0x5bf84b[_0x4e8cea(0x130)] == 0x0 ? null : _0x5bf84b
				);
			},
			read_vector: function (_0x12053d) {
				var _0x726022 = _0x44d2,
					_0x1b66ba = { data: _0x12053d },
					_0x478f71 = JSON[_0x726022(0x149)](_0x1b66ba),
					_0x12b9be = '';
				return (
					$['get']({
						url:
							_0x726022(0x137) +
							constellation[_0x726022(0x12b)] +
							(_0x726022(0x151) + _0x478f71 + _0x726022(0x142)),
						async: constellation_async,
						success: function (_0x5582df) {
							var _0x478c21 = _0x726022;
							if (_0x5582df == null) return null;
							if (_0x5582df[_0x478c21(0x130)] == 0x0) return null;
							_0x12b9be = _0x5582df;
						},
					}),
					_0x12b9be[_0x726022(0x130)] == 0x0 ? null : _0x12b9be
				);
			},
			module: function (_0x447644) {
				var _0x1b9b29 = _0x44d2,
					_0x51efba = { data: _0x447644 },
					_0x45f13a = JSON[_0x1b9b29(0x149)](_0x51efba),
					_0x35f33d = '';
				return (
					$[_0x1b9b29(0x128)]({
						url:
							_0x1b9b29(0x137) +
							constellation[_0x1b9b29(0x12b)] +
							(_0x1b9b29(0x144) + _0x45f13a + _0x1b9b29(0x142)),
						async: constellation_async,
						success: function (_0x1e3b8f) {
							var _0x20d3aa = _0x1b9b29;
							if (_0x1e3b8f == null) return null;
							if (_0x1e3b8f[_0x20d3aa(0x130)] == 0x0) return null;
							_0x35f33d = _0x1e3b8f;
						},
					}),
					_0x35f33d[_0x1b9b29(0x130)] == 0x0 ? null : _0x35f33d
				);
			},
			netvar: function (_0x13afc0, _0x446952) {
				var _0x1e28f7 = _0x44d2,
					_0x5701fb = { table: _0x13afc0, prop: _0x446952 },
					_0x5eea82 = JSON[_0x1e28f7(0x149)](_0x5701fb),
					_0x2413fb = '';
				return (
					$['get']({
						url:
							_0x1e28f7(0x137) +
							constellation[_0x1e28f7(0x12b)] +
							(_0x1e28f7(0x10b) + _0x5eea82 + _0x1e28f7(0x142)),
						async: constellation_async,
						success: function (_0x5ae5bf) {
							var _0x252ac6 = _0x1e28f7;
							if (_0x5ae5bf == null) return null;
							if (_0x5ae5bf[_0x252ac6(0x130)] == 0x0) return null;
							_0x2413fb = _0x5ae5bf[_0x252ac6(0x12c)];
						},
					}),
					_0x2413fb[_0x1e28f7(0x130)] == 0x0 ? null : _0x2413fb
				);
			},
			pattern: function (
				_0x11ecd8,
				_0x1f9610,
				_0x5106e5,
				_0xc88ec7,
				_0x5c8cf6,
				_0x36ef01,
			) {
				var _0x34736d = _0x44d2,
					_0x46a91e = {
						mod: _0x11ecd8,
						size: _0x1f9610,
						sig: _0x5106e5,
						offset: _0xc88ec7,
						extra: _0x5c8cf6,
						relative: _0x36ef01,
					},
					_0x38e482 = encodeURIComponent(
						JSON[_0x34736d(0x149)](_0x46a91e),
					),
					_0x2c2a47 = '';
				return (
					$[_0x34736d(0x12e)]({
						url:
							_0x34736d(0x137) +
							constellation[_0x34736d(0x12b)] +
							('/fantasy_cmd?cmd=pattern&element=' +
								_0x38e482 +
								_0x34736d(0x142)),
						async: constellation_async,
						type: 'GET',
						jsonp: ![],
						success: function (_0x579723) {
							if (_0x579723 == null) return null;
							if (_0x579723['length'] == 0x0) return null;
							_0x2c2a47 = _0x579723;
						},
					}),
					_0x2c2a47[_0x34736d(0x130)] == 0x0
						? null
						: _0x2c2a47[_0x34736d(0x12c)]
				);
			},
		},
	};
function _0x3bf1() {
	var _0x52ebf1 = [
		'load',
		'always_update',
		'1254032QRUxli',
		':checked',
		'6SCMAZH',
		'<br\x20/>',
		'append',
		'input[name=pure_mode_keyboard_corsair]',
		'color',
		'&silence=',
		'/lua',
		'<label\x20for=\x22',
		'true',
		'checkbox',
		'/fantasy_cmd?cmd=netvar&element=',
		'label',
		'get\x20localplayer',
		'/configuration',
		'/fantasy_cmd?cmd=read\x20string&element=',
		'type',
		'input[name=pure_mode_always_update]',
		'players',
		'/fantasy_cmd?cmd=read&element=',
		'checked',
		'select[name=pure_mode_hwid_spoofer]',
		'_lua',
		'substring',
		'input[name=pure_mode_hypermode]',
		'1065110TNLcdC',
		'hwid_spoofer',
		'5BanKNS',
		'silence',
		'get\x20players',
		'/fantasy_cmd?cmd=get\x20game&element=&val=0',
		'</label><br\x20/>',
		'&hwid_spoofer=',
		'<div\x20id=\x22',
		'&always_update=',
		'&allow_modifications=',
		'Ammo:\x20',
		'3599836EWsSeW',
		'[name=weapon_information]',
		'8rygcRs',
		'get',
		'bone',
		'allow_modifications',
		'port',
		'data',
		'/fantasy_cmd?cmd=get\x20weapon&element=&val=0',
		'ajax',
		'&element=',
		'length',
		'.lua',
		'&debug=',
		'1723527myMJAz',
		'/fantasy_cmd?cmd=move\x20mouse&element=',
		'ready',
		'/fantasy_cmd?cmd=get\x20players&element=&val=0',
		'http://127.0.0.1:',
		'/fantasy_cmd?cmd=read\x20float&element=',
		'input[name=pure_mode_debug]',
		'number',
		'[name=',
		'content',
		'replace',
		'log',
		'weapon',
		'\x22></div>',
		'text',
		'&val=0',
		'801365ytcpMW',
		'/fantasy_cmd?cmd=get\x20module&element=',
		'script',
		'hypermode',
		'localplayer',
		'5640677WChjlN',
		'stringify',
		'/fantasy_cmd?cmd=',
		'input[name=pure_mode_allow_modifications]',
		'1148886jEsDdC',
		'name',
		'&corsair=',
		'corsair',
		'ammo',
		'/fantasy_cmd?cmd=read\x20vector&element=',
		'game',
		'prop',
		'val',
	];
	_0x3bf1 = function () {
		return _0x52ebf1;
	};
	return _0x3bf1();
}
function fantasy_cmd(_0x2329f3, _0x9b451c) {
	var _0x52db5d = _0x44d2,
		_0x3eaabe = 0x0,
		_0x1005f0 = '';
	if (typeof _0x2329f3 != 'string') {
		$(_0x2329f3)[_0x52db5d(0x153)]('type') == _0x52db5d(0x10a) &&
			(_0x3eaabe = $(_0x2329f3)['is'](_0x52db5d(0x158)));
		$(_0x2329f3)[_0x52db5d(0x153)](_0x52db5d(0x110)) == _0x52db5d(0x13a) &&
			(_0x3eaabe = $(_0x2329f3)[_0x52db5d(0x154)]());
		$(_0x2329f3)[_0x52db5d(0x153)](_0x52db5d(0x110)) == _0x52db5d(0x141) &&
			(_0x3eaabe = $(_0x2329f3)['val']());
		$(_0x2329f3)[_0x52db5d(0x153)](_0x52db5d(0x110)) == _0x52db5d(0x105) &&
			((_0x3eaabe = $(_0x2329f3)[_0x52db5d(0x154)]()),
			(_0x3eaabe = _0x3eaabe[_0x52db5d(0x117)](0x1)));
		var _0x1005f0 = $(_0x2329f3)[_0x52db5d(0x153)](_0x52db5d(0x14d));
	} else _0x1005f0 = _0x2329f3;
	return (
		$[_0x52db5d(0x128)](
			_0x52db5d(0x137) +
				constellation[_0x52db5d(0x12b)] +
				(_0x52db5d(0x14a) +
					_0x9b451c +
					_0x52db5d(0x12f) +
					_0x1005f0 +
					'&val=' +
					_0x3eaabe),
			function (_0xf082e1) {
				var _0x2e4409 = _0x52db5d;
				if (_0xf082e1 == null) return ![];
				if (_0xf082e1[_0x2e4409(0x130)] == 0x0) return ![];
				return (
					_0x9b451c == 'get\x20weapon' &&
						($(_0x2e4409(0x126))['html'](
							'Weapon\x20ID:\x20' +
								_0xf082e1['id'] +
								_0x2e4409(0x15a) +
								_0x2e4409(0x124) +
								_0xf082e1[_0x2e4409(0x150)],
						),
						$('[name=humanizer_weapon_bone]')[_0x2e4409(0x154)](
							_0xf082e1[_0x2e4409(0x129)],
						),
						(constellation[_0x2e4409(0x13f)] = _0xf082e1)),
					_0x9b451c == _0x2e4409(0x10d) &&
						(constellation[_0x2e4409(0x147)] = _0xf082e1),
					_0x9b451c == _0x2e4409(0x11d) &&
						(constellation[_0x2e4409(0x112)] = _0xf082e1),
					_0xf082e1
				);
			},
		),
		_0x9b451c == _0x52db5d(0x155) && get_fantasy_vars(),
		!![]
	);
}
function start_constellation() {
	var _0x3e4ffd = _0x44d2,
		_0x4876d2 = {
			silence: $('input[name=pure_mode_silence]')['is'](_0x3e4ffd(0x158)),
			allow_modifications: $(_0x3e4ffd(0x14b))['is'](_0x3e4ffd(0x158)),
			hwid_spoofer: $(_0x3e4ffd(0x115))[_0x3e4ffd(0x154)](),
			debug: $(_0x3e4ffd(0x139))['is'](_0x3e4ffd(0x158)),
			always_update: $(_0x3e4ffd(0x111))['is'](_0x3e4ffd(0x158)),
			corsair: $(_0x3e4ffd(0x15c))['is'](':checked'),
			hypermode: $(_0x3e4ffd(0x118))['is'](_0x3e4ffd(0x158)),
		};
	$[_0x3e4ffd(0x128)](
		'http://127.0.0.1:' +
			constellation[_0x3e4ffd(0x12b)] +
			('/start?hypermode=' +
				_0x4876d2[_0x3e4ffd(0x146)] +
				_0x3e4ffd(0x14e) +
				_0x4876d2[_0x3e4ffd(0x14f)] +
				_0x3e4ffd(0x122) +
				_0x4876d2[_0x3e4ffd(0x156)] +
				_0x3e4ffd(0x132) +
				_0x4876d2['debug'] +
				_0x3e4ffd(0x106) +
				_0x4876d2[_0x3e4ffd(0x11c)] +
				_0x3e4ffd(0x123) +
				_0x4876d2[_0x3e4ffd(0x12a)] +
				_0x3e4ffd(0x120) +
				_0x4876d2[_0x3e4ffd(0x11a)]),
		function (_0x55b22e) {
			location['reload']();
		},
	);
}
function get_fantasy_vars() {
	var _0x245c6e = _0x44d2;
	$[_0x245c6e(0x128)](
		'http://127.0.0.1:' +
			constellation[_0x245c6e(0x12b)] +
			_0x245c6e(0x107),
		function (_0x306f1e) {
			var _0x1e9b77 = _0x245c6e;
			console[_0x1e9b77(0x13e)](_0x306f1e);
			for (const _0x507888 in _0x306f1e) {
				var _0x3cf635 = _0x306f1e[_0x507888][_0x1e9b77(0x145)][
					_0x1e9b77(0x13d)
				](_0x1e9b77(0x131), _0x1e9b77(0x116));
				_0x3cf635 = _0x3cf635['replace']('core\x5c', '');
				var _0x37cd23 = $('#' + _0x3cf635),
					_0x7d3b85 = '';
				!_0x37cd23[_0x1e9b77(0x130)] &&
					((_0x7d3b85 =
						_0x7d3b85 +
						_0x1e9b77(0x121) +
						_0x3cf635 +
						_0x1e9b77(0x140)),
					$('#lua')[_0x1e9b77(0x15b)](_0x7d3b85));
				console[_0x1e9b77(0x13e)](_0x306f1e[_0x507888]['content']);
				var _0x288634 = _0x306f1e[_0x507888][_0x1e9b77(0x13c)];
				(_0x288634 =
					_0x288634 +
					_0x1e9b77(0x108) +
					_0x507888 +
					'\x22>\x20' +
					_0x306f1e[_0x507888][_0x1e9b77(0x10c)] +
					_0x1e9b77(0x11f)),
					$('#' + _0x3cf635)[_0x1e9b77(0x15b)](_0x288634);
			}
		},
	),
		$['get'](
			'http://127.0.0.1:' + constellation['port'] + _0x245c6e(0x10e),
			function (_0x303e91) {
				var _0x50baf0 = _0x245c6e;
				console['log'](_0x303e91);
				for (const _0x12b9f6 in _0x303e91) {
					const _0x145d74 = $(_0x50baf0(0x13b) + _0x12b9f6 + ']');
					if (!_0x145d74[_0x50baf0(0x130)]) continue;
					_0x145d74['prop']('type') == _0x50baf0(0x10a) &&
						(_0x303e91[_0x12b9f6] == 0x1 ||
						_0x303e91[_0x12b9f6] == _0x50baf0(0x109)
							? _0x145d74[_0x50baf0(0x153)]('checked', !![])
							: _0x145d74[_0x50baf0(0x153)](
									_0x50baf0(0x114),
									![],
							  )),
						_0x145d74[_0x50baf0(0x153)](_0x50baf0(0x110)) ==
							_0x50baf0(0x13a) &&
							_0x145d74[_0x50baf0(0x154)](_0x303e91[_0x12b9f6]),
						_0x145d74['prop'](_0x50baf0(0x110)) ==
							_0x50baf0(0x141) &&
							_0x145d74[_0x50baf0(0x154)](_0x303e91[_0x12b9f6]),
						_0x145d74[_0x50baf0(0x153)](_0x50baf0(0x110)) ==
							_0x50baf0(0x105) &&
							_0x145d74[_0x50baf0(0x154)](
								'#' + _0x303e91[_0x12b9f6],
							);
				}
			},
		);
}
$(document)[_0x5144f3(0x135)](function () {
	get_fantasy_vars();
});
