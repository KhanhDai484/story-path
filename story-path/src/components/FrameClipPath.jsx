const FrameClipPath = () => {
  // Tọa độ dựa trên inner frame của FrameSVG (viewBox 300x380)
  // Chia cho 300 (width) và 380 (height) để có giá trị 0-1
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <clipPath id="frameClipPath" clipPathUnits="objectBoundingBox">
          <path d="
            M 0.127 0.118
            L 0.127 0.074
            L 0.183 0.047
            L 0.333 0.042
            Q 0.5 0.026, 0.667 0.042
            L 0.817 0.047
            L 0.873 0.074
            L 0.873 0.118
            L 0.917 0.153
            L 0.933 0.184
            L 0.933 0.816
            L 0.917 0.847
            L 0.873 0.882
            L 0.873 0.926
            L 0.817 0.953
            L 0.667 0.958
            Q 0.5 0.974, 0.333 0.958
            L 0.183 0.953
            L 0.127 0.926
            L 0.127 0.882
            L 0.083 0.847
            L 0.067 0.816
            L 0.067 0.184
            L 0.083 0.153
            Z
          " />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FrameClipPath;
