import { Button, Card, CardBody, HStack, Input, keyframes, Spinner, Text, VStack } from '@chakra-ui/react'
import BossList, { bosses } from './BossList'
import DifficultyList from './DifficultyList'
import mushBG from "../assets/images/mushBG.webp"
import caveBG from "../assets/images/caveBg.webp"
import { useEffect, useState } from 'react'

const textAnim = keyframes `
    0% { transform: rotate(-4deg); }
    20% { transform: rotate(0deg); }
    50% { transform: rotate(4deg); }
    80% { transform: rotate(0deg); }
    100% { transform: rotate(-4deg); }
`;

const errorAnim = keyframes `
    0% { transform: scale(100%); }
    50% { transform: scale(110%); }
    100% { transform: scale(100%); }
`

const BossHealth = () => {
    const [players, setPlayers] = useState(0);
    const [boss, setBoss] = useState("eye");
    const [difficulty, setDifficulty] = useState("");
    const [bossHealth, setBossHealth] = useState(0);
    const [error, setError] = useState("");

    const changePlayers = (plyrs: string) => {
        const newPlayers = parseInt(plyrs);
        setPlayers(newPlayers);
    }

    const calculateHealth = () => {
        if (difficulty === "") {
            setError("Select difficulty!");
            return;
        }
        else if (players <= 1) {
            setError("Select the amount of players!");
            return;
        }
        
        setBossHealth(bosses[boss].health);
    }

    useEffect(() => {
        setError("");
    }, [players, boss, difficulty]);

    return (
        <Card
            width={"100vw"}
            marginTop={"35vh"}
            bgImage={caveBG}
            padding={2}>
            <CardBody
                width={"100%"}
                rounded={"20px"}
                bgImage={mushBG}>
            <VStack>
                <Text fontSize={"16px"}>
                    Boss Health Calculator
                </Text>
                <HStack>
                    <Card padding={2} height={"80px"} bgColor={"purple.900"}>
                        <Text>Amount of players</Text>
                        <Input type="number" placeholder='1...' onChange={(event) => changePlayers(event.target.value)}></Input>
                    </Card>

                    <Card padding={2} height={"80px"} bgColor={"purple.900"}>
                        <Text>Boss</Text>
                        <BossList onChange={(newBoss) => setBoss(newBoss)} />
                    </Card>

                    <Card padding={2} height={"80px"} bgColor={"purple.900"}>
                        <Text>Difficulty</Text>
                        <DifficultyList onChange={(newDiff) => setDifficulty(newDiff)} />
                    </Card>
                </HStack>

                {error && <Text animation={`${errorAnim} 2s infinite cubic-bezier(0.5, 0.1, 0.1, 0.1)`} color={"red.400"}>{error}</Text>}

                <Button 
                    onClick={calculateHealth}
                    bg={"transparent"}
                    fontSize={"25px"}
                    animation={`${textAnim} 4s infinite cubic-bezier(0.5, 0.1, 0.1, 0.1)`}
                    _hover={{ 
                        "bg": "transparent",
                        "fontSize": "29px",
                        "textColor": "yellow",
                        "transition": "0.1s linear"
                    }}>
                    Calculate
                </Button>

                <Text 
                    fontSize={"18px"} 
                    marginTop={"20px"}>
                    Total Health: 
                </Text>
                <Text fontSize={"35px"} color={"red.200"}>
                    {bossHealth}
                </Text>
            </VStack>
            </CardBody>
        </Card>
    );
}

export default BossHealth
