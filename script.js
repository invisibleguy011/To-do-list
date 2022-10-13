var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
		var li = document.createElement("li");
		var div = document.createElement("div");
		var deleteButton = document.createElement("button");
		div.classList.add("wrapper");
		ul.appendChild(div);
		div.append( li, deleteButton);
		li.classList.add("list")
		li.appendChild(document.createTextNode(input.value));
		input.value= "";
		deleteButton.classList.add("changeClass")
		deleteButton.innerHTML="Remove";
}

function inputLength() {
	return input.value.length;
}

function addAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addAfterKeypress(event) {
	if (inputLength() > 0 && event.which===13) {
		createListElement();
	}
}

function crossOut(task) {
	if (task.target.tagName === "LI") {
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "changeClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	crossOut(element);
	deleteListElement(element);
}


ul.addEventListener("click", handleUlClick)
button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterKeypress);

