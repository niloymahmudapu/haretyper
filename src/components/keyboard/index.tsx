import { useEffect, useState } from "react";
import { KEY_CODE, KEYS } from "./utils/keys";

const keyboard = {
	color: {
		bg: "#555",
		txt: {
			color: "#bbb",
			bg: "#333",
			highlightBg: "#72610a",
		},
	},
	size: {
		width: 1200,
		height: 300,
	},
	radius: {
		bg: 8,
		txt: 4,
	},
};

const keyRows = [
	// Row 1
	[
		{ keyCode: KEY_CODE.Backquote },
		{ keyCode: KEY_CODE.Digit1 },
		{ keyCode: KEY_CODE.Digit2 },
		{ keyCode: KEY_CODE.Digit3 },
		{ keyCode: KEY_CODE.Digit4 },
		{ keyCode: KEY_CODE.Digit5 },
		{ keyCode: KEY_CODE.Digit6 },
		{ keyCode: KEY_CODE.Digit7 },
		{ keyCode: KEY_CODE.Digit8 },
		{ keyCode: KEY_CODE.Digit9 },
		{ keyCode: KEY_CODE.Digit0 },
		{ keyCode: KEY_CODE.Minus },
		{ keyCode: KEY_CODE.Equal },
		{ keyCode: KEY_CODE.Backspace, scale: 2 },
	],

	// Row 2
	[
		{ keyCode: KEY_CODE.Tab, scale: 1.5 },
		{ keyCode: KEY_CODE.KeyQ },
		{ keyCode: KEY_CODE.KeyW },
		{ keyCode: KEY_CODE.KeyE },
		{ keyCode: KEY_CODE.KeyR },
		{ keyCode: KEY_CODE.KeyT },
		{ keyCode: KEY_CODE.KeyY },
		{ keyCode: KEY_CODE.KeyU },
		{ keyCode: KEY_CODE.KeyI },
		{ keyCode: KEY_CODE.KeyO },
		{ keyCode: KEY_CODE.KeyP },
		{ keyCode: KEY_CODE.BracketLeft },
		{ keyCode: KEY_CODE.BracketRight },
		{ keyCode: KEY_CODE.Backslash, scale: 1.5 },
	],

	// Row 3
	[
		{ keyCode: KEY_CODE.CapsLock, scale: 1.75 },
		{ keyCode: KEY_CODE.KeyA },
		{ keyCode: KEY_CODE.KeyS },
		{ keyCode: KEY_CODE.KeyD },
		{ keyCode: KEY_CODE.KeyF },
		{ keyCode: KEY_CODE.KeyG },
		{ keyCode: KEY_CODE.KeyH },
		{ keyCode: KEY_CODE.KeyJ },
		{ keyCode: KEY_CODE.KeyK },
		{ keyCode: KEY_CODE.KeyL },
		{ keyCode: KEY_CODE.Semicolon },
		{ keyCode: KEY_CODE.Quote },
		{ keyCode: KEY_CODE.Enter, scale: 2.25 },
	],

	// Row 4
	[
		{ keyCode: KEY_CODE.ShiftLeft, scale: 2.25 },
		{ keyCode: KEY_CODE.KeyZ },
		{ keyCode: KEY_CODE.KeyX },
		{ keyCode: KEY_CODE.KeyC },
		{ keyCode: KEY_CODE.KeyV },
		{ keyCode: KEY_CODE.KeyB },
		{ keyCode: KEY_CODE.KeyN },
		{ keyCode: KEY_CODE.KeyM },
		{ keyCode: KEY_CODE.Comma },
		{ keyCode: KEY_CODE.Period },
		{ keyCode: KEY_CODE.Slash },
		{ keyCode: KEY_CODE.ShiftRight, scale: 2.75 },
	],

	// Row 5
	[
		{ keyCode: KEY_CODE.ControlLeft, scale: 1.25 },
		{ keyCode: KEY_CODE.MetaLeft, scale: 1.25 },
		{ keyCode: KEY_CODE.AltLeft, scale: 1.25 },
		{ keyCode: KEY_CODE.Space, scale: 6.25 },
		{ keyCode: KEY_CODE.AltRight, scale: 1.25 },
		{ keyCode: KEY_CODE.Fn, scale: 1.25 },
		{ keyCode: KEY_CODE.ContextMenu, scale: 1.25 },
		{ keyCode: KEY_CODE.ControlRight, scale: 1.25 },
	],
];

type Props = {
	onKeyPress?: (keyCode: string) => void;
};

export default function Keyboard({ onKeyPress }: Props) {
	const [keyColors, setKeyColors] = useState<Record<string, string | undefined>>({});
	const [shift, setShift] = useState(false);
	const padding = 5;

	let keys: {
		keyCode: string;
		x: number;
		y: number;
		width: number;
		height: number;
	}[] = [];

	const totalRows = keyRows.length;
	const totalVerticalPadding = (totalRows + 1) * padding;
	const availableHeight = keyboard.size.height - totalVerticalPadding;
	const rowHeight = availableHeight / totalRows;

	keyRows.forEach((row, rowIndex) => {
		let x = padding;
		const y = padding + rowIndex * (rowHeight + padding);

		// Step 1: Total scale sum for the row
		const totalScale = row.reduce((sum, key) => sum + (key.scale ?? 1), 0);
		const totalHorizontalPadding = (row.length + 1) * padding;
		const availableWidth = keyboard.size.width - totalHorizontalPadding;

		row.forEach((key) => {
			const scale = key.scale ?? 1;
			const width = (scale / totalScale) * availableWidth;
			keys.push({
				keyCode: key.keyCode,
				x,
				y,
				width,
				height: rowHeight,
			});
			x += width + padding;
		});
	});

	const setActiveKeyColor = (keyCode: string, active = true) => {
		setKeyColors((keyColors) => ({ ...keyColors, [keyCode]: active ? keyboard.color.txt.highlightBg : undefined }));
	};

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			setActiveKeyColor(e.code);
			if (e.code === KEY_CODE.ShiftLeft || e.code === KEY_CODE.ShiftRight) {
				setShift(true);
			}
		};

		const onKeyUp = (e: KeyboardEvent) => {
			setActiveKeyColor(e.code, false);
			if (e.code === KEY_CODE.ShiftLeft || e.code === KEY_CODE.ShiftRight) {
				setShift(false);
			}
		};

		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);

		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
		};
	}, []);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${keyboard.size.width} ${keyboard.size.height}`}
			width="100%"
			preserveAspectRatio="xMidYMid meet"
			style={{
				userSelect: "none",
			}}
		>
			<rect width={`100%`} height={`100%`} fill={keyboard.color.bg} rx={keyboard.radius.bg} ry={keyboard.radius.bg} />
			{keys.map(({ keyCode, x, y, width, height }) => {
				return (
					<Keyboard.Key
						key={keyCode}
						{...{
							txt: KEYS[keyCode].char[Number(shift)],
							x,
							y,
							width,
							height,
							radius: keyboard.radius.txt,
							color: keyboard.color.txt.color,
							bg: keyColors[keyCode] || KEYS[keyCode].color,
							onClick: () => onKeyPress?.(keyCode),
							onMouseEnter: () => setActiveKeyColor(keyCode),
							onMouseLeave: () => setActiveKeyColor(keyCode, false),
						}}
					/>
				);
			})}
		</svg>
	);
}

type KeyProps = {
	x: number;
	y: number;
	width: number;
	height: number;
	radius: number;
	txt: string;
	color: string;
	bg: string;
	onClick?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

Keyboard.Key = ({ x, y, width, height, radius, txt, color, bg, onClick, onMouseEnter, onMouseLeave }: KeyProps) => {
	return (
		<>
			<rect
				x={x}
				y={y}
				width={width}
				height={height}
				fill={bg}
				rx={radius}
				ry={radius}
				style={{
					cursor: "pointer",
				}}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			/>
			<text
				x={x + width / 2}
				y={y + height / 2}
				fill={color}
				textAnchor="middle"
				dominantBaseline={"middle"}
				fontSize={20}
				fontWeight={600}
				style={{
					cursor: "pointer",
				}}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{txt}
			</text>
		</>
	);
};
