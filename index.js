let plscore = 0;
let cmpscore =0;
function returnName()
{
    let playsel = window.prompt("Choose 1 for Rock, 2 for Paper or 3 for Scissor ?");
    return playsel;

}
function compgen()
{
     sel = Math.floor( ( Math.random()*3)+1);
    return sel;
}
function assign( sell,playsell)
{
     sel = sell;
     playsel = playsell;

   if(sel == playsel)
   {
    console.log("Its a tie");
   return 2;
   }
   else if(
    sel == 1 && playsel ==2
   )
   {
    console.log("you win the round");
   return 1;
   }
   else if(
    sel == 1 && playsel == 3)
   
   {
    console.log(" You lose the round");
   return 0;
   }
   else if(
    sel ==2 && playsel == 1)
    {
        console.log("you lose the round");
    return 0;
    }
    else if(
        sel ==2 && playsel == 3)
       {
        console.log("you win  the round");
        return 1;
       }
    else if(
            sel ==3 && playsel == 1)
           {
            console.log("you win the round");
            return 1;
           }
     else if(
                sel ==3 && playsel == 2)
                {
                    console.log("you lose the round");
                return 0;
                }
    else
    
   console.log("wrong number");
   return 0;
  
   
   
}
function score(skr)
{
    x = skr;
    if( x ==0)
    cmpscore = cmpscore + 1;
    else if( x ==1)
    plscore = plscore + 1 ;
    else{
        cmpscore = cmpscore + 1;
        plscore = plscore + 1 ;

    }console.log("computer score is " + cmpscore);
    console.log("player score is " + plscore);

    
}
function card(){

    while((cmpscore < 5) && ( plscore < 5)){

      score(assign(compgen(),returnName()));}

      if( cmpscore ==5)
      console.log("computer wins the match");

      else
      console.log("you win the match");

}

card();


/*console.log(cmpscore);
console.log(plscore);


//assign(compgen(),returnName());*/


