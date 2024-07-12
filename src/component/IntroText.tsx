import { Center, keyframes, Text, VStack } from '@chakra-ui/react'

const textAnim = keyframes `
    0% { transform: rotate(0deg); }
    50% { transform: rotate(11deg); }
    100% { transform: rotate(0deg); }
`;

const smallTextAnim = keyframes `
    0% { transform: rotate(0deg); }
    50% { transform: rotate(5deg); }
    100% { transform: rotate(0deg); }
`;

const IntroText = () => {
    return (
        <Center height={"30vh"}>
            <VStack>
                <Text
                    color={'white'}
                    animation={`${textAnim} 2s infinite cubic-bezier(0.5, 0.1, 0.1, 0.1)`}
                    fontSize={"60px"}
                    _hover={{ "color": "yellow" }}>
                    Terraria Calculator
                </Text>

                <Text
                    marginTop={"-25px"}
                    color={'yellow'}
                    animation={`${smallTextAnim} 2s infinite cubic-bezier(0.5, 0.1, 0.1, 0.1)`}
                    fontSize={"20px"}
                    _hover={{ "color": "yellow" }}>
                    BETA
                </Text>
            </VStack>
        </Center>
    );
}

export default IntroText
