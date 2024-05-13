import { useEffect } from "react";
import Game from "./snake-game/game";

const Board = () => {
	const canvasId = "gameCanvas";

	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
    
    // const game = new Game(
    //     windowWidth * 0.8,
    //     windowHeight * 0.8,
    //     windowHeight * 0.05,
    //     canvasId,
    //     0,
    //     0
    // );
	
	// window.addEventListener("keydown", (event) => {

	//     event.key
	//     events.unshift(event);
	//     console.log(events);
	// });

	return <canvas className="center" id={canvasId}></canvas>;
};

export default Board;
