import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import { Suspense } from 'react'
import Lights from './lights';
import IPhone from './iPhone';
import * as Three from 'three';
import Loader from './loader';

interface MV {
    index: number;
    groupRef: any;
    gsapType: string;
    controlRef: any;
    setRotationState: any;
    item: any;
    size: string;
}

const ModelView = ({ controlRef, groupRef, gsapType, index, item, setRotationState, size }: MV) => {
  return (
    <View
        index={index}
        id={gsapType}
        className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        <Lights />

        <OrbitControls 
            makeDefault 
            ref={controlRef} 
            enableZoom={false}
            enablePan={false} 
            rotateSpeed={0.4} 
            target={new Three.Vector3(0, 0, 0) as any} 
            onEnd={() => { setRotationState(controlRef.current.getAzimuthalAngle()) }}
        />

        <group ref={groupRef} name={index === 1 ? 'small' : 'large'} position={[0, 0, 0]}>
            <Suspense fallback={<Loader />}>
                <IPhone 
                    scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                    item={item}
                    size={size}
                />
            </Suspense>
        </group>
    </View>
  )
}

export default ModelView
