import * as THREE from "../libs/three.js/build/three.module.js";


window.addEventListener("load", init)

function init() {
	// 1. シーンを生成
	const scene = new THREE.Scene();
	
	// 2. カメラを初期化
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.z = 5;

	// 3. 描画先のDOM要素を生成
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	// 4. 立方体を生成
	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	const animate = function () {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		
		renderer.render( scene, camera );
		requestAnimationFrame( animate );
	};
	
	animate();
}