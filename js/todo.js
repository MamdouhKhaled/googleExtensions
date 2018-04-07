(function () {
  var list  =  (window.localStorage.todoList != "") ? JSON.parse(window.localStorage.todoList): [] ;
  var form  = document.querySelector(".addTask form");
  var input  = document.querySelector("#item");
  var item = document.querySelector('.item');
  function store() {
    window.localStorage.setItem( "todoList", JSON.stringify(list) ); // save list as json in localStorage
  }

  function showList() {
    for (var i = 0; i < list.length; i++) {
      var li = document.createElement('li');
      li.innerHTML = list[i].title;
      li.dataset.date = list[i].date;
      item.appendChild(li);
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value == "") {
      return false;
    }
    var save = {
      title : input.value,
      date : 55555,
      state: null
    };
    input.value = null;
    var li = document.createElement('li');
    li.innerHTML = save.title;
    item.appendChild(li);
    list.push(save);
    store();
  });
  showList();
})();
