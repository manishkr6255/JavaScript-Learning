function createCircle (radius){
    return{
        radius,
        drwa: function(){
            console.log("draw");
        }
    };
}
const circle = createCircle(1);
circle.draw();
