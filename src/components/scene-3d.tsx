import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Lightweight 3D mock — rotating low-poly room. No controls library required. */
export function Scene3D({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(7, 6, 9);
    camera.lookAt(0, 1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // Lights
    scene.add(new THREE.AmbientLight(0x8aa9ff, 0.55));
    const key = new THREE.DirectionalLight(0x9ec7ff, 1.1);
    key.position.set(6, 10, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x5ad1ff, 0.6);
    rim.position.set(-8, 4, -6);
    scene.add(rim);

    // Floor
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 8),
      new THREE.MeshStandardMaterial({ color: 0x1d2436, roughness: 0.9, metalness: 0.05 })
    );
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Grid
    const grid = new THREE.GridHelper(10, 20, 0x3b6fd9, 0x2a3550);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.5;
    scene.add(grid);

    // Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x232c44, roughness: 0.7 });
    const wallA = new THREE.Mesh(new THREE.BoxGeometry(10, 2.4, 0.15), wallMat);
    wallA.position.set(0, 1.2, -4);
    scene.add(wallA);
    const wallB = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.4, 8), wallMat);
    wallB.position.set(-5, 1.2, 0);
    scene.add(wallB);

    // Furniture
    const sofa = new THREE.Mesh(
      new THREE.BoxGeometry(3, 0.8, 1.1),
      new THREE.MeshStandardMaterial({ color: 0x3a7bd5, roughness: 0.5 })
    );
    sofa.position.set(-1.2, 0.4, -2.6);
    scene.add(sofa);

    const table = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.1, 0.9),
      new THREE.MeshStandardMaterial({ color: 0x8ea4c7, roughness: 0.3, metalness: 0.5 })
    );
    table.position.set(-1.2, 0.45, -1);
    scene.add(table);

    const lamp = new THREE.Mesh(
      new THREE.ConeGeometry(0.35, 0.5, 24),
      new THREE.MeshStandardMaterial({ color: 0x6ee7ff, emissive: 0x1f6f8c, emissiveIntensity: 0.6 })
    );
    lamp.position.set(2.4, 1.6, -2.8);
    scene.add(lamp);

    const chair = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.9, 0.8),
      new THREE.MeshStandardMaterial({ color: 0x4f5b7a, roughness: 0.8 })
    );
    chair.position.set(1.8, 0.45, -0.6);
    scene.add(chair);

    const rug = new THREE.Mesh(
      new THREE.PlaneGeometry(3.6, 2),
      new THREE.MeshStandardMaterial({ color: 0x2a3a66, roughness: 1 })
    );
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(-0.8, 0.01, -1.6);
    scene.add(rug);

    let raf = 0;
    let t = 0;
    const animate = () => {
      t += 0.005;
      camera.position.x = Math.cos(t) * 9;
      camera.position.z = Math.sin(t) * 9;
      camera.lookAt(0, 1, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={className} />;
}
