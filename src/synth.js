$(function () {
	
	$('.control').knobRot({
		'classes': ['circle'],
		'frameCount': 69,
		'minimumValue': 0,
		'maximumValue': 500
	}).on('knobframechange', function () {
		//modules['Osc1'].frequency.value = this.value;
	});	

});