// Mock data for the UI. Replace with YouTube Data API results if you wire up a backend.

export const recommendedVideos = Array.from({ length: 12 }, (_, i) => ({
  id: `rec-${i}`,
  title: "Plant App - Flutter UI - Speed Code",
  views: "70,130 views",
  timestamp: "2020. 6. 26.",
  channelImage:
    "https://yt3.ggpht.com/a/AATXAJzEkV2uEs372uXglnQSiNTSUxAV1kBCHhNHk5BI=s100-c-k-c0xffffffff-no-rj-mo",
  channel: "The Flutter Way",
  image: "https://img.youtube.com/vi/LN668OAUrK4/0.jpg",
}));

export const searchChannel = {
  image:
    "https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s100-c-k-c0xffffffff-no-rj-mo",
  channel: "Clever Programmer",
  verified: true,
  subs: "719k",
  noOfVideos: 382,
  description:
    "You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level.",
};

export const searchVideos = Array.from({ length: 9 }, (_, i) => ({
  id: `search-${i}`,
  title: "Let's Build an Instagram Reels Clone with REACT JS for Beginners!",
  views: "25,264 views",
  timestamp: "2020. 8. 15.",
  subs: "719k",
  description:
    "In this FREE LIVE training, Qazi and Sonny will build an Instagram Reels Clone LIVE with REACT JS and firebase!",
  channel: "Clever Programmer",
  image: "https://img.youtube.com/vi/-M8HEGLFkFE/0.jpg",
}));
