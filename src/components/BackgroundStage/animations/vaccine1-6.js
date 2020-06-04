const animate = function(ks) {
  const tl = ks
    .animate(
      "#ACE2-back-2",
      [{ p: "opacity", t: [1750, 1792], v: [1, 0], e: [[0], [0]] }],
      "#Coronavirus",
      [
        {
          p: "mpath",
          t: [500, 1500, 1750, 2500, 5500],
          v: ["0%", "9.2%", "9.2%", "61%", "100%"],
          e: [
            [1, 0, 0, 0.6, 1],
            [0],
            [1, 0.4, 0, 1, 1],
            [1, 0, 0, 0.6, 1],
            [0]
          ],
          mp:
            "M207.5,715L268.1,715L268.1,715L610.7,712.9C517.5,599.6,380.8,637.8,378,633.3"
        },
        {
          p: "scaleX",
          t: [2500, 4000],
          v: [1, 0.2],
          e: [[1, 0, 0, 0.6, 1], [0]]
        },
        {
          p: "scaleY",
          t: [2500, 4000],
          v: [1, 0.2],
          e: [[1, 0, 0, 0.6, 1], [0]]
        },
        { p: "opacity", t: [4000, 5500], v: [1, 0], e: [[0], [0]] }
      ],
      "#Cell",
      [
        {
          p: "mpath",
          t: [2500, 4000],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M981.3,689.6L406,689.6"
        },
        {
          p: "scaleX",
          t: [2500, 4000],
          v: [3, 0.8],
          e: [[1, 0, 0, 0.6, 1], [0]]
        },
        {
          p: "scaleY",
          t: [2500, 4000],
          v: [3, 0.8],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      "#Nucleus",
      [
        {
          p: "mpath",
          t: [4000, 5000, 6000, 7000, 8000],
          v: ["0%", "25%", "50%", "75%", "100%"],
          e: [
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp: "M216.9,229.3L228.7,215.4L216.9,229.3L228.7,215.4L216.9,229.3"
        }
      ],
      "#ACE2-front-3",
      [
        {
          p: "mpath",
          t: [1750, 2500, 5083],
          v: ["0%", "55.9%", "100%"],
          e: [[1, 0.4, 0, 1, 1], [0], [0]],
          mp: "M26.5,-39.6L-16.7,25L-39.6,81.8"
        }
      ],
      "#Healthy-cell-label",
      [{ p: "opacity", t: [500, 1000], v: [1, 0], e: [[0], [0]] }],
      { autoremove: false, markers: { LoopStart: 6000 } }
    )
    .range(0, 8000);
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
