"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState(new Date());
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [mouseTrail, setMouseTrail] = useState<Array<{x: number, y: number, id: number}>>([]);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [rippleEffect, setRippleEffect] = useState<Array<{x: number, y: number, id: number}>>([]);
  const [quantumParticles, setQuantumParticles] = useState<Array<{x: number, y: number, vx: number, vy: number, id: number}>>([]);
  const [neuralNetwork, setNeuralNetwork] = useState<Array<{x: number, y: number, connections: number[]}>>([]);
  const [dataStream, setDataStream] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / scrollHeight) * 100);
      setParallaxOffset(window.scrollY * 0.5);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add mouse trail effect
      setMouseTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-10); // Keep only last 10 positions
      });
    };

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Initialize quantum particles
    const particles = Array.from({length: 25}, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      id: i
    }));
    setQuantumParticles(particles);

    // Initialize neural network nodes
    const nodes = Array.from({length: 12}, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      connections: Array.from({length: 3}, () => Math.floor(Math.random() * 12))
    }));
    setNeuralNetwork(nodes);

    // Data stream effect
    const dataTimer = setInterval(() => {
      setDataStream(prev => {
        const chars = '01ABCDEF';
        return (prev + chars[Math.floor(Math.random() * chars.length)]).slice(-50);
      });
    }, 100);

    setIsMounted(true);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
      clearInterval(dataTimer);
    };
  }, []);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it Works" },
    { href: "#stats", label: "Statistics" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 40px rgba(147, 51, 234, 0.4); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes slide-in-top {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in-top {
          animation: slide-in-top 0.6s ease-out;
        }
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes aurora {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes float-3d {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          25% { transform: translateY(-20px) rotateX(5deg) rotateY(5deg); }
          50% { transform: translateY(-10px) rotateX(-5deg) rotateY(-5deg); }
          75% { transform: translateY(-15px) rotateX(3deg) rotateY(-3deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(147, 51, 234, 0.5); }
        }
        @keyframes trail {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.5); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes hologram {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes energy-wave {
          0% { transform: scaleX(0); opacity: 1; }
          50% { opacity: 0.5; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        @keyframes matrix {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes quantum-flux {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
          25% { transform: scale(1.2) rotate(90deg); opacity: 1; }
          50% { transform: scale(0.8) rotate(180deg); opacity: 0.5; }
          75% { transform: scale(1.1) rotate(270deg); opacity: 0.9; }
        }
        @keyframes neural-pulse {
          0%, 100% { stroke-width: 1; opacity: 0.3; }
          50% { stroke-width: 3; opacity: 0.8; }
        }
        @keyframes data-flow {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes cyber-grid {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        .animate-shimmer-fast {
          animation: shimmer-fast 0.8s ease-in-out;
        }
      `}</style>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      } relative overflow-hidden ${isMounted ? 'animate-slide-in-top' : ''}`} style={{ transform: `translateY(${parallaxOffset}px)` }}>
      
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        animation: 'cyber-grid 2s linear infinite'
      }}></div>
      
      {/* Advanced holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-30 animate-aurora" style={{ animationDuration: '8s' }}></div>
      
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Energy wave effect */}
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-70 animate-energy-wave origin-left"
        style={{ width: '100%', animationDelay: `${scrollProgress * 0.01}s` }}
      />
      {/* Interactive Background Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
          transition: 'background 0.1s ease-out'
        }}
      />
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={`aurora-${i}`}
            className="absolute w-96 h-96 opacity-20 animate-morph"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${['rgba(59, 130, 246, 0.3)', 'rgba(147, 51, 234, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(34, 197, 94, 0.3)', 'rgba(251, 146, 60, 0.3)'][i % 5]}, transparent)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
        {/* Matrix rain effect */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute text-green-400 text-xs font-mono opacity-30 animate-matrix"
            style={{
              left: `${(i * 6.66)}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Math.random().toString(2).substr(2, 8)}
          </div>
        ))}
        {/* Quantum particles */}
        {quantumParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-60 animate-quantum-flux"
            style={{
              left: particle.x,
              top: particle.y,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${2 + Math.random()}s`
            }}
          />
        ))}
        {/* Neural network connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          {neuralNetwork.map((node, i) => 
            node.connections.map((connectionIndex) => {
              const targetNode = neuralNetwork[connectionIndex];
              if (!targetNode) return null;
              return (
                <line
                  key={`${i}-${connectionIndex}`}
                  x1={node.x}
                  y1={node.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke="url(#neuralGradient)"
                  className="animate-neural-pulse"
                  style={{
                    animationDelay: `${(i + connectionIndex) * 0.2}s`,
                    animationDuration: `${1.5 + Math.random()}s`
                  }}
                />
              );
            })
          )}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {neuralNetwork.map((node, i) => (
            <circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="3"
              fill="url(#neuralGradient)"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </svg>
        {/* Data stream overlay */}
        <div className="absolute bottom-4 left-4 right-4 h-8 bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-400/30">
          <div className="text-xs font-mono text-cyan-400 p-2 animate-data-flow" style={{fontSize: '10px'}}>
            {dataStream}
          </div>
        </div>
      </div>
      
      {/* Mouse Trail Effect */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {mouseTrail.map((trail, index) => (
          <div
            key={trail.id}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            style={{
              left: trail.x - 6,
              top: trail.y - 6,
              animation: 'trail 1s ease-out forwards',
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </div>
      
      {/* Ripple Effects */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {rippleEffect.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute border-2 border-blue-400 rounded-full"
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
              width: 50,
              height: 50,
              animation: 'ripple 1s ease-out forwards'
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative" 
            onMouseEnter={() => setIsHoveringLogo(true)}
            onMouseLeave={() => setIsHoveringLogo(false)}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setRippleEffect(prev => [...prev, {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                id: Date.now()
              }]);
              setTimeout(() => {
                setRippleEffect(prev => prev.slice(1));
              }, 1000);
            }}
          >
            <div className={`w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 transform group-hover:rotate-6 shadow-lg group-hover:shadow-blue-500/25 animate-pulse-glow relative overflow-hidden animate-float-3d ${isHoveringLogo ? 'animate-hologram' : ''}`} style={{ animationDuration: '3s' }}>
              {/* Quantum field effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-2xl animate-quantum-flux" style={{ animationDuration: '1.5s' }}></div>
              {/* Energy core */}
              <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-xl animate-pulse"></div>
              <svg className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              {/* Inner shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer-fast"></span>
            </div>
            <div className="hidden sm:block relative">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 relative">
                  ShortLink
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
                </h1>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-xs font-mono text-blue-400 opacity-70">
                  {time.toLocaleTimeString()}
                </div>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 group-hover:translate-x-1 transition-transform">URL Shortener</p>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 group-hover:scale-110"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 relative">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 relative group overflow-hidden backdrop-blur-sm ${
                  hoveredNav === item.href 
                    ? 'text-white bg-gradient-to-r from-blue-600/30 to-purple-600/30 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10'
                }`}
                onClick={() => setActiveSection(item.href)}
                onMouseEnter={() => setHoveredNav(item.href)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Gradient underline */}
                <span className={`absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 ${
                  hoveredNav === item.href ? 'w-3/4 left-1/8' : 'group-hover:w-1/2 group-hover:left-1/4'
                }`}></span>
                
                {/* Enhanced shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer-fast"></span>
                
                {/* Border glow */}
                <span className={`absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-400/30 transition-all duration-300 ${
                  hoveredNav === item.href ? 'border-blue-400/50' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 rounded-xl transition-all duration-300 relative overflow-hidden group backdrop-blur-sm border border-white/10 hover:border-blue-400/30"
            >
              <Link href="/auth/signin" className="relative z-10 flex items-center gap-2">
                Sign In
                <span className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
              </Link>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer-fast"></span>
            </Button>
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 relative overflow-hidden group animate-pulse-glow"
            >
              <Link href="/auth/signup" className="relative z-10 flex items-center gap-2">
                Get Started Free
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer-fast"></span>
                {/* Particle effects */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '0.5s'}}></div>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 relative group backdrop-blur-sm border border-slate-700/50">
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </span>
                <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
              {/* Energy ring */}
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-lg animate-energy-wave"></div>
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 transition-all duration-500 ease-in-out opacity-100 translate-y-0">
            <div className="px-4 py-6 space-y-4 relative overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={`mobile-particle-${i}`}
                  className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float-3d"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:shadow-lg relative overflow-hidden group ${
                    activeSection === item.href.slice(1) ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white' : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer-fast"></div>
                </Link>
              ))}
              <div className="pt-4 space-y-3 relative z-10">
                <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)} className="block w-full text-center text-gray-300 hover:text-white transition-all duration-300 px-4 py-3 rounded-lg hover:bg-slate-800/50 backdrop-blur-sm border border-transparent hover:border-slate-600 relative overflow-hidden group">
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden animate-pulse-glow">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Free
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full hover:translate-x-full transition-transform duration-1000 animate-shimmer-fast"></span>
                </Link>
              </div>
            </div>
          </div>
        )}</div>
      </div>
    </header>
    
    {/* Futuristic content spacer with holographic effects */}
    <div className="h-20 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-fast" style={{animationDuration: '3s'}}></div>
      {/* Binary code running along the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400/20 via-cyan-400/20 to-blue-400/20 overflow-hidden">
        <div className="text-xs font-mono text-green-400/40 whitespace-nowrap animate-data-flow" style={{fontSize: '8px', lineHeight: '4px'}}>
          01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100000 01110011 01101000 01101111 01110010 01110100 01101100 01101001 01101110 01101011
        </div>
      </div>
    </div>
    
    {/* Spacer to prevent content from being hidden behind fixed header */}
    <div className="h-20 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
  </>;
}