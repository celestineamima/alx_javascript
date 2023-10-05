#!/usr/bin/node

function changeMode (size, weight, transform, background, color) {}
    return () => {
      document.body.style.fontSize = size + "px";
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color; 
    }
    