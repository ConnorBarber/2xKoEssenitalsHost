import { useState, useEffect } from 'react';
import './InstallPWA.css';

function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSTooltip, setShowIOSTooltip] = useState(false);

  useEffect(() => {
    // Check if it's iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    
    if (isIOSDevice && !isInStandaloneMode) {
      setIsIOS(true);
      setShowInstall(true);
    }

    // Listen for the beforeinstallprompt event (Android/Desktop)
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // Hide if already installed
    window.addEventListener('appinstalled', () => {
      setShowInstall(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSTooltip(!showIOSTooltip);
      return;
    }

    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowInstall(false);
    }
    setDeferredPrompt(null);
  };

  if (!showInstall) return null;

  return (
    <div className="install-pwa-container">
      <button className="install-pwa-button" onClick={handleInstallClick}>
        <i className="fa-solid fa-download"></i>
        Install App
      </button>
      {isIOS && showIOSTooltip && (
        <div className="install-pwa-tooltip">
          Tap <i className="fa-solid fa-arrow-up-from-bracket"></i> then "Add to Home Screen"
        </div>
      )}
    </div>
  );
}

export default InstallPWA;
