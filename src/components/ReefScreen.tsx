import Hexagon from "./Hexagon";

const ReefScreen = () => {
    return (
        <div className="ReefScreen">
            <div style={{position: "absolute", zIndex:-1, top: 250, right: 535}}><Hexagon size={150} color="gray"/></div>
            <div style={{position: "absolute", zIndex:-2, top: 175, right: 450}}><Hexagon size={300} color="lightblue"/></div>
            <div style={{position: "absolute", zIndex:-3, top: 100.4, right: 366}}><Hexagon size={450} color="blue"/></div>
            <div style={{position: "absolute", zIndex:-4, top: 27, right: 278}}><Hexagon size={600} color="darkblue"/></div>
            {/* <ReefPosition/>
            <div className="BarrierLine" style={{
                position: "absolute",
                height: "675px",
                width: "7.5px",
                backgroundColor: "gray",
                top: "37.5px",
                left: "480px"
            }}/>
            <ReefLevel/> */}
        </div>
    )
}
export default ReefScreen;