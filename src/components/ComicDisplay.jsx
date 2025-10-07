import React, { useState, useEffect } from 'react'
import { comicsData } from '../data/comics'
import './ComicDisplay.css'

const ComicDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(true)
  const [textVisible, setTextVisible] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const currentComic = comicsData[currentIndex]

  const handlePrevious = () => {
    if (isLoading || isTransitioning) return
    setIsTransitioning(true)
    setTextVisible(false)
    setIsLoading(true)
    setImageLoaded(false)
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : comicsData.length - 1))
    }, 200) // 缩短到200ms
  }

  const handleNext = () => {
    if (isLoading || isTransitioning) return
    setIsTransitioning(true)
    setTextVisible(false)
    setIsLoading(true)
    setImageLoaded(false)
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev < comicsData.length - 1 ? prev + 1 : 0))
    }, 200) // 缩短到200ms
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
    setIsLoading(false)
    setTextVisible(true)
    setIsTransitioning(false)
  }

  // 当currentIndex变化时，重置状态
  useEffect(() => {
    setImageLoaded(false)
    setTextVisible(false)
    setIsLoading(true)
    
    // 使用setTimeout确保loading状态在合理时间内结束
    const loadingTimeout = setTimeout(() => {
      setImageLoaded(true)
      setIsLoading(false)
      setTextVisible(true)
      setIsTransitioning(false)
    }, 50) // 缩短到100ms
    
    return () => {
      clearTimeout(loadingTimeout)
    }
  }, [currentIndex])

  return (
    <div className="comic-container">
      {/* 图片展示区域 */}
      <div className="image-section">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <div className="loading-text">小张等一下😊，图片在加载中...</div>
          </div>
        ) : (
          <img 
            src={currentComic.image} 
            alt={`漫画 ${currentIndex + 1}`}
            className={`comic-image ${imageLoaded ? 'fade-in' : 'fade-out'}`}
            onLoad={handleImageLoad}
            style={{ 
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }}
          />
        )}
      </div>

      {/* 文字旁白区域 */}
      <div className="narration-section">
        <div className="narration-content">
          <p 
            className={`narration-text ${textVisible ? 'fade-in-text' : 'fade-out-text'}`}
            style={{ 
              opacity: textVisible ? 1 : 0,
              transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
            }}
          >
            {currentComic.narration}
          </p>
        </div>
      </div>

      {/* 按钮控制区域 */}
      <div className="control-section">
        <button 
          className="control-btn prev-btn" 
          onClick={handlePrevious}
          disabled={comicsData.length <= 1 || isLoading || isTransitioning}
        >
          ← 上一页
        </button>
        <span className="page-indicator">
          {currentIndex + 1} / {comicsData.length}
        </span>
        <button 
          className="control-btn next-btn" 
          onClick={handleNext}
          disabled={comicsData.length <= 1 || isLoading || isTransitioning}
        >
          下一页 →
        </button>
      </div>
    </div>
  )
}

export default ComicDisplay
