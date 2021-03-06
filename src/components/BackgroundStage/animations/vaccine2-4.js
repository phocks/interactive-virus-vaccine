const animate = function(ks) {
  const tl = ks
    .animate(
      "#All",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0.4, 0, 0.6, 1], [0]],
          mp: "M579.3,1073.7L715.8,856.2"
        },
        {
          p: "scaleX",
          t: [0, 2000],
          v: [1, 0.6],
          e: [[1, 0.4, 0, 0.6, 1], [0]]
        },
        {
          p: "scaleY",
          t: [0, 2000],
          v: [1, 0.6],
          e: [[1, 0.4, 0, 0.6, 1], [0]]
        }
      ],
      "#B-and-T-swarm",
      [{ p: "opacity", t: [0, 1000], v: [0, 1], e: [[0], [0]] }],
      "#_a0",
      [
        {
          p: "mpath",
          t: [0, 2000, 4000, 6000],
          v: ["0%", "33.3%", "66.7%", "100%"],
          e: [
            [1, 0.6, 0.1, 0.7, 0.5],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp: "M1236.2,280.3L1301.5,225.4L1236.2,280.3L1301.5,225.4"
        }
      ],
      "#_a1",
      [
        {
          p: "mpath",
          t: [0, 2000, 4000, 6000],
          v: ["0%", "33.3%", "66.7%", "100%"],
          e: [
            [1, 0.6, 0.1, 0.7, 0.5],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp: "M809,33.5L826.1,-49.8L809,33.5L826.1,-49.8"
        },
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [0, 30, 0, 30],
          e: [
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ]
        }
      ],
      "#_a2",
      [
        {
          p: "mpath",
          t: [0, 2000, 4000, 6000],
          v: ["0%", "33.3%", "66.7%", "100%"],
          e: [
            [1, 0.6, 0.1, 0.7, 0.5],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp: "M475.5,595.5L452.2,583.8L475.5,595.5L452.2,583.8"
        }
      ],
      "#_a3",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0.6, 0.1, 0.7, 0.5], [0]],
          mp: "M592.2,1079.6L702.5,921.5"
        },
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [0, -10, 0, -10],
          e: [
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ]
        }
      ],
      "#_a4",
      [
        {
          p: "mpath",
          t: [0, 2000, 4000, 6000],
          v: ["0%", "78.8%", "89.4%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [1, 0.4, 0, 0.6, 1], [1, 0.4, 0, 0.6, 1], [0]],
          mp: "M1419.9,445.7L1074.9,588.4L1111,623.2L1074.9,588.4"
        }
      ],
      "#_a5",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M125.9,115.7L672.8,304.9"
        },
        {
          p: "rotate",
          t: [2000, 4000, 6000],
          v: [-40, -20, -40],
          e: [[1, 0.4, 0, 0.6, 1], [1, 0.4, 0, 0.6, 1], [0]]
        }
      ],
      "#_a6",
      [
        {
          p: "mpath",
          t: [0, 2000, 4000, 6000],
          v: ["0%", "33.3%", "66.7%", "100%"],
          e: [
            [1, 0.6, 0.1, 0.7, 0.5],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp: "M782.1,1283.2L826.1,1333.3L782.1,1283.2L826.1,1333.3"
        }
      ],
      "#Injected",
      [
        {
          p: "scaleX",
          t: [0, 2000],
          v: [1, 0.3],
          e: [[1, 0.4, 0, 0.6, 1], [0]]
        },
        {
          p: "scaleY",
          t: [0, 2000],
          v: [1, 0.3],
          e: [[1, 0.4, 0, 0.6, 1], [0]]
        }
      ],
      "#_a7",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [-94, 266, 626, 986],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      "#_a8",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [-40, 320, 680, 1040],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      "#_a9",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [113, 473, 833, 1193],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      "#_a10",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [-134, 226, 586, 946],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      "#_a11",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [21, 381, 741, 1101],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      "#_a12",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [-21, 339, 699, 1059],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      "#_a13",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [133, 493, 853, 1213],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      "#_a14",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [136, 496, 856, 1216],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      "#_a15",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [-45, 315, 675, 1035],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      "#_a16",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [-64, 296, 656, 1016],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      "#_a17",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [97, 457, 817, 1177],
          e: [[1, 0, 0, 1, 1], [0], [0], [0]]
        }
      ],
      { autoremove: false, markers: { LoopStart: 2000 } }
    )
    .range(0, 6000);
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
