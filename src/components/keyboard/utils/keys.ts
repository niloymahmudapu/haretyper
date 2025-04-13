export const KEY_CODE = {
	Backquote: "Backquote",
	Digit1: "Digit1",
	Digit2: "Digit2",
	Digit3: "Digit3",
	Digit4: "Digit4",
	Digit5: "Digit5",
	Digit6: "Digit6",
	Digit7: "Digit7",
	Digit8: "Digit8",
	Digit9: "Digit9",
	Digit0: "Digit0",
	Minus: "Minus",
	Equal: "Equal",
	Backspace: "Backspace",

	Tab: "Tab",
	KeyQ: "KeyQ",
	KeyW: "KeyW",
	KeyE: "KeyE",
	KeyR: "KeyR",
	KeyT: "KeyT",
	KeyY: "KeyY",
	KeyU: "KeyU",
	KeyI: "KeyI",
	KeyO: "KeyO",
	KeyP: "KeyP",
	BracketLeft: "BracketLeft",
	BracketRight: "BracketRight",
	Backslash: "Backslash",

	CapsLock: "CapsLock",
	KeyA: "KeyA",
	KeyS: "KeyS",
	KeyD: "KeyD",
	KeyF: "KeyF",
	KeyG: "KeyG",
	KeyH: "KeyH",
	KeyJ: "KeyJ",
	KeyK: "KeyK",
	KeyL: "KeyL",
	Semicolon: "Semicolon",
	Quote: "Quote",
	Enter: "Enter",

	ShiftLeft: "ShiftLeft",
	KeyZ: "KeyZ",
	KeyX: "KeyX",
	KeyC: "KeyC",
	KeyV: "KeyV",
	KeyB: "KeyB",
	KeyN: "KeyN",
	KeyM: "KeyM",
	Comma: "Comma",
	Period: "Period",
	Slash: "Slash",
	ShiftRight: "ShiftRight",

	ControlLeft: "ControlLeft",
	MetaLeft: "MetaLeft",
	AltLeft: "AltLeft",
	Space: "Space",
	AltRight: "AltRight",
	Fn: "Fn",
	ContextMenu: "ContextMenu",
	ControlRight: "ControlRight",
};

export const FINGER_COLOR = {
	thumb: ["#003f24"+"bb", "#003f24"+"bb"],
	index: ["#01172b"+"bb", "#01172b"+"cc"],
	middle: ["#062100"+"bb", "#062100"+"bb"],
	ring: ["#380801"+"bb", "#380801"+"bb"],
	little: ["#21063d"+"bb", "#21063d"+"bb"],
};

export const KEYS = {
	[KEY_CODE.Backquote]: {
		char: ["`", "~"],
		color: FINGER_COLOR.little[0],
	},
	[KEY_CODE.Digit1]: {
		char: ["1", "!"],
		color: FINGER_COLOR.little[0],
	},
	[KEY_CODE.Digit2]: {
		char: ["2", "@"],
		color: FINGER_COLOR.ring[0],
	},
	[KEY_CODE.Digit3]: {
		char: ["3", "#"],
		color: FINGER_COLOR.middle[0],
	},
	[KEY_CODE.Digit4]: {
		char: ["4", "$"],
		color: FINGER_COLOR.index[0],
	},
	[KEY_CODE.Digit5]: {
		char: ["5", "%"],
		color: FINGER_COLOR.index[0],
	},
	[KEY_CODE.Digit6]: {
		char: ["6", "^"],
		color: FINGER_COLOR.index[1],
	},
	[KEY_CODE.Digit7]: {
		char: ["7", "&"],
		color: FINGER_COLOR.index[1],
	},
	[KEY_CODE.Digit8]: {
		char: ["8", "*"],
		color: FINGER_COLOR.middle[1],
	},
	[KEY_CODE.Digit9]: {
		char: ["9", "("],
		color: FINGER_COLOR.ring[1],
	},
	[KEY_CODE.Digit0]: {
		char: ["0", ")"],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.Minus]: {
		char: ["-", "_"],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.Equal]: {
		char: ["=", "+"],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.Backspace]: {
		char: ["Backspace", "Backspace"],
		color: FINGER_COLOR.little[1],
	},

	[KEY_CODE.Tab]: {
		char: ["Tab", "Tab"],
		color: FINGER_COLOR.little[0],
	},
	[KEY_CODE.KeyQ]: {
		char: ["q", "Q"],
		color: FINGER_COLOR.little[0],
	},
	[KEY_CODE.KeyW]: {
		char: ["w", "W"],
		color: FINGER_COLOR.ring[0],
	},
	[KEY_CODE.KeyE]: {
		char: ["e", "E"],
		color: FINGER_COLOR.middle[0],
	},
	[KEY_CODE.KeyR]: {
		char: ["r", "R"],
		color: FINGER_COLOR.index[0],
	},
	[KEY_CODE.KeyT]: {
		char: ["t", "T"],
		color: FINGER_COLOR.index[0],
	},
	[KEY_CODE.KeyY]: {
		char: ["y", "Y"],
		color: FINGER_COLOR.index[1],
	},
	[KEY_CODE.KeyU]: {
		char: ["u", "U"],
		color: FINGER_COLOR.index[1],
	},
	[KEY_CODE.KeyI]: {
		char: ["i", "I"],
		color: FINGER_COLOR.middle[1],
	},
	[KEY_CODE.KeyO]: {
		char: ["o", "O"],
		color: FINGER_COLOR.ring[1],
	},
	[KEY_CODE.KeyP]: {
		char: ["p", "P"],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.BracketLeft]: {
		char: ["[", "{"],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.BracketRight]: {
		char: ["]", "}"],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.Backslash]: {
		char: ["\\", "|"],
		color: FINGER_COLOR.little[1],
	},

	[KEY_CODE.CapsLock]: {
		char: ["Caps", "Caps"],
		color: FINGER_COLOR.little[0],
	},
	[KEY_CODE.KeyA]: {
		char: ["a", "A"],
		color: FINGER_COLOR.little[0],
	},
	[KEY_CODE.KeyS]: {
		char: ["s", "S"],
		color: FINGER_COLOR.ring[0],
	},
	[KEY_CODE.KeyD]: {
		char: ["d", "D"],
		color: FINGER_COLOR.middle[0],
	},
	[KEY_CODE.KeyF]: {
		char: ["f", "F"],
		color: FINGER_COLOR.index[0],
	},
	[KEY_CODE.KeyG]: {
		char: ["g", "G"],
		color: FINGER_COLOR.index[0],
	},
	[KEY_CODE.KeyH]: {
		char: ["h", "H"],
		color: FINGER_COLOR.index[1],
	},
	[KEY_CODE.KeyJ]: {
		char: ["j", "J"],
		color: FINGER_COLOR.index[1],
	},
	[KEY_CODE.KeyK]: {
		char: ["k", "K"],
		color: FINGER_COLOR.middle[1],
	},
	[KEY_CODE.KeyL]: {
		char: ["l", "L"],
		color: FINGER_COLOR.ring[1],
	},
	[KEY_CODE.Semicolon]: {
		char: [";", ":"],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.Quote]: {
		char: ["'", '"'],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.Enter]: {
		char: ["Enter", "Enter"],
		color: FINGER_COLOR.little[1],
	},

	[KEY_CODE.ShiftLeft]: {
		char: ["Shift", "Shift"],
		color: FINGER_COLOR.little[0],
	},
	[KEY_CODE.KeyZ]: {
		char: ["z", "Z"],
		color: FINGER_COLOR.little[0],
	},
	[KEY_CODE.KeyX]: {
		char: ["x", "X"],
		color: FINGER_COLOR.ring[0],
	},
	[KEY_CODE.KeyC]: {
		char: ["c", "C"],
		color: FINGER_COLOR.middle[0],
	},
	[KEY_CODE.KeyV]: {
		char: ["v", "V"],
		color: FINGER_COLOR.index[0],
	},
	[KEY_CODE.KeyB]: {
		char: ["b", "B"],
		color: FINGER_COLOR.index[0],
	},
	[KEY_CODE.KeyN]: {
		char: ["n", "N"],
		color: FINGER_COLOR.index[1],
	},
	[KEY_CODE.KeyM]: {
		char: ["m", "M"],
		color: FINGER_COLOR.index[1],
	},
	[KEY_CODE.Comma]: {
		char: [",", "<"],
		color: FINGER_COLOR.middle[1],
	},
	[KEY_CODE.Period]: {
		char: [".", ">"],
		color: FINGER_COLOR.ring[1],
	},
	[KEY_CODE.Slash]: {
		char: ["/", "?"],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.ShiftRight]: {
		char: ["Shift", "Shift"],
		color: FINGER_COLOR.little[1],
	},

	[KEY_CODE.ControlLeft]: {
		char: ["Ctrl", "Ctrl"],
		color: FINGER_COLOR.little[0],
	},
	[KEY_CODE.MetaLeft]: {
		char: ["Win", "Win"],
		color: FINGER_COLOR.little[0],
	},
	[KEY_CODE.AltLeft]: {
		char: ["Alt", "Alt"],
		color: FINGER_COLOR.thumb[0],
	},
	[KEY_CODE.Space]: {
		char: [" ", " "],
		color: FINGER_COLOR.thumb[1],
	},
	[KEY_CODE.AltRight]: {
		char: ["Alt", "Alt"],
		color: FINGER_COLOR.thumb[1],
	},
	[KEY_CODE.Fn]: {
		char: ["Fn", "Fn"],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.ContextMenu]: {
		char: ["Menu", "Menu"],
		color: FINGER_COLOR.little[1],
	},
	[KEY_CODE.ControlRight]: {
		char: ["Ctrl", "Ctrl"],
		color: FINGER_COLOR.little[1],
	},
};
