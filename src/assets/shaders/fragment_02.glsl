precision highp float;

varying vec2 vTexCoord;

void main() {
  vec2 b = vTexCoord * 2.0 - 1.0;
  vec3 col = vec3(pow(1.0 - abs(b.y), 8.0) * 2.0);
  col *= vec3(0.2, 0.5, 0.9);
  gl_FragColor = vec4(col, 1.0);
}
