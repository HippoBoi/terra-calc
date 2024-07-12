import { Select } from '@chakra-ui/react'

interface Props {
    onChange: (newBoss: string) => void;
};

interface Boss {
    id: number;
    name: string;
    health: number;
    attack: number;
    defense: number;
};

export const bosses: { [key: string]: Boss } = {
    "eye": {
        id: 0,
        name: "Eye of Cthulu",
        health: 1000,
        attack: 5,
        defense: 5
    },
    "eater": {
        id: 1,
        name: "Eater of Worlds",
        health: 2000,
        attack: 6,
        defense: 6
    },
    "brain": {
        id: 2,
        name: "Brain of Cthulu",
        health: 3000,
        attack: 6,
        defense: 6
    },
    "skeletron": {
        id: 3,
        name: "Skeletron",
        health: 4000,
        attack: 6,
        defense: 6
    },
    "slime": {
        id: 4,
        name: "King Slime",
        health: 5000,
        attack: 6,
        defense: 6
    },
}

const BossList = ({ onChange }: Props) => {
    return (
        <Select onChange={(event) => onChange(event.target.value)}>
            {Object.keys(bosses).map((boss) => (
                <option key={bosses[boss].id} value={boss}>{bosses[boss].name}</option>
            ))}
        </Select>
    );
}

export default BossList
