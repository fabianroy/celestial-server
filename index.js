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
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1746107887/WhatsApp_Image_2025-05-01_at_18.52.22_e98e576e_h522jy.jpg",
        "description": "Elevate your wardrobe with this premium interlock drop shoulder tee, a versatile staple for any outfit.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black",
            "White",
            "Chocolate",
            "Navy",
            "Cream",
            "Gray"
        ],
        "stock": "Coming Soon",
        "product_code": "ST-U003",
        "fabric": "Rib Fabric",
        "gender": "Unisex"
    },
    {
        "id": 16,
        "product_name": "FCB 1st Edition",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Sports Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1747110978/FCB_1st_Edition_tmln7g.png",
        "description": "Visca el Barca! Show your support for FC Barcelona with this premium black cotton tee, featuring the iconic club design.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black",
        ],
        "stock": "Available",
        "fabric": "Cotton",
        "product_code": "FC-0005",
        "gender": "Men"
    },
    {
        "id": 17,
        "product_name": "FCB 2nd Edition",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Sports Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1747110980/FCB_2nd_Edition_nrxzfw.png",
        "description": "Visca el Barca! Show your support for FC Barcelona with this premium black cotton tee, featuring the iconic club design.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black",
        ],
        "stock": "Available",
        "fabric": "Cotton",
        "product_code": "FC-0009",
        "gender": "Men"
    },
    {
        "id": 18,
        "product_name": "Inter Milan",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Sports Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1747110978/Inter_Milan_akshto.png",
        "description": "Forza Inter! Show your support for Inter Milan with this premium black cotton tee, featuring the iconic club design.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black",
        ],
        "stock": "Available",
        "fabric": "Cotton",
        "product_code": "FC-0001",
        "gender": "Men"
    },
    {
        "id": 19,
        "product_name": "Dortmund",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Sports Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1747111012/Dortmund_wedsyc.png",
        "description": "Echte Liebe! Show your support for Borussia Dortmund with this premium black cotton tee, featuring the iconic club design.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black",
        ],
        "stock": "Available",
        "fabric": "Cotton",
        "product_code": "FC-0002",
        "gender": "Men"
    },
    {
        "id": 20,
        "product_name": "Liverpool",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Sports Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1747110978/Liverpool_fa8jsc.png",
        "description": "You'll Never Walk Alone! Show your support for Liverpool with this premium black cotton tee, featuring the iconic club design.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black",
        ],
        "stock": "Available",
        "fabric": "Cotton",
        "product_code": "FC-0003",
        "gender": "Men"
    },
    {
        "id": 21,
        "product_name": "Real Madrid 1st Edition",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Sports Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1747110981/Real_Madrid_1st_Edition_d4fm51.png",
        "description": "Hala Madrid! Show your support for Real Madrid with this premium black cotton tee, featuring the iconic club design.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black",
        ],
        "stock": "Available",
        "fabric": "Cotton",
        "product_code": "FC-0004",
        "gender": "Men"
    },
    {
        "id": 22,
        "product_name": "Real Madrid 2nd Edition",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Sports Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1747110990/Real_Madrid_2nd_Edition_vv7jrc.png",
        "description": "Hala Madrid! Show your support for Real Madrid with this premium black cotton tee, featuring the iconic club design.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black",
        ],
        "stock": "Available",
        "fabric": "Cotton",
        "product_code": "FC-0006",
        "gender": "Men"
    },
    {
        "id": 23,
        "product_name": "Man City",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Sports Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1747110978/Man_City_a0uxkr.png",
        "description": "City till I die! Show your support for Manchester City with this premium black cotton tee, featuring the iconic club design.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black",
        ],
        "stock": "Available",
        "fabric": "Cotton",
        "product_code": "FC-0007",
        "gender": "Men"
    },
    {
        "id": 24,
        "product_name": "FC Bayern",
        "price": 450,
        "discounted_price": 350,
        "discount": "100 Taka",
        "type": "printed-tshirt",
        "collection": "Sports Collection",
        "image": "https://res.cloudinary.com/dl1jd3756/image/upload/v1747111006/FC_BAYERN_ofmbep.png",
        "description": "Mia San Mia! Show your support for Bayern Munich with this premium black cotton tee, featuring the iconic club design.",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "color": [
            "Black",
        ],
        "stock": "Available",
        "fabric": "Cotton",
        "product_code": "FC-0008",
        "gender": "Men"
    },

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
