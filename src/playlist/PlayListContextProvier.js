import { createContext, useContext, useReducer, useState } from "react";
import { Data } from "../data/Data";
import { PlayList } from "./PlayList";

const PlayListContext = createContext();

export function PlayListProvider({ children }) {
  const [playlistState, playlistDispatch] = useReducer(reducer, {
    isModal: false,
    playlist: [
      {
        id: "default",
        name: "default",
        videos: [],
      },
    ],
  });
  console.log(playlistState);
  function reducer(playlistState, value) {
    switch (value.type) {
      case "SHOE_MODAL":
        return {
          ...playlistState,
          isModal: true,
        };
      case "CLOSE_MODAL":
        return {
          ...playlistState,
          isModal: false,
        };

      case "ADD_PLAYLIST":
        return {
          ...playlistState,
          isModal: true,
          playlist: [
            ...playlistState.playlist,
            { id: value.payload, name: value.payload, videos: [] },
          ],
        };

      case "ADD_TO_PLAY_LIST":
        // console.log(value.payload, value.playlistName);

        // const res1 = ;
        return {
          ...playlistState,
          playlist: playlistState.playlist.map((playlist) => {
            console.log(playlist);
            console.log(playlist.id, value.playlistName);

            if (playlist.id === value.playlistName) {
              console.log("......");
              return {
                ...playlist,
                videos: playlist.videos.concat([value.payload]),
              };
            } else {
              return { ...playlist };
            }
          }),
        };

      //   const playlistNotExist = [
      //     ...playlistState.playlist,
      //     {
      //       id: value.playlistName,
      //       name: value.playlistName,
      //       videos: [value.payload],
      //     },
      //   ];
      //   let flag = false;
      //   let flag2 = false;

      //   const playlistExist = playlistState.playlist.map((item) => {
      //     if (item.name === value.playlistName) {
      //       flag = true;
      //       let videos = [value.payload];

      //       const rep1 = item.videos.map((video) => {
      //         // console.log(video.id, value.payload.id);
      //         if (video.id === value.payload.id) {
      //           flag2 = true;
      //           return video;
      //         }
      //       });

      //       const rep2 = [...videos, value.payload, console.log("rsp2")];
      //       if (item.videos.length) {
      //         return (videos = flag2 ? rep1 : rep2);
      //       }

      //       // console.log(videos);

      //       return {
      //         ...item,
      //         videos,
      //       };
      //     }
      //   });
      //   // flag ? playlistExist : playlistNotExist,
      //   return {
      //     ...playlistState,
      //     // playlist: playlistState.playlist.map((item) => )
      //   };

      default:
        return console.log("heyyy");
    }
  }

  return (
    <PlayListContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlayListContext.Provider>
  );
}

export function usePlaylist() {
  return useContext(PlayListContext);
}
