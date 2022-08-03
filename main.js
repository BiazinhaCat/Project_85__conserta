canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

Background_img = "parkingLot.jpg"; 
GreenCarImage = "car2.png";

GreenCar_width = 75;
GreenCar_height = 100;

GreenCar_x = 5;
GreenCar_y = 225;

function add() {
    Background_img = new Image;
    Background_img.onload = uploadBackground;
    BackgroundImage.src = BackgroundImage;

    GreenCar_img = new Image;
    GreenCar_img.onload = uploadGreenCar;
    GreenCarImage.src = GreenCarImage;
    
}

function uploadBackground(){
	ctx.drawImage(Background_img, 0, 0, canvas.width, canvas.height);

}

function uploadGreenCar(){
	ctx.drawImage(GreenCar_img, GreenCar_x, GreenCar_y, GreenCar_width, GreenCar_height);

}

window.addEventListener("keydown", myKeyDown);
console.log(myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
}

function up() {
        
    if (GreenCar_y >= 0) {
        
        GreenCar_y = GreenCar_y - 10; 
        console.log("Quando a seta para cima for pressionada, X = " + GreenCar_x + "Y = " + GreenCar_x);
        uploadBackground();
        uploadGreenCar();

    }
}

function down() {
    
    if (GreenCar_y <= 500) {
        
        GreenCar_y = GreenCar_y + 10; 
        console.log("Quando a seta para baixo for pressionada, X = " + GreenCar_x + "Y = " + GreenCar_x);
        uploadBackground();
        uploadgreencar();
        
    }
}

function left() {
    
    if (GreenCar_x >= 0) {
        
        GreenCar_x = GreenCar_x - 10; 
        console.log("Quando a seta para esquerda for pressionada, X = " + GreenCar_x + "Y = " + GreenCar_x);
        uploadBackground();
        uploadGreenCar();
        
    }
}

function right() {
    
    if (GreenCar_x >= 700) {
        
        greencar_x = greencar_x + 10; 
        console.log("Quando a seta para esquerda for pressionada, X = " + GreenCar_x + "Y = " + GreenCar_x);
        uploadBackground();
        uploadGreenCar();
    }
}
