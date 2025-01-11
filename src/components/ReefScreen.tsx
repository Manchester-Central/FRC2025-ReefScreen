import ReefLevel from "./ReefLevel";
import ReefPosition from "./ReefPosition";

const ReefScreen = () => {
    return (
        <div className="ReefScreen">
            <ReefPosition/>
            <div className="BarrierLine" style={{
                position: "absolute",
                height: "675px",
                width: "7.5px",
                backgroundColor: "gray",
                top: "37.5px",
                left: "480px"
            }}/>
            <ReefLevel/>
        </div>
    )
}
export default ReefScreen;