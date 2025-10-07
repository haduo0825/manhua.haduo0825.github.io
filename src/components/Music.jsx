import React, { useState, useRef, useEffect } from 'react'
import './Music.css'
import xiaoyu from '../assets/xiaoyu.mp3'

function Music() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    // 尝试自动播放
    const playAudio = async () => {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('自动播放失败，需要用户交互：', error)
        setIsPlaying(false)
      }
    }

    setTimeout(() => {
      playAudio()
    }, 1000) // 延迟1秒后尝试自动播放
    // 清理函数
    return () => {
      audioRef.current.pause()
      setIsPlaying(false)
    }
    
  }, []) 

  return (
    <>
      <button 
        className={`music-btn ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
      >
        <span className="music-icon"></span>
      </button>
      <audio
        ref={audioRef}
        src={xiaoyu}
        autoPlay
        onLoad={togglePlay}
        loop
      />
    </>
  )
}

export default Music