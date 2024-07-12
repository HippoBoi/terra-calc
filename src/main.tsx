import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import forestBG from "./assets/images/Forest_background_9.webp";
import corruptBG from "./assets/images/Corruption_background_5.webp";
import { Box, ChakraProvider, extendTheme, keyframes } from '@chakra-ui/react'
import './fonts.css';

const theme = extendTheme({
    fonts: {
      heading: "andyB, sans-serif",
      body: "andyB, sans-serif",
    },
});

/*const bgAnim = keyframes`
    0% { background-position: -0% 0; }
    100% { background-position: 100% 0; }
`;
*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
        <Box
            width={"100%"}
            height={"100%"}
            bgImage={corruptBG}
            bgSize="cover"
            bgPosition="center"
            bgAttachment={"fixed"}>
            <Box
                w="100vw"
                h="100%"
                bgImage={forestBG}
                bgSize="cover"
                bgPosition="center"
                bgAttachment={"fixed"}
                //animation={`${bgAnim} 2s infinite linear`}
                >
                <Box
                    position="absolute"
                    w={"100vw"}
                    h={"100%"}
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0, 0, 0, 0.5)"
                    zIndex={"1"}
                />
                <Box position={'relative'} zIndex={"2"}>
                    <App />
                </Box>
            </Box>
        </Box>
        </ChakraProvider>
    </React.StrictMode>,
)
