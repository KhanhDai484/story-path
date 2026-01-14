const FrameBorder = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 400 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Outer frame */}
      <path
        d="M 60 10 L 340 10 L 380 30 L 390 60 L 390 440 L 380 470 L 340 490 L 60 490 L 20 470 L 10 440 L 10 60 L 20 30 Z"
        stroke="#a89968"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Inner frame */}
      <path
        d="M 70 20 L 330 20 L 370 40 L 380 70 L 380 430 L 370 460 L 330 480 L 70 480 L 30 460 L 20 430 L 20 70 L 30 40 Z"
        stroke="#a89968"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Top decorative curves */}
      <path
        d="M 100 10 Q 200 5 300 10"
        stroke="#a89968"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Bottom decorative curves */}
      <path
        d="M 100 490 Q 200 495 300 490"
        stroke="#a89968"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Corner decorations */}
      {/* Top left */}
      <path d="M 60 10 L 30 40" stroke="#a89968" strokeWidth="2" />
      <path d="M 20 30 L 50 30" stroke="#a89968" strokeWidth="1.5" />
      
      {/* Top right */}
      <path d="M 340 10 L 370 40" stroke="#a89968" strokeWidth="2" />
      <path d="M 380 30 L 350 30" stroke="#a89968" strokeWidth="1.5" />
      
      {/* Bottom left */}
      <path d="M 60 490 L 30 460" stroke="#a89968" strokeWidth="2" />
      <path d="M 20 470 L 50 470" stroke="#a89968" strokeWidth="1.5" />
      
      {/* Bottom right */}
      <path d="M 340 490 L 370 460" stroke="#a89968" strokeWidth="2" />
      <path d="M 380 470 L 350 470" stroke="#a89968" strokeWidth="1.5" />
    </svg>
  );
};

export default FrameBorder;
