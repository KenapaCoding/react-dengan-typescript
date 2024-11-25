import { useEffect } from "react";

const CleanUpFunction = () => {

    useEffect(()=>{
        const interval = setInterval(() => {
            console.log("interval running")
        }, 1000);


        return () => {
            clearInterval(interval)
            console.log('interval dibersihkan')
        }
    },[])

  return <div>CleanUpFunction</div>;
};

export default CleanUpFunction;
