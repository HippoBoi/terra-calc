import beeImg from '../assets/images/bee.webp'
import beeGif from '../assets/images/queen-bee-terraria.gif'
import empressImg from '../assets/images/empress.webp'
import empressGif from '../assets/images/empress.gif'
import moon from '../assets/images/dasdasdsao.webp'
import caveBg from "../assets/images/caveBg.webp"
import { HStack, VStack, Text } from '@chakra-ui/react'
import CalcOption from './CalcOption'
import { useRef } from 'react'

const OptionsSlide = () => {
    const bossHealthHeight = 550;

    const handleScroll = () => {
        window.scrollTo({
            top: bossHealthHeight,
            behavior: "smooth"
        });

        setTimeout(() => {
            window.scrollTo({
              top: bossHealthHeight,
              behavior: 'smooth',
            });
          }, 400);
    };
    
    return (
        <VStack>
            <Text fontSize={"18"}>what do you wish to calc?</Text>
            <HStack>
                <CalcOption name='Boss Health' image={beeImg} imageGif={beeGif} bgImage={caveBg} onClick={handleScroll} />
                <CalcOption name='Damage' image={empressImg} imageGif={empressGif} bgImage={caveBg} width='200px' height='120px' onClick={handleScroll} />
                <CalcOption name='Probabilities' image={moon} bgImage={caveBg} width='100px' height='100px' onClick={handleScroll} />
            </HStack>
        </VStack>
    );
}

export default OptionsSlide
