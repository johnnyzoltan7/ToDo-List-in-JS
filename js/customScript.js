let taskId = 0;

window.onload = function() {
	let date = new Date();
	document.getElementById("inDate").textContent = date.getMonth() + "-" + date.getDate() + "-" + date.getFullYear();
	
}

function add() {
	//let userInput = getElementById().textContent;
	//Get table elements
	let taskTable = document.getElementById("taskTable");
	let taskInput = document.getElementById("taskInput");	
	let row = document.createElement("tr");
	let column1 = document.createElement("th");
	let column2 = document.createElement("th");
	let column3 = document.createElement("th");
	let inText = document.createTextNode(taskInput.value);
	let delButton = document.createElement("button");
	let deleteText = document.createTextNode("delete");
	let inpNode = document.createElement("input");
	
	taskId = taskId + 1;
	//Get styles and types for each element
	inpNode.type = "checkbox";
	inpNode.id = "checkBox_" + taskId;
	delButton.id = "delButton_" + taskId;
	delButton.type = "button";
	column2.id = "text_" + taskId;
	
	//Start attaching each element from bottom up
	column1.appendChild(inpNode);
	column2.appendChild(inText);
	delButton.appendChild(deleteText);
	column3.appendChild(delButton);	
	row.appendChild(column1);
	row.appendChild(column2);
	row.appendChild(column3);
	taskTable.appendChild(row);
}

function taskDone(id){
	let done = document.getElementById(id);
	
	
}