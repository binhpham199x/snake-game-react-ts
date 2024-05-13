export enum Direction {
	UP,
	DOWN,
	LEFT,
	RIGHT,
	NONE,
}

export function keyToDirection(key: string): Direction {
	let res: Direction;

	switch (key) {
		case "ArrowLeft":
			res = Direction.LEFT;
			break;
		case "ArrowUp":
			res = Direction.UP;
			break;
		case "ArrowRight":
			res = Direction.RIGHT;
			break;
		case "ArrowDown":
			res = Direction.DOWN;
			break;
		default:
			res = Direction.NONE;
			break;
	}

	return res;
}
