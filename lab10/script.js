(function() {
    window.onmousedown = handleMouseMove;
    function handleMouseMove(event) {
        event = event || window.event; // IE-ism
        console.log(event.clientX,event.clientY);
        moveDiv(event.clientX,event.clientY);
    }
})();

function moveDiv(x_pos,y_pos){
    console.log(x_pos,y_pos);
    var div = document.querySelector('#divel');

    let x= div.style.left
    let y= div.style.top 
    var animation = div.animate([
        
        {transform: 'translate(0)'},

        {transform: 'translate('+x+'px, '+y+'px)'},
      ], 3000);

    div.style.transform = 'translate('+x_pos+'px, '+y_pos+'px)';
    
}