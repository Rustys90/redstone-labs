import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * HeroScene — real-time Three.js hero visual.
 * Animated particle field + wireframe icosahedron + wireframe torus knot,
 * with mouse-parallax camera drift. Renders a single static frame when
 * the user prefers reduced motion. Fully self-cleaning on unmount.
 */
export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070f, 0.05);

    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / Math.max(mount.clientHeight, 1),
      0.1,
      120,
    );
    camera.position.set(0, 0, 9);

    // --- Particle field -------------------------------------------------
    const COUNT = 1400;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const volt = new THREE.Color("#8B7CFF");
    const pulse = new THREE.Color("#3EE0FF");
    for (let i = 0; i < COUNT; i++) {
      const radius = 4 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      const tint = Math.random() < 0.55 ? volt : pulse;
      colors[i * 3] = tint.r;
      colors[i * 3 + 1] = tint.g;
      colors[i * 3 + 2] = tint.b;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- Wireframe icosahedron (hero form) -------------------------------
    const icoGeo = new THREE.WireframeGeometry(
      new THREE.IcosahedronGeometry(2.4, 1),
    );
    const icoMat = new THREE.LineBasicMaterial({
      color: 0x8b7cff,
      transparent: true,
      opacity: 0.5,
    });
    const icosahedron = new THREE.LineSegments(icoGeo, icoMat);
    scene.add(icosahedron);

    // --- Wireframe torus knot (secondary form) ---------------------------
    const knotGeo = new THREE.WireframeGeometry(
      new THREE.TorusKnotGeometry(1.05, 0.3, 110, 12),
    );
    const knotMat = new THREE.LineBasicMaterial({
      color: 0x3ee0ff,
      transparent: true,
      opacity: 0.32,
    });
    const knot = new THREE.LineSegments(knotGeo, knotMat);
    knot.position.set(3.6, -1.6, -1.8);
    scene.add(knot);

    // --- Mouse parallax --------------------------------------------------
    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove);

    const onResize = () => {
      const width = mount.clientWidth;
      const height = Math.max(mount.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    const renderFrame = (elapsedMs: number) => {
      icosahedron.rotation.y = elapsedMs * 0.00012;
      icosahedron.rotation.x = elapsedMs * 0.00006;
      knot.rotation.y = -elapsedMs * 0.0001;
      knot.rotation.z = elapsedMs * 0.00005;
      particles.rotation.y = elapsedMs * 0.00002;

      // Ease the camera toward the pointer offset for parallax depth.
      camera.position.x += (pointer.x * 0.9 - camera.position.x) * 0.045;
      camera.position.y += (-pointer.y * 0.6 - camera.position.y) * 0.045;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    let rafId = 0;
    if (prefersReduced) {
      // One composed static frame — no animation loop.
      renderFrame(1400);
    } else {
      const clock = new THREE.Clock();
      const loop = () => {
        renderFrame(clock.getElapsedTime() * 1000);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      particleGeo.dispose();
      particleMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="hero-canvas" aria-hidden="true" />;
}
