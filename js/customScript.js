window.onload = function() {
	let date = new Date();
	document.getElementById("inDate").textContent = date.getMonth() + "-" + date.getDate() + "-" + date.getFullYear();
	
}