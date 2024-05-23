import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";

class Circle {
  radius: number;
  speed: number;
  width: number;
  xPos: number;
  yPos: number;
  opacity: number;
  counter: number;
  sign: number;

  constructor(
    radius: number,
    speed: number,
    width: number,
    xPos: number,
    yPos: number
  ) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = 0.01 + Math.random() * 0.5;
    this.counter = 0;
    const signHelper = Math.floor(Math.random() * 3);
    this.sign = signHelper === 1 ? -1 : 1;
  }

  update(mainContext: CanvasRenderingContext2D) {
    this.counter += this.sign * this.speed;

    mainContext.beginPath();

    mainContext.arc(
      this.xPos + Math.cos(this.counter / 50) * this.radius,
      this.yPos + Math.sin(this.counter / 50) * this.radius,
      this.width,
      0,
      Math.PI * 2,
      false
    );

    mainContext.closePath();

    mainContext.fillStyle = `rgba(235, 245, 251, ${this.opacity})`;
    mainContext.fill();
  }
}

const App = () => {
  useEffect(() => {
    const mainCanvas = document.getElementById(
      "myCanvas"
    ) as HTMLCanvasElement | null;
    if (!mainCanvas) return;
    const mainContext = mainCanvas.getContext("2d");
    if (!mainContext) return;

    const circles: Circle[] = [];
    const requestAnimationFrame =
      window.requestAnimationFrame ||
      (window as any).webkitRequestAnimationFrame ||
      (window as any).msRequestAnimationFrame ||
      ((callback: FrameRequestCallback) => {
        window.setTimeout(callback, 1000 / 60);
      });

    function drawCircles() {
      for (let i = 0; i < 20; i++) {
        const randomX = Math.round(-100 + Math.random() * 1920);
        const randomY = Math.round(-100 + Math.random() * 1080);
        const speed = 0.1 + Math.random() * 1.5;
        const size = 1 + Math.random() * 100;

        const circle = new Circle(50, speed, size, randomX, randomY);
        circles.push(circle);
      }

      draw();
    }

    function draw() {
      if (!mainContext) return;

      mainContext.clearRect(0, 0, 1500, 1500);

      for (let i = 0; i < circles.length; i++) {
        const myCircle = circles[i];
        myCircle.update(mainContext);
      }

      requestAnimationFrame(draw);
    }

    drawCircles();
  }, []);

  return (
    <>
      <CssBaseline />
      <canvas
        id="myCanvas"
        width="1920px"
        height="1080px"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          background: "linear-gradient(to bottom, #391770,#5C43A3)",
        }}
      />
    </>
  );
};

export default App;
