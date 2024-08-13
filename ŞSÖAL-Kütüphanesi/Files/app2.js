let searchBtn = document.querySelector('.searchBtn');

let closeBtn = document.querySelector('.closeBtn');

let searchBox = document.querySelector('.searchBox');

let navigation = document.querySelector('.navigation');

let menuToggle = document.querySelector('.menuToggle');

let header = document.querySelector('.header');


searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
}

closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}

    

let names = ["Sherlock holmes","Suç Ve Ceza","Mutluluğun Kazanılması",
"Dorian Grayin Portresi", "Sokrates Savunması", "Bir İdam Mahkumunun Son Günü", "Mecburiyet", "Yakıcı Sır", "Geçmişe yolculuk", "Satranç",
"Leonardo'nun Yahudası", "Sırça Köşk","Eylül", "Küçük Şeyler","İçimizdeki Şeytan", "Almond", "Gümüş Kanat", "Mühürlü Sandık", "Olmayan Ülke",
"Nasrettin Hoca", "Kraliçeyi Kurtarmak","Çamlıca'nın üç günü","Paris'te son osmanlılar","Eski Dostlar","Devrim yılları","Bir Gün","Bora'nın kitabı","Hayat","Geniş Zamanlar","Tekez",
"Ege kıyılarından eski zaman masalları","Dönüp baktığımda","Beni asıl hayat aldattı","oda poster ve şeylerin kaderi","mutluluk huzursuzluk elia ile yolculuk",
"yüreğim seni çok sevdi","Gelibolu","düş ekmeği","suçumuz insan olmak","narla incire gazel","git kendini çok sevdirmeden","ölü erkek kuşlar","baş ucumda müzik",
"kurt seyt shura","yaralısınız","sırça tuzak","yedinci gün","Galiz kahraman","kitab-ül hiyel","şarkını söylediğin zaman","önce çocuklar ve kadınlar",
"hababam sınıfı","Gözlerimi kaparım vazifemi yaparım","sersem kocanın kurnaz karısı","keşanlı ali destanı","beyasz kale","kırmızı saçlı kadın","cevdet beyve oğulları",
"kafamda bir tuhaflık","kar","yeni hayat","kara kitap","istanbul","sesiz ev","masumiyet müzesi","ilişkiler","büyümenin Türkçe tarihi","şairin romanı","yüksek topuklar",
"nefes nefese","umut","handan","veda","köprü","doğunun limanları","doğudan uzaklara","ışık bahçeleri","afrikalı Leo","gururu ve önyargı","yaşamak sevmek ve öğrenmek",
"senden sonra ben","tohum ve toprak","bin muhteşem Güneş","ben cosmo","karışık","her gün hüzüm","sol ayağım","Genç werther'in acıları","artık hiç bir yer ev değil",
"olasılıksız","Da vinci şifresi","ejderha dövmeli kız","ateşle oynayan kız","dijital kale","insan neyle yaşar","Aforizmalar","Define adası","İnci","DR. JekYll ile bay HYDE",
"kimseye söyleme","monte kristo kontu","üç silahşörler","sirkte macera","vadide macera","gemide macera","kibarlar alemi",
"albertine kayıp","swann'ların tarafı","yüzbaşının kızı","yabancı","uzak tepeler","boncuk oyunu","günden kalanlar","tanios kayası",
"simyacı","yüreğnin götürdüğü yere git","Tanrıların Gözdesi","Fahrenhelt 451","dönüşüm","ceva sömürgesi","şato","satranç","beyaz lambaklar ülkesinde",
"çizgili pijamalı çocuk","adam ve deniz","ejderha'nın yükselişi","çavdar tarlasında çocuklar","böyle buyurdu zerdüşt","Nie Tasche ağladığında",
"düş yolcusu","zincire vurulmuş Prometheus","siyah inci","poltik tiyatro","ölümlü nesleler","körlük","kzı kardeşim için","günü adı",
"karanlık öyküler","22/11/63","yeşil","deniz feneri yolu","hayalet savaşları","bir gün","taras bulba","Güneş ülkesi",
"Oyuk iğnesinin esarı","R.L Steveson","burma günleri","Bridget Jones'un Günlüğü-II Mantığın sınırı","Kızılı boyalı saçlar",
"büyükanneler","Nietzche ve varlık","bin dokuz seksen dört","ferrarisini satan bile","Raşidn dürbünü","içinde aşk saklı",
"Mutluluk","Huzursuzluk","Elia ile yolculuk","Nah Kalkarsınız","Ah biz ödlek aydınlar","Geriye kalan","Kör düyüşü","şimdiki çocuklar harika","herkesin işi gücü var","sosyalizm geliyor savulun","gözümüz aydın efendim",
"bir koltuk nasıl devrilir","bay düdük","hangi parti kazanıcak ?","Şehirden indim köye","hayvan diyipte geçme","memurlar memurlar","memleketin birinde","hoptiri nan","aferin",
"toros canavrı","şimdi avrupa","Gerçeğin masalı","Yüz liraya bir deli","Yaşar ne yaşar ne yaşamaz","kalpazanlık bile yapılmıyor","İhtiali nasıl yaptık",
"fil amdi","Metal yorgunluğu","zor yokuşu","yaz geldi","toprak","su","güzelin yaralısı","od","AbumRabum","Surname","sah","hiraf","babilde ölüm istanbulda aşk","iki dirhem bir çekirde","akşam yıldızı","kartre-i matem",
"Latife Hanım","Kimya hatun","mor finci aral","baş kaldıran kurşun kanat","kalemamin sapını gülle donattım","Yeşil çam dedikleri Türkiye",
"Yürümek","yalancı tanıklar kahves","üç kadın,üç mektup,üç evlilik","Leyla ile Mecnun","Bitmeyen gece","tiamat","Fırata Karişan Öyküler","Erkekler ağlamaz","Deliduman","Pirüze","Lale devri","Hayata dön","Günahın üç rengi","Madalyonun içi","Kral kaybederse",
"Kırmızı pelerin","Camdaki kız","Toprak ana","gün olur asra bedel","cengiz hana küsen bulut","Elveda gülsarı","Cemile","oğulla buluşma","beyaz gemi",
"Bütün eserleri","Gün uzar yüzyıl olur","Karmaşık duygular","korku. ","amak koşucusu","ay ışığı sokağı","bir kadının yaşamından 24 saat","Bilinmeyen bir kadını mektubu",
"acımak","Gözlerini sımsıkı kapat","Empazi","Fİ","Pİ","Çİ","Harry potter ve Ateş kadehi","Araf","İmkansız kale","Momo","Kitapçı mendel","Kılıçların fırtınası","Ay'ın gözü","Alaca karanlık","sussex vampirinin mecarası",
"baskervıllelerin köpeği","dörtlerin esrarı","bolurrenkli kayın ağaçları","kızıl soruşturma","suç detayda saklıdır","gerçekler kanıt ıster","akıl oyunlarının gölgesinde","şüphe asla uyumaz","aklın şüphesi suçun gerçeğidir","cinayet günlüğü","mavi yakut"
,"üç çatılı ev","üç öğrencinin hikayesi","böcek avcısı","arsen lupen","taş meclisi","pal sokağı çocukları","kara kumsal","yarım kalan kalpler","kızn olmadan asla","annemi bir daha görebilirsen","eski yunan ve romada mühendislik","şirket","ortaçağ kentleri"
,"gündüz düşleri","dünya şampiyonu danny","ivan denisoviçin bir günü","ateş ve kılıç","kiyoto","ses ve öfke","kuklacı çocuk","üç kuruşluk roman","kadınların cenneti","pasajlar","gecenin sonunda yolculuk","zavallı necdet","ruhun ölümü","virginia woolf","benden selam söyle anadolya"
,"bir dediler evinin yalan yanlış anlatılan kısa tarihi","kalan","çoçukluğun soğuk geceleri","adı aşk","mücella","aşkın 7 hali","halime kaptan","füreye","halime kaptan","şakir paşa köşkü","saçma sapan şeyler","aşkın şehidi","seçme hikayeler","türkan","üç istanbul"
,"gazi ve fikriye","ölürsem beni seninle ararlar şimdi","patasana","kukla","sultanı öldürmek","beyoğlunun en güzel abisi","meksikaya yolculuk","büyük uyanış","yeşil kirane","içimizden bir yer","adım adım hayata","bye bye türkçe","iki genç kızın romanı","Reşad Ekrem Koço",
"Hürrem","Sınır Duvar","Yüksek Topuklar","İskender","Gögeler ve hayaller şehrinde","safiye sultan","Osmanlı padişahları","Türk Öykü Seçkisi","Ali ile Ramazan","Sizin hiç babanız öldümü","En uzun gece","nevşehir'den New york'a","Afacanlar çetesi","Moskof Çağriye hürrem","Bir maniniz yoksa annemler size gelicek"
,"Güneş umuttan şimdi doğar","Fotoğraflarla dünden bugüne milli mücadelenin beş şehri","Atatürk ve çocuk","Atatürk ve Çanakkale destanı","Sivas milli mücadelenin 108 günü","Atatürk'ten düşünceler","Burçak evren(Atatürkün fotoğraflarının)",
"Atatürk Günlüğü","Atatürk ve Seymen alayı","Erzurum'dan Ölümüne kadar beraber","Atatürk sölev(Nutuk)","Atarükün hatıra defteri","Atatürk ve Beytülmal","sarı zeybek","Günümüz Türkçesiyle Nutuk","Atatürk ve Türklerin tarihi","Çankaya","Nutuk(çeşitleri)","Hep o şarkı","Nülifer diye bir kız","Bir yıldız kaydı","Rüzgara fısıldıan kadınlar",
"Yanık Buğdaylar","Kayıp Gül","Lavanta kokusu","Vatandaş Abuzer","İstanbul'un sakinleri","Yaşama felsefesi","Hindistana yolculuk ve nepal gezisi",
"Fena halde leman","Namuscular","Karanlığa bir yıldız","Jurnal","Bu ülke","Özlüyorum","Bir bayrka Rüzgar bekliyor","Daktiloyla çekilmiş şiirler","Ay ışığı şiir ve yaşam","Kafatası","sevgilerle","Türk romanlarında eleştirisel bir bakış","Bizim yunus","Size bir sır vereceğim",
"Yolda üç kişi","Atatürk şiirleri","Gülden kale düştü","Bir dinazorun gezileri","Fuzüli","Bukre","Doğu sarayı","Son osmanlar","Lawrange efsanesi","İstiklal marşı 41 dize 41 yorum",
"İstikal marşı","Cengiz han","Yeni çeriler","Eski İstanbul hikayeleri","Tarihi değştiren askerler","Tarihte osamanlı bilmim ve teknolojisi","Osmanlı sultanları","Çanakkale muhaberreleri","Çankaya yolunda","Saklı tarih","Osmanlı yeniden keşfetmek","Türklerin Tarihi 2","Cumhuriyetin 3 efendisi",
"İç isyan var","Osmanlı tarhihinden ilginç hikaye ve anektodlar","Bilinmeyen istanbul","Destanlaşan Çanakkale","Türk kimliği","Tarihe Hükmeden millet Türkler","Gazi Mustafa KEmal Atatürk","1915 Çanakkale Harbi günlüğü","Ya ben İstanbulu alacağım yada istanbul beni", "Gerçek Atatürkçülük Musatafa","" ]

let sortednames = names.sort();


let input = document.getElementById("input");

input.addEventListener("keyup", (e) => {
    removeElements();
    for(let i of sortednames){
        
        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer"
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            let word = "<b>" + i.substr(0,input.value.length) + "</b>";
            word += i.substr(input.value.length);
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem)

        }
        

    }
});

function displayNames(value){
    input.value = value;

}

function removeElements(){
    let itemss = document.querySelectorAll(".list-items");
    itemss.forEach((item) =>{
        item.remove();
    })

}




/*





*/