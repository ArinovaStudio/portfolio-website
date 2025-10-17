"use client"

import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Ring } from './Ring'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

function ThreeD() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className='w-full h-full'>
      <Canvas>
        <PerspectiveCamera 
          name="Camera" 
          makeDefault={true} 
          far={1000} 
          near={0.2} 
          fov={isMobile ? 49 : 24.895} 
          position={[-5.863, 4.164, 17.658]} 
          rotation={[-0.245, -0.309, -0.076]} 
        />
        <Ring />
        <OrbitControls enableDamping enableZoom={false} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}

export default ThreeD