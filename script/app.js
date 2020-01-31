(() => {
	// set up the puzzle pieces and boards
	const navButtons = document.querySelectorAll('#buttonHolder img'),
				puzzlePiece = document.querySelectorAll('.puzzle-image');
				dropZones = document.querySelectorAll('.drop-zone');
				puzzleBoard = document.querySelector('.puzzle-board');

	const pieces = ["topLeft", "topRight","bottomLeft", "bottomRight"];

function changeImageSet() {
	//debugger;
	pieces.forEach((piece, index) => {
		puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`;
		puzzlePiece[index].id=`${piece + this.dataset.puzzleindex}`;
	});
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`

	// add an id to the image

}

function dragstart(event) {
	console.log('started a drag');
	// capture the id of the eelement we are dragging
	//the dataTransfer object is to temp store data you can retrive and use later(like an audio track)
	event.dataTransfer.setData("text/plain", this.id);
}

function allowDragOver(event) {
	event.preventDefault();
	console.log('you dragged something in me!');
}

function allowDrop(event) {
	console.log('you dropped me!');

	let currentPiece = event.dataTransfer.getData("text/plain");

	event.target.appendChild(document.querySelector(`#${currentPiece}`));
}


navButtons.forEach(button => button.addEventListener('click', changeImageSet));


//dragEvent
puzzlePiece.forEach(piece => piece.addEventListener('dragstart', dragstart))

// set up drag over event
dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));

changeImageSet.call(navButtons[0]);
})();
