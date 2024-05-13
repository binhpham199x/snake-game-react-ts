import Game from "./snake-game/game";

interface Props {
	canvasId: string;
}

const Board = ({ canvasId }: Props) => {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	// const game = new Game(
	// 	windowWidth * 0.8,
	// 	windowHeight * 0.8,
	// 	windowHeight * 0.05,
	// 	canvasId,
	// 	0,
	// 	0
	// );

	// window.addEventListener("keydown", (event) => {

	//     event.key
	//     events.unshift(event);
	//     console.log(events);
	// });

	return <></>;
};

export default Board;
