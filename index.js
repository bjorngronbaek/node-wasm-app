//import * as wasm from "hello-wasm-pack";
//import * as wasm from "wasm-game-of-life";
import {Universe} from "wasm-game-of-life";

const pre = document.getElementById("game-of-life");
const universe = Universe.new();

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();
    requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);