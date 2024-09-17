export default async function SpecimenPage() {
    return (
        <div className="py-16 grid grid-cols-2 gap-[6rem] container mx-auto">
            <aside className="flex flex-col gap-12 items-end">
                <div className="w-[24rem] rounded-full aspect-square bg-cas-medium-gray" />
                <div className="w-[16rem] rounded-full aspect-square bg-blue-100" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl">Pinzón island</h3>
                    <p>Galápagos Islands, Ecuador</p>
                    <small className="font-mono block text-cas-medium-gray">
                        0.610236°S 90.666234°W
                    </small>
                </div>
            </aside>
            <main className="flex flex-col gap-6">
                <small className="uppercase font-bold text-cas-green block text-xs">
                    CAS:HERP:8293
                </small>
                <small className="font-bold block">
                    Chelonoidis duncanensis
                </small>
                <h2 className="text-cas-medium-gray text-6xl font-light">
                    Pinzón turtle etc
                </h2>
                <p className="max-w-prose">
                    Although relatively undisturbed by whalers, fairly large
                    numbers of tortoises were removed by expeditions in the
                    latter half of the 19th century and the early 20th. After
                    the introduction of black rats (Rattus rattus) and brown
                    rats (Rattus norvegicus) some time before 1900, no natural
                    breeding succeeded. Since 1965, eggs have been transported
                    to the Charles Darwin Research Station for hatching and
                    rearing. Over 75% of those released between 1970 and 1990
                    survived. There are currently around 532 known individuals,
                    which live in the southwestern side of Pinzón Island.
                </p>
                <div className="flex flex-col gap-16">
                    <DetailsTable
                        title="Details"
                        details={
                            new Map([
                                ['Length', '1.2m'],
                                ['Weight', '250kg'],
                                ['Diet', 'Herbivore'],
                            ])
                        }
                    />
                    <DetailsTable
                        title="Details"
                        details={
                            new Map([
                                ['Length', '1.2m'],
                                ['Weight', '250kg'],
                                ['Diet', 'Herbivore'],
                            ])
                        }
                    />
                </div>
            </main>
        </div>
    );
}

function DetailsTable({
    title,
    details,
}: {
    title: string;
    details: Map<string, string>;
}) {
    const keys = Array.from(details.keys());

    return (
        <div className="flex flex-col gap-8">
            <h4 className="uppercase text-cas-green font-bold text-xs">
                {title}
            </h4>
            <table>
                <tbody>
                    {keys.map((value, index) => (
                        <tr key={index}>
                            <td className="font-bold">{value}</td>
                            <td>{details.get(value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
