var moreNews = document.querySelector('#viewMore');

function addNews(e) {
  var xhr = new XMLHttpRequest;

  xhr.onload = function() {
    var responseObject = JSON.parse(xhr.responseText);

    var theNewNews = document.querySelector('#viewMore');
		if (theNewNews) {
			var newsString = `<article>
											<h3>${responseObject.news[0].title}</h3>
											<p><time datetime="${responseObject.news[0].postDate}">${responseObject.news[0].postDate}</time></p>
											<p>${responseObject.news[0].text}</p>
									</article>`;
			theNewNews.insertAdjacentHTML('beforeBegin', newsString);
		}
  };
  xhr.open('GET', 'data/data.json', true);
  xhr.send(null);
}

moreNews.addEventListener('click', addNews, false);
