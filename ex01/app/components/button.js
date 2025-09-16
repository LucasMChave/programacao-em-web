"use client";

export function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  function handleMouseOver() {
    console.log("You hovered over me!");
  }

  return (
    <button onMouseOver={handleMouseOver} onClick={handleClick}>
      I'm a button
    </button>
  );
}