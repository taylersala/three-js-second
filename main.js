import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

const canvas = document.getElementById('canvas');

// create the scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('#F0F0F0');

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5;

//create and add cube#FFAFC7
const geometry = new THREE.DodecahedronGeometry()
const material = new THREE.MeshPhongMaterial({ color: '#FFAFC7'})
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2)
const boxMaterial = new THREE.MeshPhongMaterial({ color: '#FFAFC7'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

// const boxTwoGeometry = new THREE.BoxGeometry(2, 0.1, 2)
// const boxTwoMaterial = new THREE.MeshPhongMaterial({ color: '#FFAFC7'});
// const boxTwo = new THREE.Mesh(boxTwoGeometry, boxTwoMaterial);
// box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);
// scene.add(boxTwo);

//lighting
// const light = new THREE.DirectionalLight(0x9CDBA6, 10);
// light.position.set(1, 1, 1) //x y z
// scene.add(light);

const light = new THREE.SpotLight(0x006769, 100)
light.position.set(1, 1, 1)
scene.add(light);




// renderer

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)

renderer.render(scene, camera)
// document.body.appendChild(renderer.domElement);

// orbit control

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping;
controls.dampingFactor;
controls.enableZoom = true;
controls.enablePan = true;


//animations

function animate() {
  requestAnimationFrame(animate);
  
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  
  box.rotation.y += 0.005;
  
  //boxTwo.rotation.y += 0.005;

  controls.update();
  
  
  renderer.render(scene, camera);
}

animate()