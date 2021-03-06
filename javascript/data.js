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
				newsArticles[i].querySelector('img').src = responseObject.news[i].imageURL;
			}
		}
		//populate the tour dates section
		var monthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		var monthNotAbbr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var tourDates = document.querySelectorAll('#tourDates tbody tr');
		if (tourDates) {
			for (var i = 0; i < tourDates.length; i++) {
				//Convert the date into a Date object to change the format
				var d = new Date(responseObject.events[i].date);

				var monthId = d.getMonth();

				// tourDates[i].querySelector('time').innerHTML = `<abbr title=\"`
				tourDates[i].querySelector('time').innerHTML = `<abbr title="${monthNotAbbr[monthId]}">${monthAbbr[d.getMonth()]}</abbr> ${d.getUTCDate()}`;
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

		var newsArticles = document.querySelectorAll('#bandNews article');
		if (newsArticles) {
			for (var i = 0; i < newsArticles.length; i++) {
				newsArticles[i].querySelector('h3').innerHTML = responseObject.news[i].title;
				// newsArticles[i].querySelector('img').src = responseObject.news[i].imageURL;
				newsArticles[i].querySelector('time').innerHTML = responseObject.news[i].postDate;
				newsArticles[i].querySelector('time').dateTime = responseObject.news[i].postDate;
				newsArticles[i].querySelectorAll('p')[1].innerHTML = responseObject.news[i].text;
			}
		}

		var theBand = document.querySelectorAll('#aboutMembers dl');
		if (theBand) {
			for (var i = 0; i < theBand.length; i++) {
				theBand[i].querySelector('img').src = responseObject.members[i].imageURL;
				theBand[i].querySelectorAll('dd')[1].innerHTML = responseObject.members[i].instrument;
				theBand[i].querySelector('dt').innerHTML = `${responseObject.members[i].firstname} ${responseObject.members[i].lastname}`;


			}
		}


	//}
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);
