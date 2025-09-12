import SplineOne from './SplineUi/UiToggle';
import Spline1Con from './subpart/SplineOneContent';

export default function Landing1() {
    return (
      <div style={styles.root}>
        {/* Background */}
        <div style={styles.bg}>
          <SplineOne />
        </div>
  
        {/* Overlay */}
        <div style={styles.overlay}>
          <Spline1Con />
        </div>
      </div>
    );
  }
  
  const styles = {
    root: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    },
    bg: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 24px',
      pointerEvents: 'none', // ⚡ This lets pointer events pass through to the Spline background
    },
  };
  