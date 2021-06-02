"use strict";
exports.__esModule = true;
var mat = require("./mat");
var v3_1 = require("./v3");
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var frameBuffer = new WebGLFramebuffer();
gl.viewport(0, 0, canvas.width, canvas.height);
var vertices = [
  3.0,
  3.0,
  0.0,
  -3.0,
  3.0,
  0.0,
  3.0,
  -3.0,
  0.0,
  -3.0,
  -3.0,
  0.0, //Vertex 3
];


var indicies = [0, 2, 3, 0, 3, 1];
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
var indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
gl.bufferData(
  gl.ELEMENT_ARRAY_BUFFER,
  new Uint16Array(indicies),
  gl.STATIC_DRAW
);
var vertexShaderSrc = "#version 110\n" + "uniform mat4 MVP;\n";
("attribute vec3 vCol;\n");
("attribute vec2 vPos;\n");
("varying vec3 m_color;\n");
("void main()\n");
("{\n");
("    gl_Position = MVP * vec4(vPos, 0.0, 1.0);\n");
("    m_color = vCol;\n");
("};");
var fragmentShaderSrc =
  "#version 110\n" +
  "varying vec3 m_color;\n" +
  "void main()\n" +
  "{\n" +
  "   gl_FragColor = vec4(m_color, 1.0);\n" +
  "};";
var shader = createShader(vertexShaderSrc, fragmentShaderSrc);
var mvpLocation = gl.getUniformLocation(shader, "MVP");
var vPosLocation = gl.getAttribLocation(shader, "vPos");
var vColLocation = gl.getAttribLocation(shader, "vCol");
shader.vertexPositionAttribute;
gl.enableVertexAttribArray(vPosLocation);
gl.vertexAttribPointer(vPosLocation, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vColLocation);
gl.vertexAttribPointer(vColLocation, 3, gl.FLOAT, false, 0, 0);
var m;
m = mat.identity();
//m = mat.rotateZ(m, 1,)
var p = mat.ortho(-1, 1, -1, 1, 1, -1);
var mvp = v3_1.multiply(p, m);
gl.useProgram(shader);
gl.uniformMatrix4fv(mvpLocation, false, mvp);
function compileShader(source, type) {
  var id = gl.createShader(type);
  gl.shaderSource(id, source);
  gl.compileShader(id);
  console.log(gl.getShaderInfoLog(id));
  return id;
}
function createShader(vertexShader, fragmentShader) {
  var program = gl.createProgram();
  var vs = compileShader(vertexShader, gl.VERTEX_SHADER);
  var fs = compileShader(fragmentShader, gl.FRAGMENT_SHADER);
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.validateProgram(program);
  return program;
}
