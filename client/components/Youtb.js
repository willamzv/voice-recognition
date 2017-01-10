import React from 'react'
import YouTube from 'react-youtube'
import $ from 'jquery'


class Youtb extends React.Component{
  constructor(props){
    super(props);
    this.videoSearch = this.videoSearch.bind(this)
    this.state = { videoId: '', title: '', description:''}
  }

  componentDidMount(){
    artyom.fatality();
    setTimeout(()=>{
      artyom.initialize({
        lang:"en-US",// A lot of languages are supported. Read the docs !
        continuous:true,// Artyom will listen forever
        listen:true, // Start recognizing
        debug:false, // Show everything in the console
        speed:1, // talk normally
        soundex:true,
        executionKeyword: 'now',
        obeyKeyword: "Nova",
      });
    },1000);
  }

  videoSearch(words){

    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBDVstf4LwXgPuKoKWt_a6WfZMkV1gdN_8&part=snippet&type=video&maxResults=10&q=${words}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( videos => {
      this.setState({
        videoId: videos.items[0].id.videoId,
        title:videos.items[0].snippet.title,
        description:videos.items[0].snippet.description
      })
    })

  }


  render(){
    let commands = {
        smart:true,
        indexes:["find *","play *"], // These spoken words will trigger the execution of the command
        action:(i,wildcard) =>{ // Action to be executed when a index match with spoken word
            this.videoSearch(wildcard)
        }
    };
    artyom.addCommands(commands)

    const opts = {
      height: '500',
      width: '800',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return(
      <div className="row">
        <div className="center bgstick col l8 m8 s12 animated bounceInDown">
          <YouTube
            videoId={this.state.videoId}
            opts={opts}
          />
          <h3 className="white-text">{this.state.title}</h3>
          <p className="white-text">{this.state.description}</p>
        </div>
        <div className="col l4 m4 s12 animated bounceInUp note-pad">
          <h1 className="center">YTube Voice</h1>
          <p>You can search your favorite videos on YouTube with voice commands</p>
          <p>You just need to say Find or Play and then the name of your favorite Artist or the name of your favorite song</p>
          <br/>
          <hr/>
          <h6>Samples:</h6>
          <ul>
            <li>Play Rihanna</li>
            <li>Find One Metallica</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Youtb
