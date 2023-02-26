import * as types from "./product.type";



const init={
    protypes:"women",
    isLoading:false,
    Products:[   {
        "id": 1,
        "title": "Lycra Drawstring and Elastic Saree Shapewear",
        "image": "https://images.meesho.com/images/products/102247670/sysxa_400.webp",
        "image2": "https://images.meesho.com/images/products/102247670/sysxa_400.webp",
        "price": 239,
        "rating": "3.9",
        "reviews": "906 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 2,
        "title": "Adrika Cotton Sarees",
        "image": "https://images.meesho.com/images/products/32768758/y5lju_400.webp",
        "image2": "https://images.meesho.com/images/products/32768758/y5lju_400.webp",
        "price": 223,
        "rating": "3.7",
        "reviews": "27596 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 3,
        "title": "Fab Women Art Silk Sarees",
        "image": "https://images.meesho.com/images/products/60877542/quzdp_400.webp",
        "image2": "https://images.meesho.com/images/products/60877542/quzdp_400.webp",
        "price": 280,
        "rating": "3.7",
        "reviews": "23947 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 4,
        "title": "Polyester Slip-on/ Elastic Saree Shapewear",
        "image": "https://images.meesho.com/images/products/91707458/pkfjr_400.webp",
        "image2": "https://images.meesho.com/images/products/91707458/pkfjr_400.webp",
        "price": 206,
        "rating": "3.7",
        "reviews": "1485 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 5,
        "title": "Aakarsha Sensational Kurtis",
        "image": "https://images.meesho.com/images/products/127938144/qllpy_400.webp",
        "image2": "https://images.meesho.com/images/products/127938144/qllpy_400.webp",
        "price": 183,
        "rating": "3.8",
        "reviews": "17656 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 6,
        "title": "Banarasi Silk Jacquard Saree With Blouse",
        "image": "https://images.meesho.com/images/products/12153332/y7wre_400.webp",
        "image2": "https://images.meesho.com/images/products/12153332/y7wre_400.webp",
        "price": 539,
        "rating": "4.0",
        "reviews": "55026 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 7,
        "title": "Alluring Fancy Women Dupattas",
        "image": "https://images.meesho.com/images/products/133855865/bkc8r_400.webp",
        "image2": "https://images.meesho.com/images/products/133855865/bkc8r_400.webp",
        "price": 495,
        "rating": "3.8",
        "reviews": "747 Reviews",
        "category": "women",
        "tag": "Dupattas"
      },
      {
        "id": 8,
        "title": "Georgette Lace border Saree with blouse",
        "image": "https://images.meesho.com/images/products/23325912/53f0f_400.webp",
        "image2": "https://rukminim1.flixcart.com/image/832/832/l4zxn680/blouse/n/5/q/42-blouse-bblack-c1-42-yana-original-imagfrsfk4uhzf7j.jpeg?q=70",
        "price": 212,
        "rating": "3.6",
        "reviews": "31013 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 9,
        "title": "Lycra Daily Lace inserts Bollywood Stitched Blouse",
        "image": "https://images.meesho.com/images/products/94090321/qw8sv_400.webp",
        "image2": "https://rukminim1.flixcart.com/image/832/832/l4zxn680/blouse/n/5/q/42-blouse-bblack-c1-42-yana-original-imagfrsfk4uhzf7j.jpeg?q=70",
        "price": 188,
        "rating": "3.9",
        "reviews": "18818 Reviews",
        "category": "women",
        "tag": "Blouse"
      },
      {
        "id": 10,
        "title": "Comfy Women Petticoats",
        "image": "https://images.meesho.com/images/products/17334130/gpjj9_400.webp",
        "price": 257,
        "rating": "3.9",
        "reviews": "10897 Reviews",
        "category": "women",
        "tag": "Petticoats"
      },
      {
        "id": 11,
        "title": "Chitrarekha Refined Kurtis",
        "image2": "https://rukminim1.flixcart.com/image/832/832/ks7tuvk0/skirt/s/k/2/s-kw2035-b-beige-karwarya-original-imag5ufdgaj6yeap.jpeg?q=70",
        "image": "https://rukminim1.flixcart.com/image/832/832/ks7tuvk0/skirt/s/k/2/s-kw2035-b-beige-karwarya-original-imag5ufdgaj6yeap.jpeg?q=70",
        "price": 283,
        "rating": "3.7",
        "reviews": "27215 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 12,
        "title": "Leheriya Georgette NA saree With blouse",
        "image": "https://images.meesho.com/images/products/160123304/ipvp0_400.webp",
        "price": 239,
        "rating": "3.6",
        "reviews": "10357 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 13,
        "title": "Sana Fabulous Women's Patiala Pants Combo Vol 8 With",
        "image": "https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/patiala/c/g/a/xl-na-print-r-rama-xl-nathawat-original-imaga6e3ubfy2bmn.jpeg?q=70",
        "image2": "https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/patiala/o/o/j/xl-na-print-r-rama-xl-nathawat-original-imaga6e3nmphz8gg.jpeg?q=70",
        "price": 405,
        "rating": "4.0",
        "reviews": "2305 Reviews",
        "category": "women",
        "tag": "Pants"
      },
      {
        "id": 14,
        "title": "Aakarsha Banarasi Silk Sarees",
        "image": "https://images.meesho.com/images/products/5455624/1_400.webp",
        "image2": "https://rukminim1.flixcart.com/image/832/832/k1118cw0/harem-pant/3/4/s/xxl-vfs-65-valar-fashions-original-imafj33vrfvk7yfa.jpeg?q=70",
        "price": 539,
        "rating": "4.0",
        "reviews": "4399 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 15,
        "title": "Banita Fabulous Kurtis",
        "image": "https://images.meesho.com/images/products/90966514/jdso1_400.webp",
        "price": 293,
        "rating": "3.7",
        "reviews": "57588 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 16,
        "title": "Stylus Women Petticoats",
        "image": "https://images.meesho.com/images/products/6984723/abfc5_400.webp",
        "image2": "https://images.meesho.com/images/products/6984723/abfc5_400.webp",
        "price": 395,
        "rating": "3.9",
        "reviews": "618 Reviews",
        "category": "women",
        "tag": "Petticoats"
      },
      {
        "id": 17,
        "title": "Abhisarika Fabulous Kurtis",
        "image": "https://images.meesho.com/images/products/109119469/ynlts_400.webp",
        "image2": "https://images.meesho.com/images/products/181390898/4jzrc_512.webp",
        "price": 336,
        "rating": "3.8",
        "reviews": "2171 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 18,
        "title": "Net Sarees",
        "image": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2020_11_30_162317130.jpg?v=1606918714",
        "image2": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2020_11_30_162256780.jpg?v=1606918711",
        "price": 189,
        "rating": "3.8",
        "reviews": "30697 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 19,
        "title": "Women's Slim Fit Saree Shapewears",
        "image": "https://images.meesho.com/images/products/116952674/y8jxk_512.webp",
        "image2": "https://images.meesho.com/images/products/116952674/vz8pb_400.webp",
        "price": 257,
        "rating": "4.0",
        "reviews": "12531 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 20,
        "title": "Adrika Refined Kurtis",
        "image": "https://images.meesho.com/images/products/6832341/ouhir_400.webp",
        "price": 295,
        "rating": "3.7",
        "reviews": "70501 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 21,
        "title": "Georgette Mirror Work Saree With Blouse",
        "image": "https://images.meesho.com/images/products/6832341/pe4tc_512.webp",
        "image2": "https://images.meesho.com/images/products/68242128/jwuuy_400.webp",
        "price": 407,
        "rating": "3.9",
        "reviews": "12097 Reviews",
        "category": "women",
        "tag": "Blouse"
      },
      {
        "id": 22,
        "title": "Polyester Slip-on/ Elastic Saree Shapewear",
        "image": "https://images.meesho.com/images/products/137607308/wvhfr_400.webp",
        "image2": "https://images.meesho.com/images/products/137607308/wvhfr_400.webp",
        "price": 206,
        "rating": "3.7",
        "reviews": "690 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 23,
        "title": "GANESH ETP satin silk Sarees",
        "image": "https://images.meesho.com/images/products/91695250/7jtgy_400.webp",
        "image2": "https://images.meesho.com/images/products/91695250/vjckh_512.webp",
        "price": 267,
        "rating": "4.0",
        "reviews": "46174 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 24,
        "title": "Aagyeyi Refined Kurtis",
        "image": "https://images.meesho.com/images/products/49030100/j1zmg_400.webp",
        "image2": "https://images.meesho.com/images/products/49030100/j1zmg_400.webp",
        "price": 270,
        "rating": "3.8",
        "reviews": "5860 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 25,
        "title": "Sassy Women Petticoats",
        "image": "https://images.meesho.com/images/products/68310071/397mx_400.webp",
        "image2": "https://images.meesho.com/images/products/68310071/397mx_400.webp",
        "price": 317,
        "rating": "4.1",
        "reviews": "49 Reviews",
        "category": "women",
        "tag": "Petticoats"
      },
      {
        "id": 26,
        "title": "Alisha Net Sarees",
        "image": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2021_03_27_120416397.jpg?v=1616951263",
        "image2": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2021_03_27_120411970.jpg?v=1616951262",
        "price": 262,
        "rating": "4.0",
        "reviews": "8296 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 27,
        "title": "Aagam Voguish Kurtis",
        "image": "https://images.meesho.com/images/products/216593405/9gk9z_400.webp",
        "image2": "https://rukminim1.flixcart.com/image/416/416/xif0q/shapewear/e/l/q/4xl-tdt-fc-the-decor-tex-original-imagg57afznn2yns.jpeg?q=70",
        "price": 286,
        "rating": "3.7",
        "reviews": "52871 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 28,
        "title": "Women pink Saree",
        "image": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2021_03_27_120429978.jpg?v=1616951722",
        "image2": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2021_03_27_120420791.jpg?v=1616951722",
        "price": 321,
        "rating": "3.7",
        "reviews": "50 Reviews",
        "category": "women",
        "tag": "Petticoats"
      },
      {
        "id": 29,
        "title": "Ikkat Georgette saree",
        "image": "https://m.media-amazon.com/images/I/31Ddxik3f-L.jpg",
        "image2": "https://m.media-amazon.com/images/I/71i30N+xgoL._UY741_.jpg",
  
        "price": 256,
        "rating": "3.6",
        "reviews": "30557 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 30,
        "title": "Jivika Petite Kurtis",
        "image": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/chi16896ss21ind-3.jpg",
        "image2": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=undefined,height=undefined,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/chi16896ss21ind-1.jpg",
  
        "price": 190,
        "rating": "3.9",
        "reviews": "6302 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 31,
        "title": "Poly Blend Drawstring and Elastic Saree Shapewear",
        "image": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2021_01_26_200339446.jpg?v=1611822286",
        "image2": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2021_01_26_200335502.jpg?v=1611822286",
        "price": 2499,
        "rating": "3.8",
        "reviews": "2266 Reviews",
        "category": "women",
        "tag": "women"
      },
      {
        "id": 32,
        "title": "Aakarsha Ensemble Kurtis",
        "image": "https://images.meesho.com/images/products/179078246/ddfbl_400.webp",
        "image2": "https://rukminim1.flixcart.com/image/832/832/kwtkxow0/kurta/p/k/r/m-women-embroidered-coton-a-line-designer-kurti-mbuzz-original-imag9exfwud5hups.jpeg?q=70",
        "price": 322,
        "rating": "4.0",
        "reviews": "51215 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 33,
        "title": "Marble Soft Silk Tassels and Latkans Saree",
        "image": "https://images.meesho.com/images/products/64793553/twor7_400.webp",
        "image2": "http://t0.gstatic.com/images?q=tbn:ANd9GcQQXotmegx9bzVc0CdmKE5G2hg77qDGJLBgaDOAz31YylR6HHhX",
        "price": 3710,
        "rating": "4.0",
        "reviews": "54367 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 34,
        "title": "Alluring Stylish Women Dupattas",
        "image": "https://images.meesho.com/images/products/20393758/8da38_400.webp",
        "image2": "https://rukminim1.flixcart.com/image/416/416/l5cslu80/shopsy-gown/n/f/p/l-short-sleeve-stitched-megha-rani-l-aai-khodal-creation-original-imaggfqt6nhxycy8.jpeg?q=70",
        "price": 2476,
        "rating": "3.6",
        "reviews": "1162 Reviews",
        "category": "women",
        "tag": "Dupattas"
      },
      {
        "id": 35,
        "title": "Aishani Fashionable Kurtis",
        "image": "https://images.meesho.com/images/products/40780811/qm9hf_400.webp",
        "image2": "https://images.meesho.com/images/products/40780811/qm9hf_400.webp",
        "price": 1087,
        "rating": "3.8",
        "reviews": "11102 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 36,
        "title": "Georgette Printed Sarees",
        "image": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2020_11_30_162256780.jpg?v=1606918711",
        "image2": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/IMG_20201125_152536_30cfd3a1-3a27-4364-99b3-2fe48282c649.jpg?v=1606918712",
        "price": 272,
        "rating": "3.8",
        "reviews": "22117 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 37,
        "title": "Aishani Banarasi Silk Sarees",
        "image": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/IMG_20211007_154438_compress10.jpg?v=1633662639",
        "image2": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/IMG_20211007_154453_compress31.jpg?v=1641704257",
        "price": 540,
        "rating": "4.1",
        "reviews": "7203 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 38,
        "title": "Myra Voguish Kurtis",
        "image": "https://images.meesho.com/images/products/1853963/1_400.webp",
        "image2": "https://images.meesho.com/images/products/1853963/1_400.webp",
        "price": 262,
        "rating": "4.0",
        "reviews": "35685 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 39,
        "title": "Banarasi Silk Jacquard saree with blouse",
        "image": "https://m.media-amazon.com/images/I/71hh3bUXHdL._UY679_.jpg",
        "image2": "https://m.media-amazon.com/images/I/815qTezc3mL._UY550_.jpg",
        "price": 935,
        "rating": "3.9",
        "reviews": "16408 Reviews",
        "category": "women",
        "tag": "blouse"
      },
      {
        "id": 40,
        "title": "Comfy Women Saree Shapewear & Petticoats",
        "image": "https://images.meesho.com/images/products/28663823/z3zvy_400.webp",
        "image2": "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/f/j/1/xxl-nk105-subhan-creation-original-imaghjjsvs2hfcb8.jpeg?q=70",
        "price": 431,
        "rating": "3.7",
        "reviews": "6 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 42,
        "title": "Kashvi Chiffon Sarees",
        "image": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Greensaree_4-5.jpg?v=1626113761",
        "image2": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Greensaree_2-5.jpg?v=1626113761",
        "price": 3105,
        "rating": "3.9",
        "reviews": "6454 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 43,
        "title": "Classy Fashionable Women Saree",
        "image": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/blue1_3-4.jpg?v=1614786520",
        "image2": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/blue1_4-4.jpg?v=1614786519",
        "price": 2875,
        "rating": "3.9",
        "reviews": "698 Reviews",
        "category": "women",
        "tag": "Dupattas"
      },
      {
        "id": 44,
        "title": "Aakarsha Refined Kurtis",
        "image": "https://m.media-amazon.com/images/I/61nvgSWXN+L._UY679_.jpg",
        "image2": "https://m.media-amazon.com/images/I/717MJHIAjKL._UY550_.jpg",
        "price": 283,
        "rating": "4.0",
        "reviews": "7662 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 45,
        "title": "Adrika Fabulous Kurtis",
        "image": "https://images.meesho.com/images/products/159808971/wfrwu_400.webp",
        "image2": "https://images.meesho.com/images/products/159808971/pel2s_512.webp",
        "price": 2061,
        "rating": "3.9",
        "reviews": "4725 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 46,
        "title": "Banita Petite Sarees",
        "image": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2021_01_13_140212845_1.jpg?v=1626191999",
        "image2": "https://cdn.shopify.com/s/files/1/0284/7545/7635/products/Tezza_2021_01_13_140222653.jpg?v=1626191999",
        "price": 463,
        "rating": "3.9",
        "reviews": "321 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 47,
        "title": "Aakarsha Voguish Kurtis",
        "image": "https://rukminim1.flixcart.com/image/832/832/l3hmwsw0/kurta/6/3/e/3xl-organic18240ss22navy-biba-original-imagehngzgcrzpdm.jpeg?q=70",
        "image2": "https://rukminim1.flixcart.com/image/832/832/l3hmwsw0/kurta/1/2/i/3xl-organic18240ss22navy-biba-original-imagehngswjmagzc.jpeg?q=70",
        "price": 319,
        "rating": "3.7",
        "reviews": "8379 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 48,
        "title": "Banita Cotton Sarees",
        "image": "https://assets.ajio.com/medias/sys_master/root/20230124/SXdI/63ceed84f997dd708e1d5b98/-473Wx593H-465652365-black-MODEL.jpg",
        "image2": "https://assets.ajio.com/medias/sys_master/root/20230124/Hwj4/63ceed84f997dd708e1d5b22/-473Wx593H-465652365-black-MODEL3.jpg",
        "price": 255,
        "rating": "3.6",
        "reviews": "18688 Reviews",
        "category": "women",
        "tag": "saree"
      },
      {
        "id": 49,
        "title": "Adrika Refined Kurtis",
        "image": "https://newcdn.kalkifashion.com/media/catalog/product/m/u/multi_colored_kurta_set_with_lehariya_print_-j008cku2246y-sg75433_1_.jpg",
        "image2": "https://newcdn.kalkifashion.com/media/catalog/product/m/u/multi_colored_kurta_set_with_lehariya_print_-j008cku2246y-sg75433_5_.jpg",
        "price": 462,
        "rating": "3.9",
        "reviews": "649 Reviews",
        "category": "women",
        "tag": "Kurtis"
      },
      {
        "id": 50,
        "title": "LD Zone Chanderi Cotton Sarees",
        "image": "https://assets.ajio.com/medias/sys_master/root/20221222/dNzW/63a47638aeb269659c02de71/-473Wx593H-465483379-yellow-MODEL.jpg",
        "image2": "https://assets.ajio.com/medias/sys_master/root/20221222/JtWz/63a47638aeb269659c02ddfa/-473Wx593H-465483379-yellow-MODEL3.jpg",
        "price": 1186,
        "rating": "3.6",
        "reviews": "15919 Reviews",
        "category": "women",
        "tag": "saree"
      },],
    isError:false,
    currPage:1
}


export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.PRODUCTS_LOAD:
      return { ...state, isLoading: true };
    case types.PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, Products: payload };
    case types.PRODUCTS_ERROR:
      return { ...state, isError: true, isLoading: false };
    case types.PRODUCTS_TYPE:

            return {...state,protypes:payload}
    case types.PRODUCTS_PAGE:
            return {...state,currPage:payload}

    default:
      return state;
  }
};
