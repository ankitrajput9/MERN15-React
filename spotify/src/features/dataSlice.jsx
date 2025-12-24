import { createSlice } from "@reduxjs/toolkit";

const dataSlice =createSlice(
   {
     name:'data',
     initialState:{
        songs : [
  {
    id:0,
    title: "Blue Eyes",
    artist: "Honey Singh",
    img: "./images/blueeyes.png",
    songUrl:
      "./song/Blue Eyes.mp3",
  },
  {
    id:1,
    title: "Barbaad",
    artist: "Jubin Nautiyal",
    img: "./images/BarbaadImg.png",
    songUrl:
      "./song/Barbaad.mp3",
  },
  {
    id:2,
    title: "Saiyaara",
    artist: "Faheem Abdullah",
    img: "./images/SaiyaaraImg.png",
    songUrl:
      "./song/Saiyaara.mp3",
  },
  {
    id: 3,
    title: "Adat",
    artist: "Atif Aslam",
    img: "./images/adat.png",
    songUrl: "./song/Aadat.mp3",
  },
  {
    id: 4,
    title: "Admiring",
    artist: "Ikka and Karan",
    img: "./images/admiring.png",
    songUrl: "./song/Admiring.mp3",
  },
  {
    id: 5,
    title: "Courtside",
    artist: "Karan Aujla",
    img: "./images/courtside.png",
    songUrl: "./song/Courtside.mp3",
  },
  {
    id: 6,
    title: "Dhun",
    artist: "Ahaan Pandey",
    img: "./images/Dhun.png",
    songUrl: "./song/Dhun.mp3",
  },
  {
    id: 7,
    title: "Pehle Bhi",
    artist: "Vishal Mishra",
    img: "./images/Pehle.png",
    songUrl: "./song/PehleBhi.mp3",
  },
  {
    id: 8,
    title: "Ram Sia Ram",
    artist: "Sachet Tandon",
    img: "./images/RamSia.png",
    songUrl: "./song/Ramsia.mp3",
  },
  {
    id: 9,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    img: "./images/tumhiho.png",
    songUrl: "./song/TumhiHo.mp3",
  },
  {
    id: 10,
    title: "Wavy",
    artist: "Karan Aujla",
    img: "./images/Wavy.png",
    songUrl: "./song/Wavy.mp3",
  },
  {
    id: 11,
    title: "Winning Speech",
    artist: "MXRCI and Karan Aujla",
    img: "./images/Winning.png",
    songUrl: "./song/WinningSpeech.mp3",
  },
  {
    id: 12,
    title: "Zaamana",
    artist: "Unknown",
    img: "./images/zamana.png",
    songUrl: "./song/Zaamana.mp3",
  }
 
]

     },
     reducers:{
        setData:(state)=>{
        state.songs
        }
     }
   })
   export const {setData}= dataSlice.actions;
   export default dataSlice.reducer;