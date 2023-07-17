import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../CanvasLoader';

const Laptop = () => {

  const computer = useGLTF('./laptop/scene.gltf');

  return (
    <mesh>
        
        <hemisphereLight intensity={0.15} groundColor="black"/>
        <spotLight position={[-20, 50, 10]} angle={0.12}  penumbra={1}
                    intensity={0.2}  castShadow   shadow-mapSize={1024}  />

        <primitive object={computer.scene}
                scale={0.7}
                position={[0, -0.00, -0.5]}
                rotation={[0.1, 0.9, -0.1]}
        />
    </mesh>
  )
}

const LaptopCanvas = () => {

    return(
        <Canvas frameloop='demand' shadows
         camera={{ position: [15, 5, 5], fov: 25 }}
         gl={{ preserveDrawingBuffer: true }}>
            <Suspense  fallback={<CanvasLoader/>}>
                <OrbitControls
                     enableZoom={false}/>
                <Laptop/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default LaptopCanvas