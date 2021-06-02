const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl");

let program = gl.createProgram();
gl.createShader(gl.VERTEX_SHADER);
gl.drawArrays(gl.TRIANGLES, 0, 3)