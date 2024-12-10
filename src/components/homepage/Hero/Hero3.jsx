import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './../../../components/homepage/Hero/Hero3.css';
import About from '../About/About';
import Guest2 from '../Guests/Guest2';

const Hero3 = () =>{
    return (
        <div className="App md:visible" >
          <Parallax pages={1.055} style={{ top: '0', left: '0' }} class="animation">
            <ParallaxLayer offset={0} speed={1.1}>
              <div class="animation_layer parallax" id="bg"></div>
            </ParallaxLayer>
            <div class='Hero'>
            <ParallaxLayer offset={0} speed={0.75}>
                <div className="flex items-center justify h-screen w-screen">
              <div class="animation_layer parallax" id="logo"></div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.2}>
              <div class="animation_layer parallax" id="mountain2"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.5}>
              <div class="animation_layer parallax" id="mountain1"></div>
            </ParallaxLayer>
            {/* <ParallaxLayer offset={0} speed={0.35}>
              <div class="animation_layer parallax" id="VPname"></div>
            </ParallaxLayer> */}
            <ParallaxLayer offset={0} speed={1}>
              <div class="animation_layer parallax" id="trees"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.8}>
              <div class="animation_layer parallax" id="land"></div>
            </ParallaxLayer>
            <div class="bg">
                <div class="star-field">
                  <div class="layer"></div>
                  <div class="layer"></div>
                  <div class="layer"></div>
                </div>
            </div>
              <ParallaxLayer offset={0} speed={-2.5}>
                 <div className="animation_layer parallax" id="VPname"></div>
              </ParallaxLayer>
              {/* <ParallaxLayer offset={0} speed={-0.009}>
                    <ParticleButton></ParticleButton>

              </ParallaxLayer> */}
             {/* <ParallaxLayer offset={1} speed={0}> 
              <About></About>
             </ParallaxLayer> */}
            {/* <ParallaxLayer offset={1.7} speed={0}> 
              <Guest2 class='bg-black'></Guest2>
             </ParallaxLayer> */}
            {/* <ParallaxLayer offset={1.8} speed={0.5}>
                   <Gallery3></Gallery3>
                   {/*  */}
              {/* </ParallaxLayer>  */}

            {/* <ParallaxLayer offset={1} speed={0.75}>
            <Guest2 className= 'bg-black w-screen h-screen margin-10rem'></Guest2>
            <div className='bg-black w-screen h-screen top-[0px]'></div>
            </ParallaxLayer> */}

            </div>
           
          </Parallax>
        </div>
      );
  }
  
  export default Hero3;