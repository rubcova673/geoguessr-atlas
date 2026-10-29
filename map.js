const FALLBACK_COUNTRIES=[["au","Австралия","Australia","Океания"],["at","Австрия","Austria","Европа"],["az","Азербайджан","Azerbaijan","Азия"],["al","Албания","Albania","Европа"],["dz","Алжир","Algeria","Африка"],["as","Американское Самоа","American Samoa","Океания"],["ao","Ангола","Angola","Африка"],["ad","Андорра","Andorra","Европа"],["ag","Антигуа и Барбуда","Antigua and Barbuda","Северная Америка"],["ar","Аргентина","Argentina","Южная Америка"],["am","Армения","Armenia","Азия"],["aw","Аруба","Aruba","Северная Америка"],["bb","Барбадос","Barbados","Северная Америка"],["by","Беларусь","Belarus","Европа"],["be","Бельгия","Belgium","Европа"],["bm","Бермуды","Bermuda","Северная Америка"],["bg","Болгария","Bulgaria","Европа"],["br","Бразилия","Brazil","Южная Америка"],["vg","Британские Виргинские острова","British Virgin Islands","Северная Америка"],["va","Ватикан","Vatican City","Европа"],["gb","Великобритания","United Kingdom","Европа"],["vi","Виргинские острова США","U.S. Virgin Islands","Северная Америка"],["vn","Вьетнам","Vietnam","Азия"],["de","Германия","Germany","Европа"],["gg","Гернси","Guernsey","Европа"],["gi","Гибралтар","Gibraltar","Европа"],["hk","Гонконг","Hong Kong","Азия"],["gd","Гренада","Grenada","Северная Америка"],["gr","Греция","Greece","Европа"],["gu","Гуам","Guam","Океания"],["dk","Дания","Denmark","Европа"],["je","Джерси","Jersey","Европа"],["dm","Доминика","Dominica","Северная Америка"],["eg","Египет","Egypt","Африка"],["il","Израиль","Israel","Азия"],["in","Индия","India","Азия"],["id","Индонезия","Indonesia","Азия"],["iq","Ирак","Iraq","Азия"],["ir","Иран","Iran","Азия"],["ie","Ирландия","Ireland","Европа"],["is","Исландия","Iceland","Европа"],["es","Испания","Spain","Европа"],["it","Италия","Italy","Европа"],["cv","Кабо-Верде","Cabo Verde","Африка"],["kz","Казахстан","Kazakhstan","Азия"],["ky","Каймановы острова","Cayman Islands","Северная Америка"],["ca","Канада","Canada","Северная Америка"],["ke","Кения","Kenya","Африка"],["ki","Кирибати","Kiribati","Океания"],["cn","Китай","China","Азия"],["co","Колумбия","Colombia","Южная Америка"],["km","Коморы","Comoros","Африка"],["cw","Кюрасао","Curaçao","Северная Америка"],["li","Лихтенштейн","Liechtenstein","Европа"],["mo","Макао","Macao","Азия"],["mv","Мальдивы","Maldives","Азия"],["mh","Маршалловы Острова","Marshall Islands","Океания"],["mx","Мексика","Mexico","Северная Америка"],["fm","Микронезия","Micronesia","Океания"],["mc","Монако","Monaco","Европа"],["nr","Науру","Nauru","Океания"],["ng","Нигерия","Nigeria","Африка"],["nl","Нидерланды","Netherlands","Европа"],["nz","Новая Зеландия","New Zealand","Океания"],["no","Норвегия","Norway","Европа"],["ae","ОАЭ","United Arab Emirates","Азия"],["im","Остров Мэн","Isle of Man","Европа"],["pk","Пакистан","Pakistan","Азия"],["pe","Перу","Peru","Южная Америка"],["pl","Польша","Poland","Европа"],["pt","Португалия","Portugal","Европа"],["ru","Россия","Russia","Европа"],["ro","Румыния","Romania","Европа"],["ws","Самоа","Samoa","Океания"],["sm","Сан-Марино","San Marino","Европа"],["st","Сан-Томе и Принсипи","Sao Tome and Principe","Африка"],["sa","Саудовская Аравия","Saudi Arabia","Азия"],["sc","Сейшелы","Seychelles","Африка"],["vc","Сент-Винсент и Гренадины","Saint Vincent and the Grenadines","Северная Америка"],["kn","Сент-Китс и Невис","Saint Kitts and Nevis","Северная Америка"],["lc","Сент-Люсия","Saint Lucia","Северная Америка"],["rs","Сербия","Serbia","Европа"],["sg","Сингапур","Singapore","Азия"],["us","США","United States","Северная Америка"],["th","Таиланд","Thailand","Азия"],["tw","Тайвань","Taiwan","Азия"],["to","Тонга","Tonga","Океания"],["tv","Тувалу","Tuvalu","Океания"],["tr","Турция","Türkiye","Азия"],["ua","Украина","Ukraine","Европа"],["uy","Уругвай","Uruguay","Южная Америка"],["fo","Фарерские острова","Faroe Islands","Европа"],["fi","Финляндия","Finland","Европа"],["fr","Франция","France","Европа"],["pf","Французская Полинезия","French Polynesia","Океания"],["hr","Хорватия","Croatia","Европа"],["cz","Чехия","Czechia","Европа"],["cl","Чили","Chile","Южная Америка"],["ch","Швейцария","Switzerland","Европа"],["se","Швеция","Sweden","Европа"],["za","Южная Африка","South Africa","Африка"],["kr","Южная Корея","South Korea","Азия"],["jp","Япония","Japan","Азия"],["af","Afghanistan","Afghanistan","Азия"],["aq","Antarctica","Antarctica","Антарктида"],["bd","Bangladesh","Bangladesh","Азия"],["bz","Belize","Belize","Северная Америка"],["bj","Benin","Benin","Африка"],["bt","Bhutan","Bhutan","Азия"],["bo","Bolivia","Bolivia","Южная Америка"],["ba","Bosnia and Herzegovina","Bosnia and Herzegovina","Европа"],["bw","Botswana","Botswana","Африка"],["bn","Brunei","Brunei","Азия"],["bf","Burkina Faso","Burkina Faso","Африка"],["bi","Burundi","Burundi","Африка"],["kh","Cambodia","Cambodia","Азия"],["cm","Cameroon","Cameroon","Африка"],["cf","Central African Republic","Central African Republic","Африка"],["td","Chad","Chad","Африка"],["cr","Costa Rica","Costa Rica","Северная Америка"],["cu","Cuba","Cuba","Северная Америка"],["cy","Cyprus","Cyprus","Азия"],["cd","Democratic Republic of the Congo","Democratic Republic of the Congo","Африка"],["dj","Djibouti","Djibouti","Африка"],["do","Dominican Republic","Dominican Republic","Северная Америка"],["tl","East Timor","East Timor","Азия"],["ec","Ecuador","Ecuador","Южная Америка"],["sv","El Salvador","El Salvador","Северная Америка"],["gq","Equatorial Guinea","Equatorial Guinea","Африка"],["er","Eritrea","Eritrea","Африка"],["ee","Estonia","Estonia","Европа"],["sz","eSwatini","eSwatini","Африка"],["et","Ethiopia","Ethiopia","Африка"],["fk","Falkland Islands","Falkland Islands","Южная Америка"],["fj","Fiji","Fiji","Океания"],["tf","French Southern and Antarctic Lands","French Southern and Antarctic Lands","Другие"],["ga","Gabon","Gabon","Африка"],["gm","Gambia","Gambia","Африка"],["ge","Georgia","Georgia","Азия"],["gh","Ghana","Ghana","Африка"],["gl","Greenland","Greenland","Северная Америка"],["gt","Guatemala","Guatemala","Северная Америка"],["gn","Guinea","Guinea","Африка"],["gw","Guinea-Bissau","Guinea-Bissau","Африка"],["gy","Guyana","Guyana","Южная Америка"],["ht","Haiti","Haiti","Северная Америка"],["hn","Honduras","Honduras","Северная Америка"],["hu","Hungary","Hungary","Европа"],["ci","Ivory Coast","Ivory Coast","Африка"],["jm","Jamaica","Jamaica","Северная Америка"],["jo","Jordan","Jordan","Азия"],["xk","Kosovo","Kosovo","Европа"],["kw","Kuwait","Kuwait","Азия"],["kg","Kyrgyzstan","Kyrgyzstan","Азия"],["la","Laos","Laos","Азия"],["lv","Latvia","Latvia","Европа"],["lb","Lebanon","Lebanon","Азия"],["ls","Lesotho","Lesotho","Африка"],["lr","Liberia","Liberia","Африка"],["ly","Libya","Libya","Африка"],["lt","Lithuania","Lithuania","Европа"],["lu","Luxembourg","Luxembourg","Европа"],["mg","Madagascar","Madagascar","Африка"],["mw","Malawi","Malawi","Африка"],["my","Malaysia","Malaysia","Азия"],["ml","Mali","Mali","Африка"],["mr","Mauritania","Mauritania","Африка"],["md","Moldova","Moldova","Европа"],["mn","Mongolia","Mongolia","Азия"],["me","Montenegro","Montenegro","Европа"],["ma","Morocco","Morocco","Африка"],["mz","Mozambique","Mozambique","Африка"],["mm","Myanmar","Myanmar","Азия"],["na","Namibia","Namibia","Африка"],["np","Nepal","Nepal","Азия"],["nc","New Caledonia","New Caledonia","Океания"],["ni","Nicaragua","Nicaragua","Северная Америка"],["ne","Niger","Niger","Африка"],["kp","North Korea","North Korea","Азия"],["mk","North Macedonia","North Macedonia","Европа"],["om","Oman","Oman","Азия"],["ps","Palestine","Palestine","Азия"],["pa","Panama","Panama","Северная Америка"],["pg","Papua New Guinea","Papua New Guinea","Океания"],["py","Paraguay","Paraguay","Южная Америка"],["ph","Philippines","Philippines","Азия"],["pr","Puerto Rico","Puerto Rico","Северная Америка"],["qa","Qatar","Qatar","Азия"],["cg","Republic of the Congo","Republic of the Congo","Африка"],["rw","Rwanda","Rwanda","Африка"],["sn","Senegal","Senegal","Африка"],["sl","Sierra Leone","Sierra Leone","Африка"],["sk","Slovakia","Slovakia","Европа"],["si","Slovenia","Slovenia","Европа"],["sb","Solomon Islands","Solomon Islands","Океания"],["so","Somalia","Somalia","Африка"],["ss","South Sudan","South Sudan","Африка"],["lk","Sri Lanka","Sri Lanka","Азия"],["sd","Sudan","Sudan","Африка"],["sr","Suriname","Suriname","Южная Америка"],["sy","Syria","Syria","Азия"],["tj","Tajikistan","Tajikistan","Азия"],["bs","The Bahamas","The Bahamas","Северная Америка"],["tg","Togo","Togo","Африка"],["tt","Trinidad and Tobago","Trinidad and Tobago","Северная Америка"],["tn","Tunisia","Tunisia","Африка"],["tm","Turkmenistan","Turkmenistan","Азия"],["ug","Uganda","Uganda","Африка"],["tz","United Republic of Tanzania","United Republic of Tanzania","Африка"],["uz","Uzbekistan","Uzbekistan","Азия"],["vu","Vanuatu","Vanuatu","Океания"],["ve","Venezuela","Venezuela","Южная Америка"],["eh","Western Sahara","Western Sahara","Африка"],["ye","Yemen","Yemen","Азия"],["zm","Zambia","Zambia","Африка"],["zw","Zimbabwe","Zimbabwe","Африка"]];
const FALLBACK_DRIVING={leftDriving:["AG","AI","AU","BS","BB","BD","BM","BT","BW","BN","KY","CX","CC","CK","CY","DM","FK","FJ","GD","GG","GY","HK","IN","ID","IE","IM","JM","JP","JE","KE","KI","LS","MO","MW","MY","MV","MT","MU","MS","MZ","NA","NR","NP","NZ","NU","NF","PK","PG","PN","SH","KN","LC","VC","WS","SC","SG","SB","ZA","KR","LK","SR","SZ","TZ","TH","TL","TK","TO","TT","TC","TV","UG","GB","VG","VI","ZM","ZW"]};
const COUNTRIES=FALLBACK_COUNTRIES.map(([code,ru,en,continent])=>({code,ru,en,continent,hemisphere:["au","ar","bo","br","cl","fj","id","mg","mz","na","nz","py","pe","za","uy"].includes(code)?"south":(["ec","ga","cg","cd","ug","ke","so","id","ki","br"].includes(code)?"equatorial":"north")}));
const CENTER_LINE_COLORS={
 yellow:new Set("us ca mx gt bz sv hn ni cr pa cu do jm ht ag kn lc vc gd bb tt bs br ar bo py uy pe ec co ve gy sr gf cl kr no ph cn ke rw".split(" ")),
 white:new Set("gb ie nl fr de be lu ch at it es pt pl cz sk hu ro bg gr se dk is ee lv lt ua by ru au il hk in tr sn gh bw sz ls na za mw mz tz zm zw tn".split(" ")),
 both:new Set("jp fi nz ar uy ph".split(" "))
};
function centerLineCategory(code){const c=String(code||"").toLowerCase();if(CENTER_LINE_COLORS.both.has(c))return "both";if(CENTER_LINE_COLORS.yellow.has(c))return "yellow";if(CENTER_LINE_COLORS.white.has(c))return "white";return "unknown";}
function centerLineLabel(code){return ({yellow:"Обычно жёлтая центральная линия",white:"Обычно белая центральная линия",both:"Цвет зависит от ситуации: встречаются белая и жёлтая",unknown:"Нет достаточно надёжных данных"})[centerLineCategory(code)];}
const byCode=code=>COUNTRIES.find(c=>c.code===String(code||"").toLowerCase());
const left=new Set(FALLBACK_DRIVING.leftDriving.map(x=>x.toLowerCase()));
let filter="all", geoLayers=[], map;
const canvas=document.querySelector("#mapCanvas");
function latitudeRange(coords,range=[Infinity,-Infinity]){
 if(!Array.isArray(coords))return range;
 if(typeof coords[0]==="number"&&typeof coords[1]==="number"){range[0]=Math.min(range[0],coords[1]);range[1]=Math.max(range[1],coords[1]);return range;}
 for(const item of coords)latitudeRange(item,range);
 return range;
}
function hemisphereFor(feature){
 const geometry=feature.geometry;
 if(!geometry||!geometry.coordinates)return "unknown";
 const [minLat,maxLat]=latitudeRange(geometry.coordinates);
 if(!Number.isFinite(minLat)||!Number.isFinite(maxLat))return "unknown";
 if(minLat<=0&&maxLat>=0)return "equatorial";
 return maxLat<0?"south":"north";
}
function countryFor(feature){
 const p=feature.properties||{};
 const name=p.ADMIN||p.NAME_EN||p.NAME||p.name||"Country";
 const code=(p.ISO_A2&&p.ISO_A2!=="-99"?p.ISO_A2:p.ISO_A2_EH||p.iso_a2||"").toLowerCase();
 const country=byCode(code)||COUNTRIES.find(c=>c.en.toLowerCase()===name.toLowerCase());
 return {name,code,country:country?{...country,hemisphere:hemisphereFor(feature)}:null};
}
function sunCategory(country){
 if(!country)return "unknown";
 return country.hemisphere||"unknown";
}
function styleFor(feature){
 const found=countryFor(feature), c=found.country;
 const side=c?(left.has(c.code)?"left":"right"):"unknown";
 const sun=sunCategory(c);
 const sunMode=["sun-all","north","south","equatorial"].includes(filter);
 const lineMode=["line-all","line-white","line-yellow","line-both"].includes(filter);
 const lineCategory=centerLineCategory(c&&c.code);
 const color=lineMode?({white:"#2586c7",yellow:"#e6a323",both:"#9562cf",unknown:"#7d8b96"}[lineCategory]||"#7d8b96"):sunMode?({north:"#d48b32",south:"#0e8b78",equatorial:"#9b75c9",unknown:"#aebcc0"}[sun]||"#aebcc0"):({left:"#1f5a9d",right:"#cf3838",unknown:"#aebcc0"}[side]||"#aebcc0");
 const relevant=filter==="all"||filter==="sun-all"||filter==="line-all"||(filter==="left"&&side==="left")||(filter==="right"&&side==="right")||(filter==="north"&&sun==="north")||(filter==="south"&&sun==="south")||(filter==="equatorial"&&sun==="equatorial")||(filter==="line-white"&&lineCategory==="white")||(filter==="line-yellow"&&lineCategory==="yellow")||(filter==="line-both"&&lineCategory==="both");
 return {color:lineMode?"#52656d":"#d7e1e4",weight:lineMode?1.05:.75,fillColor:color,fillOpacity:relevant?0.9:0.48,opacity:1};
}
function updateLegend(){}
function setFilter(next){
 filter=next;
 document.querySelectorAll(".map-filter").forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));});
 geoLayers.forEach(layer=>layer.setStyle(styleFor));
 updateLegend();
}
document.querySelectorAll(".map-filter").forEach(b=>b.addEventListener("click",()=>setFilter(b.dataset.filter)));
if(!window.L){
 canvas.innerHTML='<div class="map-loading">Не удалось загрузить библиотеку карты. Проверь доступ к unpkg.com или jsDelivr.</div>';
}else{
 map=L.map("mapCanvas",{worldCopyJump:false,zoomControl:false,minZoom:0.5,zoomSnap:0.25,zoomDelta:0.5,maxZoom:9,preferCanvas:true,maxBounds:[[-85,-180],[85,180]],maxBoundsViscosity:1}).setView([15,0],1);
 L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors",maxZoom:9,subdomains:"abc",noWrap:true,bounds:[[-85,-180],[85,180]]}).addTo(map);
 L.control.zoom({position:"topright"}).addTo(map);
 document.querySelector("#zoomIn").onclick=()=>map.zoomIn();
 document.querySelector("#zoomOut").onclick=()=>map.zoomOut();
 const worldViewBounds=[[-60,-180],[80,180]];
 document.querySelector("#resetMap").onclick=()=>{map.closePopup();map.fitBounds(worldViewBounds,{padding:[8,8]});setFilter("all");};
 fetch("./data/world.geojson").then(r=>{if(!r.ok)throw new Error("HTTP "+r.status);return r.json();}).then(data=>{
  document.querySelector(".map-loading")?.remove();
  function shiftLongitudes(value,offset){
   if(!Array.isArray(value))return value;
   if(typeof value[0]==="number"&&typeof value[1]==="number")return [value[0]+offset,value[1],...value.slice(2)];
   return value.map(item=>shiftLongitudes(item,offset));
  }
  function shiftedFeatureCollection(collection,offset){
   return {...collection,features:collection.features.map(feature=>({...feature,geometry:feature.geometry?{...feature.geometry,coordinates:shiftLongitudes(feature.geometry.coordinates,offset)}:feature.geometry}))};
  }
  [0].forEach(offset=>{
   const copy=shiftedFeatureCollection(data,offset);
   let worldLayer;
   worldLayer=L.geoJSON(copy,{style:styleFor,onEachFeature:(feature,layer)=>{
    const found=countryFor(feature), c=found.country, name=found.name;
    layer.bindTooltip(c?c.ru:name,{sticky:true});
    layer.on({mouseover:e=>e.target.setStyle({weight:1.5,color:"#f2f8f7",fillOpacity:1}),mouseout:e=>worldLayer.resetStyle(e.target),click:e=>{
     map.closePopup();
     if(!c){L.popup({maxWidth:260}).setLatLng(e.latlng).setContent('<div class="map-pop"><b>'+name+'</b><p>Профиль этой территории пока не добавлен.</p></div>').openOn(map);return;}
     const sun=c.hemisphere==="north"?"Солнце в полдень обычно на юге":c.hemisphere==="south"?"Солнце в полдень обычно на севере":c.hemisphere==="equatorial"?"Экваториальная зона":"Полушарие не определено";
     const side=left.has(c.code)?"Левостороннее движение":"Правостороннее движение";
     const line=centerLineLabel(c.code);
     const pop='<div class="map-pop"><img class="map-pop-flag" src="https://flagcdn.com/w160/'+c.code+'.png" alt="Флаг '+c.ru+'"><div class="map-pop-info"><b>'+c.ru+'</b><span>'+c.en+'</span><small>'+c.continent+'</small><small>'+side+'</small><small>'+sun+'</small><small>'+line+'</small><a href="country.html?code='+encodeURIComponent(c.code)+'">Открыть профиль страны →</a></div></div>';
     L.popup({maxWidth:320,minWidth:250,closeButton:true,autoPan:true,keepInView:true}).setLatLng(e.latlng).setContent(pop).openOn(map);
    }});
   }}).addTo(map);
   geoLayers.push(worldLayer);
  });
  setFilter("all");
  map.fitBounds(worldViewBounds,{padding:[8,8]});
 }).catch(err=>{console.error("GeoJSON map load failed",err);canvas.innerHTML='<div class="map-loading">Не загрузились границы стран. Обнови страницу или проверь доступ к data/world.geojson.</div>';});
}
