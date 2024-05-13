class Apple {
	constructor(
		private _unitSize: number,
		private _color: string,
		private _x: number,
		private _y: number
	) {}

	get y(): number {
		return this._y;
	}
	get x(): number {
		return this._x;
	}
	get color(): string {
		return this._color;
	}
	get unitSize(): number {
		return this._unitSize;
	}
}

export default Apple;
