import { ModelViewerElement } from '@google/model-viewer';

function latLongToDegrees(lat: number, long: number) {
    const latCardinal = lat < 0 ? 'S' : 'N';
    const longCardinal = long < 0 ? 'W' : 'E';

    return `${Math.abs(lat)}°${latCardinal} ${Math.abs(long)}°${longCardinal}`;
}

const specimenDetails = {
    key: 543671633,
    occurrence_id: 'urn:catalog:CAS:HERP:8141',
    publishing_country: 'US',
    protocol: 'EML',
    last_crawled: '2024-08-05T00:01:47.358000Z',
    last_parsed: '2024-08-05T00:09:02.730000Z',
    crawl_id: 399,
    basis_of_record: 'PRESERVED_SPECIMEN',
    occurrence_status: 'PRESENT',
    sex: 'FEMALE',
    life_stage: 'Adult',
    scientific_name: 'Chelonoidis vandenburghi (Desola, 1930)',
    decimal_latitude: -0.456944,
    decimal_longitude: -91.050833,
    elevation: 609.6,
    continent: 'SOUTH_AMERICA',
    state_province: 'Galapagos Prov.',
    water_body: 'South Pacific Ocean',
    higher_geography:
        'South Pacific Ocean; Ecuador; Galapagos Prov.; Galapagos Ids.; Isabela Id.',
    year: 1906,
    month: 8,
    day: 11,
    event_date: '1906-08-11',
    start_day_of_year: 223,
    end_day_of_year: 223,
    type_status: 'HOLOTYPE',
    issues: ['COORDINATE_ROUNDED', 'CONTINENT_DERIVED_FROM_COORDINATES'],
    modified: '2024-01-04T14:21:00Z',
    last_interpreted: '2024-08-05T00:09:02.730000Z',
    license: 'http://creativecommons.org/publicdomain/zero/1.0/legalcode',
    is_sequenced: 0,
    identifiers: [
        {
            identifier: 'urn:catalog:CAS:HERP:8141',
        },
    ],
    media: [
        {
            type: 'StillImage',
            format: 'image/jpeg',
            license: 'http://creativecommons.org/publicdomain/zero/1.0/',
            identifier:
                'http://www.archive.org/stream/catalogueofdepar02unse#page/n149/mode/2up',
            references:
                'http://researcharchive.calacademy.org/research/herpetology/catalog/index.asp?xAction=Search&RecStyle=Full&OrderBy=Museum%2C+CatNo&Sex=%5Bany%5D&Museum=CAS&Class=%5Bany%5D&Ordersub=%5Bany%5D&Stage=%5Bany%5D&PageStyle=Multiple&PageSize=20&Pres=%5Bany%5D&CatNo=8141&Page=1',
            description: 'catalog page',
        },
    ],
    facts: [],
    relations: [],
    institution_key: 'd2a2720687ab47eab5fcd2e57054b688',
    collection_key: 'ba09c3233cf84e82900f23f2bdb46f17',
    is_in_cluster: 0,
    recorded_by: 'R.H. Beck',
    identified_by: 'R. DeSola',
    preparations: 'Dry',
    geodetic_datum: 'WGS84',
    record_number: '3861',
    verbatim_event_date: '11 Aug 1906',
    island_group: 'Galapagos Ids.',
    island: 'Isabela Id.',
    locality: 'Cowley Mt',
    verbatim_locality: 'Cowley Mt. Albemarle Isl. Galapagos Archipelago',
    collection_code: 'HERP',
    description: 'test',
    occurrence_remarks:
        "Holotype of Testudo vandenburghi DeSola, 1930.  Skull separate.  Slevin's notes give elevation as 'about 2000 ft.'",
    verbatim_elevation: 'ca 2000 ft',
    higher_classification:
        'Animalia; Chordata; Reptilia; Testudines; Testudinidae',
    georeference_sources: 'Google Earth, 2013.',
    publishing_org: '66522820055c11d8b84eb8a03c50a862',
    recordsetName_id: 'cece4fc21fec4bb5a3357252548e3f0b',
    taxon_id: 10857641,
};

export default async function SpecimenPage() {
    const details = {
        ...specimenDetails,
        id: '8141',
        model: '8141/c53a2eb1-8dff-4204-af16-762c79ebd38f.glb',
        // location: {
        //     latitude: -0.4569444444,
        //     longitude: -91.0508333333,
        //     name: 'Cowley Mt',
        //     region: 'Galapagos, Ecuador',
        // },
        // name: 'Volcán Alcedo giant tortoise',
        // scientificName: 'Chelonoidis vandenburghi',
    };

    return (
        <div className="py-16 grid grid-cols-2 gap-[6rem] container mx-auto">
            <aside className="flex flex-col gap-12 items-end">
                {/* <div className="w-[24rem] rounded-full aspect-square bg-cas-medium-gray" /> */}
                {/* <ModelViewerElement src="models/8141/c53a2eb1-8dff-4204-af16-762c79ebd38f.glb" /> */}
                <model-viewer
                    src={`/models/${details.model}`}
                    // ar
                    // ar-modes="webxr scene-viewer quick-look"
                    camera-controls
                    auto-rotate
                    interaction-prompt="none"
                    tone-mapping="neutral"
                    shadow-intensity="1"
                    class="w-[32rem] h-[32rem]"
                />
                <div className="w-[16rem] rounded-full aspect-square bg-blue-100" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl">{details.locality}</h3>
                    <p>{details.island_group}</p>
                    <small className="font-mono block text-cas-medium-gray">
                        {latLongToDegrees(
                            details.decimal_latitude,
                            details.decimal_longitude
                        )}
                    </small>
                </div>
            </aside>
            <main className="flex flex-col gap-6">
                <small className="uppercase font-bold text-cas-green block text-xs">
                    {details.occurrence_id}
                </small>
                <small className="font-bold block">
                    {details.higher_classification}
                </small>
                <h2 className="text-cas-medium-gray text-6xl font-light">
                    {details.scientific_name}
                </h2>
                <p className="max-w-prose">
                    Chelonoidis niger vandenburghi, also known as the Volcán
                    Alcedo giant tortoise, the Alcedo Volcano giant tortoise or
                    the Alcedo giant tortoise, is a subspecies of Galápagos
                    tortoise endemic to the Galápagos archipelago in the
                    equatorial eastern Pacific Ocean. The specific epithet
                    vandenburghi honours American herpetologist John Van
                    Denburgh.
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

export async function generateStaticParams() {
    return [
        {
            id: '8141',
        },
    ];
}
