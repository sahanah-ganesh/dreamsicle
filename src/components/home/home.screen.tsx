import React from "react"
import { Layout } from "../../shared"
import { Box } from "rebass"
import { Text as Base } from "rebass"
import styled from "styled-components"
import Particles from "react-particles-js"
import { theme } from "theme/theme"

interface IHomeProps {
  home?: string
}

export const HomeText = styled(Base)`
  font-size: 10rem;
  font-weight: bold;
  color: white;
  letter-spacing: 1rem;
  padding: 2rem 0 2rem 2rem;
  text-shadow: 5px 5px 10px #776291;
  &:hover {
    font-weight: normal;
    letter-spacing: 1.5rem;
    text-shadow: 10px 10px 10px #cecece;
  }
`

export const Home: React.SFC<IHomeProps> = ({ home }) => {
  return (
    <Layout
      background={
        <Box sx={{ gridRowStart: 1, gridColumnStart: 1 }}>
          <Particles
            style={{ zIndex: -1, position: "absolute" }}
            params={{
              particles: {
                number: {
                  value: 160,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#ffffff",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: false,
                    mode: "bubble",
                  },
                  onclick: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3,
                  },
                  repulse: {
                    distance: 400,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </Box>
      }
      title={
        <Box sx={{ gridColumnStart: 4 }}>
          <HomeText>Dreamsicle</HomeText>
        </Box>
      }
      body={
        <Box
          sx={{ gridRowStart: 2, gridRowEnd: 7, gridColumnStart: 1, gridColumnEnd: 13 }}
          bg={theme.colors.purple}
          style={{ boxShadow: "10px 10px 40px 10px #12082b inset" }}
        ></Box>
      }
    />
  )
}
