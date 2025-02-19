const periods = [
    "Tanzimat", 
    "Servet-i Fünun", 
    "Fecr-i Ati", 
    "Milli Edebiyat", 
    "Cumhuriyet Dönemi"
];

const genres = ["Roman", "Şiir", "Hikaye", "Deneme", "Tiyatro", "Makale"];


const works = [
    { work: "İntibah", author: "Namık Kemal", period: "Tanzimat", genre: "Roman" },
    { work: "Cezmi", author: "Namık Kemal", period: "Tanzimat", genre: "Roman" },
    { work: "Şair Evlenmesi", author: "Şinasi", period: "Tanzimat", genre: "Tiyatro" },
    { work: "Araba Sevdası", author: "Recaizade Mahmut Ekrem", period: "Tanzimat", genre: "Roman" },
    { work: "Şıpsevdi", author: "Hüseyin Rahmi Gürpınar", period: "Tanzimat", genre: "Roman" },
    { work: "Felatun Bey ile Rakım Efendi", author: "Ahmet Mithat Efendi", period: "Tanzimat", genre: "Roman" },
    { work: "Taaşşuk-ı Talat ve Fitnat", author: "Şemsettin Sami", period: "Tanzimat", genre: "Roman" },
    
    { work: "Eylül", author: "Mehmet Rauf", period: "Servet-i Fünun", genre: "Roman" },
    { work: "Mai ve Siyah", author: "Halit Ziya Uşaklıgil", period: "Servet-i Fünun", genre: "Roman" },
    { work: "Aşk-ı Memnu", author: "Halit Ziya Uşaklıgil", period: "Servet-i Fünun", genre: "Roman" },
    { work: "Kırık Hayatlar", author: "Halit Ziya Uşaklıgil", period: "Servet-i Fünun", genre: "Roman" },
    { work: "Mensur Şiirler", author: "Halit Ziya Uşaklıgil", period: "Servet-i Fünun", genre: "Şiir" },
    { work: "Sis", author: "Tevfik Fikret", period: "Servet-i Fünun", genre: "Şiir" },
    { work: "Rübab-ı Şikeste", author: "Tevfik Fikret", period: "Servet-i Fünun", genre: "Şiir" },
    
    { work: "Ruh-ı Kemal", author: "Cenap Şahabettin", period: "Fecr-i Ati", genre: "Şiir" },
    { work: "Elhan-ı Şita", author: "Cenap Şahabettin", period: "Fecr-i Ati", genre: "Şiir" },
    
    { work: "Bir Destan Gibi", author: "Nazım Hikmet", period: "Cumhuriyet Dönemi", genre: "Şiir" },
    { work: "Kuyucaklı Yusuf", author: "Sabahattin Ali", period: "Cumhuriyet Dönemi", genre: "Roman" },
    { work: "Huzur", author: "Ahmet Hamdi Tanpınar", period: "Cumhuriyet Dönemi", genre: "Roman" },
    { work: "Saatleri Ayarlama Enstitüsü", author: "Ahmet Hamdi Tanpınar", period: "Cumhuriyet Dönemi", genre: "Roman" },
    { work: "Sahnenin Dışındakiler", author: "Ahmet Hamdi Tanpınar", period: "Cumhuriyet Dönemi", genre: "Roman" },
    { work: "Ağrı Dağı Efsanesi", author: "Yaşar Kemal", period: "Cumhuriyet Dönemi", genre: "Roman" },
    { work: "İnce Memed", author: "Yaşar Kemal", period: "Cumhuriyet Dönemi", genre: "Roman" },
    { work: "Anayurt Oteli", author: "Yusuf Atılgan", period: "Cumhuriyet Dönemi", genre: "Roman" },
    { work: "Sinekli Bakkal", author: "Halide Edib Adıvar", period: "Cumhuriyet Dönemi", genre: "Roman" },
    { work: "Fatih-Harbiye", author: "Peyami Safa", period: "Cumhuriyet Dönemi", genre: "Roman" },
    
    { work: "Ateşten Gömlek", author: "Halide Edib Adıvar", period: "Milli Edebiyat", genre: "Roman" },
    { work: "Vurun Kahpeye", author: "Halide Edib Adıvar", period: "Milli Edebiyat", genre: "Roman" },
    { work: "Türkçülüğün Esasları", author: "Ziya Gökalp", period: "Milli Edebiyat", genre: "Deneme" },
    { work: "Eğil Dağlar", author: "Yahya Kemal Beyatlı", period: "Milli Edebiyat", genre: "Şiir" },
    { work: "Yaban", author: "Yakup Kadri Karaosmanoğlu", period: "Milli Edebiyat", genre: "Roman" },
    { work: "Kiralık Konak", author: "Yakup Kadri Karaosmanoğlu", period: "Milli Edebiyat", genre: "Roman" },
    { work: "Sodom ve Gomore", author: "Yakup Kadri Karaosmanoğlu", period: "Milli Edebiyat", genre: "Roman" },
    { work: "Hikaye-i Sevda", author: "Ömer Seyfettin", period: "Milli Edebiyat", genre: "Hikaye" },
    { work: "Bomba", author: "Ömer Seyfettin", period: "Milli Edebiyat", genre: "Hikaye" },
    { work: "Kaşağı", author: "Ömer Seyfettin", period: "Milli Edebiyat", genre: "Hikaye" },
    { work: "Deli Kurt", author: "Hüseyin Nihal Atsız", period: "Milli Edebiyat", genre: "Roman" }
];
