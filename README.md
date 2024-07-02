This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Design

[Figma file](https://www.figma.com/design/6vTJc92nm0tlMJ1wz3vzkl/CAS-Galapagateway?node-id=412-269&t=OrSaSnp5cb3vq7j4-1)

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building

Build a static page:
```bash 
npm run build
```
It will output static artifacts in out/

## Endpoints

This project relies on endpoints serviced by Django in a different repo.

### `GET /api/species/`
Returns:
```typescript
interface ApiSpeciesResult {
  species: Array<string>;
}
```

### `GET /api/islands`
Returns:
```typescript
interface ApiIslandsResult {
  islands: Array<string>;
}
```

### `GET /api/specimen`
Query Parameters:
```typescript
interface ApiSpecimenParam {
  islands: Array<string>;
  species: Array<string>;
  page?: number;
  count?: number;
}
```

Returns:
```typescript
type KVPair = {
  key: string;
  value: string;
};

type Specimen = {
  id: string; // unique key, potentially used as slug
  herbId: string;
  name: string;
  species: string;
  island: string;
  lat: string;
  lon: string;
  descrption: string;
  scanAsset: {
    model: string; // some URL to a loadable 3d asset, i.e. obj or gltf
    texture: string; // url to a loadable texture asset
  };
  taxonomy: Array<KVPair>;
  info: Array<KVPair>;
};

interface ApiSpecimenResult {
  specimen: Array<Specimen>;
}
```
