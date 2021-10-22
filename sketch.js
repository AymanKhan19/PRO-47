
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const startingMinutes = 5;
let time = startingMinutes * 60;
const countdownEL = document.getElementById('countdown')

var pc, pcImg, npc, npcImg

var counter = 0;

var score = 0;

var answer;

var i = 1, j =1, k = 1, l = 1, m = 1, n = 1, o = 1; 

var quest;

var hints;

function preload()
{
	bg = loadImage('images/bg.png');

	pcImg = loadImage('images/pc0.png');

	npcImg = loadAnimation('images/npc1.png', 'images/npc animation 2.png');

	doorImg = loadImage('images/doors.png');

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	pc = createSprite(400, 800, 10, 10);
	pc.addImage('scientist', pcImg);

	npcImg.frameDelay = 25
	npc = createSprite(200, 200, 10, 10);
	npc.addAnimation('scientist npc', npcImg);
	npc.scale = 1.5

	doors = createSprite(3000, 800, 10, 10);
	doors.addImage('open', doorImg);
	doors.scale = 4.5
    doors.visible = false

	input1 = createInput('Answer')
	input1.position(850, 600)

	input2 = createInput('Answer')
	input2.position(1200, 600)

	input3 = createInput('Answer')
	input3.position(1300, 600)

	input4 = createInput('Answer')
	input4.position(1400, 600)

	input5 = createInput('Answer')
	input5.position(1500, 600)

	input6 = createInput('Answer')
	input6.position(1600, 600)

	input7 = createInput('Answer')
	input7.position(1700, 600)

	quest = ['2 + 18', '180 - 160', '8 * 3', '5 * 9', '56/8', 'Square of 6', '7 * 4']

	hints = ['What is 2 times 10', 'Remove 38 from 50', 'Remove 11 from 35', 'Remove 5 from 50', 'What is 1 less than 8', 'What is 6*6', 'Remove 7 from 35']

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  image(bg, width/2, height/2, width*7, height);

  textSize(20);
  text('Score:'+ score, camera.position.x, 70);


  if(keyDown(RIGHT_ARROW)){

	pc.x = pc.x+10
  }
  if(keyDown(LEFT_ARROW)){

	pc.x = pc.x-10
  }
  camera.position.x = pc.x

  if(pc.x % 700 === 0){

	doors.x = pc.x+100
	doors.visible = true

	qna();

	button = createButton('Submit');
	button.position(700+(100*counter), 700);
	button.mouseClicked(hide);

	counter = counter+1
  }

  answer1 = input1.value();
  if(answer1 === '20' && i === 1){

	score = score+50
	doors.visible = false

    i = 0
  }

  answer2 = input2.value();
  if(answer2 === '20' && j === 1){

	score = score+50
	doors.visible = false

    j = 0
  }

  answer3 = input3.value();
  if(answer3 === '24' && k === 1){

	score = score+50
	doors.visible = false

    k = 0
  }

  answer4 = input4.value();
  if(answer4 === '45' && l === 1){

	score = score+50
	doors.visible = false

    l = 0
  }

  answer5 = input5.value();
  if(answer5 === '7' && m === 1){

	score = score+50
	doors.visible = false

    m = 0
  }

  answer6 = input6.value();
  if(answer6 === '36' && n === 1){

	score = score+50
	doors.visible = false

    n = 0
  }

  answer7 = input7.value();
  if(answer7 === '8' && o === 1){

	score = score+50
	doors.visible = false

    o = 0
  }
  setInterval(updateCountdown, 1000); 

  drawSprites();
 
}

function hide(){
   
   switch(counter){

	 case 1: input1.hide();
	         break;

	 case 2: input2.hide();
	         break;

	 case 3: input3.hide();
	         break;

	 case 4: input4.hide();
	         break;

	 case 5: input5.hide();
	         break;

	 case 6: input6.hide();
	         break;

	 case 7: input7.hide();
	         break;

   }
	 button.hide();
}

function qna(){

	swal({
		title: `Question `+(counter+1),
		text: quest[counter],
		confirmButtonText: hints[counter]
	  });

}

/*function spawnDoors(){



  if(frameCount % 50 === 0){
	  

  }


 

}*/



function updateCountdown(){
     setInterval(updateCountdown, 1000); 
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	countDownEL.innerHTML = `${minutes}: ${seconds}`;
	time--;
}
