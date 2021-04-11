import { FC } from 'react';
import Particles from "react-tsparticles";
import { useSelector } from 'react-redux';

import { AppState } from '../store';
import { SystemsState } from '../store/system/types';



interface Props{

}
interface AppProps {
  system: SystemsState;
}

const CustomParticles: FC<Props> = () => {

  const { system } = useSelector<AppState, AppProps>((state: AppState) => {
      return {
        system: state.systems
      }
  });

  return (
    <Particles
        id="tsparticles"
        options={{
          fps_limit: 60,
          background: {
            color: system.isDarkMode ? "#424242" : "#FFFFFF"
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: false,
                mode: "bubble",
                type: "rectangle"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 5,
                speed: 3,
                color: ["#ffffff", "#ff7700"]
              }
            }
          },
          particles: {
            color: {
              value: ["#ff7700", "#1254ef", "#ffffff"]
            },
            links: {
              color: "random",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            },
            move: {
              collisions: true,
              direction: "none",
              enable: true,
              out_mode: "bounce",
              random: false,
              speed: 2,
              straight: false
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
              animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false },
              random: true,
              value: 0.5
            },
            shape: {
              type: "polygon"
            },
            size: {
              animation: {
                enable: true,
                minimumValue: 2,
                speed: 1,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 2
              },
              value: 4
            }
          },
          retina_detect: true
        }}
      />
  );
}

export default CustomParticles;