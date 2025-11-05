import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Link } from 'react-router-dom';

const Car = ({ position, speed, carRef }) => {
  useFrame(() => {
    if (carRef.current) {
      carRef.current.position.z += speed;  // Move forward
    }
  });
  return (
    <mesh ref={carRef} position={position}>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const Obstacle = ({ position }) => (
  <mesh position={position}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="orange" />
  </mesh>
);

const Road = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
    <planeGeometry args={[20, 1000]} />
    <meshStandardMaterial color="gray" />
  </mesh>
);

const GameScene = ({ onGameOver, score, setScore }) => {
  const carRef = useRef();
  const obstaclesRef = useRef([]);  // Ref for obstacles to access in useFrame
  const [carPos, setCarPos] = useState([0, 0, 0]);
  const [speed, setSpeed] = useState(0.2);
  const keys = useRef({});

  useEffect(() => {
    const handleKeyDown = (e) => { keys.current[e.code] = true; };
    const handleKeyUp = (e) => { keys.current[e.code] = false; };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((state) => {
    // Controls
    let newX = carPos[0];
    if (keys.current['ArrowLeft'] || keys.current['KeyA']) newX = Math.max(-4, carPos[0] - 0.1);
    if (keys.current['ArrowRight'] || keys.current['KeyD']) newX = Math.min(4, carPos[0] + 0.1);
    if (keys.current['ArrowUp'] || keys.current['KeyW']) setSpeed(0.3);
    else setSpeed(0.2);
    if (keys.current['Space']) setSpeed(0.5);  // Boost
    setCarPos([newX, 0, carPos[2]]);

    // Spawn obstacles
    if (Math.random() < 0.02) {
      const x = (Math.random() - 0.5) * 8;
      obstaclesRef.current.push({ pos: [x, 0, -50 - Math.random() * 100], id: Date.now() });
    }

    // Move obstacles
    obstaclesRef.current = obstaclesRef.current.map(obs => ({ 
      ...obs, 
      pos: [obs.pos[0], 0, obs.pos[2] + speed * 10] 
    }));

    // Remove old obstacles
    obstaclesRef.current = obstaclesRef.current.filter(obs => obs.pos[2] < 10);

    // Collision detection (fixed: use ref)
    if (carRef.current) {
      const carBox = new THREE.Box3().setFromObject(carRef.current);
      obstaclesRef.current.forEach(obs => {
        const obsMesh = state.scene.getObjectById(obs.id);  // Get mesh if exists
        if (obsMesh) {
          const obsBox = new THREE.Box3().setFromObject(obsMesh);
          if (carBox.intersectsBox(obsBox)) {
            onGameOver();
          }
        }
      });
    }

    setScore(score + 0.1);  // Increment score
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Road />
      <Stars />
      <Car ref={carRef} position={carPos} speed={speed} carRef={carRef} />
      {obstaclesRef.current.map(obs => <Obstacle key={obs.id} position={obs.pos} />)}
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

const Game = ({ onLogout, user }) => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const userName = user?.name || 'Player';

  const handleGameOver = () => {
    setGameOver(true);
  };

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-4">Car Racing Game 🚗💨</h1>
      <p className="text-white mb-4">Use Arrow Keys/WASD to drive! Dodge obstacles & score high!</p>
      <div className="w-full h-[70vh] bg-gray-900 rounded-lg relative">
        <Canvas camera={{ position: [0, 5, 5], fov: 75 }}>
          <GameScene onGameOver={handleGameOver} score={score} setScore={setScore} />
        </Canvas>
        <div className="absolute top-4 left-4 text-white text-2xl font-bold">
          Score: {Math.floor(score)}
        </div>
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg">
            <h2 className="text-3xl text-red-400 mb-4">Game Over!</h2>
            <p className="text-white mb-4">Final Score: {Math.floor(score)}</p>
            <button onClick={resetGame} className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Play Again
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 flex space-x-4">
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Back to Home</Link>
        <button onClick={onLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
      </div>
      <p className="text-white mt-4 text-sm">Built with Three.js – Showcasing 3D Web Skills! 🚀</p>
    </div>
  );
};

export default Game;