import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './AnnouncementBanner.css';

const AnnouncementBanner = ({ href, target }) => {
  const location = useLocation();

  const [items, setItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastShownTime, setLastShownTime] = useState(new Date());
  const [readyToInitialize, setReadyToInitialize] = useState(false);
  const [isVisible, setIsVisible] = useState(location.pathname === '/');

  const rotationTimerRef = useRef(null);
  const currentIndexRef = useRef(0);
  const lastShownRef = useRef(-1);
  const hasInitializedRef = useRef(false);
  const showSlideMs = 5000;

  console.log(`location.pathname: ${location.pathname} ...`);

  const startRotationTimer = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 👈 scrolls to top
    if (rotationTimerRef.current) clearInterval(rotationTimerRef.current);

    rotationTimerRef.current = setInterval(() => {
      const next = (currentIndexRef.current + 1) % items.length;
      const elapsed = new Date() - lastShownTime;
      console.log(`Rotation Timer Fired. currentIndex is ${next}, Displayed Time ${formatTime(elapsed)} ...`);
      currentIndexRef.current = next;
      setCurrentIndex(next);

      if (next > lastShownRef.current) {
        lastShownRef.current = next;
      }

      if (next === items.length - 1) {
        setTimeout(() => {
          setIsExpanded(false);
          clearInterval(rotationTimerRef.current);
          console.log('Banner collapsed after final slide.');
        }, showSlideMs);
      }
    }, showSlideMs);
  }, [items, lastShownTime]);
  
  // Load announcements
  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        console.log('Loading announcements.json ...');
        const res = await fetch(`${process.env.PUBLIC_URL}/assets/data/announcements.json`);
        const data = await res.json();
        setItems(data);
        console.log('Loading announcements.json ... done');
      } catch (err) {
        console.error('Error loading announcements:', err);
      }
    };

    loadAnnouncements();
  }, []);

  // Initialize timers once after items are loaded
  useEffect(() => {
    if (readyToInitialize && isVisible && !hasInitializedRef.current) {
      hasInitializedRef.current = true;

      let collapseMs = items[0]?.autoCollapseMs ?? 0;
      if (collapseMs < showSlideMs * items.length) {
        collapseMs = showSlideMs * items.length;
      }
      collapseMs += 1000;

      setCurrentIndex(0);
      currentIndexRef.current = 0;
      lastShownRef.current = -1;
      setLastShownTime(new Date());

      console.log('Starting rotationTimerRef ...');

      startRotationTimer(); // ✅ This ensures it actually starts
    }

    return () => {
      clearInterval(rotationTimerRef.current);
    };
  }, [items, readyToInitialize, isVisible, startRotationTimer]);

  useEffect(() => {
    console.log('Debug: items updated:', items.length);
    console.log('Debug: Is Visible:', isVisible);
    setReadyToInitialize(items.length > 1 && isVisible);
  }, [items, isVisible]);

  useEffect(() => {
    if (!isVisible && isExpanded) {
      setIsExpanded(false);
      clearInterval(rotationTimerRef.current);
    }
  }, [isVisible, isExpanded]);

  const formatTime = ms => {
    const totalSeconds = Math.floor(ms / 1000);
    const hh = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mm = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const ss = String(totalSeconds % 60).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  };

  const toggle = () => {
    console.log(`Toggling banner. Currently isExpanded: ${isExpanded}`);
    setIsExpanded(prev => {
      const next = !prev;
      if (next && items.length > 1) {
        setCurrentIndex(0);
        currentIndexRef.current = 0;
        lastShownRef.current = -1;
        setLastShownTime(new Date());
        hasInitializedRef.current = false; // Reinitialize timers
      } else {
        clearInterval(rotationTimerRef.current);
      }
      console.log(`Toggling banner. Setting to: ${next}`);
      return next;
    });
  };

  const previousSlide = () => {
    const prev = (currentIndexRef.current - 1 + items.length) % items.length;
    currentIndexRef.current = prev;
    setCurrentIndex(prev);
  };

  const nextSlide = () => {
    const next = (currentIndexRef.current + 1) % items.length;
    currentIndexRef.current = next;
    setCurrentIndex(next);
  };

  const pauseRotation = () => {
    clearInterval(rotationTimerRef.current);
  };

  const resumeRotation = () => {
    console.log('Resuming rotation...');
    setIsVisible(true);
    startRotationTimer(); // ✅ This ensures it actually starts
  };

  return (
    <div className={`announcement-container ${isExpanded ? 'expanded' : 'collapsed'}`} onClick={toggle}>
      <div className="announcement-wrapper">
        <strong className="announcement-header">What's New</strong>

        {isExpanded && (
          <>
            <div className="carousel-wrapper">
              {items.length > 0 ? (
                <>
                  <div
                    id="carousel"
                    onMouseOver={pauseRotation}
                    onMouseOut={resumeRotation}
                  >
                    <div
                      className="carousel-track"
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                      {items.map((announcement, i) => (
                        <div key={i} className="carousel-slide">
                          <p>
                            <strong>
                              {i + 1}/{items.length}: {announcement.title}
                            </strong>
                          </p>
                          <p>{announcement.message}</p>
                          <a href={announcement.linkTarget}>{announcement.linkText}</a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="carousel-indicators">
                    {items.map((_, i) => (
                      <span
                        key={i}
                        className={`indicator-dot ${i === currentIndex ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <p>No announcements available.</p>
              )}
            </div>

            <div className="carousel-controls">
              <button onClick={e => { e.stopPropagation(); previousSlide(); }}>‹</button>
              <button onClick={e => { e.stopPropagation(); nextSlide(); }}>›</button>
            </div>
          </>
        )}
      </div>

      <div className="announcement-link">
        <a href={href} target="_blank" rel="noopener noreferrer">{target}</a>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
