import { Application } from "../library";
import Flock from "./Boids/flock";

(async () => {
  const application = new Application();

  await application.init({ background: "#0d1117", resizeTo: window });

  const flock = new Flock(
    application.canvas.width,
    application.canvas.height,
    1000,
    {
      cohesionRadius: 100,
      alignmentRadius: 200,
      attractionRadius: 50,
      separationRadius: 30,
    },
  );

  application.stage.addChild(flock);
})();
