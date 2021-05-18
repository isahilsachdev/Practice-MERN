let list = document.getElementById('infinite-scroll');

next = 1;
var loadMore = function () {
  for (var i = 0; i < 25; i++) {
    var item = document.createElement('li');
    item.innerText = 'Item ' + next++;
    list.appendChild(item);
  }
};

// Detect when scrolled to bottom.
list.addEventListener('scroll', function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    loadMore();
  }
});

// Initially load some items.
loadMore();
