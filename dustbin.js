class Dustbin{
 constructor(x, y) 
    { var options = {
     isStatic: true } 
    this.leftBody = Bodies.rectangle(x, y, 20, 30, options); 
    this.width = 20;
     this.height = 30; 
     this.angle=PI/2
     Matter.Body.setAngle(this.leftBody, this.angle);
      World.add(world, this.leftBody);

      this.rightBody = Bodies.rectangle(x, y, 20, 30, options); 
    this.width = 20;
     this.height = 30; 
     this.angle=PI/2
     Matter.Body.setAngle(this.rightBody, this.angle);
      World.add(world, this.rightBody);

      this.bottomBody = Bodies.rectangle(x, y, 20, 30, options); 
    this.width = 20;
     this.height = 30; 
     this.angle=PI
     Matter.Body.setAngle(this.bottomBody, this.angle);
      World.add(world, this.bottomBody);
     
     dustbin = loadImage("dustbin.png");

     } 
     display()
     { var pos =this.leftBody.position; 
      
    
    var pos =this.rightBody.position; 
    var pos =this.bottomBody.position; 
    
    push(); 
    translate(pos.x, pos.y); 
    
    rectMode(CENTER); 
    strokeWeight(4); stroke("green"); 
    fill(255); 
    rect(0, 0, this.width, this.height); 
    pop(); 
} };