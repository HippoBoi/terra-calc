import { Box, Card, CardBody, Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react';

interface Props {
    name: string;
    image: string;
    bgImage: string;
    imageGif?: string;
    width?: string;
    height?: string;
    onClick: () => void;
}

const CalcOption = ({ name, image, imageGif, bgImage, width = "170px", height = "170px", onClick }: Props) => {
    const [mouseHovering, setMouseHovering] = useState(false);
    
    if (!imageGif) {
        imageGif = image;
    }

    return (
        <Card bgColor={"red.800"} rounded={"45px"} width={"170px"} height={"170px"}
            onMouseEnter={() => setMouseHovering(true)}
            onMouseLeave={() => setMouseHovering(false)}
            cursor={"pointer"}
            onClick={onClick}>
            <CardBody 
                width={"170px"} 
                height={"170px"}
                padding={-2}
                bgColor={"red.700"}
                rounded={"45px"}
                bgImage={bgImage}>
                <Box
                    width={"170px"} 
                    height={"170px"}
                    position="relative"
                    overflow="hidden"
                    borderRadius="45px"
                    _hover={{
                        
                        _after: {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bg: "rgba(0, 0, 0, 0.25)",
                        },
                    }}>
                    <Center height={"100%"}>
                        <VStack>
                            <Image src={mouseHovering ? imageGif : image} width={width} height={height} />
                        </VStack>
                    </Center>
                </Box>
                <Center>
                    <Text
                        color={mouseHovering ? "yellow" : "white"}
                        fontSize={"25px"}>
                        {name}
                    </Text>
                </Center>
            </CardBody>
        </Card>
    );
}

export default CalcOption;