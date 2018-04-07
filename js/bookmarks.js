// var bookmarks = document.getElementById('bookmarks');

// function dumpBookmarks(query) {
//   var bookmarkTreeNodes = chrome.bookmarks.getTree(
//     function(bookmarkTreeNodes) {
//       el = document.createElement('li');
//       link = document.createElement('a');
//       link.href = bookmarkTreeNodes;
//       t = document.createTextNode(bookmarkTreeNodes.title);

//       link.appendChild(t);
//       el.appendChild(link);
//       bookmarks.appendChild(el);
//       dumpTreeNodes(bookmarkTreeNodes, query)
//     });
// }

// dumpBookmarks(chrome.bookmarks);
