function makeTriangle(isLeft:boolean, size:number, rotation:number, color:string, output:string) {
    const pointA = "0,0"
    const pointB = `0,${-size/2}`
    const pointC = isLeft?`${-size/(1.732*2)},${-size/2}`:`${size/(1.732*2)},${-size/2}`
    const strokeWidth = size/200
    return(
    <polygon onClick={() => console.log(output)} points={`${pointA} ${pointB} ${pointC}`} style={{
        fill: color,
        rotate: `${rotation}deg`,
        strokeWidth: 2,
        stroke: "black"
    }}/>
    )
}
interface HexagonProps{
    size: number
    color: string
    output: string
}
const Hexagon = ({size, color, output}: HexagonProps) => {
    return (
        <div className="Hexagon">
            <svg height={size} width={(size*(2/1.732)) + size/200} viewBox={`${-size/2} ${-size/2} ${size} ${size}`}>
                {makeTriangle(false, size, 0, color,"1"+output)}
                {makeTriangle(true, size, 60, color,"2"+output)}
                {makeTriangle(false, size, 60, color,"3"+output)}
                {makeTriangle(true, size, 120, color,"4"+output)}
                {makeTriangle(false, size, 120, color,"5"+output)}
                {makeTriangle(true, size, 180, color,"6"+output)}
                {makeTriangle(false, size, 180, color,"7"+output)}
                {makeTriangle(true, size, 240, color,"8"+output)}
                {makeTriangle(false, size, 240, color,"9"+output)}
                {makeTriangle(true, size, 300, color,"10"+output)}
                {makeTriangle(false, size, 300, color,"11"+output)}
                {makeTriangle(true, size, 0, color,"12"+output)}
                {/* <polygon onClick={() => console.log("hi")} points={`0,0 ${size/(1.732*2)},0 ${size/(1.732*2)},${size/2}`} style={{
                    fill: color,
                }}/> */}
            </svg>
        </div>
    )
}

export default Hexagon;