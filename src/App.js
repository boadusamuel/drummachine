import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    var sounds = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    let options;
    for (let i = 0; i < sounds.length; i++) {
      if (sounds[i] === event.target.value) {
        options = sounds[i];
      }
    }
    var player = document.getElementById(options);
    player.play();
    this.setState({ display: event.target.id });
  }

  componentDidMount() {
    document.onkeypress = function (e) {
      if (e.which === 81 || e.which === 113) {
        document.getElementById("quarra").click();
      } else if (e.which === 87 || e.which === 119) {
        document.getElementById("level").click();
      } else if (e.which === 69 || e.which === 101) {
        document.getElementById("starter").click();
      } else if (e.which === 65 || e.which === 97) {
        document.getElementById("strong").click();
      } else if (e.which === 83 || e.which === 115) {
        document.getElementById("tune").click();
      } else if (e.which === 68 || e.which === 100) {
        document.getElementById("banku").click();
      } else if (e.which === 90 || e.which === 122) {
        document.getElementById("bumper").click();
      } else if (e.which === 88 || e.which === 120) {
        document.getElementById("blazer").click();
      } else if (e.which === 67 || e.which === 99) {
        document.getElementById("fire").click();
      }
    };
  }
  render() {
    return (
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          id="container"
        >
          <div className="card" id="drum-machine">
            <div className="row">
              <div className="col-7 my-4 ml-4">
                <div className="row mb-4 d-flex justify-content-around">
                  <button
                    className="btn drum-pad"
                    id="quarra"
                    onClick={this.handleClick}
                    value="Q"
                  >
                    <audio
                      id="Q"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
                      type="audio"
                      className="clip"
                    />
                    Q
                  </button>
                  <button
                    className="btn drum-pad"
                    id="level"
                    onClick={this.handleClick}
                    value="W"
                  >
                    <audio
                      id="W"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                      type="audio"
                      className="clip"
                    />
                    W
                  </button>
                  <button
                    className="btn drum-pad"
                    id="starter"
                    onClick={this.handleClick}
                    value="E"
                  >
                    <audio
                      id="E"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                      type="audio"
                      className="clip"
                    />
                    E
                  </button>
                </div>
                <div className="row mb-4 d-flex justify-content-around">
                  <button
                    className="btn drum-pad"
                    id="strong"
                    onClick={this.handleClick}
                    value="A"
                  >
                    <audio
                      id="A"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                      type="audio"
                      className="clip"
                    />
                    A
                  </button>
                  <button
                    className="btn drum-pad"
                    id="tune"
                    onClick={this.handleClick}
                    value="S"
                  >
                    <audio
                      id="S"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                      className="clip"
                    />
                    S
                  </button>
                  <button
                    className="btn drum-pad"
                    id="banku"
                    onClick={this.handleClick}
                    value="D"
                  >
                    <audio
                      id="D"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                      className="clip"
                      type="audio"
                    />
                    D
                  </button>
                </div>
                <div className="row d-flex justify-content-around">
                  <button
                    className="btn drum-pad"
                    id="bumper"
                    onClick={this.handleClick}
                    value="Z"
                  >
                    <audio
                      id="Z"
                      src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                      type="audio"
                      className="clip"
                    />
                    Z
                  </button>
                  <button
                    className="btn drum-pad"
                    id="blazer"
                    onClick={this.handleClick}
                    value="X"
                  >
                    <audio
                      id="X"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
                      type="audio"
                      className="clip"
                    />
                    X
                  </button>
                  <button
                    className="btn drum-pad"
                    id="fire"
                    onClick={this.handleClick}
                    value="C"
                  >
                    <audio
                      id="C"
                      src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
                      type="audio"
                      className="clip"
                    ></audio>
                    F
                  </button>
                </div>
              </div>
              <div className="row d-flex justify-content-center align-items-center pl-3">
                <div className="col-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <p
                      id="display"
                      className="d-flex justify-content-center align-items-center"
                    >
                      {this.state.display}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
