function setSchedulePage(id){
	var scheduleData=mainJSON.Events[id];
	var output = Mustache.render(Templates.schedulePage, scheduleData);
	$('#schedule-page-content').html(output);
	$.mobile.changePage('#schedule-page');
	$('#schedule-page-content').trigger('create');
}

function setBoothPage(id){
	var boothData=mainJSON.Booths[id];
	var output = Mustache.render(Templates.boothPage, boothData);
	$('#booth-page-content').html(output);
	$.mobile.changePage('#booth-page');
	$('#booth-page-content').trigger('create');
}


