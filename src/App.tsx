import { VStack } from '@chakra-ui/react';
import IntroText from './component/IntroText';
import OptionsSlide from './component/OptionsSlide';
import BossHealth from './component/BossHealth';
import { useState } from 'react';
import BottomPage from './component/BottomPage';
import Damage from './component/Damage';

function App() {
    const [selected, setSelected] = useState("bossHealth");

    return (
        <VStack>
            <IntroText />
            <OptionsSlide onClick={(option: string) => { setSelected(option); console.log(option) }} />
            {selected === "bossHealth" ? 
                <BossHealth /> :
            selected === "damage" ? 
                <Damage /> :
            <Damage />}
            <BottomPage />
        </VStack>
    );
}

export default App