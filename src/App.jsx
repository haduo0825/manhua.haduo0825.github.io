import React, { useState, useEffect } from 'react'
import ComicDisplay from './components/ComicDisplay'
import './App.css'
import Music from './components/Music'
import { trackExposure, trackClose } from './utils/track';

function App() {
  useEffect(() => {
    // 页面加载时上报
    trackExposure();

    // 页面关闭时上报
    const handleBeforeUnload = () => {
      trackClose();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // 清理函数
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    <div className="app">
      <ComicDisplay />
      <Music />
    </div>
  )
}

export default App
