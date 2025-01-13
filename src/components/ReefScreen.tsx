import Hexagon from "./Hexagon";

const ReefScreen = () => {
    return (
        <div className="ReefScreen">
            <div style={{position: "absolute", zIndex: 4, top: 250, right: 537}}><Hexagon size={150} color="gray" output="L1"/></div>
            <div style={{position: "absolute", zIndex: 3, top: 175, right: 449.6}}><Hexagon size={300} color="lightblue" output="L2"/></div>
            <div style={{position: "absolute", zIndex: 2, top: 100.4, right: 363}}><Hexagon size={450} color="blue" output="L3"/></div>
            <div style={{position: "absolute", zIndex: 1, top: 26, right: 276}}><Hexagon size={600} color="darkblue" output="L4"/></div>
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