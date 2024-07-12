import { VStack } from '@chakra-ui/react';
import IntroText from './component/IntroText';
import OptionsSlide from './component/OptionsSlide';
import BossHealth from './component/BossHealth';
import { useState } from 'react';
import BottomPage from './component/BottomPage';

function App() {
    const [selected, setSelected] = useState(-1);

    return (
        <VStack>
            <IntroText />
            <OptionsSlide />
            <BossHealth />
            <BottomPage />
        </VStack>
    );
}

export default App