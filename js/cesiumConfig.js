const cesiumAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4OWI2MGQ1Ny03YTk3LTRkN2EtYjFiYy01MmM1ZmE0ZWY5ZTYiLCJpZCI6NDA5MzMwLCJpYXQiOjE3NzQ1MDc4MzR9.JmB210PpAU6u-jo8S50wdHbNQ8u-6qyUZFy9gnZDhQQ";

const targetLocation = {
    destination: Cesium.Cartesian3.fromDegrees(-73.966574, 40.683479, 50),
    orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
    },
};

const url = {
    'treeGlb': './glbData/tree.glb'
}

export { cesiumAccessToken, targetLocation, url };