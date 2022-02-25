
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');



block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(block_image_object);
	});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	
	if (keyPressed == '82') {

		//block_y = 100;//
		new_image('rr1.png');
		block_x = block_x + 150;
		console.log("r");
	}
	if (keyPressed == '71') {
		//block_x = 300;
		//block_y = 100;
		new_image('gr.png');
		block_x = block_x + 150;
		console.log("g");
	}

	if (keyPressed == '89') {
		//block_x = 500;
		//block_y = 100;

		new_image('yr.png');
		block_x = block_x + 150;
		console.log("y");
	}
	if (keyPressed == '80') {
		//block_x = 280;
		//block_y = 100;
		new_image('pr.png');
		block_x = block_x + 150;
		console.log("p");
	}
	if (keyPressed == '66') {
		//block_x = 340;
		//block_y = 100;
		new_image('br.png');
		block_x = block_x + 150;
		console.log("b");
	}

}

