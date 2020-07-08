class rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB
           
        }
       // this.pointB = pointB
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

    }

   

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("black");
            push();
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            
            pop();
        }
        
       
    }
    
}