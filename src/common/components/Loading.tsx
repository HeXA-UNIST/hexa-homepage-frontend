
import { useEffect, useState } from "react";

export default function Loading(){
    const maxDotCnt = 3;
    const dot = ".";
    const [dotCnt, setDotCnt] = useState<number>(1);

    useEffect(()=>{
        setInterval(() => {
            if(maxDotCnt < dotCnt + 1){
                setDotCnt(1);
            }else{
                setDotCnt(dotCnt + 1);
            }
        }, 100);
    }, []);
    return (
        <div className="flex justify-center items-center">
            <div className=" text-6xl text-white">{`${dot.repeat(dotCnt)}`}</div>
        </div>
    )
}