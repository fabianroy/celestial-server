const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const products = [
    {
        "id": 1,
        "product_name": "Moon Cat",
        "price": 500,
        "discounted_price": 370,
        "discount": "130 Taka",
        "type": "printed-tshirt",
        "collection": "Women's Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744382732/7_qtlaay.png",
        "description": "A cosmic fusion of lunar magic and feline charm—designed for dreamers and cat lovers alike.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Available",
        "product_code": "CAT-0002",
        "gender": "Women"
    },
    {
        "id": 2,
        "product_name": "Tokyo",
        "price": 530,
        "discounted_price": 400,
        "discount": "130 Taka",
        "type": "printed-tshirt",
        "collection": "Special Edition",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1746107849/Celestial_Fabrics_-_Tokyo_nlemxu.png",
        "description": "The ultimate statement tee from our Streetwear Collection.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Available",
        "product_code": "SE-0001",
        "gender": "Unisex"

    },
    {
        "id": 3,
        "product_name": "Ew People",
        "price": 500,
        "discounted_price": 370,
        "discount": "130 Taka",
        "type": "printed-tshirt",
        "collection": "Women's Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744382727/6_xbxads.png",
        "description": "Tee—designed exclusively for ladies who love to stand apart.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Off White"
        ],
        "stock": "Available",
        "product_code": "CAT-0001",
        "gender": "Women"
    },
    {
        "id": 4,
        "product_name": "The Space",
        "price": 530,
        "discounted_price": 400,
        "discount": "130 Taka",
        "type": "printed-tshirt",
        "collection": "Special Edition",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1746107839/Celestial_Fabrics_-_The_Space_sejbp5.png",
        "description": "the Space Tee from our new collection. Absolutely cosmic.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Available",
        "product_code": "SE-0002",
        "gender": "Men"

    },
    {
        "id": 5,
        "product_name": "Moon Knight",
        "price": 500,
        "discounted_price": 370,
        "discount": "130 Taka",
        "type": "printed-tshirt",
        "collection": "Marvel Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744382742/8_oeob2q.png",
        "description": "New Moon Night from our Marvel Collection Tee, specifically designed for the fans of the Moon Knight.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Available",
        "product_code": "MVL-0001",
        "gender": "Men"
    },
    {
        "id": 6,
        "product_name": "Venom",
        "price": 500,
        "discounted_price": 370,
        "discount": "130 Taka",
        "type": "printed-tshirt",
        "collection": "Marvel Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744382746/10_agi9ah.png",
        "description": "Unleash your inner symbiote with this premium black cotton tee featuring Venom's iconic menacing grin.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Available",
        "product_code": "MVL-0003",
        "gender": "Men"
    },
    {
        "id": 7,
        "product_name": "Black Panther",
        "price": 500,
        "discounted_price": 370,
        "discount": "130 Taka",
        "type": "printed-tshirt",
        "collection": "Marvel Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744382746/12_o8cyqx.png",
        "description": "Showcase the intricate detail of the Black Panther helmet on this premium, soft black cotton t-shirt.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Available",
        "product_code": "MVL-0005",
        "gender": "Men"
    },
    {
        "id": 8,
        "product_name": "The Punisher",
        "price": 500,
        "discounted_price": 370,
        "discount": "130 Taka",
        "type": "printed-tshirt",
        "collection": "Marvel Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744382740/11_kqpt5o.png",
        "description": "Deliver your own brand of justice in this premium black cotton tee featuring the iconic Punisher skull logo.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Available",
        "product_code": "MVL-0004",
        "gender": "Men"
    },
    {
        "id": 9,
        "product_name": "Red Spider",
        "price": 500,
        "discounted_price": 370,
        "discount": "130 Taka",
        "type": "printed-tshirt",
        "collection": "Marvel Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744382729/9_xpzp3r.png",
        "description": "Swing into action with this premium white cotton tee featuring the striking red and blue Spider-Man emblem.",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Off White"
        ],
        "stock": "Available",
        "product_code": "MVL-0002",
        "gender": "Men"
    },
    {
        "id": 10,
        "product_name": "WAKANDA Black Panther",
        "price": 600,
        "discounted_price": 450,
        "discount": "150 Taka",
        "type": "printed-tshirt",
        "collection": "Marvel Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744382742/13_h7wvuv.png",
        "description": "Premium black cotton tee featuring the iconic Panther suit necklace and mashup design.",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Available",
        "product_code": "MVL-0006",
        "gender": "Men"
    },
    {
        "id": 11,
        "product_name": "Wanna Be Yours",
        "price": 600,
        "discounted_price": 450,
        "discount": "150 Taka",
        "type": "printed-tshirt",
        "collection": "Women's Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744409143/Celestial_Fabrics_-_Wanna_Be_Yours_oyu16f.jpg",
        "description": "Vibe to Arctic Monkeys' 'AM' era in this premium black cotton tee featuring the unmistakable soundwave graphic.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Available",
        "product_code": "MS-0001",
        "gender": "Women"
    },
    {
        "id": 12,
        "product_name": "Spider Verse",
        "price": 600,
        "discounted_price": 450,
        "discount": "150 Taka",
        "type": "printed-tshirt",
        "collection": "Special Edition",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1745346599/Celestial_Fabrics_-_Spider_Verse_Dual_beswu1.png",
        "description": "Unleash your inner hero with this premium black cotton tee featuring the iconic Spider-Verse design.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Coming Soon",
        "product_code": "SE-0003",
    },
    {
        "id": 13,
        "product_name": "Solid Tee - Black",
        "price": 270,
        "discounted_price": 249,
        "discount": "21 Taka",
        "type": "solid-tshirt",
        "collection": "Solid Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744408982/Celestial_Fabrics_-_Solid_Tee_Black_qoxano.png",
        "description": "Elevate your wardrobe with this premium black cotton tee, a versatile staple for any outfit.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black"
        ],
        "stock": "Available",
        "product_code": "ST-U001",
        "gender": "Unisex"
    },
    {

        "id": 14,
        "product_name": "Solid Tee - Off White",
        "price": 270,
        "discounted_price": 249,
        "discount": "21 Taka",
        "type": "solid-tshirt",
        "collection": "Solid Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1744408984/Celestial_Fabrics_-_Solid_Tee_Off_White_h6tpwq.png",
        "description": "Elevate your wardrobe with this premium off-white cotton tee, a versatile staple for any outfit.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Off White"
        ],
        "stock": "Available",
        "product_code": "ST-U001",
        "gender": "Unisex"
    },
    {
        "id": 15,
        "product_name": "Drop Shoulder - Solid",
        "price": 499,
        "discounted_price": 399,
        "discount": "100 Taka",
        "type": "solid-tshirt",
        "collection": "Solid Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1746107887/WhatsApp_Image_2025-05-01_at_18.52.22_e98e576e_h522jy.jpg",
        "description": "Elevate your wardrobe with this premium interlock drop shoulder tee, a versatile staple for any outfit.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Maroon",
            "Off White",
            "Bottle Green",
            "Sky Blue",
            "Black",
        ],
        "stock": "Coming Soon",
        "product_code": "SD-U001",
        "gender": "Unisex"
    }
]

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
