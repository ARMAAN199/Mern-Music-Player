import React,{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import Player from './Player';
import './home.css' 
import Navbar from './navbar/Navbar'
import collections from './musiccollection'
import MusicList from "./musicList/MusicList"
import Queue from "./queue/Queue"
import Profile from './Profile'
import Cd from './Cd/Cd'
import Rightinfo from './Rightinfo/Rightinfo';

function Home({user}) {
  console.log("HOME RERENDERED")
  const [collection, setcollection] = useState(collections.coldplay_songs)

  // if(user==="") window.location = '/login'
  
  const [current_song, setCurrent_song] = useState(0)
  const [artistcollection, setArtistcollection] = useState("")
  const [listcollection, setlistcollection] = useState("")
  const [punartistcollection, setpunArtistcollection] = useState("")
  const [genartistcollection, setgenArtistcollection] = useState("")
  const [hinartistcollection, sethinArtistcollection] = useState("")
  const [songcollection, setSongcollection] = useState("")
  const [likecollection, setlikecollection] = useState("")
  const [mode, setmode] = useState("HOME")
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [chn, setchn] = useState(false)
  //const [update, setupdate] = useState(false)

     
  useEffect(() => {
      console.log("AJAX")
     // axios.get('/getuser').then(response=>{setuser(response.data);}).catch(err=>console.log(err))
      axios.get('/getartists').then(response=>{setArtistcollection(response.data)}).catch(err=>console.log(err))
      axios.get('/getpunartists').then(response=>{setpunArtistcollection(response.data)}).catch(err=>console.log(err))
      axios.get('/gethinartists').then(response=>{sethinArtistcollection(response.data.reverse())}).catch(err=>console.log(err))
      axios.get('/getgenartists').then(response=>{setgenArtistcollection(response.data)}).catch(err=>console.log(err))
      axios.get('/getplaylists').then(response=>{setlistcollection(response.data)}).catch(err=>console.log(err))
      axios.get('/getsongs').then(response=>{setSongcollection(response.data)}).catch(err=>console.log(err))
      // axios.get('/getsongsbylang').then(response=>{setLangcollection(response.data)}).catch(err=>console.log(err))
      // console.log("HERE", document.getElementById('topinfoimage').src);
      //  document.getElementById('topinfoimage').src = `${process.env.PUBLIC_URL}/Mélodie/Images/Alan Walker _ Ava Max - Alone, Pt. II.jpg`;
    },[]) 

    // useEffect(() => {
    //   var likelist = []
    //   for (var i=0; i<songcollection.length; i++)
    //   {
    //     if(songcollection[i].likedby.includes(user._id)) {likelist.push(songcollection[i])}
    //   }
    //   setlikecollection(likelist)
    //   console.log(likecollection)
    // }, [songcollection])

    useEffect(() => {
      console.log(user.likedby)
      axios.post('/likedmusic', {'ids' : user.likedby}).then(response=>{console.log(response); setlikecollection(response.data)}).catch(err=>console.log(err))
    }, [user])


    useEffect(() => {
      console.log("CSCSC")
       intermediate() 
       console.log("CURRENT collection", collection)
    }, [collection])  
    const intermediate = ()=> {
      setchn(true)
    }
  // useEffect(() => {
  //   setCurrent_song(0)
  //   const audio = audioRef.current
  //   setTimeout(() => {
  //     audio.play()
  //   }, 1000);
  //   setIsPlaying(true)    
  // }, [collection])

  const handleLogout = () =>{
    console.log("REQUESTED LOGOUT")
    axios.delete('/logout').catch(err=> console.log(err))
    window.location.href = '/login';
  }
  const handleLogin = () =>{
    window.location.href = '/login';
  }    

    return (
      <div>
        { true &&
      <div className="container-fluid" style={{height:'100vh'}}>
        <div className="row topnav">
          <div>
            { user!==""? 
            <div style={{float:'right'}}> <button className="log" style={{float:'right'}} onClick={handleLogout}>LOG OUT</button> <p className="username" style={{float:'right'}}>{user? user.username: "LOGIN"}</p></div>:
            <button className="log" style={{float:'right'}} onClick={handleLogin}>LOG IN</button>
            }
          </div>
        </div>
    )
}
export default Home


// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });
//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return windowSize;
// }


            /* <div className="col-lg-7 right">
                 <h1>Logged In With User - {username}</h1>
                 <button onClick={logoutb}> LOGOUT YOU piece OF SHIT {username} </button>
            </div> */

              // const changevisibility = () => {
  //   document.getElementById("musiclistlist").style.visibility = "hidden";
  // }
  // useEffect(() => {
  //   if(mode==="HOME")
  //   {
  //     document.getElementById("musiclistlist").style.visibility = "visible";
  //   }
  //   else{
  //     document.getElementById("musiclistlist").style.visibility = "hidden";
  //   }
  // }, [mode])
  //const mode