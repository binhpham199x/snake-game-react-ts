class Cell {
    
    
	constructor(private _x: number, private _y: number) {}

	get x(): number {
		return this._x;
	}

	get y(): number {
		return this._y;
	}
    set x(value: number) {
        this._x = value;
    }
    set y(value: number) {
        this._y = value;
    }

    
}

export default Cell;
