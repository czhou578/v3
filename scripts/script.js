export function designSVG() {
  const progressLine = document.querySelector("#connect-line");

  setTimeout(function () {
    progressLine.setAttribute("fill", "url(#right)");
  }, 1000);
}

export function programmerSVG() {
  gsap.registerPlugin(MotionPathPlugin);

  MotionPathPlugin.convertToPath("ellipse");

  setTimeout(function () {
    gsap.to("#ellipse", {
      motionPath: {
        path: "#path",
        start: 1,
        end: 0,
        align: "#path",
        alignOrigin: [0.5, 0.5],
        fill: "4DAF4C",
      },
      duration: 7,
      ease: "power1.inOut",
      repeat: -1,
    });
  }, 100);
}
