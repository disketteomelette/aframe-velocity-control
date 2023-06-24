# aframe-velocity-control
A component in A-Frame that allows increasing or decreasing the velocity of any independent object animation using clickable entities and based on a user-provided factor. Created by disketteomelette.

Live demo: https://hypnotic-berry-custard.glitch.me/

![Animated gif of a-frame velocity control custom component in action](https://raw.githubusercontent.com/disketteomelette/aframe-velocity-control/main/sample.gif)

# how to call it

Put the js file in your desired directory and call it with a script tag on your scene:

  <script src="aframe-velocity-control.js"> 

# component properties

    
      schema: {
        
        target: { type: 'selector' },
        
        factor: { type: 'number', default: 1.5 },
        
        type: { type: 'string', default: 'increase' },
        

Target is id of the object you want to control. I. ex. *sphere1*.
  
Factor is the multiplying/divisor factor to increase/decrease velocity. In example, *1.5*.
  
Type is a boolean for button function, must be: *increase* or *decrease*.
  

Example:
        

      <a-box id="increaseVelocidad1" color="green" scale="0.2 0.2 0.1" velocity-control="target: #sphere1; factor: 1.5; type: increase"></a-box>
        
      <a-box id="decreaseVelocidad1" color="red" scale="0.2 0.2 0.1" position="0 -0.3 0" velocity-control="target: #sphere1; factor: 1.5; type: decrease"></a-box>
        
