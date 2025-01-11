const ReefLevel = () => {
    return (
        <div>
            <button style={{
                position: "absolute",
                bottom: "75px",
                left: "75px",
                fontSize: "30px",
                width: "300px",
                borderWidth: "7.5px",
                borderColor: "purple"
            }}>
            L1
            </button>
            <button style={{
                position: "absolute",
                bottom: "210px",
                left: "75px",
                fontSize: "30px",
                width: "300px",
                borderWidth: "7.5px",
                borderColor: "purple"
            }}>
            L2
            </button>
            <button style={{
                position: "absolute",
                top: "210px",
                left: "75px",
                fontSize: "30px",
                width: "300px",
                borderWidth: "7.5px",
                borderColor: "purple"
            }}>
            L3
            </button>
            <button style={{
                position: "absolute",
                top: "75px",
                left: "75px",
                fontSize: "30px",
                width: "300px",
                borderWidth: "7.5px",
                borderColor: "purple"   
            }}>
            L4
            </button>
        </div>
    )
}

export default ReefLevel;