import { Center, keyframes, Text } from '@chakra-ui/react'

const textAnim = keyframes `
    0% { transform: rotate(0deg); }
    50% { transform: rotate(15deg); }
    100% { transform: rotate(0deg); }
`;

const IntroText = () => {
  return (
    <Center height={"30vh"}>
        <Text
            color={'white'}
            animation={`${textAnim} 2s infinite cubic-bezier(0.5, 0.1, 0.1, 0.1)`}
            fontSize={"60px"}
            _hover={{ "color": "yellow" }}>
            Terraria Calculator
        </Text>
    </Center>
  )
}

export default IntroText
