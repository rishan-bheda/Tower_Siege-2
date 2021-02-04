class Box extends BaseClass {
  
  constructor(x, y, width, height){

    super(x,y,width,height);

    this.Visiblity = 255;

  }

  display(){

    if(this.body.speed < 3){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    }

    else{

      World.remove(world, this.body);

      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
      pop();

    }
  }

};
