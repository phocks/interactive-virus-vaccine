const animate = function(ks) {
  const tl = ks
    .animate(
      "#Coronavirus",
      [
        {
          p: "mpath",
          t: [0, 1000],
          v: ["0%", "100%"],
          e: [[1, 0.4, 0, 1, 1], [0]],
          mp: "M218,685.3L218,152.6"
        },
        { p: "opacity", t: [0, 1000], v: [1, 0], e: [[0], [0]] }
      ],
      "#newStrandC",
      [
        {
          p: "mpath",
          t: [1000, 2000, 4000, 5000, 6000, 6833, 8000],
          v: ["0%", "23.1%", "23.1%", "45.3%", "45.3%", "64.9%", "100%"],
          e: [
            [1, 0, 0, 0.6, 1],
            [1, 0, 0, 0.5, 0.6],
            [1, 0, 0, 0.6, 1],
            [1, 0, 0, 0.4, 0.5],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 1, 1],
            [0]
          ],
          mp:
            "M384.3,799.7L218.3,705.7L218.3,705.7L34.6,705.7L34.6,705.7L196.6,705.7L486.4,705.7"
        },
        {
          p: "rotate",
          t: [1000, 2000],
          v: [-23, -47],
          e: [[1, 0, 0, 0.6, 1], [0]]
        },
        { p: "opacity", t: [6833, 8000], v: [1, 0], e: [[0], [0]] }
      ],
      "#Lipid-capsule",
      [
        {
          p: "mpath",
          t: [0, 2000, 4000, 5000, 6000, 6833, 8000],
          v: ["0%", "37.8%", "37.8%", "55.6%", "55.6%", "71.6%", "100%"],
          e: [
            [1, 0, 0, 0.6, 1],
            [1, 0, 0, 0.5, 0.6],
            [1, 0, 0, 0.6, 1],
            [1, 0, 0, 0.4, 0.5],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 1, 1],
            [0]
          ],
          mp:
            "M-112,505.3L219.9,706.7L219.9,706.7L36.2,706.7L36.2,706.7L199.7,706.7L492.1,706.7"
        },
        {
          p: "opacity",
          t: [0, 2000, 7292, 8000],
          v: [0, 1, 1, 0],
          e: [[0], [1, 0, 0, 1, 1], [0], [0]]
        }
      ],
      "#Cell",
      [
        {
          p: "mpath",
          t: [4000, 8000],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M1036.8,691.6L720.9,691.6"
        },
        { p: "opacity", t: [4000, 4500], v: [0, 1], e: [[0], [0]] }
      ],
      "#_a0",
      [{ p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }],
      "#_a1",
      [
        {
          p: "opacity",
          t: [2000, 3000, 4000, 4500],
          v: [0, 1, 1, 0],
          e: [[0], [0], [0], [0]]
        }
      ],
      { autoremove: false }
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
