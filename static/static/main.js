(function() {
	function closeAllBio() {
		document.querySelectorAll(".people .person").forEach(el => {
			el.classList.remove("open");
		});
	}

	document.querySelectorAll(".people .open-bio").forEach(el => {
		el.onclick = (e) => {
			e.preventDefault();
			closeAllBio();
			document.querySelector("#" + el.dataset.target).classList.add("open");
		};
	});

	document.querySelectorAll(".people .close-bio").forEach(el => {
		el.onclick = (e) => {
			e.preventDefault();
			closeAllBio();
		};
	});

	// Mobile burger menu.
	document.querySelector("#burger").onclick = (e) => {
		e.preventDefault();

		const f = document.querySelector(".header .nav");
		f.style.display = f.style.display === "block" ? "none" : "block";
	};

	// If there's a blog section, fetch the feed and render it.
	if(document.querySelector("#blog-entries")) {
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		fetch('/blog/feed/json')
			.then(response => response.json())
			.then(data => {
				const parent = document.querySelector("#blog-entries");

				// Clone the empty blog entry container.
				const entry = parent.querySelector(".entry");

				// Create copies of the entry node and fill with blog entry details.
				data.items.forEach(d => {
					let e = entry.cloneNode(true);
					e.querySelector('.url').setAttribute('href', d.url);
					e.querySelector('.url').innerText = d.title;
					e.querySelector('.description').innerText = d.content_text;

					const date = new Date(d.date_published);
					e.querySelector('.day').innerText = date.getDate();
					e.querySelector('.month').innerText = months[date.getMonth()] + ' ' + date.getFullYear();

					// Add the filled node to the parent.
					parent.appendChild(e);
				});

				// Remove the original empty template node.
				entry.remove();
			});
	}
})();