// "use client";

// import * as THREE from 'three'
// import React, { useEffect, useRef } from 'react'
// import { useGLTF, useAnimations } from '@react-three/drei'
// import { GLTF } from 'three-stdlib'

// type ActionName = 'ringAnimation' | 'SphereAction' | 'Camera' | 'TriLamp-Back' | 'TriLamp-Fill' | 'TriLamp-Key'

// interface GLTFAction extends THREE.AnimationClip {
//   name: ActionName
// }

// type GLTFResult = GLTF & {
//   nodes: {
//     ring: THREE.Mesh
//     Sphere: THREE.Mesh
//   }
//   materials: {
//     black: THREE.MeshStandardMaterial
//     inner: THREE.MeshStandardMaterial
//   }
//   animations: GLTFAction[]
// }

// export function Ring(props: JSX.IntrinsicElements['group']) {
//   const group = React.useRef<THREE.Group>()
//   const { nodes, materials, animations } = useGLTF('/ring.glb') as GLTFResult;
//   const { actions } = useAnimations(animations, group)

//   const sphereRef = useRef()
//   useEffect(() => {
//     const action = actions.ringAnimation?.play()
//   if (action) {
//     action.reset();
//     action.setLoop(THREE.LoopRepeat, Infinity); // 🔁 infinite smooth loop
//     action.clampWhenFinished = false;
//     action.crossFadeFrom(action, 0.2, false);
//     action.play();
//     action.timeScale = 0.2;                     // your desired speed
//   }
//   }, []);

//   useEffect(() => {
//       if (sphereRef.current) {
//     sphereRef.current?.material.color.set("silver");
//   }
//   }, [])
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <group name="TriLamp-Back" position={[-2.4, 0.506, -5.909]} rotation={[-3.056, -0.385, -3.109]} />
//         <group name="TriLamp-Fill" position={[1.351, 6.764, 3.695]} rotation={[-1.071, 0.174, 0.306]} />
//         <group name="TriLamp-Key" position={[-4.153, -4.473, 5.05]} rotation={[0.725, -0.552, 0.435]} />
//         <mesh name="ring" geometry={nodes.ring.geometry} material={materials.black} />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/ring.glb')

"use client";

import * as THREE from "three";
import React, { JSX, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import gsap from "gsap";

type ActionName =
  | "ringAnimation"
  | "SphereAction"
  | "Camera"
  | "TriLamp-Back"
  | "TriLamp-Fill"
  | "TriLamp-Key";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    ring: THREE.Mesh;
    Sphere: THREE.Mesh;
  };
  materials: {
    black: THREE.MeshStandardMaterial;
    inner: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Ring(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const sphereRef = useRef<any>(null);
  const { nodes, materials, animations } = useGLTF("/ring.glb") as any | GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions.ringAnimation;
    if (!action || !group.current) return;

    // Reset and prepare the animation
    action.reset();
    action.setLoop(THREE.LoopRepeat, Infinity);
    action.clampWhenFinished = false;
    action.play();
    action.timeScale = 0; // start paused

    // Intro animation timeline
    const tl = gsap.timeline({ delay: 2 }); // 2s delay before intro

    // 1️⃣ Scale + rotate in over 2s
    tl.to(group.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 2,
      ease: "power3.out",
    });
    tl.to(
      group.current.rotation,
      { y: "+=6.283", duration: 2, ease: "power3.out" },
      "<"
    ); // rotate 360° in parallel

    // 2️⃣ Burst animation speed for 0.5s
    tl.call(() => {
      action.timeScale = 1;
    });
    tl.to({}, { duration: 0.5 }); // wait 0.5s

    // 3️⃣ Smooth slowdown to 0.2
    tl.to({}, {
      duration: 1,
      onUpdate: function () {
        action.timeScale -= (action.timeScale - 0.2) * 0.1;
      }
    });
  }, [actions]);

  // Silver sphere
  useEffect(() => {
    if (sphereRef.current) {
      sphereRef.current.material.color.set("#ffffff");
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null} scale={[0, 0, 0]}>
      <group name="Scene">
        <group
          name="TriLamp-Back"
          position={[-2.4, 0.506, -5.909]}
          rotation={[-3.056, -0.385, -3.109]}
        />
        <group
          name="TriLamp-Fill"
          position={[1.351, 6.764, 3.695]}
          rotation={[-1.071, 0.174, 0.306]}
        />
        <group
          name="TriLamp-Key"
          position={[-4.153, -4.473, 5.05]}
          rotation={[0.725, -0.552, 0.435]}
        />
        <mesh
          name="ring"
          geometry={nodes.ring.geometry}
          material={materials.black}
        />
   <mesh ref={sphereRef} name="Sphere" geometry={nodes.Sphere.geometry} material={materials.inner}  scale={1.35} />

      </group>
    </group>
  );
}

useGLTF.preload("/ring.glb");
