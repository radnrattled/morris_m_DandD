(() => {
	// set up the puzzle pieces and boards
	const navButtons = document.querySelectorAll('#buttonHolder img'),
				puzzleBoard = document.querySelector('.puzzle-board'),
				puzzlePiece = document.querySelectorAll('.puzzle-image');

	const pieces = ["topLeft", "topRight","bottomLeft", "bottomRight"];
function changeImageSet() {
	//debugger;
	pieces.forEach((piece, index) => puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`);
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`
}

navButtons.forEach(button => button.addEventListener('click', changeImageSet))

})();
