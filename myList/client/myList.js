Template.heroes.helpers({
  items: function () {
    var cursor = Heroes.find();
    return cursor;
  }
});

































Template.button.helpers({
	happy: function(){
		var ghost = 78;
		if (ghost >= 50) {
			console.log("ghost is big");
			return true;
		}
		else {
			console.log("ghost is small");
			return false;
		};
	},
	sad: function(){
		return true;
	}
});



Template.button.events({
	'click button': function(){
		Router.go('heroes');
	}
});