window.onload = function(){   
    var puzzle = document.getElementById("puzzlearea");
    var pieces = puzzle.children;
    var topVal=0;
    var leftVal=0;
    var yVal = 0;
    var xVal = 0;
    var newYPos = 300;
    var newXPos = 300;
    var oldYPos;
    var oldXPos;
    var swapPiece;

    for(var i =0; i < pieces.length; i++){
        pieces[i].addClassName ("puzzlepiece");
        pieces[i].style.top =  topVal + "px";
        pieces[i].style.left = leftVal + "px";
        pieces[i].style.backgroundPosition = yVal + "px " + xVal+ "px";
                
        if(leftVal < 300){
            leftVal += 100;
            xVal -= 100;
        }
        else{
            leftVal = 0;
            xVal = 0;
            topVal +=100;
            yVal -=100;
        }
    }

    for ( i in pieces){
        pieces[i].onclick=function(){ //tells the pieces what to do on mouseclick.
            oldYPos = parseInt(this.style.top);
            oldXPos = parseInt(this.style.left);

            if (oldYPos == newYPos && oldXPos == (newXPos-100) || oldYPos == newYPos && oldXPos == (newXPos+100) 
               || oldYPos == (newYPos-100) && oldXPos == newXPos || oldYPos == (newYPos+100) && oldXPos == newXPos){
                this.style.top = newYPos + "px";
                this.style.left = newXPos + "px";
                newYPos = oldYPos;
                newXPos = oldXPos;    
            }
        }

        pieces[i].onmouseover=function(){ //tells the pieces what to do on mouseover.
            oldYPos = parseInt(this.style.top);
            oldXPos = parseInt(this.style.left);
            if (oldYPos == newYPos && oldXPos == (newXPos-100) || oldYPos == newYPos && oldXPos == (newXPos+100)
             || oldYPos == (newYPos-100) && oldXPos == newXPos || oldYPos == (newYPos+100) && oldXPos == newXPos){
                this.addClassName("movablepiece");        
            }
            else{
                this.removeClassName("movablepiece");
            }
        }
    }
    
// The checkNeighbour function checks for the empty slot to move puzzle piece 

function checkNeighbour(){
    oldYPos = parseInt(swapPiece.style.top);
                oldXPos = parseInt(swapPiece.style.left);
                swapPiece.style.top = newYPos + "px";
                swapPiece.style.left = newXPos + "px";
                newYPos = oldYPos;
                newXPos = oldXPos;
}          

/* The swapPieces function shuffles the puzzle pieces randomly */
    $("controls").onclick = function swapPieces(){
        for(var s = 0; s < 400 ; s++){
            var selection = Math.floor (Math.random () * 4); // randomly allows only four moveable pieces
            switch (selection){
              case 0:
                getPosStyle((newYPos-100)+"px", newXPos+"px");
                checkNeighbour();
              break;

              case 1:
                getPosStyle(newYPos+"px", (newXPos-100)+"px");
                 checkNeighbour();
              break;

              case 2:
                getPosStyle((newYPos+100)+"px", newXPos+"px");
                checkNeighbour();
              break;
               
              case 3:
                getPosStyle(newYPos+"px", (newXPos + 100)+"px")
                checkNeighbour();
            }
        }   
    };

//Function used to get the style of new puzzle piece before mapping to new postion.
    function getPosStyle(top, left){
    for(var i =0; i < pieces.length; i++){
        if(pieces[i].style.top==top && pieces[i].style.left==left){
            swapPiece = pieces[i];
            return swapPiece;        
            }
        }
    };
};