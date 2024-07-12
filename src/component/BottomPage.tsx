import { Box, Card, HStack, Link, Text, Image } from '@chakra-ui/react'
import logo from "../assets/images/25231.webp"
import gmail from "../assets/images/gmail.webp"

const BottomPage = () => {
    return (
        <Box marginTop={"50vh"}>
            <HStack spacing={"50px"}>
                <Card width={"25vw"} height={"100%"} marginBottom={"10px"}>
                    <HStack>
                        <Image src={gmail} boxSize={"20px"} marginLeft={"5px"} />
                        <Text>Contact: </Text>
                        <Text color={"blue.300"}>tagrifavc@gmail.com</Text>
                    </HStack>
                </Card>

                <Card width={"25vw"} height={"100%"} marginBottom={"10px"}>
                    <HStack>
                        <Image src={logo} boxSize={"20px"} />
                        <Text>GitHub: </Text>
                        <Link color={"blue.300"} href='https://github.com/HippoBoi'>HippoBoiii</Link>
                    </HStack>
                </Card>
            </HStack>
        </Box>
    );
}

export default BottomPage;