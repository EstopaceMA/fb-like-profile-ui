import {useEffect, useState} from 'react';
import { Timeline } from 'react-twitter-widgets';

const CustomTimeLine = () => {
    const [isRendered, setIsRendered] = useState(false);
    useEffect(() => {
  
      setIsRendered(true);
      // console.log({"isRendered": isRendered});
  
    }, [isRendered]);
  
  
    return (
      <Timeline
        dataSource={{ sourceType: "profile", screenName: "MA_Estopace" }}
        options={{ theme: "dark", chrome: "nofooter, noscrollbar", height: "610" }}
      />
    )  
}

export default CustomTimeLine;