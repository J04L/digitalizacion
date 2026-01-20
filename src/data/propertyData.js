// Initial property data with varied images
// Images from Picsum for variety

export const initialProperties = [
    {
        id: 1,
        title: "Ático luminoso en el centro",
        zone: "Centro",
        price: 245000,
        bedrooms: 3,
        bathrooms: 2,
        sqm: 120,
        image: "https://picsum.photos/seed/prop1/400/300"
    },
    {
        id: 2,
        title: "Piso reformado cerca del parque",
        zone: "Norte",
        price: 189000,
        bedrooms: 2,
        bathrooms: 1,
        sqm: 85,
        image: "https://picsum.photos/seed/prop2/400/300"
    },
    {
        id: 3,
        title: "Apartamento con vistas al mar",
        zone: "Playa",
        price: 320000,
        bedrooms: 2,
        bathrooms: 2,
        sqm: 95,
        image: "https://picsum.photos/seed/prop3/400/300"
    },
    {
        id: 4,
        title: "Estudio moderno recién construido",
        zone: "Centro",
        price: 125000,
        bedrooms: 1,
        bathrooms: 1,
        sqm: 45,
        image: "https://picsum.photos/seed/prop4/400/300"
    },
    {
        id: 5,
        title: "Chalet adosado con jardín",
        zone: "Afueras",
        price: 375000,
        bedrooms: 4,
        bathrooms: 3,
        sqm: 180,
        image: "https://picsum.photos/seed/prop5/400/300"
    },
    {
        id: 6,
        title: "Piso familiar zona escolar",
        zone: "Norte",
        price: 210000,
        bedrooms: 3,
        bathrooms: 2,
        sqm: 110,
        image: "https://picsum.photos/seed/prop6/400/300"
    },
    {
        id: 7,
        title: "Loft industrial reformado",
        zone: "Centro",
        price: 275000,
        bedrooms: 1,
        bathrooms: 1,
        sqm: 80,
        image: "https://picsum.photos/seed/prop7/400/300"
    },
    {
        id: 8,
        title: "Dúplex con terraza privada",
        zone: "Sur",
        price: 298000,
        bedrooms: 3,
        bathrooms: 2,
        sqm: 140,
        image: "https://picsum.photos/seed/prop8/400/300"
    },
    {
        id: 9,
        title: "Apartamento primera línea de playa",
        zone: "Playa",
        price: 410000,
        bedrooms: 2,
        bathrooms: 2,
        sqm: 88,
        image: "https://picsum.photos/seed/prop9/400/300"
    },
    {
        id: 10,
        title: "Piso económico para invertir",
        zone: "Sur",
        price: 95000,
        bedrooms: 2,
        bathrooms: 1,
        sqm: 65,
        image: "https://picsum.photos/seed/prop10/400/300"
    },
    {
        id: 11,
        title: "Ático con piscina comunitaria",
        zone: "Norte",
        price: 285000,
        bedrooms: 3,
        bathrooms: 2,
        sqm: 125,
        image: "https://picsum.photos/seed/prop11/400/300"
    },
    {
        id: 12,
        title: "Bajo con patio exterior",
        zone: "Afueras",
        price: 175000,
        bedrooms: 2,
        bathrooms: 1,
        sqm: 70,
        image: "https://picsum.photos/seed/prop12/400/300"
    },
    {
        id: 13,
        title: "Piso señorial en edificio histórico",
        zone: "Centro",
        price: 450000,
        bedrooms: 4,
        bathrooms: 2,
        sqm: 200,
        image: "https://picsum.photos/seed/prop13/400/300"
    },
    {
        id: 14,
        title: "Apartamento para estudiantes",
        zone: "Centro",
        price: 110000,
        bedrooms: 1,
        bathrooms: 1,
        sqm: 40,
        image: "https://picsum.photos/seed/prop14/400/300"
    },
    {
        id: 15,
        title: "Chalet independiente con garaje",
        zone: "Afueras",
        price: 520000,
        bedrooms: 5,
        bathrooms: 3,
        sqm: 250,
        image: "https://picsum.photos/seed/prop15/400/300"
    },
    {
        id: 16,
        title: "Piso recién pintado cerca del metro",
        zone: "Sur",
        price: 165000,
        bedrooms: 2,
        bathrooms: 1,
        sqm: 75,
        image: "https://picsum.photos/seed/prop16/400/300"
    },
    {
        id: 17,
        title: "Apartamento con balcón soleado",
        zone: "Playa",
        price: 235000,
        bedrooms: 2,
        bathrooms: 1,
        sqm: 82,
        image: "https://picsum.photos/seed/prop17/400/300"
    },
    {
        id: 18,
        title: "Piso grande para familia numerosa",
        zone: "Norte",
        price: 340000,
        bedrooms: 5,
        bathrooms: 2,
        sqm: 170,
        image: "https://picsum.photos/seed/prop18/400/300"
    },
    {
        id: 19,
        title: "Estudio amueblado listo para entrar",
        zone: "Centro",
        price: 135000,
        bedrooms: 1,
        bathrooms: 1,
        sqm: 38,
        image: "https://picsum.photos/seed/prop19/400/300"
    },
    {
        id: 20,
        title: "Ático de lujo con jacuzzi",
        zone: "Playa",
        price: 580000,
        bedrooms: 3,
        bathrooms: 3,
        sqm: 150,
        image: "https://picsum.photos/seed/prop20/400/300"
    }
]

// Default images for new properties (varied)
export const defaultImages = [
    "https://picsum.photos/seed/newprop1/400/300",
    "https://picsum.photos/seed/newprop2/400/300",
    "https://picsum.photos/seed/newprop3/400/300",
    "https://picsum.photos/seed/newprop4/400/300",
    "https://picsum.photos/seed/newprop5/400/300"
]

// Zones for filtering
export const zones = ["Centro", "Norte", "Sur", "Playa", "Afueras"]

// Helper to get random default image
export const getRandomDefaultImage = () => {
    return defaultImages[Math.floor(Math.random() * defaultImages.length)]
}
