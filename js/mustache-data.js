var Templates={
		schedulePage:'<h1>{{Title}}</h1>\
				<div>{{Time}} - {{Catagory}}</div>\
				<div style="text-align:right"><a onclick="setLocation(\'{{Location}}\')">Tap to show on map</a></div>\
				<h2> Speakers: </h2><br>\
				<div>\
					<ul data-role="listview"> \
						{{#Speakers}} \
						<li><a href="#speakers" onclick="showSpeaker({{id}})">{{name}}</a></li> \
						{{/Speakers}} \
					</ul> \
				</div><br>\
				<h2>Description:</h2> \
				<p>{{Description}}</p> \
				',
		scheduleItem:'<ul data-role="listview"> \
				{{#Events}}\
				<li><a onclick="setSchedulePage({{id}})"><h1>{{Title}}</h1>\
				<div><p>{{Time}} - {{Catagory}}</p></div>\
				</a>\
				</li>\
				{{/Events}}\</ul>\
				',
		boothPage:'<h1>{{Title}}</h1>\
				<div>{{Catagory}} - {{Orginizaion}}</div>\
				<div style="text-align:right"><a onclick="setLocation(\'{{Location}}\')">Tap to show on map</a></div>\
				<h2>Description:</h2> \
				<p>{{Description}}</p> \
				',
		boothItem:'<ul data-role="listview"> \
				{{#Booths}}\
				<li><a onclick="setBoothPage({{id}})"><h1>{{Title}}</h1>\
				<div><p>{{Catagory}} - {{Orginizaion}}</p></div>\
				</a>\
				</li>\
				{{/Booths}}\</ul>\
				'
}
