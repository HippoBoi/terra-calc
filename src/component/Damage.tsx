import { Card, Center, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Damage = () => {
    return (
        <Card bgColor={"gray.400"} marginTop={"30vh"} width={"50vw"} height={"20vh"}>
            <VStack marginTop={"15px"}>
                <Text color={"black"} fontSize={"30px"}>This function does not exist yet.</Text>
                <HStack>
                <Text color={"black"} fontSize={"30px"}>Try using the </Text>
                <Text color={"red.600"} as={"i"} fontSize={"30px"}>Boss Health Calculator</Text>
                <Text marginLeft={"4px"} color={"black"} fontSize={"30px"}>instead.</Text>
                </HStack>
            </VStack>
        </Card>
    );
}

export default Damage
