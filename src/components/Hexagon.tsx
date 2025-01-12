function makeTriangle(isLeft:boolean, size:number, rotation:number, color:string) {
    const pointA = "0,0"
    const pointB = `0,${-size/2}`
    const pointC = isLeft?`${-size/(1.732*2)},${-size/2}`:`${size/(1.732*2)},${-size/2}`
    const strokeWidth = size/200
    return(
    <polygon onClick={() => console.log("hi")} points={`${pointA} ${pointB} ${pointC}`} style={{
        fill: color,
        rotate: `${rotation}deg`,
        strokeWidth: strokeWidth,
        stroke: color
    }}/>
    )
}
interface HexagonProps{
    size: number
    color: string
}
const Hexagon = ({size, color}: HexagonProps) => {
    return (
        <div className="Hexagon">
            <svg height={size} width={(size*(2/1.732)) + size/200} viewBox={`${-size/2} ${-size/2} ${size} ${size}`}>
                {makeTriangle(true, size, 0, color)}
                {makeTriangle(false, size, 0, color)}
                {makeTriangle(true, size, 60, color)}
                {makeTriangle(false, size, 60, color)}
                {makeTriangle(true, size, 120, color)}
                {makeTriangle(false, size, 120, color)}
                {makeTriangle(true, size, 180, color)}
                {makeTriangle(false, size, 180, color)}
                {makeTriangle(true, size, 240, color)}
                {makeTriangle(false, size, 240, color)}
                {makeTriangle(true, size, 300, color)}
                {makeTriangle(false, size, 300, color)}
                {/* <polygon onClick={() => console.log("hi")} points={`0,0 ${size/(1.732*2)},0 ${size/(1.732*2)},${size/2}`} style={{
                    fill: color,
                }}/> */}
            </svg>
        </div>
    )
}

export default Hexagon;