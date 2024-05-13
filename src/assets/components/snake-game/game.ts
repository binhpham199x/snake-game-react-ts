import Apple from "./apple";
import Cell from "./cell";
import Snake from "./snake";

class Game {
	private _canvas: HTMLCanvasElement;
	private _canvasContext: CanvasRenderingContext2D;
	private _snake: Snake;
	private _apple: Apple;
	private _hasApple: boolean = false;
	private _isGameRunning: boolean = false;

	constructor(
		private _canvasWidth: number,
		private _canvasHeight: number,
		private _unitSize: number,
		gameCanvasId: string,
		snakePosX: number,
		snakePosY: number,
		private _appleColor: string = "red",
		private _boardColor: string = "black",
        private _snakeColor: string = "white"
	) {
		this._canvasWidth = Math.floor(_canvasWidth / _unitSize) * _unitSize;
		this._canvasHeight = Math.floor(_canvasHeight / _unitSize) * _unitSize;

		this._canvas = document.getElementById(
			gameCanvasId
		) as HTMLCanvasElement;

		this._canvasContext = this._canvas.getContext(
			"2d"
		) as CanvasRenderingContext2D;

		this._snake = new Snake(snakePosX, snakePosY, _unitSize);
		this._apple = this.createNewApple();
	}

	drawRect(
		x: number,
		y: number,
		width: number,
		height: number,
		color: string
	): void {
		this._canvasContext.fillStyle = color;
		this._canvasContext.fillRect(x, y, width, height);
	}

	createNewApple(): Apple {
		let checkSnake = true;
		let appleX: number;
		let appleY: number;

		let apple: Apple = new Apple(this._unitSize, this._appleColor, 0, 0);

		while (checkSnake) {
			appleX =
				Math.floor(
					(Math.random() * this._canvasHeight) / this._unitSize
				) * this._unitSize;
			appleY =
				Math.floor(
					(Math.random() * this._canvasWidth) / this._unitSize
				) * this._unitSize;

			apple = new Apple(this._unitSize, this._appleColor, appleX, appleY);

			for (let i = 0; i < this._snake.snakeTail.length; ++i) {
				if (
					this._apple.x == this._snake.snakeTail[i].x &&
					this._apple.y == this._snake.snakeTail[i].y
				) {
					checkSnake = true;
					break;
				} else {
					checkSnake = false;
				}
			}
		}

		return apple;
	}

	checkApple(): void {
		if (this._hasApple == false) {
			this._hasApple = true;
			this._apple = this.createNewApple();
		}
	}
	checkHitCanvasBorder(): void {
		const snakeHead = this._snake.snakeTail[0];

		if (snakeHead.x == -this._unitSize) {
			snakeHead.x = this._canvasWidth - this._unitSize;
		} else if (snakeHead.x == this._canvasWidth) {
			snakeHead.x = 0;
		} else if (snakeHead.y == -this._unitSize) {
			snakeHead.y = this._canvasHeight - this._unitSize;
		} else if (snakeHead.y == this._canvasHeight) {
			snakeHead.y = 0;
		}
	}

	checkHeadHitTail(): void {
		const snakeHead = this._snake.snakeTail[0];
		const snakeBody = this._snake.snakeTail;

		for (let i = 1; i < this._snake.snakeTail.length; ++i) {
			if (
				snakeHead.x == snakeBody[i].x &&
				snakeHead.y == snakeBody[i].y
			) {
				this._isGameRunning = false;
				console.log("GAME OVER");
			}
		}
	}

	checkAppleEaten(): void {
		if (
			this._snake.snakeTail[0].x == this._apple.x &&
			this._snake.snakeTail[0].y == this._apple.y
		) {
			this._snake.snakeTail[this._snake.snakeTail.length] = new Cell(
				this._apple.x,
				this._apple.y
			);
			this._hasApple = false;
		}
	}

	update(): void {
		if (this._isGameRunning == false) return;

		this._canvasContext.clearRect(
			0,
			0,
			this._canvasWidth,
			this._canvasHeight
		);
		this.checkApple();
		this._snake.move();
		this.checkHeadHitTail();
		this.checkAppleEaten();
		this.checkHitCanvasBorder();
	}

    start(): void {
        this._isGameRunning = true;
    }

    stop(): void {
        this._isGameRunning = false;
    }

	draw(): void {
		if (this._isGameRunning == false) return;

		// draw canvas background
		this.drawRect(
			0,
			0,
			this._canvas.width,
			this._canvas.height,
			this._boardColor
		);
		// draw _snake
		for (let i = 0; i < this._snake.snakeTail.length; ++i) {
			const x = this._snake.snakeTail[i].x;
			const y = this._snake.snakeTail[i].y;

			this.drawRect(
				x,
				y,
				this._unitSize - 1,
				this._unitSize - 1,
				this._snakeColor
			);
		}
		// draw score
		this._canvasContext.font = "20px Arial";
		this._canvasContext.fillStyle = "#00FF42";
		this._canvasContext.fillText(
			"Score: " + (this._snake.snakeTail.length - 1),
			this._canvas.width - 120,
			20
		);
		// draw _apple
		this.drawRect(
			this._apple.x,
			this._apple.y,
			this._apple.unitSize,
			this._apple.unitSize,
			this._apple.color
		);
	}

	show() {
		this.update(); // update the data of all objects in gameplay after 1 frame
		this.draw(); // draw objects with new data on canvas
	}
}

export default Game;
