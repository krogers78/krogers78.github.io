var xhr = new XMLHttpRequest;

xhr.onload = function() {
	//if (xhr.status === 200) {
		// process response
		var responseObject = JSON.parse(xhr.responseText);

		//populate the news section
		var newsArticles = document.querySelectorAll('#news article');
		if (newsArticles) {
			for (var i = 0; i < newsArticles.length; i++) {
				newsArticles[i].querySelector('h3').innerHTML = responseObject.news[i].title;
				newsArticles[i].querySelector('time').innerHTML = responseObject.news[i].postDate;
				newsArticles[i].querySelector('time').dateTime = responseObject.news[i].postDate;
			}
		}
		//populate the tour dates section
		var tourDates = document.querySelectorAll('#tourDates tbody tr');
		if (tourDates) {
			for (var i = 0; i < tourDates.length; i++) {
				tourDates[i].querySelector('time').innerHTML = responseObject.events[i].date;
				tourDates[i].querySelector('time').dateTime = responseObject.events[i].date;
				tourDates[i].querySelectorAll('td')[1].innerHTML = responseObject.events[i].venue;
				tourDates[i].querySelectorAll('td')[2].innerHTML = `${responseObject.events[i].city}, ${responseObject.events[i].state}`;
				tourDates[i].querySelectorAll('a')[0].href = responseObject.events[i].locationURL;
				tourDates[i].querySelectorAll('a')[1].href = responseObject.events[i].ticketsURL;
			}
		}
		//populate the about section
		var aboutSection = document.querySelector('#about');
		if (aboutSection) {
				aboutSection.querySelectorAll('p')[0].innerHTML = responseObject.about.quote;
				aboutSection.querySelectorAll('p')[1].innerHTML = responseObject.about.copy;
		}
		//populate the band member images
		var bandMembers = document.querySelectorAll('#bandMembers li');
		if (bandMembers) {
			for (var i = 0; i < bandMembers.length; i++) {
				bandMembers[i].querySelector('img').src = responseObject.members[i].imageURL;
				bandMembers[i].querySelector('img').alt = `${responseObject.members[i].firstname} ${responseObject.members[i].lastname}`;
			}
		}
	//}
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);
