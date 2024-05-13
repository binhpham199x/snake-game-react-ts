import Cell from "./cell";
import { Direction } from "./directions";

class Snake {
	private _direction: Direction = Direction.DOWN;
	private _snakeTail: Cell[] = [];

	constructor(x: number, y: number, private _unitSize: number) {
		this._snakeTail.push(new Cell(x, y));
	}

	public get snakeTail(): Cell[] {
		return this._snakeTail;
	}


	move(): void {
		let newRect: Cell;

		switch (this._direction) {
			case Direction.RIGHT:
				newRect = new Cell(
					this._snakeTail[0].x + this._unitSize,
					this._snakeTail[0].y
				);
				break;

			case Direction.UP:
				newRect = new Cell(
					this._snakeTail[0].x,
					this._snakeTail[0].y - this._unitSize
				);
				break;

			case Direction.DOWN:
				newRect = new Cell(
					this._snakeTail[0].x,
					this._snakeTail[0].y + this._unitSize
				);
				break;

			case Direction.LEFT:
				newRect = new Cell(
					this._snakeTail[0].x - this._unitSize,
					this._snakeTail[0].y
				);
				break;

			default:
				newRect = this._snakeTail[0];
				break;
		}

		this._snakeTail.pop();
		this._snakeTail.unshift(newRect);
	}

	turnLeft(): void {
		if (this._direction != Direction.RIGHT) {
			this._direction = Direction.LEFT;
		}
	}
	turnRight(): void {
		if (this._direction != Direction.LEFT) {
			this._direction = Direction.RIGHT;
		}
	}
	turnUp(): void {
		if (this._direction != Direction.DOWN) {
			this._direction = Direction.UP;
		}
	}
	turnDown(): void {
		if (this._direction != Direction.UP) {
			this._direction = Direction.DOWN;
		}
	}
}

export default Snake;
