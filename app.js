/* Product Visual Suite v7.1 — loaded by the Gemini Canvas stub via jsDelivr. Edit here, not in Canvas. */
(function(){
document.title = "Product Visual Suite";
const st = document.createElement("style"); st.textContent = '\n  :root{--bg:#f6f7f9;--card:#fff;--ink:#0f172a;--mute:#64748b;--line:#e2e8f0;--acc:#dc2626}\n  *{box-sizing:border-box}\n  body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink)}\n  .wrap{max-width:980px;margin:0 auto;padding:20px 16px 60px}\n  h1{font-size:22px;margin:0 0 4px} .sub{color:var(--mute);font-size:14px;margin:0 0 18px}\n  .card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;margin-bottom:16px}\n  .card h2{font-size:16px;margin:0 0 10px}\n  .drop{border:2px dashed var(--line);border-radius:12px;padding:22px;text-align:center;color:var(--mute);cursor:pointer}\n  .drop.on{border-color:var(--acc);background:#fef2f2}\n  .thumbs{display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;margin-top:12px}\n  .thumb{position:relative;border:1px solid var(--line);border-radius:8px;overflow:hidden;aspect-ratio:1;background:#fff}\n  .thumb img{width:100%;height:100%;object-fit:contain}\n  .thumb .x{position:absolute;top:4px;right:4px;background:#0009;color:#fff;border:0;border-radius:50%;width:22px;height:22px;cursor:pointer}\n  .thumb .n{position:absolute;bottom:4px;left:4px;background:#0009;color:#fff;font-size:11px;border-radius:4px;padding:1px 5px}\n  label.f{display:block;font-size:13px;color:var(--mute);margin:12px 0 6px}\n  input[type=text],select,textarea{width:100%;padding:10px;border:1px solid var(--line);border-radius:8px;font-size:14px;font-family:inherit}\n  textarea{min-height:64px;resize:vertical}\n  .btn{display:inline-block;padding:12px 18px;border:0;border-radius:10px;background:var(--acc);color:#fff;font-weight:600;font-size:15px;cursor:pointer;margin-top:14px}\n  .btn:disabled{opacity:.5;cursor:not-allowed}\n  .btn.sec{background:#fff;color:var(--ink);border:1px solid var(--line)}\n  .items{display:flex;flex-direction:column;gap:6px}\n  .item{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--line);border-radius:8px;font-size:14px}\n  .item small{color:var(--mute)}\n  .alert{background:#fef3c7;border:1px solid #fde68a;color:#78350f;border-radius:8px;padding:10px;font-size:14px;margin:8px 0}\n  .err{background:#fee2e2;border-color:#fecaca;color:#7f1d1d}\n  .results{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;align-items:start}\n  .res img{width:100%;border:1px solid var(--line);border-radius:10px;background:#fff;display:block}\n  .res .ph{aspect-ratio:1;border:1px dashed var(--line);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--mute);font-size:14px;text-align:center;padding:10px}\n  .res .ph.tall{aspect-ratio:9/16}\n  .row{display:flex;gap:8px;flex-wrap:wrap}\n  .row .btn{margin-top:10px;padding:9px 14px;font-size:14px}\n  .spin{display:inline-block;width:16px;height:16px;border:2px solid #ddd;border-top-color:var(--acc);border-radius:50%;animation:s 1s linear infinite;vertical-align:middle;margin-right:6px}\n  @keyframes s{to{transform:rotate(360deg)}}\n  .tip{font-size:12px;color:var(--mute);margin-top:6px}\n  .hidden{display:none}\n';
document.head.appendChild(st);
const root = document.getElementById("pvs-root") || document.body;
root.innerHTML = '<div class="wrap">\n  <h1>Product Visual Suite</h1>\n  <p class="sub">Upload gambar produk → Hero Shot, Product Sheet dan gambar Usage untuk rujukan video.</p>\n\n  <div class="card">\n    <h2>1. Upload gambar produk (1–8)</h2>\n    <div id="drop" class="drop">Tekan atau tarik gambar ke sini<br><small>Upload depan, belakang, sisi, bawah. Boleh tambah gambar customer guna produk (untuk rujukan saiz).</small></div>\n    <input id="file" type="file" accept="image/*" multiple class="hidden">\n    <div id="thumbs" class="thumbs"></div>\n    <label class="f">Dimensi produk (pilihan, cth: 32 x 20 cm)</label>\n    <input id="dims" type="text" placeholder="Tak wajib">\n    <button id="btnAnalyze" class="btn" disabled>Analisis Produk</button>\n    <div id="anMsg"></div>\n  </div>\n\n  <div id="planCard" class="card hidden">\n    <h2>2. Semak plan</h2>\n    <div id="planBody"></div>\n    <button id="btnGen" class="btn">Jana Gambar</button>\n  </div>\n\n  <div id="resCard" class="card hidden">\n    <h2>3. Hasil</h2>\n    <div class="results">\n      <div class="res"><b>Hero Shot (1:1)</b><div id="r_hero" class="ph">Menunggu…</div><div class="row"><button class="btn sec" data-dl="hero">Download</button><button class="btn sec" data-re="hero">Jana Semula</button></div></div>\n      <div class="res"><b>Product Sheet (9:16)</b><div id="r_sheet" class="ph tall">Menunggu…</div><div class="row"><button class="btn sec" data-dl="sheet">Download</button><button class="btn sec" data-re="sheet">Jana Semula</button></div></div>\n      <div class="res"><b id="usageTitle">Usage (1:1)</b><div id="r_usage" class="ph">Menunggu…</div><div class="row"><button class="btn sec" data-dl="usage">Download</button><button class="btn sec" data-re="usage">Jana Semula</button></div></div>\n    </div>\n    <p class="tip">Kalau butang Download tak jalan, tekan lama / klik kanan gambar → Save image.</p>\n  </div>\n</div>' + '<div style="text-align:center;color:#94a3b8;font-size:11px;padding:8px">v7.1</div>';

/* ================= CONFIG ================= */
// CANVAS RUNTIME: apiKey MESTI kosong. Persekitaran Canvas sendiri isi kuota akaun user.
// JANGAN tambah input API key, JANGAN guna localStorage untuk key.
const API_KEY = (typeof apiKey !== "undefined") ? apiKey : "";
const TEXT_MODELS  = ["gemini-3-flash-preview","gemini-2.5-flash","gemini-2.5-flash-preview-09-2025","gemini-2.5-flash-preview-05-20"];
const IMAGE_MODELS = ["gemini-2.5-flash-image","gemini-2.5-flash-image-preview"];
const API = m => `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${API_KEY}`;
const MAX_UP = 8, MAX_SIDE = 1600;
const AR = { hero:"1:1", sheet:"9:16", usage:"1:1" };

const CAT_LABEL = {pouch_sachet:"Pouch / sachet",tube_paste:"Tube / pes",bottle_jar_can:"Botol / balang / tin",perfume:"Perfume",box:"Kotak",apparel:"Pakaian (baju, seluar)",headwear:"Tudung / headwear",footwear:"Kasut / selipar",fashion_accessory:"Aksesori fesyen (beg, jam, cap…)",large_item:"Produk besar / perabot",appliance:"Alat elektrik rumah (vakum, kipas…)",gadget:"Gajet",other:"Lain-lain"};
const MODEL_CATS = ["apparel","headwear","footwear","fashion_accessory"];
const BIG_CATS = ["large_item","appliance"];

const GLOBAL_RULES = `
Use the reference images as the exact source of truth for the product.
Reproduce shape, proportions, colours, materials, surface texture, packaging design, logo and printed text exactly. Do not redesign, restyle, rename or reinterpret the product. Do not change the product name, flavour name or any number printed on it.
Show exactly ONE unit of the product. Never show a second copy or a duplicate.
Remove everything that is not physically part of the product: promotional text, discount stickers, watermarks, badges, floating icons, food or ingredient props, decorations.
Do not add any object, accessory, prop or person that is not in the reference images unless this prompt explicitly asks for it.
Never mention or show prices.`;

/* ================= STATE ================= */
const S = { ups:[], A:null, cat:null, variant:0, out:{}, hero:{} };

/* ================= HELPERS ================= */
const $ = id => document.getElementById(id);
const sleep = ms => new Promise(r=>setTimeout(r,ms));
const loadImg = src => new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src;});
const b64 = d => d.split(",")[1];
const mimeOf = d => d.slice(5, d.indexOf(";"));
const part = d => ({inlineData:{mimeType:mimeOf(d),data:b64(d)}});
const slug = s => (s||"produk").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"");
const arNum = ar => { const [w,h]=ar.split(":").map(Number); return w/h; };
const esc = s => String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");

async function fileToUpload(file){
  const url = await new Promise(r=>{const fr=new FileReader();fr.onload=()=>r(fr.result);fr.readAsDataURL(file);});
  const img = await loadImg(url);
  const sc = Math.min(1, MAX_SIDE/Math.max(img.width,img.height));
  const c = document.createElement("canvas"); c.width=Math.round(img.width*sc); c.height=Math.round(img.height*sc);
  const x=c.getContext("2d"); x.fillStyle="#fff"; x.fillRect(0,0,c.width,c.height); x.drawImage(img,0,0,c.width,c.height);
  const data = c.toDataURL("image/jpeg",0.92);
  return {data, img: await loadImg(data)};
}
function crop(up, box, pad=0.05){
  const W=up.img.width, H=up.img.height;
  let [y0,x0,y1,x1]=box.map(Number); y0=y0/1000*H; y1=y1/1000*H; x0=x0/1000*W; x1=x1/1000*W;
  const bw=Math.max(1,x1-x0), bh=Math.max(1,y1-y0), px=bw*pad, py=bh*pad;
  const c=document.createElement("canvas"); c.width=Math.round(bw+2*px); c.height=Math.round(bh+2*py);
  const x=c.getContext("2d"); x.fillStyle="#fff"; x.fillRect(0,0,c.width,c.height);
  x.drawImage(up.img, x0,y0,bw,bh, px,py,bw,bh);
  return c.toDataURL("image/png");
}
async function fitToAspect(dataUrl, ar, bg="#fff"){
  const img = await loadImg(dataUrl); const r = arNum(ar);
  const w=img.width, h=img.height;
  if (Math.abs(w/h - r) < 0.02) return dataUrl;
  let W,H; if (w/h > r){ W=w; H=Math.round(w/r);} else { H=h; W=Math.round(h*r);}
  const c=document.createElement("canvas"); c.width=W; c.height=H;
  const x=c.getContext("2d"); x.fillStyle=bg; x.fillRect(0,0,W,H); x.drawImage(img,(W-w)/2,(H-h)/2);
  return c.toDataURL("image/png");
}

/* ================= API ================= */
const NOFALL = [400,401,403,404];
async function callAPI(model, body){
  let last;
  for (let i=0;i<4;i++){
    try{
      const r = await fetch(API(model),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
      const j = await r.json();
      if (!r.ok){ last = new Error(j?.error?.message || r.status); last.status=r.status; if (NOFALL.includes(r.status)) throw last; }
      else return j;
    }catch(e){ last=e; if (NOFALL.includes(e.status)) throw e; }
    await sleep(1000*2**i);
  }
  throw last;
}
const picked = {};
async function callChain(list, kind, makeBody){
  const order = picked[kind] ? [picked[kind], ...list.filter(m=>m!==picked[kind])] : list;
  let last;
  for (const m of order){
    try{ const j = await callAPI(m, makeBody(m)); picked[kind]=m; return j; }
    catch(e){ last=e; if (e.status && !NOFALL.includes(e.status)) throw e; }
  }
  throw new Error((last?.message||"Gagal")+" — semua model Canvas ditolak");
}
let arSupported = true;
async function genImage(prompt, refs, ar){
  const contents=[{parts:[{text:prompt}, ...refs.map(part)]}];
  let j;
  if (arSupported){
    try{ j = await callChain(IMAGE_MODELS,"image",()=>({contents,generationConfig:{responseModalities:["TEXT","IMAGE"],imageConfig:{aspectRatio:ar}}})); }
    catch(e){ arSupported = false; }
  }
  if (!j) j = await callChain(IMAGE_MODELS,"image",()=>({contents,generationConfig:{responseModalities:["TEXT","IMAGE"]}}));
  const p = j?.candidates?.[0]?.content?.parts?.find(p=>p.inlineData);
  if (!p) throw new Error("Model tak pulangkan gambar");
  return `data:${p.inlineData.mimeType};base64,${p.inlineData.data}`;
}
async function askJSON(parts){
  const j = await callChain(TEXT_MODELS,"text",()=>({contents:[{parts}],generationConfig:{responseMimeType:"application/json"}}));
  const t = (j?.candidates?.[0]?.content?.parts||[]).map(p=>p.text||"").join("").replace(/```json|```/g,"").trim();
  return JSON.parse(t);
}

/* ================= ANALYZE ================= */
const ANALYZE_PROMPT = `You are a product photo analyst. The images are given in order; each is preceded by its index.
Return ONLY valid JSON:
{
 "items":[{"name":"short generic English name","role":"main|accessory"}],
 "category":"pouch_sachet|tube_paste|bottle_jar_can|perfume|box|apparel|headwear|footwear|fashion_accessory|large_item|appliance|gadget|other",
 "display_name":"brand + product name exactly as printed on the product",
 "product_desc":"one precise English sentence describing the main item's shape, colours, materials and finish",
 "variants":[{"name":"variant name","image_indexes":[0]}],
 "item_views":[{"item":"same name as items","view":"front|back|side|top|bottom","image_index":0,"box_2d":[ymin,xmin,ymax,xmax]}],
 "ortho_views":["2 to 4 of: front|back|left side|right side|top|underside"],
 "detail_features":["2 short English phrases naming the most important physical details to show in macro close-up"],
 "usage_scene":"one English sentence: the most typical real-life moment of a person using the main item, in a Malaysian home or daily setting",
 "apparel_type":"top|bottom|full|headwear|other|null",
 "target_gender":"female|male|unisex|kids",
 "est_height_cm":0,
 "size_basis":"short reason",
 "scale_ref_image_index":null,
 "scale_ref_box":null,
 "hero_angle":{"image_index":0,"box_2d":[ymin,xmin,ymax,xmax]}
}
Rules:
- items = ONLY physical products in the images. Never invent items. Duplicates of the same product are ONE item.
- role: "main" is the product being sold. Docks, chargers, stands, outer boxes, remotes, bundled bottles/shakers are "accessory".
- category describes the main item. perfume = fragrance bottles. headwear = tudung/hijab/cap. appliance = home electrical devices (robot vacuum, fan, air fryer, blender). large_item = furniture or anything bigger than about 60 cm.
- variants: list different flavours/colours/packaging across images; if all the same, one variant with all indexes.
- item_views: a TIGHT box (normalized 0-1000) around ONE physical unit only, per visible unit and view. Never include two units, logos, badges, text or props outside the product silhouette.
- ortho_views: choose ONLY the views that show real information for THIS product. A robot vacuum: top, underside, front. A bottle: front, back, top. A flat pouch: front, back. A shoe: left side, top, underside.
- detail_features: e.g. "side brush and wheels on the underside", "power button", "cap and nozzle", "fabric weave", "zipper".
- est_height_cm: realistic real-world height of the main item (use printed volume/weight and packaging type).
- hero_angle: the single best "hero" view of the MAIN item across all images — usually the main marketing/cover photo (often a slightly elevated, angled front view). Tight box around the main item only (exclude phones, docks, boxes, text, badges, hands).
- scale_ref_image_index: index of an image where a hand or person uses/holds the product, else null. scale_ref_box: [ymin,xmin,ymax,xmax] around that hand + product, else null.`;

async function analyze(){
  const parts=[{text:ANALYZE_PROMPT}];
  S.ups.forEach((u,i)=>{parts.push({text:`Image index ${i}:`}); parts.push(part(u.data));});
  return askJSON(parts);
}

/* ================= SOURCE SELECTION ================= */
function variantIdx(){
  const v = S.A.variants?.[S.variant];
  return v ? new Set(v.image_indexes) : new Set(S.ups.map((_,i)=>i));
}
const area = b => (b[2]-b[0])*(b[3]-b[1]);
function bestView(item, view){
  const ok = variantIdx();
  const c = (S.A.item_views||[]).filter(v=>v.item===item && v.view===view && ok.has(v.image_index) && S.ups[v.image_index] && Array.isArray(v.box_2d));
  c.sort((a,b)=>area(b.box_2d)-area(a.box_2d));
  return c[0]||null;
}
function anyView(item){
  const ok = variantIdx();
  const c = (S.A.item_views||[]).filter(v=>v.item===item && ok.has(v.image_index) && S.ups[v.image_index] && Array.isArray(v.box_2d));
  c.sort((a,b)=>area(b.box_2d)-area(a.box_2d));
  return c[0]||null;
}
const mainItem = () => (S.A.items.find(i=>i.role==="main")||S.A.items[0]).name;
const heroItems = () => S.A.items.filter(i=>S.hero[i.name]).map(i=>i.name);
const itemsText = list => list.join(" and ");
// crops of the given items: front first, then every other available view of the main item
function refsFor(items, allViews=false){
  const refs=[];
  for (const it of items){
    const f = bestView(it,"front") || anyView(it);
    if (f) refs.push(crop(S.ups[f.image_index], f.box_2d));
  }
  if (allViews){
    const m = mainItem();
    for (const v of ["back","side","top","bottom"]){
      const b = bestView(m, v); if (b) refs.push(crop(S.ups[b.image_index], b.box_2d));
    }
  }
  return refs.slice(0,6);
}

/* ================= FASHION / FACE ================= */
function faceMode(){ return S.face || (S.cat==="headwear" ? "blur" : "crop"); }
function modelWho(){
  const g = S.model || "female";
  if (g==="mannequin") return S.cat==="headwear" ? "a faceless mannequin head and bust (smooth blank head, no facial features)" : "an invisible ghost mannequin (no visible person)";
  if (g==="male") return "an adult Malay man";
  return S.cat==="headwear" ? "an adult Malay woman wearing the product as her hijab, modest styling" : "an adult Malay woman wearing a plain neutral-colour hijab, modest styling";
}
function garmentRule(){
  if (S.cat==="footwear") return "The model wears the shoes; plain neutral trousers whose hem does not cover the shoes.";
  if (S.cat==="fashion_accessory") return "The model wears or carries the accessory naturally; plain neutral outfit that does not compete with it.";
  if (S.cat==="headwear") return "Plain neutral-colour outfit; the headwear is the focus and fully visible, draped exactly as in the reference.";
  const female = (S.model||"female")==="female";
  switch(S.A.apparel_type){
    case "top": return "The product is the ONLY top garment: no layer underneath or over it. Add only a plain neutral-colour bottom.";
    case "bottom": return `The product is the ONLY bottom garment. Add only a plain neutral-colour top${female?", loose and untucked, long enough for modest styling":""}.`;
    case "full": return "The product is the only main garment, worn exactly as designed. No extra layers over it.";
    default: return "The model wears the product exactly as designed; everything else is plain and neutral.";
  }
}
function faceRule(){
  if (S.model==="mannequin") return "";
  return faceMode()==="crop"
    ? " FRAMING: the face must NOT appear. Frame from the neck/shoulders down, cropped just below the chin. No eyes, nose or mouth visible."
    : " The head is visible so the headwear is shown fully (the face will be blurred afterwards).";
}
async function detectFaces(dataUrl){
  try{
    const r = await askJSON([{text:'Find every human face in this image. Return ONLY JSON {"faces":[[ymin,xmin,ymax,xmax]]} with boxes normalized 0-1000 covering forehead to chin and ear to ear. Return {"faces":[]} if no face is visible.'}, part(dataUrl)]);
    return (r.faces||[]).filter(b=>Array.isArray(b)&&b.length===4);
  }catch(e){ return []; }
}
async function blurFaces(dataUrl){
  const faces = await detectFaces(dataUrl);
  if (!faces.length) return dataUrl;
  const img = await loadImg(dataUrl);
  const c=document.createElement("canvas"); c.width=img.width; c.height=img.height;
  const x=c.getContext("2d"); x.drawImage(img,0,0);
  for (const [y0,x0,y1,x1] of faces){
    let X=x0/1000*img.width, Y=y0/1000*img.height, w=(x1-x0)/1000*img.width, h=(y1-y0)/1000*img.height;
    const px=w*0.15, py=h*0.15; X-=px; Y-=py; w+=2*px; h+=2*py;
    X=Math.max(0,X); Y=Math.max(0,Y); w=Math.min(img.width-X,w); h=Math.min(img.height-Y,h);
    if (w<4||h<4) continue;
    const s=document.createElement("canvas"); s.width=Math.max(2,Math.round(w/32)); s.height=Math.max(2,Math.round(h/32));
    s.getContext("2d").drawImage(c,X,Y,w,h,0,0,s.width,s.height);
    const m=document.createElement("canvas"); m.width=Math.round(w); m.height=Math.round(h);
    const mx=m.getContext("2d"); mx.imageSmoothingQuality="high"; mx.drawImage(s,0,0,m.width,m.height);
    const s2=document.createElement("canvas"); s2.width=Math.max(2,Math.round(w/12)); s2.height=Math.max(2,Math.round(h/12));
    s2.getContext("2d").drawImage(m,0,0,s2.width,s2.height); mx.clearRect(0,0,m.width,m.height); mx.drawImage(s2,0,0,m.width,m.height);
    x.save(); x.beginPath(); x.ellipse(X+w/2,Y+h/2,w/2,h/2,0,0,Math.PI*2); x.clip(); x.drawImage(m,X,Y,w,h); x.restore();
  }
  return c.toDataURL("image/png");
}

/* ================= GENERATORS ================= */
function heroAngleRef(){
  const sel = S.heroIdx;
  if (sel === "none") return null;
  if (sel !== undefined && sel !== "auto" && S.ups[+sel]){
    const m = mainItem(); const ok = (S.A.item_views||[]).filter(v=>v.item===m && v.image_index===+sel && Array.isArray(v.box_2d));
    ok.sort((a,b)=>area(b.box_2d)-area(a.box_2d));
    if (S.A.hero_angle && S.A.hero_angle.image_index===+sel && Array.isArray(S.A.hero_angle.box_2d)) return crop(S.ups[+sel], S.A.hero_angle.box_2d);
    return ok[0] ? crop(S.ups[+sel], ok[0].box_2d) : S.ups[+sel].data;
  }
  const h = S.A.hero_angle;
  if (h && Array.isArray(h.box_2d) && S.ups[h.image_index] && variantIdx().has(h.image_index)) return crop(S.ups[h.image_index], h.box_2d);
  return null;
}
async function genHero(){
  const items = heroItems().length ? heroItems() : [mainItem()];
  let refs = refsFor(items), angle = "";
  const ha = heroAngleRef();
  if (ha){
    refs = [ha, ...refs].slice(0,6);
    angle = ` CAMERA ANGLE: copy the exact camera angle, viewing height, tilt and product orientation of the FIRST reference image (same perspective, same side of the product facing the camera, same rotation). Only change the background to pure white and remove everything that is not the ${items[0]}.`;
  }
  const only = items.length===1 ? ` Show ONLY the ${items[0]} — no dock, stand, box, charger or any other item, even if it appears in the references.` : ` Show these items together, nothing else: ${itemsText(items)}.`;
  const prompt = `Professional commercial product photography, square 1:1 frame. ${itemsText(items)} isolated on a pure white seamless studio background (#FFFFFF), centered, fully visible and unobstructed, ${angle||" shown from a slightly elevated three-quarter front angle (camera about 30 degrees above, product turned slightly), the main label/logo facing the camera."}${only} Soft diffused studio lighting, subtle natural contact shadow beneath. Ultra-sharp focus, high detail, e-commerce catalog quality. No text, captions, badges or graphics in the image.${GLOBAL_RULES}`;
  return fitToAspect(await genImage(prompt, refs, AR.hero), AR.hero);
}

function sheetFashionRule(){
  if (S.cat==="headwear") return " Show the headwear on a faceless mannequin head and bust (smooth blank head with no facial features) in the hero and orthographic views.";
  if (S.cat==="apparel") return " Show the garment on a simple hanger (no person, no mannequin) in the hero and orthographic views.";
  return "";
}
async function genSheet(){
  const m = mainItem();
  const refs = refsFor([m], true);
  if (S.out.hero) refs.push(S.out.hero);
  const ortho = (($("ortho")?.value)||"").split(",").map(s=>s.trim()).filter(Boolean);
  const views = ortho.length ? ortho : (S.A.ortho_views||["front","back"]);
  const details = (($("details")?.value)||"").split(",").map(s=>s.trim()).filter(Boolean);
  const det = details.length ? details : (S.A.detail_features||[]);
  const perfume = S.cat==="perfume" ? " One of the detail close-ups shows the perfume cap removed, revealing the sprayer nozzle." : "";
  const name = ($("dname")?.value || S.A.display_name || m).trim();
  const desc = S.A.product_desc ? ` Product: ${S.A.product_desc}` : "";
  const prompt = `PRODUCT SHEET: Ultra-realistic vertical 9:16 commercial product contact sheet for "${name}", on a seamless light-grey studio paper background with thin printer crop marks (small + registration marks) in the margins. Clean editorial layout stacked top to bottom in three labeled sections, each section title in large bold white sans-serif capital letters at the top-left of its section.${desc}
SECTION 1 — labeled "HERO VIEW": one large three-quarter hero shot of the ${m} filling the full width, soft shadow on the grey paper.
SECTION 2 — labeled "ORTHOGRAPHIC ARRAY": a row of ${views.length} flat orthographic views of the ${m}, same scale, evenly spaced: ${views.map(v=>v.toUpperCase()+" VIEW").join(", ")}. Each view has a small white caption underneath with its name.
SECTION 3 — labeled "DETAIL SPEC": ${Math.max(2,det.length)} side-by-side rectangular macro close-up photo tiles with a thin gap between them, showing: ${det.length?det.join("; "):"the most important physical details"}.${perfume}${sheetFashionRule()}
Only the ${m} appears in every section — no dock, charger, box, stand or other item. Section titles and view captions are the ONLY text added; spell them exactly as given. Product branding and printed text stay exactly as on the real product.
Studio strobe lighting, f/5.6 depth of field, sharp textures, consistent colour and scale across all sections, premium industrial-design presentation board look.${GLOBAL_RULES}`;
  return fitToAspect(await genImage(prompt, refs, AR.sheet), AR.sheet, "#c9c9c9");
}

async function genUsage(){
  const m = mainItem();
  const refs = refsFor([m]);
  if (S.out.hero) refs.push(S.out.hero);
  let prompt;
  if (MODEL_CATS.includes(S.cat)){
    const pose = S.cat==="headwear" ? "upper body, facing the camera, headwear fully visible" : (S.cat==="fashion_accessory"||S.cat==="footwear" ? "cropped to the body area where the product is worn or carried, product clearly visible" : "standing straight, facing the camera, showing the whole outfit");
    prompt = `Professional e-commerce fashion photography, square 1:1 frame, on a pure white seamless studio background. ${modelWho()} wearing the product from the reference images, ${pose}.${faceRule()} ${garmentRule()} Reproduce the product's exact colour, pattern, cut, length, fabric and details. Natural relaxed pose, soft even studio lighting, ultra-sharp. No text or captions.${GLOBAL_RULES}`;
    const out = fitToAspect(await genImage(prompt, refs, AR.usage), AR.usage);
    return S.model==="mannequin" ? out : blurFaces(await out);
  }
  const H = parseFloat(($("hcm")?.value||"").replace(",", ".")) || S.A.est_height_cm || null;
  const sr = S.A.scale_ref_image_index;
  let extra = "";
  if (sr!==null && sr!==undefined && S.ups[sr]){
    const b = S.A.scale_ref_box;
    refs.push(Array.isArray(b) ? crop(S.ups[sr], b, 0.05) : S.ups[sr].data);
    extra = " The last reference image shows the real product in use: copy ONLY its real-world size proportion; do not copy its person, background or text.";
  }
  const scene = ($("scene")?.value || S.A.usage_scene || `a person using the ${m} in a bright, tidy Malaysian home`).trim();
  const size = H ? ` REAL SIZE IS CRITICAL: the ${m} is about ${H} cm tall in real life; keep it realistically sized relative to the person, hands, furniture and room around it — do not enlarge it.` : "";
  const people = BIG_CATS.includes(S.cat)
    ? " If a person appears, show only their feet/legs or hands (face not visible)."
    : " Show only the person's hands/forearms (face not visible); adult hands about 18-19 cm long.";
  prompt = `Ultra-realistic lifestyle product photograph, square 1:1 frame, natural soft daylight, candid authentic feel: ${scene}. The ${m} is the clear hero of the image, sharp and fully readable, shown in the real context where it is used.${people}${size} Clean, uncluttered, modern setting with neutral tones. No text, captions, logos or graphics added to the image.${extra}${GLOBAL_RULES.replace("Do not add any object, accessory, prop or person that is not in the reference images unless this prompt explicitly asks for it.","Only add the setting and the person's hands/feet described above; no extra products.")}`;
  return fitToAspect(await genImage(prompt, refs, AR.usage), AR.usage);
}

/* ================= UI: UPLOAD ================= */
function renderThumbs(){
  $("thumbs").innerHTML = S.ups.map((u,i)=>`<div class="thumb"><img src="${u.data}"><span class="n">${i+1}</span><button class="x" data-i="${i}">×</button></div>`).join("");
  $("thumbs").querySelectorAll(".x").forEach(b=>b.onclick=()=>{S.ups.splice(+b.dataset.i,1);renderThumbs();});
  $("btnAnalyze").disabled = !S.ups.length;
}
async function addFiles(files){
  for (const f of files){ if (S.ups.length>=MAX_UP) break; if (!f.type.startsWith("image/")) continue; S.ups.push(await fileToUpload(f)); }
  renderThumbs();
}
$("drop").onclick=()=>$("file").click();
$("file").onchange=e=>{const fs=[...e.target.files]; e.target.value=""; addFiles(fs);};
["dragover","dragenter"].forEach(ev=>$("drop").addEventListener(ev,e=>{e.preventDefault();$("drop").classList.add("on");}));
["dragleave","drop"].forEach(ev=>$("drop").addEventListener(ev,e=>{e.preventDefault();$("drop").classList.remove("on");}));
$("drop").addEventListener("drop",e=>addFiles([...e.dataTransfer.files]));

/* ================= UI: PLAN ================= */
$("btnAnalyze").onclick = async ()=>{
  $("btnAnalyze").disabled=true; $("anMsg").innerHTML=`<p><span class="spin"></span>Sedang analisis produk…</p>`;
  try{
    S.A = await analyze();
    if (!S.A.items?.length) throw new Error("Produk tak dikesan");
    S.cat = CAT_LABEL[S.A.category] ? S.A.category : "other";
    S.variant = 0; S.model = undefined; S.face = undefined; S.heroIdx = undefined;
    S.hero = {}; S.A.items.forEach(i=>S.hero[i.name] = i.role==="main");
    if (!Object.values(S.hero).some(Boolean)) S.hero[S.A.items[0].name] = true;
    const d = parseFloat($("dims").value); if (d) S.A.est_height_cm = Math.max(...$("dims").value.match(/[\d.]+/g).map(Number));
    $("anMsg").innerHTML=""; renderPlan(); $("planCard").classList.remove("hidden");
    $("planCard").scrollIntoView({behavior:"smooth"});
  }catch(e){ $("anMsg").innerHTML=`<div class="alert err">Gagal analisis: ${esc(e.message)}. Cuba lagi.</div>`; }
  $("btnAnalyze").disabled=false;
};

function renderPlan(){
  const vs = S.A.variants||[];
  let h = "";
  if (vs.length>1){
    h += `<div class="alert">Gambar upload ada lebih dari 1 varian/flavour. Pilih yang mana nak guna:</div>
      <select id="selVar">${vs.map((v,i)=>`<option value="${i}" ${i===S.variant?"selected":""}>${esc(v.name)} (gambar ${v.image_indexes.map(n=>n+1).join(", ")})</option>`).join("")}</select>`;
  }
  h += `<label class="f">Produk dikesan — tick item yang masuk Hero Shot</label><div class="items">${S.A.items.map(i=>`<label class="item"><input type="checkbox" class="hchk" value="${esc(i.name)}" ${S.hero[i.name]?"checked":""}> ${esc(i.name)} <small>${i.role==="main"?"(produk utama)":"(aksesori)"}</small></label>`).join("")}</div>
    <div class="tip">Product Sheet dan Usage sentiasa guna produk utama sahaja.</div>`;
  const hi = S.A.hero_angle?.image_index;
  h += `<label class="f">Sudut Hero Shot ikut gambar</label><select id="selHeroIdx">
    <option value="auto" ${(S.heroIdx??"auto")==="auto"?"selected":""}>Auto (AI pilih${Number.isInteger(hi)?": gambar "+(hi+1):""})</option>
    ${S.ups.map((_,i)=>`<option value="${i}" ${String(S.heroIdx)===String(i)?"selected":""}>Gambar ${i+1}</option>`).join("")}
    <option value="none" ${S.heroIdx==="none"?"selected":""}>Sudut standard (3/4 dari atas)</option></select>`;
  h += `<label class="f">Kategori (tukar kalau salah)</label><select id="selCat">${Object.keys(CAT_LABEL).map(k=>`<option value="${k}" ${k===S.cat?"selected":""}>${CAT_LABEL[k]}</option>`).join("")}</select>`;
  h += `<label class="f">Nama produk (tajuk sheet — betulkan kalau salah eja)</label><input id="dname" type="text" value="${esc(S.A.display_name||mainItem())}">`;
  h += `<label class="f">Orthographic views (pisah dengan koma)</label><input id="ortho" type="text" value="${esc((S.A.ortho_views||[]).join(", "))}">`;
  h += `<label class="f">Detail close-up (pisah dengan koma)</label><input id="details" type="text" value="${esc((S.A.detail_features||[]).join(", "))}">`;
  if (MODEL_CATS.includes(S.cat)){
    if (!S.model) S.model = S.cat==="headwear" ? "female" : (S.A.target_gender==="male" ? "male" : (S.A.target_gender==="kids" ? "mannequin" : "female"));
    h += `<label class="f">Model untuk gambar Usage</label><select id="selModel">
      <option value="female" ${S.model==="female"?"selected":""}>Perempuan (bertudung)</option>
      <option value="male" ${S.model==="male"?"selected":""}>Lelaki</option>
      <option value="mannequin" ${S.model==="mannequin"?"selected":""}>Mannequin (tanpa orang)</option></select>`;
    h += `<label class="f">Muka model</label><select id="selFace">
      <option value="crop" ${faceMode()==="crop"?"selected":""}>Crop — leher ke bawah, muka tak masuk</option>
      <option value="blur" ${faceMode()==="blur"?"selected":""}>Blur muka (sesuai untuk tudung)</option></select>`;
    if (S.cat==="apparel") h += `<label class="f">Jenis pakaian</label><select id="selAT">${["top","bottom","full","other"].map(a=>`<option value="${a}" ${S.A.apparel_type===a?"selected":""}>${({top:"Atas (baju, blaus, jaket)",bottom:"Bawah (seluar, skirt)",full:"Penuh (dress, jubah, kurung)",other:"Lain-lain"})[a]}</option>`).join("")}</select>`;
  } else {
    h += `<label class="f">Situasi Usage (AI cadang — boleh ubah)</label><textarea id="scene">${esc(S.A.usage_scene||"")}</textarea>`;
    h += `<label class="f">Tinggi sebenar produk (cm) — supaya saiz dalam gambar Usage betul</label><input id="hcm" type="text" value="${esc(S.A.est_height_cm||"")}"><div class="tip">${S.A.size_basis?("Anggaran AI: "+esc(S.A.size_basis)):""}</div>`;
  }
  $("planBody").innerHTML = h;
  if ($("selVar")) $("selVar").onchange=e=>{S.variant=+e.target.value; renderPlan();};
  $("selHeroIdx").onchange=e=>{S.heroIdx=e.target.value;};
  $("selCat").onchange=e=>{S.cat=e.target.value; S.model=undefined; S.face=undefined; renderPlan();};
  document.querySelectorAll(".hchk").forEach(c=>c.onchange=()=>{S.hero[c.value]=c.checked;});
  if ($("selModel")) $("selModel").onchange=e=>{S.model=e.target.value;};
  if ($("selFace")) $("selFace").onchange=e=>{S.face=e.target.value;};
  if ($("selAT")) $("selAT").onchange=e=>{S.A.apparel_type=e.target.value;};
}

/* ================= UI: GENERATE ================= */
const busy = (id,tall) => $(id).outerHTML = `<div id="${id}" class="ph${tall?" tall":""}"><span><span class="spin"></span>Sedang jana…</span></div>`;
const fail = (id,msg,tall) => $(id).outerHTML = `<div id="${id}" class="ph${tall?" tall":""}">Gagal jana — tekan Jana Semula<br><small>${esc(msg)}</small></div>`;
const show = (id,src) => $(id).outerHTML = `<img id="${id}" src="${src}">`;
const RUN = {
  hero:  {id:"r_hero",  tall:false, fn:genHero},
  sheet: {id:"r_sheet", tall:true,  fn:genSheet},
  usage: {id:"r_usage", tall:false, fn:genUsage}
};
async function run(k){
  const r = RUN[k]; busy(r.id, r.tall);
  try{ S.out[k] = await r.fn(); show(r.id, S.out[k]); }catch(e){ fail(r.id, e.message, r.tall); }
}
$("btnGen").onclick = async ()=>{
  S.out={}; $("btnGen").disabled=true;
  $("usageTitle").textContent = MODEL_CATS.includes(S.cat) ? "Pakai Model (1:1)" : "Usage (1:1)";
  $("resCard").classList.remove("hidden"); $("resCard").scrollIntoView({behavior:"smooth"});
  await run("hero");   // hero dulu: jadi identity lock untuk sheet & usage
  await run("sheet");
  await run("usage");
  $("btnGen").disabled=false;
};
document.querySelectorAll("[data-re]").forEach(b=>b.onclick=async()=>{ b.disabled=true; await run(b.dataset.re); b.disabled=false; });
document.querySelectorAll("[data-dl]").forEach(b=>b.onclick=()=>{
  const k=b.dataset.dl, src=S.out[k]; if (!src) return;
  const a=document.createElement("a"); a.href=src; a.download=`${slug(S.A?.display_name||mainItem())}_${k}.png`;
  document.body.appendChild(a); a.click(); a.remove();
});

})();
