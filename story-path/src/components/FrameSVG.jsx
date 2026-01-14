const FrameSVG = ({ className, size = "large" }) => {
  const isSmall = size === "small";
  
  return (
    <svg 
      className={className}
      viewBox="0 0 300 380" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Outer frame */}
      <path
        d="M 30 40
           L 30 20
           L 50 10
           L 100 8
           Q 150 2, 200 8
           L 250 10
           L 270 20
           L 270 40
           L 285 55
           L 290 70
           L 290 310
           L 285 325
           L 270 340
           L 270 360
           L 250 370
           L 200 372
           Q 150 378, 100 372
           L 50 370
           L 30 360
           L 30 340
           L 15 325
           L 10 310
           L 10 70
           L 15 55
           Z"
        stroke="#9a9590"
        strokeWidth={isSmall ? "2" : "3"}
        fill="none"
      />
      
      {/* Inner frame */}
      <path
        d="M 38 45
           L 38 28
           L 55 18
           L 100 16
           Q 150 10, 200 16
           L 245 18
           L 262 28
           L 262 45
           L 275 58
           L 280 70
           L 280 310
           L 275 322
           L 262 335
           L 262 352
           L 245 362
           L 200 364
           Q 150 370, 100 364
           L 55 362
           L 38 352
           L 38 335
           L 25 322
           L 20 310
           L 20 70
           L 25 58
           Z"
        stroke="#7a7570"
        strokeWidth={isSmall ? "1.5" : "2"}
        fill="none"
      />

      {/* Top arch curve */}
      <path
        d="M 80 8 Q 150 -2, 220 8"
        stroke="#9a9590"
        strokeWidth={isSmall ? "1.5" : "2"}
        fill="none"
      />
      
      {/* Bottom arch curve */}
      <path
        d="M 80 372 Q 150 382, 220 372"
        stroke="#9a9590"
        strokeWidth={isSmall ? "1.5" : "2"}
        fill="none"
      />

      {/* Corner details - top left */}
      <line x1="30" y1="40" x2="38" y2="45" stroke="#8a8580" strokeWidth="1.5" />
      <line x1="30" y1="20" x2="38" y2="28" stroke="#8a8580" strokeWidth="1.5" />
      
      {/* Corner details - top right */}
      <line x1="270" y1="40" x2="262" y2="45" stroke="#8a8580" strokeWidth="1.5" />
      <line x1="270" y1="20" x2="262" y2="28" stroke="#8a8580" strokeWidth="1.5" />
      
      {/* Corner details - bottom left */}
      <line x1="30" y1="340" x2="38" y2="335" stroke="#8a8580" strokeWidth="1.5" />
      <line x1="30" y1="360" x2="38" y2="352" stroke="#8a8580" strokeWidth="1.5" />
      
      {/* Corner details - bottom right */}
      <line x1="270" y1="340" x2="262" y2="335" stroke="#8a8580" strokeWidth="1.5" />
      <line x1="270" y1="360" x2="262" y2="352" stroke="#8a8580" strokeWidth="1.5" />

      {/* Side connectors */}
      <line x1="15" y1="55" x2="25" y2="58" stroke="#8a8580" strokeWidth="1.5" />
      <line x1="285" y1="55" x2="275" y2="58" stroke="#8a8580" strokeWidth="1.5" />
      <line x1="15" y1="325" x2="25" y2="322" stroke="#8a8580" strokeWidth="1.5" />
      <line x1="285" y1="325" x2="275" y2="322" stroke="#8a8580" strokeWidth="1.5" />
    </svg>
  );
};

export default FrameSVG;
