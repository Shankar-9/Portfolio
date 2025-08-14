import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import './JourneyBook.css';

interface JourneyItem {
  year: string;
  title: string;
  desc: string;
}

interface JourneyBookProps {
  journeyData: JourneyItem[];
}

const JourneyBook: React.FC<JourneyBookProps> = ({ journeyData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isTurning, setIsTurning] = useState(false);

  const totalPages = Math.ceil(journeyData.length / 2);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const nextPage = () => {
    if (isTurning) return;
    setIsTurning(true);
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsTurning(false), 800);
  };

  const prevPage = () => {
    if (isTurning) return;
    setIsTurning(true);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsTurning(false), 800);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const getPageItems = (pageIndex: number) => {
    const startIndex = pageIndex * 2;
    return journeyData.slice(startIndex, startIndex + 2);
  };

  return (
    <motion.div
      className="journey-book-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="journey-title">My Journey</h3>
      
      <div className="book-wrapper">
        <div className="book">
          {/* Book spine */}
          <div className="book-spine"></div>
          
          {/* Book cover */}
          <motion.div 
            className="book-cover"
            animate={{ rotateY: isTurning ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cover-content">
              <h4>My Story</h4>
              <p>Click to open</p>
            </div>
          </motion.div>

          {/* Book pages */}
          <div className="book-pages">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="page-spread"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.4, 0.0, 0.2, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
              >
                {/* Wind effect particles */}
                <div className="wind-particles">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="particle"
                      initial={{ x: -20, y: Math.random() * 100, opacity: 0 }}
                      animate={{ 
                        x: 400, 
                        y: Math.random() * 100, 
                        opacity: [0, 1, 0],
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                  ))}
                </div>

                {/* Left page */}
                <div className="page left-page">
                  {getPageItems(currentPage)[0] && (
                    <motion.div
                      className="journey-item"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <div className="item-year">{getPageItems(currentPage)[0].year}</div>
                      <h4 className="item-title">{getPageItems(currentPage)[0].title}</h4>
                      <p className="item-desc">{getPageItems(currentPage)[0].desc}</p>
                    </motion.div>
                  )}
                </div>

                {/* Right page */}
                <div className="page right-page">
                  {getPageItems(currentPage)[1] && (
                    <motion.div
                      className="journey-item"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <div className="item-year">{getPageItems(currentPage)[1].year}</div>
                      <h4 className="item-title">{getPageItems(currentPage)[1].title}</h4>
                      <p className="item-desc">{getPageItems(currentPage)[1].desc}</p>
                    </motion.div>
                  )}
                </div>

                {/* Page curl effect */}
                <div className="page-curl"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Book controls */}
        <div className="book-controls">
          <button 
            className="control-btn prev-btn"
            onClick={prevPage}
            disabled={isTurning}
          >
            <FaChevronLeft />
          </button>
          
          <button 
            className="control-btn auto-play-btn"
            onClick={toggleAutoPlay}
          >
            {isAutoPlaying ? <FaPause /> : <FaPlay />}
          </button>
          
          <button 
            className="control-btn next-btn"
            onClick={nextPage}
            disabled={isTurning}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Page indicators */}
        <div className="page-indicators">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`page-dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default JourneyBook;
