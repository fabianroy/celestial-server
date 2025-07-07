const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const products = [
    {
        "id": 1,
        "product_name": "Moon Cat",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
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
        "fabric": "Cotton",
        "gender": "Women"
    },
    {
        "id": 2,
        "product_name": "Tokyo",
        "price": 500,
        "discounted_price": 400,
        "discount": "100 Taka",
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
        "fabric": "Cotton",
        "gender": "Unisex"

    },
    {
        "id": 3,
        "product_name": "Ew People",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
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
        "fabric": "Cotton",
        "gender": "Women"
    },
    {
        "id": 4,
        "product_name": "The Space",
        "price": 500,
        "discounted_price": 400,
        "discount": "100 Taka",
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
        "fabric": "Cotton",
        "gender": "Men"

    },
    {
        "id": 5,
        "product_name": "Moon Knight",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
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
        "fabric": "Cotton",
        "gender": "Men"
    },
    {
        "id": 6,
        "product_name": "Venom",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
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
        "fabric": "Cotton",
        "gender": "Men"
    },
    {
        "id": 7,
        "product_name": "Black Panther",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
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
        "fabric": "Cotton",
        "gender": "Men"
    },
    {
        "id": 8,
        "product_name": "The Punisher",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
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
        "fabric": "Cotton",
        "gender": "Men"
    },
    {
        "id": 9,
        "product_name": "Red Spider",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
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
        "fabric": "Cotton",
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
        "fabric": "Cotton",
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
        "fabric": "Cotton",
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
        "fabric": "Cotton",
        "gender": "Men"
    },
    {
        "id": 13,
        "product_name": "Premium Tshirt - Black",
        "price": 299,
        "discounted_price": 249,
        "discount": "50 Taka",
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
        "fabric": "Cotton",
        "gender": "Unisex"
    },
    {

        "id": 14,
        "product_name": " Premium Tshirt - Off White",
        "price": 299,
        "discounted_price": 249,
        "discount": "50 Taka",
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
        "fabric": "Cotton",
        "gender": "Unisex"
    },
    {
        "id": 15,
        "product_name": "Premium Drop Shoulder - Rib",
        "price": 499,
        "discounted_price": 399,
        "discount": "100 Taka",
        "type": "drop-shoulder",
        "collection": "Solid Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1748714385/WhatsApp_Image_2025-05-02_at_23.19.09_6aace476_yruumv.jpg",
        "description": "Elevate your wardrobe with this premium interlock drop shoulder tee, a versatile staple for any outfit.",
        "size": [
            "M",
            "L",
            "XL",
        ],
        "color": [
            "Navy",
            "Cream",
            "Gray"
        ],
        "stock": "Available",
        "product_code": "ST-U003",
        "fabric": "Rib Fabric",
        "gender": "Unisex"
    },
    {
        "id": 16,
        "product_name": "Red Light",
        "price": 499,
        "discounted_price": 400,
        "discount": "99 Taka",
        "type": "printed-tshirt",
        "collection": "Movies & Series",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1751896649/red_light_e3sp4o.png",
        "description": "Inspired by the Squid Game, this tee features a striking red light design that captures the essence of the series.",
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
        "product_code": "MVS-0001",
        "fabric": "Cotton",
        "gender": "Unisex"
    },
    {
        "id": 17,
        "product_name": "Young-hee",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Movies & Series",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1751896647/Young-hee_zgjogd.png",
        "description": "Inspired by the Squid Game, this tee features a striking Young-hee design that captures the essence of the series.",
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
        "product_code": "MVS-0003",
        "fabric": "Cotton",
        "gender": "Unisex"
    },
    {
        "id": 18,
        "product_name": "Squid Game",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Movies & Series",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1751896645/Squid_Game_-_Celestial_Fabrics_gutwvb.png",
        "description": "Inspired by the Squid Game, this tee features a striking Squid Game design that captures the essence of the series.",
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
        "product_code": "MVS-0004",
        "fabric": "Cotton",
        "gender": "Unisex"
    },
    {
        "id": 19,
        "product_name": "Squid Symbol",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Movies & Series",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1751896647/Squid_Game_Symbol_esgzrk.png",
        "description": "Inspired by the Squid Game, this tee features a striking Squid Symbol design that captures the essence of the series.",
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
        "product_code": "MVS-0002",
        "fabric": "Cotton",
        "gender": "Unisex"
    },

    {
        "id": 20,
        "product_name": "Tote Bag - Solid",
        "price": 299,
        "discounted_price": 250,
        "discount": "49 Taka",
        "type": "bag",
        "collection": "Bag Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1748720507/987e9a4f-c311-47fd-bbb5-7e4728fa388b_hlqt1y.jpg",
        "description": "Premium Solid Tote Bag, designed for the modern woman.",
        "size": [
            "16x12 inches"
        ],
        "color": [
            "Black", "Lion", "Tiger Orange", "Maroon",
        ],
        "stock": "Available",
        "fabric": "Canvas",
        "product_code": "LB-0001",
        "gender": "Women"
    },
    {
        "id": 21,
        "product_name": "Tote Bag - Printed",
        "price": 299,
        "discounted_price": 250,
        "discount": "49 Taka",
        "type": "bag",
        "collection": "Bag Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1748720677/Tote_Bags_-_Celestial_Fabrics_cut_isqye7.png",
        "description": "Premium Printed Tote Bag, designed for the modern woman.",
        "size": [
            "16x12 inches",
        ],
        "color": [
            "Black", "Lion", "Tiger Orange", "Maroon",
        ],
        "stock": "Available",
        "fabric": "Canvas",
        "product_code": "LB-0002",
        "gender": "Women"
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
