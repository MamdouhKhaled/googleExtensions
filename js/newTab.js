var mostVisitedSection = document.getElementById('mostVisited');
chrome.topSites.get(function(Result){
	for(var i = 0; i < Result.length; i++){
		el = document.createElement('li');
		link = document.createElement('a');
		link.href = Result[i].url;
		t = document.createTextNode(Result[i].title);

		link.appendChild(t);
		el.appendChild(link);
		mostVisitedSection.appendChild(el);
		//console.log(Result[i].title);
	}
});
//read JSON File for fav Page
// var request = new XMLHttpRequest();
// request.open('GET', 'myFav.json');
// request.onload = function (){
// 	let data = JSON.parse(request.responseText);
// 	for(var i = 0; i < data.length; i++){
// 		el = document.createElement('li');
// 		link = document.createElement('a');
// 		link.href = data[i].url;
// 		t = document.createTextNode(data[i].title);

// 		link.appendChild(t);
// 		el.appendChild(link);
// 		mostVisitedSection.appendChild(el);
// 		//console.log(Result[i].title);
// 	}
// };
// request.send();
// var data1 = JSON.stringify({
// 	'title':'Google.....',
// 	'url':"sadasdasd"
// });
// localStorage.setItem('save', data1);
// console.log(localStorage);
// if (window.indexedDB) {
// 	console.log('asdasdas');
// }
