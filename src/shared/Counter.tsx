import { useState,useEffect } from "react";

type Props = {
    num :number;
    item: string;
    showKPlus?: boolean;
    speed?:number;

}

const Counter = ({num,item,showKPlus=true,speed=30 }: Props) => {
    const [currNumber,setCurrNumber] = useState<number>(0);

    useEffect(() => {
        if (currNumber < num) {
          const timer = setTimeout(() => setCurrNumber(currNumber + 1), speed);
          return () => clearTimeout(timer);
        }
      }, [currNumber, num]);
  return (
    <div className="flex flex-col w-1/6 items-center">
        <p className="mt-2 text-primary-100 font-serif font-bold text-4xl">{currNumber}{showKPlus ? `k+` : ""}</p>
        <p className="text-gray-200 font-bold">{item}</p>
    </div>
  )
}

export default Counter