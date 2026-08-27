/**
 * Vencilla 3D Interactive Hero Scene
 * Pure Three.js implementation of the pharmaceutical sterile vial & floating capsules.
 */
(function() {
  'use strict';

  function initThreeHero() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const container = canvas.parentElement;
    if (!container) return;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);

    // 2. Renderer Setup
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (e) {
      console.warn('WebGL initialization failed. Using CSS fallback.');
      return;
    }

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const goldPoint = new THREE.PointLight(0xC9A24B, 2, 20);
    goldPoint.position.set(-3, 4, 3);
    scene.add(goldPoint);

    const cyanPoint = new THREE.PointLight(0x00BCD4, 3, 25);
    cyanPoint.position.set(3, -2, 4);
    scene.add(cyanPoint);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.2);
    topLight.position.set(0, 10, 5);
    scene.add(topLight);

    // 4. Main Vial Group
    const vialGroup = new THREE.Group();
    scene.add(vialGroup);

    // Glass Body (Transparent Cylinder)
    const glassGeo = new THREE.CylinderGeometry(0.85, 0.85, 2.4, 32);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x00E5FF,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.8,
      ior: 1.5,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    vialGroup.add(glassMesh);

    // Glass Neck
    const neckGeo = new THREE.CylinderGeometry(0.45, 0.65, 0.5, 32);
    const neckMesh = new THREE.Mesh(neckGeo, glassMat);
    neckMesh.position.y = 1.45;
    vialGroup.add(neckMesh);

    // Aluminum Crimp Cap (Metallic Gold & Cyan Top)
    const capGroup = new THREE.Group();
    const capGeo = new THREE.CylinderGeometry(0.52, 0.52, 0.4, 32);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0xC9A24B,
      metalness: 0.9,
      roughness: 0.2
    });
    const capMesh = new THREE.Mesh(capGeo, capMat);
    capGroup.add(capMesh);

    const sealGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.1, 32);
    const sealMat = new THREE.MeshStandardMaterial({
      color: 0x00BCD4,
      metalness: 0.5,
      roughness: 0.3
    });
    const sealMesh = new THREE.Mesh(sealGeo, sealMat);
    sealMesh.position.y = 0.22;
    capGroup.add(sealMesh);

    capGroup.position.y = 1.75;
    vialGroup.add(capGroup);

    // Liquid Core inside vial
    const liquidGeo = new THREE.CylinderGeometry(0.78, 0.78, 1.6, 32);
    const liquidMat = new THREE.MeshStandardMaterial({
      color: 0x00838F,
      transparent: true,
      opacity: 0.5,
      roughness: 0.2
    });
    const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
    liquidMesh.position.y = -0.3;
    vialGroup.add(liquidMesh);

    // 5. Floating Capsules / Pills
    const pills = [];
    const pillColors = [0x00BCD4, 0xC9A24B, 0xFFFFFF, 0x00E5FF, 0x80DEEA];

    for (let i = 0; i < 8; i++) {
      const pGroup = new THREE.Group();
      const pGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.35, 16);
      const col = pillColors[i % pillColors.length];
      const pMat = new THREE.MeshStandardMaterial({
        color: col,
        metalness: 0.4,
        roughness: 0.3
      });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pGroup.add(pMesh);

      // Random initial position
      pGroup.position.set(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3 - 0.5
      );

      pGroup.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      scene.add(pGroup);
      pills.push({
        group: pGroup,
        speedY: 0.005 + Math.random() * 0.01,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        baseY: pGroup.position.y
      });
    }

    // 6. Interactive Mouse Motion & Cap Pop
    let mouseX = 0;
    let mouseY = 0;
    let capPopped = false;
    let capTargetY = 1.75;

    window.addEventListener('mousemove', function(e) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    canvas.addEventListener('click', function() {
      capPopped = !capPopped;
      capTargetY = capPopped ? 2.6 : 1.75;
    });

    // 7. Animation Loop
    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Vial gentle floating & mouse reaction
      vialGroup.rotation.y = Math.sin(elapsed * 0.5) * 0.3 + mouseX * 0.5;
      vialGroup.rotation.x = Math.cos(elapsed * 0.4) * 0.1 - mouseY * 0.3;
      vialGroup.position.y = Math.sin(elapsed * 1.2) * 0.12;

      // Cap pop animation easing
      capGroup.position.y += (capTargetY - capGroup.position.y) * 0.1;
      if (capPopped) {
        capGroup.rotation.z = Math.sin(elapsed * 4) * 0.15;
      } else {
        capGroup.rotation.z += (0 - capGroup.rotation.z) * 0.1;
      }

      // Pills floating animation
      pills.forEach(function(pill, idx) {
        pill.group.position.y = pill.baseY + Math.sin(elapsed * 1.5 + idx) * 0.25;
        pill.group.rotation.x += pill.rotSpeed;
        pill.group.rotation.y += pill.rotSpeed * 0.8;
      });

      renderer.render(scene, camera);
    }

    animate();

    // 8. Resize Handler
    window.addEventListener('resize', function() {
      width = container.clientWidth || 400;
      height = container.clientHeight || 400;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initThreeHero();
  });
})();
