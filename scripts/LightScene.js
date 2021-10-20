import * as THREE from "../libs/three.module.js";


window.addEventListener("load", init)

function init() {
	// 1. シーンを生成
	const scene = new THREE.Scene();
	// 座標系を分かりやすくするため
	const axisHelper = new THREE.AxesHelper(100);
	scene.add(axisHelper);
	
	// 2. カメラを初期化
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.set(0, 5, 5);
	camera.rotation.set(-Math.PI / 4, 0, 0);
	
	// 3. 描画先のDOM要素を生成
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	
	// 4. 立方体を生成
	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
	const cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
	
	// 5. ライトを生成
	const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
	scene.add(dirLight);
	dirLight.position.set(2, 2, -3);
	// ライトの位置と方向を分かりやすくするため
	const dirLightHelper = new THREE.DirectionalLightHelper(dirLight);
	scene.add(dirLightHelper);
	

	const animate = function () {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		
		renderer.render( scene, camera );
		requestAnimationFrame( animate );
	};
	
	animate();
}