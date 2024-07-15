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
    const [bossHealth, setBossHealth] = useState(0);
    const [multiplayerFactor, setMultiplayerFactor] = useState(0);
    const [boss, setBoss] = useState("eye");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState("");

    const changePlayers = (plyrs: string) => {
        const newPlayers = parseInt(plyrs);

        switch(newPlayers) {
            case 1:
                setMultiplayerFactor(1);
            break;
            case 2:
                setMultiplayerFactor(0.35);
            break;
            case 3:
                setMultiplayerFactor(0.9165);
            break;
            case 4:
                setMultiplayerFactor(1.6275);
            break;
            case 5:
                setMultiplayerFactor(2.435);
            break;
            case 6:
                setMultiplayerFactor(3.3065);
            break;
            case 7:
                setMultiplayerFactor(4.221);
            break;
            case 8:
                setMultiplayerFactor(5.164);
            break;
            case 9:
                setMultiplayerFactor(6.25);
            break;

            default:
                setMultiplayerFactor(newPlayers * 0.75);
        }

        setPlayers(newPlayers);
    }

    const calculateHealth = () => {
        if (difficulty === "") {
            setError("Select difficulty!");
            return;
        }
        else if (players < 1) {
            setError("Select the amount of players!");
            return;
        }
        else if (players > 8 && players < 100) {
            setError("Results may not be accurate past 8 players!");
        }
        else if (players >= 100 && players < 255) {
            setError("Are you seriously playing over 100 players?...");
        }
        else if (players >= 255) {
            setError("Well that sure is a lot of players!");
        }
        
        switch(difficulty) {
            case "classic":
                setBossHealth(bosses[boss].health);
                // clasic mode doesn't update boss health based on multiplayerFactor
            break;

            case "expert":
                const healthExpert = bosses[boss].healthExpert * multiplayerFactor + bosses[boss].healthExpert;
                setBossHealth(Math.ceil(healthExpert));
            break;

            case "master":
                const healthMaster = bosses[boss].healthMaster * multiplayerFactor + bosses[boss].healthMaster;
                setBossHealth(Math.ceil(healthMaster));
            break;
        }
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
                <Text color={"white"} fontSize={"22px"}>
                    Boss Health Calculator
                </Text>
                <HStack>
                    <Card color={"white"} padding={2} height={"80px"} bgColor={"purple.900"}>
                        <Text>Amount of players</Text>
                        <Input type="number" placeholder='1...' onChange={(event) => changePlayers(event.target.value)}></Input>
                    </Card>

                    <Card color={"white"} padding={2} height={"80px"} bgColor={"purple.900"}>
                        <Text>Boss</Text>
                        <BossList onChange={(newBoss) => setBoss(newBoss)} />
                    </Card>

                    <Card color={"white"} padding={2} height={"80px"} bgColor={"purple.900"}>
                        <Text>Difficulty</Text>
                        <DifficultyList onChange={(newDiff) => setDifficulty(newDiff)} />
                    </Card>
                </HStack>

                {error && <Text animation={`${errorAnim} 2s infinite cubic-bezier(0.5, 0.1, 0.1, 0.1)`} color={"red.400"}>{error}</Text>}

                <Button 
                    color={"white"}
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
                    color={"white"}
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
