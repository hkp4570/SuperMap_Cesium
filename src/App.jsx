import React, { useEffect } from 'react';

function App() {
	useEffect(() => {
		if (window.Cesium) {
			const viewer = new window.Cesium.Viewer('cesiumContainer', {});
		}
	}, []);
	return <div id='cesiumContainer'></div>;
}

export default App;
