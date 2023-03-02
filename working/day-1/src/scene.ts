import * as THREE from "three"
// import {
//   Scene,
//   Color,
//   BoxGeometry,
//   MeshBasicMaterial,
//   Mesh,
//   PerspectiveCamera,
//   WebGLRenderer,
// } from "three"

// console.log("🚀 ~ THREE:", THREE)
// console.log(Object.keys(THREE).length)

// Canvas
const canvas = document.querySelector("canvas.webgl")
if (!canvas) throw new Error("No Canvas!")

// Sizes
const sizes = {
  width: 800,
  height: 600,
} as const

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color("#f8f8f8")

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "#ffe0d0",
})

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
})

let p = 0
renderer.setSize(sizes.width * 2, sizes.height * 2)
setInterval(() => {
  p += 1
  console.log("🚀 ~ setInterval ~ p:", p)

  // Camera
  const camera = new THREE.PerspectiveCamera(p, sizes.width / sizes.height)
  camera.position.z = 10
  scene.add(camera)

  renderer.render(scene, camera)
}, 30)

// const camera = new THREE.PerspectiveCamera(p, sizes.width / sizes.height)

// renderer.setSize(sizes.width * 2, sizes.height * 2)
// camera.position.z = 10
// scene.add(camera)
// renderer.render(scene, camera)
