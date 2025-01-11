const ReefLevel = () => {
    return (
        <div>
            <button style={{
                position: "absolute",
                bottom: "100px",
                left: "100px",
                fontSize: "40px",
                width: "400px",
                borderWidth: "10px",
                borderColor: "purple"
            }}>
            L1
            </button>
            <button style={{
                position: "absolute",
                bottom: "280px",
                left: "100px",
                fontSize: "40px",
                width: "400px",
                borderWidth: "10px",
                borderColor: "purple"
            }}>
            L2
            </button>
            <button style={{
                position: "absolute",
                top: "280px",
                left: "100px",
                fontSize: "40px",
                width: "400px",
                borderWidth: "10px",
                borderColor: "purple"
            }}>
            L3
            </button>
            <button style={{
                position: "absolute",
                top: "100px",
                left: "100px",
                fontSize: "40px",
                width: "400px",
                borderWidth: "10px",
                borderColor: "purple"   
            }}>
            L4
            </button>
        </div>
    )
}

export default ReefLevel;