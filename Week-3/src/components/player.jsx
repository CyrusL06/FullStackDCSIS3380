const Player = (props) => {
    const divStyle = {height:"100px", backgroundColor: "purple", margin:"1em"}

    return ( <>
        <div style={divStyle}>
        <span className="badge badge-secondary"  >{props.playerName}</span>
        <span className="badge badge-secondary" >Score is 0</span>
        <button>Increment</button>
        <button>Decrement</button>
        </div>


    </> );
}
 
export default Player;