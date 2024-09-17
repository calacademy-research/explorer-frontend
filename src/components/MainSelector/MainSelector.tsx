import CasLogo from '@/components/CasLogo/CasLogo';
import MapboxMap from '@/components/MapboxMap/MapboxMap';
import MultipleSelector from '@/components/MultiSelect/MultiSelect';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const islands: Array<{ id: string; label: string }> = [
    { id: 'isabela', label: 'Isabela' },
    { id: 'santa_cruz', label: 'Santa Cruz' },
    { id: 'san_cristobal', label: 'San Cristóbal' },
    { id: 'santiago', label: 'Santiago' },
    { id: 'floreana', label: 'Floreana' },
    { id: 'espanola', label: 'Española' },
    { id: 'fernandina', label: 'Fernandina' },
    { id: 'marchena', label: 'Marchena' },
    { id: 'pinta', label: 'Pinta' },
    { id: 'pinzon', label: 'Pinzón' },
    { id: 'baltra', label: 'Baltra' },
    { id: 'genovesa', label: 'Genovesa' },
    { id: 'rabida', label: 'Rábida' },
    { id: 'santa_fe', label: 'Santa Fe' },
    { id: 'wolf', label: 'Wolf' },
    { id: 'darwin', label: 'Darwin' },
    { id: 'bartolome', label: 'Bartolomé' },
    { id: 'north_seymour', label: 'North Seymour' },
    { id: 'south_plaza', label: 'South Plaza' },
    { id: 'daphne_major', label: 'Daphne Major' },
    { id: 'daphne_minor', label: 'Daphne Minor' },
];

export default async function MainSelector() {
    return (
        <main className="min-h-screen relative grid place-items-center">
            <MapboxMap className="absolute inset-0 pointer-events-none" />
            <div className="absolute bottom-8 inset-x-0 flex gap-8 justify-center">
                <CasLogo className="shrink-0 self-end" />
                <div className="flex rounded-lg bg-white">
                    <div className="flex gap-4 p-6">
                        <Select>
                            <SelectTrigger className="w-64">
                                <SelectValue placeholder="Select a value" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Islands</SelectLabel>
                                    {islands.map((island) => (
                                        <SelectItem
                                            key={island.id}
                                            value={island.id}
                                        >
                                            {island.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <MultipleSelector
                            options={[
                                { label: 'Tortoises', value: 'tortoises' },
                                { label: 'Hares', value: 'hares' },
                                { label: 'Snails', value: 'snails' },
                                { label: 'Cheetahs', value: 'cheetahs' },
                            ]}
                        />
                    </div>
                    <button className="bg-cas-green text-white grid place-items-center px-16 rounded-r-lg">
                        asdf
                    </button>
                </div>
            </div>
        </main>
    );
}
