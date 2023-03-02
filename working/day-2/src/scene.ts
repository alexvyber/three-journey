import * as THREE from "three"
const { random } = Math

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

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "#ffe0d0",
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
Object.assign(cubeMesh.position, {
  x: 0,
  y: -1,
  z: 1,
})
Object.assign(cubeMesh.scale, {
  x: 5,
  y: 1,
  z: 1,
})

// Math.random() > 0.5 && cubeMesh.position.normalize()

// console.log("🚀 ~ cubeMesh.position:", cubeMesh.position)
// console.log("🚀 ~ cubeMesh.position.length:", cubeMesh.position.length())

function getRandom() {
  return random() * (random() > 0.5 ? 1 : -1)
}

// cubeMesh.position.set(getRandom(), getRandom(), getRandom())

scene.add(cubeMesh)

/**
 * Objects
 */
// const group = new THREE.Group()
// group.scale.y = 2
// group.rotation.y = 0.1
// scene.add(group)

// const cube1 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: 0xff0000 }),
// )
// cube1.position.x = -1.5
// group.add(cube1)

// const cube2 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: 0xff0000 }),
// )
// cube2.position.x = 0
// group.add(cube2)

// const cube3 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: 0xff0000 }),
// )
// cube3.position.x = 1.5
// group.add(cube3)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
})

let p = 20
// renderer.setSize(sizes.width * 2, sizes.height * 2)
// setInterval(() => {
//   p += 1
//   console.log("🚀 ~ setInterval ~ p:", p)

//   // Camera
//   const camera = new THREE.PerspectiveCamera(p, sizes.width / sizes.height)
//   camera.position.z = 10
//   scene.add(camera)

//   renderer.render(scene, camera)
// }, 30)

const camera = new THREE.PerspectiveCamera(p, sizes.width / sizes.height)

// console.log(
//   "🚀 ~ cubeMesh.position.distanceTo(camera.position):",
//   cubeMesh.position.distanceTo(camera.position),
// )

renderer.setSize(sizes.width, sizes.height)
camera.position.z = 20
camera.position.x = 1
camera.position.y = 1
scene.add(camera)

cubeMesh.rotation.z = 1

let i = 0
// setInterval(
//   () => (
//     // cubeMesh.scale.set(getRandom(), getRandom(), getRandom()),
//     // cubeMesh.position.set(getRandom(), getRandom(), getRandom()),
//     (cubeMesh.rotation.y = i += 0.5), renderer.render(scene, camera)
//   ),
//   100,
// )

// cubeMesh.scale.set((getRandom() + 1) * 4, (getRandom() + 1) * 4, (getRandom() + 1) * 4)
// cubeMesh.position.set(getRandom(), getRandom(), getRandom())

renderer.render(scene, camera)
