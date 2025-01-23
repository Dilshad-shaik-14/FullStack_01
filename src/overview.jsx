import React from 'react';
import Spline from '@splinetool/react-spline';

const Overview = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
      <Spline scene="https://prod.spline.design/mKEW0S6rqaIssuMa/scene.splinecode" />
      <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Click Me!</button>
      </div>
    </div>
  );
};

export default Overview;
