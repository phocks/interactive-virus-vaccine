const animate = ks => {
  const tl = ks
    .animate(
      "#All",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M185.7,1077.7L-139.6,1651.6"
        }
      ],
      "#Macrophage",
      [
        {
          p: "mpath",
          t: [4000, 5000],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M290.6,553.7L122.6,684"
        },
        { p: "opacity", t: [4000, 5000], v: [1, 0], e: [[0], [0]] }
      ],
      "#Cell",
      [
        {
          p: "mpath",
          t: [5000, 7000],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M684.7,-470.7L670.1,-58.5"
        },
        {
          p: "rotate",
          t: [5000, 7000],
          v: [14, 50],
          e: [[1, 0, 0, 0.6, 1], [0]]
        },
        {
          p: "opacity",
          t: [5000, 6000, 9000, 10000],
          v: [0, 1, 1, 0],
          e: [[0], [0], [0], [0]]
        }
      ],
      "#T-Cell",
      [
        {
          p: "mpath",
          t: [4000, 5500, 8000, 9000],
          v: ["0%", "53.9%", "53.9%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [1, 0, 0, 0.6, 1], [1, 0, 0, 0.6, 1], [0]],
          mp: "M625.4,116.3L565,282.1L565,282.1L604.1,136.1"
        },
        {
          p: "rotate",
          t: [4000, 5500, 8000, 9000],
          v: [0, 30, 30, -30],
          e: [[1, 0, 0, 0.6, 1], [1, 0, 0, 0.6, 1], [1, 0, 0, 0.6, 1], [0]]
        },
        { p: "opacity", t: [0, 1000], v: [0, 1], e: [[0], [0]] }
      ],
      "#nucleus-2",
      [
        {
          p: "mpath",
          t: [0, 3750, 5500, 8000, 9000, 10000, 11000, 12000],
          v: [
            "0%",
            "35.7%",
            "35.7%",
            "68.8%",
            "76.6%",
            "84.4%",
            "92.2%",
            "100%"
          ],
          e: [
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp:
            "M0,0L-67.4,-10L-67.4,-10L-5.2,1.3L-20,2.9L-5.2,1.3L-20,2.9L-5.2,1.3"
        }
      ],
      "#_a0",
      [
        {
          p: "mpath",
          t: [5000, 7000],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M136.7,-530.3L130.8,-116.6"
        },
        {
          p: "opacity",
          t: [5000, 6000, 9000, 10000],
          v: [0, 1, 1, 0],
          e: [[0], [0], [0], [0]]
        }
      ],
      "#_a1",
      [
        {
          p: "mpath",
          t: [4000, 5500, 8000, 9000],
          v: ["0%", "54.2%", "54.2%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [1, 0, 0, 0.6, 1], [1, 0, 0, 0.6, 1], [0]],
          mp: "M76.7,358L30,517.3L30,517.3L43.7,377.4"
        },
        {
          p: "opacity",
          t: [2000, 4000, 9333, 10000],
          v: [0, 1, 1, 0],
          e: [[0], [0], [0], [0]]
        }
      ],
      { autoremove: false, markers: { LoopStart: 10000 } }
    )
    .range(0, 12000);
  if (
    document.location.search
      .substr(1)
      .split("&")
      .indexOf("global=paused") >= 0
  )
    ks.globalPause();

  return tl;
};

module.exports = animate;