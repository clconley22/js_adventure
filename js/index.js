import * as controls from './controls';
import {setGame, messageBox, newMessage} from './gamespace';
import * as levels from './levels';
import * as planet from './planet';
import * as spaceship from './spaceship';
import * as utils from './util';

document.dispatchEvent(setGame);


/*
 * Problem 1 - Make the spaceship move
 *
 *  Problem: The control keys are broken. We can see we are pressing a key
 *  because the keys are lighting up in the control panel on the bottom of
 *  the game, but the spaceship isn't moving. Let's fix that.
 *
 *  To Solve: Add logic to the arrowPressed function so that based on the key
 *  value passed in the appropriate spaceship move function will be called.
 *  The spaceship has 4 move functions, moveRight, moveLeft, moveUp, moveDown.
 *  You can called them like: spaceship.moveRight().
 *
 *  The key parameter is a string and will be one of 4 values:
 *  'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'
 *
 */

 const arrowPressed = (key) => {
   if (key == 'ArrowUp'){
      spaceship.moveUp();
   } else if (key == 'ArrowLeft'){
      spaceship.moveLeft();
   } else if (key == 'ArrowDown'){
      spaceship.moveDown()
   } else if (key == 'ArrowRight'){
      spaceship.moveRight();
   }
 };


/*
 * Problem 2 - Next Level isn't incrementing levels
 *
 *  Problem: After you land the spaceship... the next level button should move
 *  you up to the next level. But currently it's just doing the same thing as
 *  reset level does... resets the current level.
 *
 *  To Solve: Add logic to the nextLevelBtnPressed function. This function
 *  should increment the current level, but only if the spaceship is landed and
 *  we have not reached the highest level yet. If we are at the highest level...
 *  current level should be to a game over value. If game over or the spaceship
 *  has not landed, current level should not be updated.
 *
 *      levels has some properties you should use to complete this problem:
 *
 *      setCurrentLevel(level) - a function, that will change the current level
 *      getCurrentLevel() - a function, that will give you the current level
 *      HIGHEST_LEVEL - a const, is the highest level a player can complete
 *      GAME_OVER - a const, that is the level that represents completion of game
 *
 */
messageBox.innerHTML = ('Level 1')

 const nextLevelBtnPressed = () => {
   var CurrentLevel = levels.getCurrentLevel();
    var updatedLevel = CurrentLevel + 1
    if ((spaceship.isLanded()==true) && (CurrentLevel < levels.GAME_OVER)) {
      console.log('updating message to: ' + 'Level ' + updatedLevel);
      getMessage(CurrentLevel);
      levels.setCurrentLevel(updatedLevel)
      getMessage(CurrentLevel);
    } else if (CurrentLevel >= levels.HIGHEST_LEVEL){
      console.log('updating message to: Game Over')
      messageBox.innerHTML = ('You Win');
    }
 };

 /*
  * Problem 3 - Update Message after each level
  *
  *  Problem: So we fixed the next level button, but the message in the scroll
  *  box isn't changing. It's suppose to change each time the next level is
  *  updated. Let's fix that.
  *
  *  To Solve: First create a function called getMessage that takes one input
  *  (or parameter) a level. And outputs or returns a string with the appropriate
  *  message. This function should meet the following cases:
  *
  *     INPUT       OUTPUT
  *     -------     -----------
  *        1        'LEVEL 1'
  *        2        'LEVEL 2'
  *        3        'LEVEL 3'
  *        4        'GAME OVER'
  *
  *  Then after you have your function created and working. We are going to
  *  use it in the function you solved in problem 2. Let's add some more logic
  *  to that.
  *
  *  After the level is updated... set messageBox.innerHTML variable to the
  *  output of our getMessage function... make sure to pass into the function
  *  the new level.
  *
  *  Make sure to test the game... every time you click next level... you should
  *  see the scroll message update to the correct level number and then game
  *  over after the 3rd level.
  */

/* Write your code here */
const getMessage = (level) => {
  var CurrentLevel = levels.getCurrentLevel();
  switch(CurrentLevel){
    case 1:
      messageBox.innerHTML = 'Level 1';
        break;
    case 2:
      messageBox.innerHTML = 'Level 2';
        break;
    case 3:
      messageBox.innerHTML = 'Level 3';
        break;
    case 4:
      messageBox.innerHTML = "Game Over";
        break;
  }
}

export {arrowPressed, nextLevelBtnPressed};
