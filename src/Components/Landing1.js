import Spline_one from './Spline_ui/Ui_toggle';
import Spline_1_con from './subpart/Spline_one_content';

export default function Landing1() {
    return (
      <div style={styles.root}>
        {/* Background */}
        <div style={styles.bg}>
          <Spline_one />
        </div>
  
        {/* Overlay */}
        <div style={styles.overlay}>
          <Spline_1_con />
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
  