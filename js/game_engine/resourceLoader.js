var app = app || {};

app.assetsToLoad = 0;
app.assetsLoaded = 0;

app.assetWasLoaded = function(){ 
	app.assetsLoaded++;
	//console.log('assets loaded:', app.assetsLoaded, '/', app.assetsToLoad);
	if ( app.assetsLoaded == app.assetsToLoad && app.startGame ){
		app.startGame();
	}
}

app.imgs = {};
app.addImages = function(array){ // array of objects which have a name and a src
	app.assetsToLoad += array.length;
	for (var i = 0; i < array.length; i++) {
		var data = array[i];
		var img = new Image();
		img.src = data.src;
		app.imgs[data.name] = img;
		img.onload = app.assetWasLoaded();
	};
}
// app.img = function(name){
// 	return app.imgs[name];
// }




