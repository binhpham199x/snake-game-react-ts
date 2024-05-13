import Board from "./assets/components/Board";

function App() {
	const canvasId = "gameCanvas";

	return (
		<>
			<h1 className="text-3xl font-bold underline">
				Welcome to snake game!
			</h1>

			<canvas id={canvasId} />

			<Board canvasId={canvasId} />
		</>
	);
}

export default App;
