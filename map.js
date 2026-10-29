const FALLBACK_COUNTRIES=[
["au","Австралия","Australia","Океания"],["at","Австрия","Austria","Европа"],["az","Азербайджан","Azerbaijan","Азия"],["al","Албания","Albania","Европа"],["dz","Алжир","Algeria","Африка"],["ao","Ангола","Angola","Африка"],["ad","Андорра","Andorra","Европа"],["ag","Антигуа и Барбуда","Antigua and Barbuda","Северная Америка"],["ar","Аргентина","Argentina","Южная Америка"],["am","Армения","Armenia","Азия"],["by","Беларусь","Belarus","Европа"],["be","Бельгия","Belgium","Европа"],["br","Бразилия","Brazil","Южная Америка"],["bg","Болгария","Bulgaria","Европа"],["ca","Канада","Canada","Северная Америка"],["cl","Чили","Chile","Южная Америка"],["cn","Китай","China","Азия"],["co","Колумбия","Colombia","Южная Америка"],["hr","Хорватия","Croatia","Европа"],["cz","Чехия","Czechia","Европа"],["dk","Дания","Denmark","Европа"],["eg","Египет","Egypt","Африка"],["fi","Финляндия","Finland","Европа"],["fr","Франция","France","Европа"],["de","Германия","Germany","Европа"],["gr","Греция","Greece","Европа"],["is","Исландия","Iceland","Европа"],["in","Индия","India","Азия"],["id","Индонезия","Indonesia","Азия"],["ir","Иран","Iran","Азия"],["iq","Ирак","Iraq","Азия"],["ie","Ирландия","Ireland","Европа"],["il","Израиль","Israel","Азия"],["it","Италия","Italy","Европа"],["jp","Япония","Japan","Азия"],["kz","Казахстан","Kazakhstan","Азия"],["ke","Кения","Kenya","Африка"],["kr","Южная Корея","South Korea","Азия"],["mx","Мексика","Mexico","Северная Америка"],["nl","Нидерланды","Netherlands","Европа"],["nz","Новая Зеландия","New Zealand","Океания"],["ng","Нигерия","Nigeria","Африка"],["no","Норвегия","Norway","Европа"],["pk","Пакистан","Pakistan","Азия"],["pe","Перу","Peru","Южная Америка"],["pl","Польша","Poland","Европа"],["pt","Португалия","Portugal","Европа"],["ro","Румыния","Romania","Европа"],["ru","Россия","Russia","Европа"],["sa","Саудовская Аравия","Saudi Arabia","Азия"],["rs","Сербия","Serbia","Европа"],["sg","Сингапур","Singapore","Азия"],["za","Южная Африка","South Africa","Африка"],["es","Испания","Spain","Европа"],["se","Швеция","Sweden","Европа"],["ch","Швейцария","Switzerland","Европа"],["th","Таиланд","Thailand","Азия"],["tr","Турция","Türkiye","Азия"],["ua","Украина","Ukraine","Европа"],["ae","ОАЭ","United Arab Emirates","Азия"],["gb","Великобритания","United Kingdom","Европа"],["us","США","United States","Северная Америка"],["uy","Уругвай","Uruguay","Южная Америка"],["vn","Вьетнам","Vietnam","Азия"]];
const FALLBACK_DRIVING={leftDriving:["AG","AI","AU","BS","BB","BD","BM","BT","BW","BN","KY","CX","CC","CK","CY","DM","FK","FJ","GD","GG","GY","HK","IN","ID","IE","IM","JM","JP","JE","KE","KI","LS","MO","MW","MY","MV","MT","MU","MS","MZ","NA","NR","NP","NZ","NU","NF","PK","PG","PN","SH","KN","LC","VC","WS","SC","SG","SB","ZA","KR","LK","SR","SZ","TZ","TH","TL","TK","TO","TT","TC","TV","UG","GB","VG","VI","ZM","ZW"]};
const COUNTRIES=FALLBACK_COUNTRIES.map(([code,ru,en,continent])=>({code,ru,en,continent,hemisphere:["au","ar","bo","br","cl","fj","id","mg","mz","na","nz","py","pe","za","uy"].includes(code)?"south":(["ec","ga","cg","cd","ug","ke","so","id","ki","br"].includes(code)?"equatorial":"north")}));
const byCode=code=>COUNTRIES.find(c=>c.code===String(code||"").toLowerCase());
const left=new Set(FALLBACK_DRIVING.leftDriving.map(x=>x.toLowerCase()));
let filter="all", geoLayer, map;
const canvas=document.querySelector("#mapCanvas");
function countryFor(feature){
 const p=feature.properties||{};
 const name=p.ADMIN||p.NAME_EN||p.NAME||p.name||"Country";
 const code=(p.ISO_A2&&p.ISO_A2!=="-99"?p.ISO_A2:p.ISO_A2_EH||p.iso_a2||"").toLowerCase();
 return {name,code,country:byCode(code)||COUNTRIES.find(c=>c.en.toLowerCase()===name.toLowerCase())};
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
 const color=sunMode?({north:"#d48b32",south:"#0e8b78",equatorial:"#9b75c9",unknown:"#aebcc0"}[sun]||"#aebcc0"):({left:"#1f5a9d",right:"#cf3838",unknown:"#aebcc0"}[side]||"#aebcc0");
 const relevant=filter==="all"||filter==="sun-all"||(filter==="left"&&side==="left")||(filter==="right"&&side==="right")||(filter==="north"&&sun==="north")||(filter==="south"&&sun==="south")||(filter==="equatorial"&&sun==="equatorial");
 return {color:"#d7e1e4",weight:.65,fillColor:color,fillOpacity:relevant?0.9:0.1,opacity:relevant?1:0.35};
}
function updateLegend(){
 const el=document.querySelector(".map-legend");
 if(!el)return;
 const sunMode=["sun-all","north","south","equatorial"].includes(filter);
 el.innerHTML=sunMode?'<span><i class="legend-swatch north"></i>Солнце обычно на юге</span><span><i class="legend-swatch south"></i>Солнце обычно на севере</span><span><i class="legend-swatch equatorial"></i>Экваториальная зона</span><span><i class="legend-swatch unknown"></i>Нет точных данных</span>':'<span><i class="legend-swatch right"></i>Правостороннее движение</span><span><i class="legend-swatch left"></i>Левостороннее движение</span><span><i class="legend-swatch unknown"></i>Нет точных данных</span>';
}
function setFilter(next){
 filter=next;
 document.querySelectorAll(".map-filter").forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));});
 if(geoLayer)geoLayer.setStyle(styleFor);
 updateLegend();
}
document.querySelectorAll(".map-filter").forEach(b=>b.addEventListener("click",()=>setFilter(b.dataset.filter)));
if(!window.L){
 canvas.innerHTML='<div class="map-loading">Не удалось загрузить библиотеку карты. Проверь доступ к unpkg.com или jsDelivr.</div>';
}else{
 map=L.map("mapCanvas",{worldCopyJump:true,zoomControl:false,minZoom:2,maxZoom:9,preferCanvas:true}).setView([20,0],2);
 L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors",maxZoom:9,subdomains:"abc"}).addTo(map);
 L.control.zoom({position:"topright"}).addTo(map);
 document.querySelector("#zoomIn").onclick=()=>map.zoomIn();
 document.querySelector("#zoomOut").onclick=()=>map.zoomOut();
 document.querySelector("#resetMap").onclick=()=>{map.closePopup();map.setView([20,0],2);setFilter("all");};
 fetch("./data/world.geojson").then(r=>{if(!r.ok)throw new Error("HTTP "+r.status);return r.json();}).then(data=>{
  document.querySelector(".map-loading")?.remove();
  geoLayer=L.geoJSON(data,{style:styleFor,onEachFeature:(feature,layer)=>{
   const found=countryFor(feature), c=found.country, name=found.name;
   layer.bindTooltip(c?c.ru:name,{sticky:true});
   layer.on({mouseover:e=>e.target.setStyle({weight:1.5,color:"#f2f8f7",fillOpacity:1}),mouseout:e=>geoLayer.resetStyle(e.target),click:e=>{
    map.closePopup();
    if(!c){L.popup({maxWidth:260}).setLatLng(e.latlng).setContent('<div class="map-pop"><b>'+name+'</b><p>Профиль этой территории пока не добавлен.</p></div>').openOn(map);return;}
    const sun=c.hemisphere==="north"?"Солнце в полдень обычно на юге":c.hemisphere==="south"?"Солнце в полдень обычно на севере":c.hemisphere==="equatorial"?"Экваториальная зона":"Полушарие не определено";
    const side=left.has(c.code)?"Левостороннее движение":"Правостороннее движение";
    const pop='<div class="map-pop"><img class="map-pop-flag" src="https://flagcdn.com/w160/'+c.code+'.png" alt="Флаг '+c.ru+'"><div class="map-pop-info"><b>'+c.ru+'</b><span>'+c.en+'</span><small>'+c.continent+'</small><small>'+side+'</small><small>'+sun+'</small><a href="country.html?code='+encodeURIComponent(c.code)+'">Открыть профиль страны →</a></div></div>';
    L.popup({maxWidth:320,minWidth:250,closeButton:true,autoPan:true,keepInView:true}).setLatLng(e.latlng).setContent(pop).openOn(map);
   }});
  }}).addTo(map);
  setFilter("all");
 }).catch(err=>{console.error("GeoJSON map load failed",err);canvas.innerHTML='<div class="map-loading">Не загрузились границы стран. Обнови страницу или проверь доступ к data/world.geojson.</div>';});
}
