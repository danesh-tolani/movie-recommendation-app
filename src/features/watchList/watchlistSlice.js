import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      adult: false,
      backdrop_path: "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
      id: 536554,
      title: "M3GAN",
      original_language: "en",
      original_title: "M3GAN",
      overview:
        "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
      poster_path: "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
      media_type: "movie",
      genre_ids: [878, 27, 35],
      popularity: 6474.848,
      release_date: "2022-12-28",
      video: false,
      vote_average: 7.296,
      vote_count: 555,
    },
    {
      adult: false,
      backdrop_path: "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
      id: 100088,
      name: "The Last of Us",
      original_language: "en",
      original_name: "The Last of Us",
      overview:
        "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
      poster_path: "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
      media_type: "tv",
      genre_ids: [18, 10765, 10759],
      popularity: 9931.591,
      first_air_date: "2023-01-15",
      vote_average: 8.928,
      vote_count: 894,
      origin_country: ["US"],
    },
    {
      adult: false,
      backdrop_path: "/ge9goiznnnAchCUfsw9XQiR2jNt.jpg",
      id: 843794,
      title: "JUNG_E",
      original_language: "ko",
      original_title: "정이",
      overview: "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
      poster_path: "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
      media_type: "movie",
      genre_ids: [878, 28, 12],
      popularity: 387.741,
      release_date: "2023-01-20",
      video: false,
      vote_average: 6.117,
      vote_count: 115,
    },
    {
      adult: false,
      backdrop_path: "/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
      id: 619930,
      title: "Narvik",
      original_language: "no",
      original_title: "Kampen om Narvik",
      overview:
        "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
      poster_path: "/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
      media_type: "movie",
      genre_ids: [10752, 18, 36, 28],
      popularity: 117.006,
      release_date: "2022-12-25",
      video: true,
      vote_average: 7.4,
      vote_count: 26,
    },
    {
      adult: false,
      backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      id: 76600,
      title: "Avatar: The Way of Water",
      original_language: "en",
      original_title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      media_type: "movie",
      genre_ids: [878, 12, 28],
      popularity: 2623.833,
      release_date: "2022-12-14",
      video: false,
      vote_average: 7.721,
      vote_count: 4584,
    },
  ],
};

const watchListSlice = createSlice({
  name: "watchlist",
  initialState: initialState,
  reducers: {
    addToWatchList: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromWatchList: (state, action) => {
      state.list = state.list.filter((movie) => {
        return movie.id !== action.payload.id;
      });
    },
  },
});

export default watchListSlice.reducer;
export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
