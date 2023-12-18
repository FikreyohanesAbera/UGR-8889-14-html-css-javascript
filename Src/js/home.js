
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// document.body.appendChild(renderer.domElement);
const threewrapper = document.querySelector(".threeD");
threewrapper.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x101820 );
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 20, 95);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.minDistance = 5;
// controls.maxDistance = 20;
// controls.minPolarAngle = 0.5;
// controls.maxPolarAngle = 1.5;
// controls.autoRotate = false;
// controls.target = new THREE.Vector3(0, 1, 0);
controls.update();
const geometry = new THREE.RingGeometry( 40, 48, 100 ); 
geometry.rotateX(-Math.PI / 2);
const material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry, material ); 
scene.add( mesh );

const spotLight = new THREE.SpotLight(0xffffff ,10,25,Math.PI / 8);
spotLight.position.set(30, 25, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 100, 100);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -5;
scene.add(directionalLight);
const ambientlight = new THREE.AmbientLight(0xffffff, 2);
ambientlight.position.set(100, 100, 100);
scene.add(ambientlight);

const loader = new GLTFLoader();

loader.load('./models/laptop.glb', (gltf) => {
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  //   mesh.scale.set(0.05,0.05,0.05);

  mesh.position.set(0, 0.4, -34);
  mesh.scale.set(.7,.7,0.7);
  mesh.rotation.y = Math.PI;
  mesh.shadow = false;
  scene.add(mesh);
});
loader.load('./models/shield.glb', (gltf) => {
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
    mesh.scale.set(0.5,0.5,0.5);

  mesh.position.set(-33, 7, 0);
  mesh.rotation.z = Math.PI / 2;
  scene.add(mesh);
});

loader.load('./models/computer.glb', (gltf) => {
    const mesh = gltf.scene;

    mesh.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    mesh.rotation.y = -Math.PI;
    mesh.name = 'nature';
    mesh.scale.set(7,7,7);

    mesh.position.set(40, 0.5, 0);
    mesh.rotation.y = -Math.PI / 2;
    scene.add(mesh);
  });
  loader.load('./models/bell_system_phone.glb', (gltf) => {
    const mesh = gltf.scene;

    mesh.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    mesh.rotation.y = -Math.PI;
    mesh.name = 'nature';
    mesh.scale.set(0.3,0.3,0.3);

    mesh.position.set(-22, 0.5, 29);
    mesh.rotation.y = -Math.PI / 2;
    scene.add(mesh);
  });
  loader.load('./models/ball.glb', (gltf) => {
    const mesh = gltf.scene;

    mesh.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    mesh.rotation.y = -Math.PI;
    mesh.name = 'ball';

    mesh.scale.set(5,5,5);
    mesh.position.set(80, 10.5, 10);
    scene.add(mesh);
  });
const obje = new THREE.Object3D();

loader.load('./models/lada.glb', (gltf) => {
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  
  mesh.scale.set(2,2,2);
  mesh.position.set(0, 2, 45);
  mesh.rotation.y = -Math.PI / 2;

  mesh.name = 'Car';
  obje.add(mesh);
});
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

let angle = Math.PI / 2;
scene.add(obje);

let step = 0.5;
let speed = 0.03;

function animate() {
  step += speed;
  scene.traverse(function(element) {
    if (element.name === "ball") {
        element.position.y = 20 * Math.abs(Math.sin(step));
      
    }
    })
  
  document.addEventListener('keypress', (event) => {
    let targ = document.querySelector(".popup--disappear");
    
    if (event.key === 'w') {
      angle -= 0.00007;
      camera.position.x = Math.cos(angle)* 97.08;
      camera.position.z = Math.sin(angle) * 97.08;
      obje.rotation.y += 0.00007;
      console.log(camera.position);
      targ.style.display = 'none';
      
    }

    else if (event.key === 's') {
      angle += 0.00007;
      camera.position.x = Math.cos(angle)* 97.08;
      camera.position.z = Math.sin(angle) * 97.08;
      obje.rotation.y -= 0.00007;
      targ.style.display = 'none';

    }
  });
  let tar2 = document.getElementsByClassName("popup--about")[0];
  let tar3 = document.getElementsByClassName("popup--adventures")[0];
  let tar4 = document.getElementsByClassName("popup--skills")[0];
  let tar5 = document.getElementsByClassName("popup--contact")[0];
  let tar6 = document.getElementsByClassName("popup--Hobbies")[0];


  if ((camera.position.x > 93) && (-18<camera.position.z < 18)){
    tar2.style.display = 'block';
  }
  else{
    tar2.style.display = 'none';
  }
  if ((camera.position.x < -91) && (-18 < camera.position.z < 30)){
    tar3.style.display = 'block';
  }
  else{
    tar3.style.display = 'none';
  }
  if ((camera.position.x > -42 && camera.position.x < 42) && (camera.position.z < -87)){
    tar4.style.display = 'block';
  }
  else{
    tar4.style.display = 'none';
  }
  if ((camera.position.x > -64 && camera.position.x < -42) && (camera.position.z > 61 && camera.position.z < 82)){
    console.log("trueee")
    tar5.style.display = 'block';
  }
  else{
    tar5.style.display = 'none';
  }
  if ((camera.position.x > 0 && camera.position.x < 30) && (camera.position.z > 0)){
    tar6.style.display = 'block';
  }
  else{
    tar6.style.display = 'none';
  }

  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();


const switchButton = document.querySelector("#togglebutton");
console.log(switchButton);
switchButton.addEventListener("click",function (){
    if (switchButton.innerHTML === "light"){
      switchButton.innerHTML = "dark";
    }
    else{
      switchButton.innerHTML = "light";

    }
    
    document.body.classList.toggle("body--dark--mode");
    document.getElementsByClassName("name")[0].classList.toggle("name--dark--mode");
    document.getElementsByClassName("my-res")[0].classList.toggle("name--dark--mode");
    document.getElementsByClassName("container__header")[0].classList.toggle("secondary--dark--mode");
    document.querySelector("header").classList.toggle("navbar--dark--mode");
    let arr = document.getElementsByClassName("container__items__header");
    let arr2 = document.getElementsByClassName("navbar__link");
    Array.from(arr).forEach((ele) => {
        ele.classList.toggle("name--dark--mode");
        
    });
    Array.from(arr2).forEach((ele)=>{
        ele.classList.toggle("navbar--dark--mode");

    });
});


