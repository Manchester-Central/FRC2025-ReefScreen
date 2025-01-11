import ReefLevel from "./ReefLevel";
import ReefPosition from "./ReefPosition";

const ReefScreen = () => {
    return (
        <div className="ReefScreen">
            <ReefPosition/>
            <div className="BarrierLine" style={{
                position: "absolute",
                height: "900px",
                width: "10px",
                backgroundColor: "gray",
                top: "50px",
                left: "640px"
            }}/>
            <ReefLevel/>
        </div>
    )
}
export default ReefScreen;