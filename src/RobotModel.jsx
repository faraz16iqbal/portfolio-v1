/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/robot/scene.gltf -r public
Author: KissyMissyAndPJLover1221 (https://sketchfab.com/KissyMissyAndPJLover1221)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/boogie-bot-poppy-playtime-54bb1b3081b248e39ff571de9d79d43b
Title: Boogie Bot - Poppy Playtime
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function RobotModel(props) {
  const { nodes, materials } = useGLTF("/robot/scene.gltf");
  return (
    <group {...props} dispose={null} scale={1.4}>
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_19.geometry}
        material={materials.material_0}
        rotation={[0, 0, -0.65]}
      />
      <mesh
        geometry={nodes.Object_21.geometry}
        material={materials.material_0}
        rotation={[0, 0, -0.65]}
      />
      <mesh
        geometry={nodes.Object_23.geometry}
        material={materials.material_0}
        rotation={[0, 0, -0.61]}
      />
      <mesh
        geometry={nodes.Object_25.geometry}
        material={materials.material_0}
        rotation={[0, 0, -0.61]}
      />
      <mesh
        geometry={nodes.Object_27.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_29.geometry}
        material={materials.material_0}
        rotation={[0, 0, 2.53]}
      />
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials.material_0}
        rotation={[0, 0, -0.65]}
      />
      <mesh
        geometry={nodes.Object_33.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_35.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_37.geometry}
        material={materials.material_0}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Object_39.geometry}
        material={materials.material_0}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Object_41.geometry}
        material={materials.material_0}
        rotation={[0, 0, -0.61]}
      />
      <mesh
        geometry={nodes.Object_43.geometry}
        material={materials.material_0}
        rotation={[0, 0, -0.61]}
      />
      <mesh
        geometry={nodes.Object_45.geometry}
        material={materials.material_0}
      />
    </group>
  );
}

useGLTF.preload("/robot/scene.gltf");