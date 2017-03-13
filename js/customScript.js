let taskId = 0;

window.onload = function() {
	let date = new Date();
	document.getElementById("inDate").textContent = date.getMonth() + "-" + date.getDate() + "-" + date.getFullYear();	
}

function add() {

	if (taskInput.value == "") {
		//don't add a blank note
	}
	else{
		taskId = taskId + 1;
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
	
	//Get styles and types for each element
	row.id = "row_" + taskId;// for row delete
	inpNode.type = "checkbox";
	inpNode.id = "checkBox_" + taskId;
	inpNode.onclick = function() { taskDone(inpNode.id); };
	delButton.id = "delButton_" + taskId;
	delButton.type = "button";
	delButton.onclick = function(){taskDelete(row.id);};// for row delete
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
	
	//clear input text box
	taskInput.value = "";	
	}
	
}

function taskDone(id){
	let checkElement = document.getElementById(id);
	let textElement = document.getElementById("text_" + id.split("_")[1]);
	
	if(checkElement.checked){
		textElement.style = "text-decoration: line-through";
	}else{
		textElement.style = "text-decoration: none";
	}	
}

function taskDelete(id) {
	let row = document.getElementById(id);
	row.parentNode.removeChild(row);
}

function sortCompleted() {
	var tbl, rows, i, j, k, done;
	tbl = document.getElementById('taskTable'); 
	done = false;
	rows = tbl.getElementsByTagName('TR');
	j = -1;
	k = rows.length-1;
	while(!done) {
		done = true;
		for(i = k; i > j; i--) {
			if( document.getElementById("checkBox_"+rows[i].id.split("_")[1]).checked ) {
				done = false;
				break;
			}
			else {
				k--;
			}
		}
		if(!done) {
			rows[i].parentNode.insertBefore(rows[i],rows[0]);
			j++;
		}

	}
}

function sortIncompleted() {
	var tbl, rows, i, j, k, done;
	tbl = document.getElementById('taskTable'); 
	done = false;
	rows = tbl.getElementsByTagName('TR');
	j = -1;
	k = rows.length-1;
	while(!done) {
		done = true;
		for(i = k; i > j; i--) {
			if( !document.getElementById("checkBox_"+rows[i].id.split("_")[1]).checked ) {
				done = false;
				break;
			}
			else {
				k--;
			}
		}
		if(!done) {
			rows[i].parentNode.insertBefore(rows[i],rows[0]);
			j++;
		}

	}
}

function sortDate() {
	var tbl, rows, i, j, k, done, switching;
	tbl = document.getElementById('taskTable'); 
	done = false;
	while(!done) {
		done = true;
		rows = tbl.getElementsByTagName('TR');
		for(i = 0; i < rows.length-1; i++) {
			j = rows[i].id;
			k = rows[i+1].id;
			if( j > k ) {
				done = false;
				break;
			}
		}
		if(!done) {
			rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
			j++;
		}

	}
}