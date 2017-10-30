angular.module("articleModule").constant("articles", {
	"electron": {
		date: "29/10/2017",
		title: "Electron adventures",
		caption: "Its been a bit quiet as of late so I've been playing with Github's Electron",
		image: "pics/electron-logo.png",
		body: "<p>Its been a bit quiet as of late so I've been playing with Github's <a href='https://electron.atom.io/'>Electron</a>. It looks to be a take on that Adobe Air thing that went around a few years back, essentally a system for housing and running a web app as a local desktop application. Its been a while since I've done desktop application development and its nice to know that I can very quickly adapt my web app development knowlege.</p><p>Now the general gist is that it is a node application that lets you do all the good stuff node lets you do (access to the local file system, etc) but it also spawns Chromium instances in windows for renderind and running the main application. </p><p>So as an experiment and because I have been plotting something like this for some time, I very quickly put together a rough demo of an image cataloging system. For the database I'm using <a href='https://pouchdb.com/'>PouchDB</a>, another technology I have been interested in. Mostly because its some more lovely CouchDB goodness.</p><p>Using PouchDB gives me the lovely option of replicating accross to a 'real' CouchDB database server at some point. Soulds like a nice way to synchronise between instances I think. Better than just using Dropbox.</p><p>Anyway, the application has kind of evolved slightly since that first rough one-day-build. Its still far from a release candidate but you can follow along the progress at the <a href='https://github.com/pyro-dragon/tagUrImg'>Github repo</a>. The appearance may look a little familier. I dumped in the base app used for this website as a way to get me started without having to build a full navigation and rendering framework. I'll probably explore better UI options down the line such as <a href='http://photonkit.com/'>Photon</a></p>",
		link: "electron"
	},
	"vegaryzen": {
		date: "24/09/2017",
		title: "Full AMD build",
		caption: "After many years I can finally go full AMD again!",
		image: "pics/amd-logo.png",
		body: "<p>After too many years I have finally been able to embrace my full AMD fanboy madness without facing the terrible ridicule of others. Maybe. AMD have now brought to the table both a set of CPUs and GPUs that are respectable. What's more is that they have healpfully created bundle deals for them too. </p><p>It was a little tricky to find one of these bundles in the UK but overclockers.co.uk did one and am quite pleased with the results so far. The motherboard even has cool glowing lights on it. I am all about cool glowing lights.</p><p>I did go for the slightly more expensive Radeon 64 RX, Ryzen 7 1800X deal but not the water-cooled one. The price-to-performance gain was just not great. This was in a way a budget upgrade. The only changes made were the bundle components. Hard drives, PSU, case, etc were all kept, althought I did take the oppotunity to take everything appart and clean it all down. The case especially; it has seen loyal service since 2010.</p><p>The first game threw at it was ARK: Survival Evolved. On my pervious setup I could only play this in 'potato mode', now I could jack up all the settings and see how it really should look and it was amazing. The framerates were so smooth. Beautiful. Next I tried GTA V on full graphical settings. The frame rates there were less than impressive. But then again it is a port, its not hugely efficiant. I think the best part about this new PC though is how quiet it is. I had to leave it on overnight for a few night to download games and it was so easy to leave it going and not notice it. Lets see how it holds up over the next year or so and see what games I can challenge it with</p>",
        link: "vegaryzen"
	},
	"briskoda2017": {
		date: "10/09/2017",
		title: "Briskoda National Meet 2017",
		caption: "This years anual meeting of the Briskoda Skoda owners forum.",
		image: "pics/briskoda.png",
		body: "<p>This was the first car enthisiasts meeting I've been to and it was a blast! The venue was the <a href='https://www.rafmuseum.org.uk/cosford/' title='Cosford RAF Museum'>Cosford RAF Museum</a> which was a fun drive to get to.</p><p>Two friends and I set of in a small convoy up the M5/M6 and braved the 30 mph speed restrictions on the Birmingham flyover. We arrived early, following a very obvious Briskodian into the compound and finding ourselved in the wrong car park. In a slightly larger convoy we set off to find the correct location on the second try.</p><p>There were a lot of fine looking motors there, some polished to perfection, others wearing their battle scars with pride. The highlights there were the 560bhp Skoda Supurb with the Greenline badge on the back and the 1989 Skoda Rapid with the rear mounted Rover engine conversion.</p><p>As an ameture detailer I took pride in seeing the admiering glances my motor received, especially being the only one in its colour there.</p><p>The only downside to the day was the wonderful british weather. While it was generous enough to save the rain until 3pm, the winds were wild and the tempreture took a nasty plunge. All in all though it was a great day, well run by the organisers. I even got a lovely new sticker for my rear window!</p>",
        link: "briskoda2017"
	},
	"render2017": {
		date: "2/04/2017",
		title: "Render 2017",
		caption: "I went to Render Conference 2017 recently and there was some really cool stuff, including laser Duck Hunt...",
		image: "",
		body: "<p>I went to Render Conference 2017 recently and there was some really cool stuff, including laser Duck Hunt. The conference was spread over two days and covered a wide range of web development, UX design and general engineering subjects. </p><p>The most interesting thing for me I feel was the talk on accessibility on the web. This is something that if very important and not given enough thought by enough people. There were some excellent points made about accessibility for those with cognitive disabilities as well as situational conditions where even an able-bodied person may not have full use of their faculties.</p>",
        link: "render2017"
	},
	"new_website": {
		date: "2/04/2017",
		title: "New website launch",
		caption: "New and improved personal website launched.",
		image: "",
		body: "This is the alpha of my new personal website. It is a huge improvement over the old one in both visual design and technology. It uses a lot of the things I have learned in the past 12 months and will act as a base for conducting future experiments in web design, UX and other webby things (Angular 4, React maybe???). Eventually I would like to use this as a template framework for my other sites, but that is a little bit off for now.",
        link: "new_website"
	},
	"tech_talk": {
		date: "05/04/2017",
		title: "Tech Talk",
		caption: "Modern Web Tools, Techniques & Technologies",
		image: "",
		body: "Today I presented a cross section of recent developments in web technologies to my colleagues. It was inspired by the things I saw at Render 2017 and I feel it provided some valuable information to help people think outside of the standard web technologies they have been using. I hope it has made some people think about some really cool things they can introduce to their current or future projects.",
        link: "tech_talk"
	}
});
