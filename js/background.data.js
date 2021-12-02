const themes = [
    {forestInside: {
    thumbnail: k,
    variants: {
        default: "https://dl.dropbox.com/s/qzjg47ll62ifini/inside.mp4",
        rain_forest: "https://dl.dropbox.com/s/98a9to886vld78q/inside-rain.mp4",
        default_pixel: "https://dl.dropbox.com/s/a1gfyp5wai3t526/inside-pix.mp4",
        rain_forest_pixel: "https://dl.dropbox.com/s/2okfwui2lktxii6/inside-rain-pix.mp4"
    },
    actions: [{
        position: [70, 30],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest"
    }, {
        position: [15, 20],
        title: "Bird chirping",
        type: "sound",
        effect: "birds"
    }, {
        position: [15, 85],
        title: "Open mixer",
        type: "open-mixer"
    }]
},
forestOutside: {
    thumbnail: N,
    variants: {
        default: "https://dl.dropbox.com/s/pd2xie4ukoblol4/outside.mp4",
        rain_forest: "https://dl.dropbox.com/s/eyay1hn35qhs2p4/outside-rain.mp4",
        default_pixel: "https://dl.dropbox.com/s/hs4y2na3vjpqcq7/outside-pix.mp4",
        rain_forest_pixel: "https://dl.dropbox.com/s/6lx3c7595mzj674/outside-rain-pix.mp4"
    },
    actions: [{
        position: [70, 70],
        title: "River",
        type: "sound",
        effect: "river"
    }, {
        position: [10, 50],
        title: "Bird chirping",
        type: "sound",
        effect: "birds"
    }, {
        position: [67, 12],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest"
    }]
},
vanInside: {
    thumbnail: w,
    variants: {
        default: "https://dl.dropbox.com/s/o58c53leq4ap229/van.mp4",
        rain_forest: "https://dl.dropbox.com/s/j84khggevr2p76z/van-rain.mp4"
    },
    actions: [{
        position: [50, 30],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest"
    }, {
        position: [55, 20],
        title: "Forest Sound",
        type: "sound",
        effect: "forest"
    }, {
        position: [80, 85],
        title: "Open mixer",
        type: "open-mixer"
    }]
},
vanOutside: {
    thumbnail: S,
    variants: {
        default: "https://dl.dropbox.com/s/9y121oldwb96psv/van-out.mp4",
        fire: "https://dl.dropbox.com/s/pdif5zjq4rcts97/van-out-fire.mp4"
    },
    actions: [{
        position: [10, 20],
        title: "Forest sound",
        type: "sound",
        effect: "forest"
    }, {
        position: [42, 78],
        title: "Campfire sound",
        type: "sound",
        effect: "fire"
    }, {
        position: [61, 78],
        title: "Open mixer",
        type: "open-mixer"
    }]
},
cafeInside: {
    thumbnail: T,
    variants: {
        default: "https://dl.dropbox.com/s/whvrdr8ewta9xui/inside.mp4",
        default_night: "https://dl.dropbox.com/s/tcyv7w9af5w1gk0/inside-night.mp4",
        rain_street_night: "https://dl.dropbox.com/s/bvcoqkst8prq4j6/inside-night-rain.mp4",
        rain_street: "https://dl.dropbox.com/s/zspvt3qsu0u2q3r/inside-rain.mp4"
    },
    actions: [{
        position: [20, 38],
        title: "City Rain",
        type: "sound",
        effect: "rain_street"
    }, {
        position: [50, 70],
        title: "People Talks",
        type: "sound",
        effect: "people"
    }, {
        position: [26, 65],
        title: "Open mixer",
        type: "open-mixer"
    }]
},
cafeOutside: {
    thumbnail: E,
    variants: {
        default: "https://dl.dropbox.com/s/n4qa2c81sktbthq/outside.mp4",
        rain_street: "https://dl.dropbox.com/s/f4xhh0bcp4jwyss/outside-rain.mp4",
        default_night: "https://dl.dropbox.com/s/jlmvyhvgka774x2/outside-night.mp4",
        rain_street_night: "https://dl.dropbox.com/s/mcyp1s69pdh8r10/outside-night-rain.mp4"
    },
    actions: [{
        position: [75, 80],
        title: "City Traffic",
        type: "sound",
        effect: "city"
    }, {
        position: [3, 35],
        title: "City Rain",
        type: "sound",
        effect: "rain_street"
    }, {
        position: [60, 65],
        title: "Open mixer",
        type: "open-mixer"
    }]
},
summerInside: {
    thumbnail: C,
    variants: {
        default: "https://dl.dropbox.com/s/mnyl9rk3sv1nmoo/summer.mp4",
        storm: "https://dl.dropbox.com/s/vmkx413rac41n7r/summer-rain.mp4"
    },
    actions: [{
        position: [30, 25],
        title: "Summer storm",
        type: "sound",
        effect: "storm"
    }, {
        position: [65, 51],
        title: "Open mixer",
        type: "open-mixer"
    }, {
        position: [60, 45],
        title: "Fan",
        type: "sound",
        effect: "fan"
    }]
},
summerOutside: {
    thumbnail: _,
    variants: {
        default: "https://dl.dropbox.com/s/8yr8635uxjsetzw/summer-out.mp4",
        storm: "https://dl.dropbox.com/s/6ew2vuosdco5pib/summer-out-rain.mp4",
        default_pixel: "https://dl.dropbox.com/s/nqzpy7wlvwm018o/summer-out-pixel.mp4",
        storm_pixel: "https://dl.dropbox.com/s/15ner29s9kcu4f9/summer-out-rain-pixel.mp4"
    },
    actions: [{
        position: [75, 80],
        title: "Sea Waves",
        type: "sound",
        effect: "waves"
    }, {
        position: [85, 15],
        title: "Summer storm",
        type: "sound",
        effect: "storm"
    }, {
        position: [19, 63],
        title: "Open mixer",
        type: "open-mixer"
    }]
},
oceanInside: {
    thumbnail: A,
    variants: {
        default: "https://dl.dropbox.com/s/wjc83vxnod8nik4/ocean-tales.mp4",
        storm: "https://dl.dropbox.com/s/04q5v4tnxp7qta8/ocean-tales-rain.mp4"
    },
    actions: [{
        position: [8, 59],
        title: "Wind",
        type: "sound",
        effect: "wind"
    }, {
        position: [60, 70],
        title: "Open mixer",
        type: "open-mixer"
    }, {
        position: [59, 31],
        title: "Summer Storm",
        type: "sound",
        effect: "storm"
    }]
},
oceanOutside: {
    thumbnail: P,
    variants: {
        default: "https://dl.dropbox.com/s/vc6nrhownyopznc/ocean-tales-out.mp4",
        storm: "https://dl.dropbox.com/s/4qcryowdcvfxchv/ocean-tales-out-rain.mp4"
    },
    actions: [{
        position: [8, 15],
        title: "Wind",
        type: "sound",
        effect: "wind"
    }, {
        position: [42, 64],
        title: "Ocean",
        type: "sound",
        effect: "ocean"
    }, {
        position: [48, 13],
        title: "Summer Storm",
        type: "sound",
        effect: "storm"
    }]
}
}
, V = [{
_id: "forest_house",
thumbnail: O,
name: "Forest House",
scenes: [L.forestInside, L.forestOutside],
effects: ["rain_forest", "birds", "river"]
}, {
_id: "ocean_tale",
thumbnail: g,
name: "Ocean Tales",
scenes: [L.oceanInside, L.oceanOutside],
effects: ["ocean", "wind", "storm"],
premium: !0
}
]]