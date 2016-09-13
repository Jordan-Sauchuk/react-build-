function Application() {
  return (
 <div className="application">
    <div className="header">
    <h1> Scoreboard</h1>
   
    </div>
    <div className="players">
    <div className="player">
    Jordan
    </div>
    <div className="player-score">
    <div className="counter">
    <button className="counter-action-decrement"> - </button>
    <div classname="counter-score"> 3 </div>
    <button className="counter-action-increment"> + </button>
    </div>
    </div>
    </div>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));