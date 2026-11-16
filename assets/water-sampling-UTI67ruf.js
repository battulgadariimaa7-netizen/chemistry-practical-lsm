var e=`<!DOCTYPE html>
<html lang="mn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ажлын хуудас: Ундны усны дээж авалт</title>
<style>
  :root{
    --ink:#1b2430; --muted:#5a6573; --line:#c9d2dc; --accent:#1f3864; --accent-soft:#e8eef8;
    --formula:#fff6d9; --formula-line:#d9b34a; --ok:#1e7a46; --ok-soft:#e5f4ea; --warn:#a4400f; --warn-soft:#fdece2;
    --paper:#ffffff; --bg:#f3f5f8;
  }
  *{box-sizing:border-box}
  html{font-size:12pt}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:Arial, Helvetica, sans-serif;font-size:12pt;line-height:1.5}
  .sheet{max-width:820px;margin:24px auto;background:var(--paper);padding:36px 44px 44px;border:1px solid var(--line);border-radius:6px}
  header.top{text-align:center;border-bottom:2px solid var(--accent);padding-bottom:14px;margin-bottom:20px}
  header.top .kicker{font-weight:bold;letter-spacing:.08em;color:var(--accent)}
  header.top h1{font-size:12pt;margin:4px 0;font-weight:bold}
  header.top .sub{font-style:italic;color:var(--muted)}
  h2{font-size:12pt;font-weight:bold;color:var(--accent);margin:28px 0 10px;padding-bottom:4px;border-bottom:1px solid var(--accent)}
  h3{font-size:12pt;font-weight:bold;margin:16px 0 6px}
  p{margin:0 0 10px}
  .note{color:var(--muted)}
  table{width:100%;border-collapse:collapse;margin:8px 0 12px;font-size:12pt}
  th,td{border:1px solid var(--line);padding:6px 8px;text-align:left;vertical-align:middle}
  th{background:var(--accent-soft);font-weight:bold}
  tr.avg td{background:#f5f7fa;font-weight:bold}
  input[type=text],input[type=number],input[type=date],textarea{
    font-family:Arial, Helvetica, sans-serif;font-size:12pt;color:var(--ink);
    width:100%;padding:6px 8px;border:1px solid #aab6c3;border-radius:4px;background:#fff}
  input:focus,textarea:focus{outline:2px solid #7fa2d9;outline-offset:0;border-color:#7fa2d9}
  input[type=number]{text-align:right}
  td input{border-color:#c4ced9}
  select{font-family:Arial, Helvetica, sans-serif;font-size:12pt;color:var(--ink);width:100%;padding:6px 8px;border:1px solid #aab6c3;border-radius:4px;background:#fff}
  select:focus{outline:2px solid #7fa2d9;border-color:#7fa2d9}
  input[type=datetime-local]{font-family:Arial, Helvetica, sans-serif;font-size:12pt;width:100%;padding:6px 8px;border:1px solid #aab6c3;border-radius:4px}
  textarea{min-height:64px;resize:vertical;line-height:1.5}
  .grid{display:grid;grid-template-columns:2fr 1fr 1fr 1.3fr;gap:10px}
  .grid label, .field label{display:block;font-weight:bold;margin-bottom:3px}
  .field{margin:10px 0}
  .formula{background:var(--formula);border:1px solid var(--formula-line);border-radius:4px;padding:8px 12px;text-align:center;margin:8px 0}
  ol.steps,ul.plain{margin:6px 0 10px;padding-left:26px}
  ol.steps li,ul.plain li{margin:3px 0}
  .check{display:flex;gap:8px;align-items:flex-start;margin:4px 0}
  .check input{width:18px;height:18px;margin-top:3px;flex:none}
  .inline-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
  .inline-row input{width:120px}
  .obs{display:grid;grid-template-columns:auto 1fr auto 1fr;gap:8px;align-items:center;margin:8px 0}
  .calc{border:1px solid var(--line);border-radius:6px;padding:12px 14px;margin:10px 0}
  .calc .result{font-weight:bold;font-size:12pt}
  .result-val{display:inline-block;min-width:80px;padding:2px 8px;border-radius:4px;background:var(--accent-soft);color:var(--accent);text-align:right}
  .msg{border-radius:4px;padding:6px 10px;margin:6px 0;display:none}
  .msg.show{display:block}
  .msg.warn{background:var(--warn-soft);color:var(--warn)}
  .msg.ok{background:var(--ok-soft);color:var(--ok)}
  .actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px;padding-top:16px;border-top:1px solid var(--line)}
  button{font-family:Arial, Helvetica, sans-serif;font-size:12pt;padding:8px 16px;border-radius:4px;border:1px solid var(--accent);background:var(--accent);color:#fff;cursor:pointer}
  button.secondary{background:#fff;color:var(--accent)}
  button.danger{background:#fff;color:var(--warn);border-color:var(--warn)}
  button:focus-visible{outline:2px solid #7fa2d9;outline-offset:2px}
  .status{color:var(--muted);align-self:center}
  .dialog-backdrop{position:fixed;inset:0;background:rgba(20,30,45,.45);display:none;align-items:center;justify-content:center;padding:16px}
  .dialog-backdrop.show{display:flex}
  .dialog{background:#fff;border-radius:6px;padding:20px 22px;max-width:420px;width:100%}
  .dialog p{margin-bottom:16px}
  .q{margin:14px 0}
  .q label{font-weight:bold;display:block;margin-bottom:4px}
  @media (max-width:640px){
    .sheet{padding:20px 16px;margin:0;border-radius:0;border-left:none;border-right:none}
    .grid{grid-template-columns:1fr 1fr}
    .obs{grid-template-columns:1fr}
    th,td{padding:5px}
  }
  @media print{
    body{background:#fff}
    .sheet{border:none;margin:0;padding:0;max-width:none}
    .actions,.dialog-backdrop{display:none!important}
    input,textarea{border:none;border-bottom:1px solid #888;border-radius:0}
    textarea{min-height:0}
    h2{break-after:avoid}
    table,.calc{break-inside:avoid}
  }
</style>
</head>
<body>
<main class="sheet" id="sheet">
  <header class="top">
    <div class="kicker">АЖЛЫН ХУУДАС</div>
    <h1>Ундны усны дээж авалт</h1>
    <div class="sub">Бэлтгэл · Дээж авах · Шошголох · Тээвэрлэлт, хадгалалт</div>
  </header>

  <section>
    <div class="grid">
      <div><label for="name">Овог, нэр</label><input type="text" id="name" data-save></div>
      <div><label for="cls">Анги</label><input type="text" id="cls" data-save></div>
      <div><label for="date">Огноо</label><input type="date" id="date" data-save></div>
      <div><label for="sample">Дээжийн дугаар</label><input type="text" id="sample" data-save></div>
    </div>
    <div class="field"><label for="source">Дээжийн эх үүсвэр (хаанаас авсан)</label><input type="text" id="source" data-save></div>
  </section>

  <h2>1. Зорилго</h2>
  <p>Усны чанарыг шинжлэх лабораторийн судалгаанд шаардлагатай <b>төлөөлөхүйц</b> дээжийг <b>зөв аргаар</b> авч, шошголж, чанарыг нь алдагдуулахгүйгээр лабораторид хүргэх.</p>

  <h2>2. Дээж авах төрлүүд</h2>
  <table>
    <thead><tr><th>Төрөл</th><th>Жишээ</th><th>Анхаарах зүйл</th></tr></thead>
    <tbody>
      <tr><td>Ундны ус</td><td>Худаг, цэвэр усан хангамжийн цорго</td><td>Цоргыг эхлээд хэсэг хугацаанд урсгаж, тогтсон усыг гаргана.</td></tr>
      <tr><td>Гадаргын ус</td><td>Гол, нуур, тогтоол ус</td><td>Эргээс зайтай, гадаргын хөөс, ёроолын лагнаас хол цэгээс авна.</td></tr>
      <tr><td>Хаягдал ус</td><td>Бохир ус (шаардлагатай үед)</td><td>Хамгаалах хэрэгслийг заавал хэрэглэнэ.</td></tr>
    </tbody>
  </table>

  <h2>3. Хэрэглэх хэрэгсэл</h2>
  <p>Хэрэгсэл бүрийг бэлэн эсэхийг шалгаад тэмдэглэнэ үү.</p>
  <table>
    <thead><tr><th style="width:36px">№</th><th style="width:34%">Хэрэгсэл</th><th>Шаардлага</th><th style="width:70px">Бэлэн</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Дээжийн сав</td><td>Шилэн эсвэл хуванцар (химийн урвалд ордоггүй), 250–500 мл, ариутгасан, битүүмжилсэн</td><td><input type="checkbox" id="r1" data-save aria-label="Сав бэлэн"></td></tr>
      <tr><td>2</td><td>Шошго</td><td>Ус нэвтрэхгүй</td><td><input type="checkbox" id="r2" data-save aria-label="Шошго бэлэн"></td></tr>
      <tr><td>3</td><td>Үзэг, маркер</td><td>Усанд арилдаггүй</td><td><input type="checkbox" id="r3" data-save aria-label="Маркер бэлэн"></td></tr>
      <tr><td>4</td><td>Бичиг баримт</td><td>Дээж авалтын маягт, тэмдэглэл</td><td><input type="checkbox" id="r4" data-save aria-label="Бичиг баримт бэлэн"></td></tr>
      <tr><td>5</td><td>Хувийн хамгаалах хэрэгсэл</td><td>Бээлий, маск, халад</td><td><input type="checkbox" id="r5" data-save aria-label="Хамгаалах хэрэгсэл бэлэн"></td></tr>
      <tr><td>6</td><td>Хөргөгч сав</td><td>Мөсөн элементтэй, 4°C орчим барих</td><td><input type="checkbox" id="r6" data-save aria-label="Хөргөгч сав бэлэн"></td></tr>
    </tbody>
  </table>
  <div class="msg" id="msgR" role="status"></div>

  <h2>4. А. Дээж авах цэг</h2>
  <ol class="steps">
    <li>Төлөөлөхүйц цэгийг сонгоно.</li>
    <li>Боломжтой бол ус урсдаг хэсгээс авна.</li>
    <li>Гадны бохирдлоос сэргийлнэ.</li>
  </ol>
  <table>
    <tbody>
      <tr><th style="width:38%">Дээжийн төрөл</th><td><select id="kind" data-save><option value="">— сонгох —</option><option>Ундны ус</option><option>Гадаргын ус</option><option>Хаягдал ус</option></select></td></tr>
      <tr><th>Дээж авсан цэг</th><td><select id="point" data-save><option value="">— сонгох —</option><option>Цорго</option><option>Худаг</option><option>Гол</option><option>Нуур, тогтоол ус</option><option>Бусад</option></select></td></tr>
      <tr><th>Цэгийн байршил, тайлбар</th><td><input type="text" id="place" data-save></td></tr>
      <tr><th>Цоргыг урсгасан хугацаа (мин)</th><td><input type="number" id="flush" step="0.5" min="0" data-save></td></tr>
      <tr><th>Цаг агаар</th><td><input type="text" id="weather" data-save></td></tr>
    </tbody>
  </table>
  <div class="msg" id="msgP" role="status"></div>

  <h2>5. Б. Савыг бэлтгэх, дээж авах</h2>
  <ol class="steps">
    <li>Савыг 2–3 удаа дээжийн усаар зайлна. (Нян судлалын ариутгасан савыг зайлахгүй — зааврыг дагана.)</li>
    <li>Савыг дүүргэхдээ агаарын зай үлдээнэ.</li>
    <li>Гар хүргэхгүй, савны дотор тал болон тагийг бохирдуулахгүй.</li>
  </ol>
  <table>
    <tbody>
      <tr><th style="width:38%">Савны төрөл</th><td><select id="bType" data-save><option value="">— сонгох —</option><option>Шилэн</option><option>Хуванцар</option><option>Ахуйн (ундааны) сав</option></select></td></tr>
      <tr><th>Савны багтаамж (мл)</th><td><input type="number" id="bVol" step="10" min="0" data-save></td></tr>
      <tr><th>Савыг зайлсан тоо</th><td><input type="number" id="rinse" step="1" min="0" data-save></td></tr>
    </tbody>
  </table>
  <div class="check"><input type="checkbox" id="b1" data-save><label for="b1">Сав ариутгасан, битүүмжилсэн байсан.</label></div>
  <div class="check"><input type="checkbox" id="b2" data-save><label for="b2">Агаарын зай үлдээж дүүргэсэн.</label></div>
  <div class="check"><input type="checkbox" id="b3" data-save><label for="b3">Савны дотор тал, тагийг гараар хүрээгүй.</label></div>
  <div class="msg" id="msgB" role="status"></div>

  <h2>6. В. Шошголох</h2>
  <p>Шошгон дээр бичсэн мэдээллээ доорх хүснэгтэд бичнэ.</p>
  <table>
    <thead><tr><th style="width:38%">Шошгоны мэдээлэл</th><th>Бичсэн утга</th></tr></thead>
    <tbody>
      <tr><td>Дээжийн дугаар</td><td><input type="text" id="lN" data-save></td></tr>
      <tr><td>Огноо</td><td><input type="date" id="lD" data-save></td></tr>
      <tr><td>Цаг</td><td><input type="text" id="lT" placeholder="ж: 10:30" data-save></td></tr>
      <tr><td>Дээжийн төрөл</td><td><input type="text" id="lK" data-save></td></tr>
      <tr><td>Хариуцсан хүн</td><td><input type="text" id="lP" data-save></td></tr>
    </tbody>
  </table>
  <div class="check"><input type="checkbox" id="lW" data-save><label for="lW">Ус нэвтрэхгүй шошго ашигласан.</label></div>
  <div class="msg" id="msgL" role="status"></div>

  <h2>7. Г. Тээвэрлэлт, хадгалалт</h2>
  <ol class="steps">
    <li>Дээжийг 4°C орчим температурт хадгална.</li>
    <li>Битүүмжилсэн саванд, нарны шууд тусгалаас хамгаалж тээвэрлэнэ.</li>
    <li>Лабораторид аль болох хурдан, ихэвчлэн 24 цагийн дотор хүргэнэ.</li>
  </ol>
  <table>
    <tbody>
      <tr><th style="width:38%">Дээж авсан огноо, цаг</th><td><input type="datetime-local" id="tStart" data-save></td></tr>
      <tr><th>Лабораторид хүргэсэн огноо, цаг</th><td><input type="datetime-local" id="tEnd" data-save></td></tr>
      <tr><th>Хөргөгч савны температур (°C)</th><td><input type="number" id="cool" step="0.1" data-save></td></tr>
    </tbody>
  </table>
  <div class="check"><input type="checkbox" id="c1" data-save><label for="c1">Битүүмжилсэн саванд тээвэрлэсэн.</label></div>
  <div class="check"><input type="checkbox" id="c2" data-save><label for="c2">Нарны шууд тусгал, халуунаас хамгаалсан.</label></div>

  <div class="calc">
    <h3>Хүргэлтийн хугацаа, цаг</h3>
    <div class="formula">Хугацаа = Хүргэсэн цаг − Дээж авсан цаг</div>
    <p class="result">Хугацаа = <span id="hExpr">—</span> = <span class="result-val" id="hVal">—</span> цаг</p>
  </div>
  <div class="msg" id="msgC" role="status"></div>

  <h3>Шаардлагын хураангуй</h3>
  <table>
    <thead><tr><th style="width:36px">№</th><th>Шаардлага</th><th>Таны үр дүн</th><th style="width:90px">Хангасан</th></tr></thead>
    <tbody id="sumBody"></tbody>
  </table>

  <h2>8. Аюулгүй ажиллагаа</h2>
  <div class="check"><input type="checkbox" id="s1" data-save><label for="s1">Бээлий, маск, халад өмсөж ажилласан.</label></div>
  <div class="check"><input type="checkbox" id="s2" data-save><label for="s2">Тоосонцор, халуун, нарны шууд тусгалаас дээжийг хол байлгасан.</label></div>
  <div class="check"><input type="checkbox" id="s3" data-save><label for="s3">Зөвхөн лабораторийн зориулалтын сав ашигласан.</label></div>

  <h2>9. Шалгах асуултууд</h2>
  <div class="q"><label for="q1">1. «Төлөөлөхүйц» дээж гэж юу вэ? Яагаад чухал вэ?</label><textarea id="q1" data-save></textarea></div>
  <div class="q"><label for="q2">2. Цоргоноос дээж авахын өмнө яагаад усыг хэсэг хугацаанд урсгадаг вэ?</label><textarea id="q2" data-save></textarea></div>
  <div class="q"><label for="q3">3. Савыг дүүргэхдээ яагаад агаарын зай үлдээдэг вэ?</label><textarea id="q3" data-save></textarea></div>
  <div class="q"><label for="q4">4. Ахуйн (ундааны) сав ашиглаж болохгүй шалтгаан юу вэ?</label><textarea id="q4" data-save></textarea></div>
  <div class="q"><label for="q5">5. Дээжийг 4°C-т хадгалж, 24 цагийн дотор хүргэхгүй бол юу болох вэ?</label><textarea id="q5" data-save></textarea></div>

  <h2>10. Дүгнэлт</h2>
  <p>Дээж авалт шаардлагын <b id="cOk">—</b>-ийг хангасан. Хүргэлтийн хугацаа <b id="cH">—</b> цаг, хадгалсан температур <b id="cT">—</b> °C байна.</p>
  <div class="field"><label for="concl">Дээж шинжилгээнд тохиромжтой эсэх тухай дүгнэлт (алдаа гарсан бол юуг засах вэ)</label><textarea id="concl" data-save style="min-height:96px"></textarea></div>

  <div class="actions">
    <button type="button" id="btnCopy">Хариултыг хуулах</button>
    <button type="button" class="danger" id="btnClear">Цэвэрлэх</button>
    <span class="status" id="status" role="status" aria-live="polite"></span>
  </div>
</main>

<div class="dialog-backdrop" id="dlg" role="dialog" aria-modal="true" aria-labelledby="dlgText">
  <div class="dialog">
    <p id="dlgText">Бөглөсөн бүх мэдээллийг устгах уу?</p>
    <div class="inline-row">
      <button type="button" class="danger" id="dlgYes">Тийм, устгах</button>
      <button type="button" class="secondary" id="dlgNo">Болих</button>
    </div>
  </div>
</div>

<script>
(function(){
  var KEY='worksheet-sampling-v1';
  var $=function(id){return document.getElementById(id)};
  var dash='—';
  function num(id){var v=$(id).value.trim().replace(',','.');if(v==='')return null;var n=parseFloat(v);return isFinite(n)?n:null;}
  function v(id){return $(id).value.trim();}
  function ck(id){return $(id).checked;}
  function msg(id,cls,text){var m=$(id);m.className=cls?'msg '+cls+' show':'msg';m.innerHTML=text||'';}

  function hours(){var a=v('tStart'),b=v('tEnd');if(!a||!b)return null;var d=(new Date(b)-new Date(a))/3600000;return isFinite(d)?d:null;}
  function fmtDT(s){return s?s.replace('T',' '):dash;}

  function calc(){
    var R=[];
    // 3. equipment
    var nR=0;for(var i=1;i<=6;i++)if(ck('r'+i))nR++;
    if(nR===6)msg('msgR','ok','Бүх хэрэгсэл бэлэн байна.');else if(nR>0)msg('msgR','warn','Бэлтгэл дутуу: '+nR+'/6 хэрэгсэл бэлэн.');else msg('msgR');
    R.push(['Хэрэгсэл бүрэн бэлтгэсэн',nR+'/6',nR===6?true:(nR?false:null)]);

    // 4. point
    var flush=num('flush'),pt=v('point'),pm=[];
    if(pt==='Цорго'){
      if(flush===null)pm.push('Цоргыг урсгасан хугацааг бичнэ үү.');
      else if(flush<=0)pm.push('Цоргоноос авахдаа эхлээд усыг урсгаж, хоолойд тогтсон усыг гаргана.');
    }
    if(pm.length)msg('msgP','warn',pm.join('<br>'));else if(pt)msg('msgP','ok','Дээж авах цэгийн мэдээлэл бүрэн.');else msg('msgP');
    R.push(['Цэгийг тодорхойлсон (цорго бол урсгасан)',pt?(pt+(pt==='Цорго'&&flush!==null?', '+flush+' мин':'')):dash,pt?(pt==='Цорго'?(flush!==null&&flush>0):true):null]);

    // 5. bottle
    var bt=v('bType'),bv=num('bVol'),rn=num('rinse'),bm=[];
    if(bt==='Ахуйн (ундааны) сав')bm.push('Ахуйн зориулалтын савыг ашиглахгүй — зөвхөн лабораторийн зориулалтын сав.');
    if(bv!==null&&(bv<250||bv>500))bm.push('Савны багтаамж 250–500 мл байх ёстой.');
    if(rn!==null&&(rn<2||rn>3))bm.push('Савыг дээжийн усаар 2–3 удаа зайлна (нян судлалын ариутгасан савнаас бусад).');
    if(bm.length)msg('msgB','warn',bm.join('<br>'));else if(bt&&bv!==null&&rn!==null)msg('msgB','ok','Сав болон дээж авалт шаардлагад нийцэж байна.');else msg('msgB');
    R.push(['Зориулалтын сав (шил/хуванцар)',bt||dash,bt?bt!=='Ахуйн (ундааны) сав':null]);
    R.push(['Багтаамж 250–500 мл',bv!==null?bv+' мл':dash,bv!==null?(bv>=250&&bv<=500):null]);
    R.push(['2–3 удаа зайлсан',rn!==null?rn+' удаа':dash,rn!==null?(rn>=2&&rn<=3):null]);
    R.push(['Ариутгасан, агаарын зайтай, гар хүргээгүй',[ck('b1'),ck('b2'),ck('b3')].filter(Boolean).length+'/3',(ck('b1')&&ck('b2')&&ck('b3'))?true:([ck('b1'),ck('b2'),ck('b3')].some(Boolean)?false:null)]);

    // 6. label
    var lf=[['lN','дугаар'],['lD','огноо'],['lT','цаг'],['lK','төрөл'],['lP','хариуцсан хүн']],miss=lf.filter(function(x){return !v(x[0]);}).map(function(x){return x[1];});
    var anyL=lf.some(function(x){return v(x[0]);});
    var lm=[];if(anyL&&miss.length)lm.push('Шошго дутуу: '+miss.join(', ')+'.');
    if(anyL&&!ck('lW'))lm.push('Ус нэвтрэхгүй шошго ашиглана.');
    if(v('lT')&&!/^\\d{1,2}:\\d{2}$/.test(v('lT')))lm.push('Цагийг ЦЦ:ММ хэлбэрээр бичнэ (ж: 10:30).');
    if(lm.length)msg('msgL','warn',lm.join('<br>'));else if(anyL)msg('msgL','ok','Шошго бүрэн, зөв.');else msg('msgL');
    R.push(['Шошго бүрэн, ус нэвтрэхгүй',anyL?(5-miss.length)+'/5'+(ck('lW')?', ус нэвтрэхгүй':''):dash,anyL?(miss.length===0&&ck('lW')):null]);

    // 7. transport
    var h=hours(),t=num('cool'),cm=[];
    if(h!==null){
      if(h<0){$('hExpr').textContent=dash;$('hVal').textContent=dash;cm.push('Хүргэсэн цаг нь дээж авсан цагаас өмнө байж болохгүй.');}
      else{$('hExpr').textContent=fmtDT(v('tEnd'))+' − '+fmtDT(v('tStart'));$('hVal').textContent=h.toFixed(1);if(h>24)cm.push('24 цагаас хэтэрсэн — дээжийн чанар алдагдсан байж болно.');}
    }else{$('hExpr').textContent=dash;$('hVal').textContent=dash;}
    if(t!==null){if(t<0)cm.push('Хөлдсөн — сав хагарч, найрлага өөрчлөгдөж болно.');else if(t>8)cm.push('Температур өндөр — 4°C орчим (2–8°C) хадгална.');}
    if(cm.length)msg('msgC','warn',cm.join('<br>'));else if(h!==null&&t!==null)msg('msgC','ok','Тээвэрлэлт, хадгалалт шаардлагад нийцэж байна.');else msg('msgC');
    var hOk=h!==null&&h>=0?h<=24:null,tOk=t!==null?(t>=0&&t<=8):null;
    R.push(['24 цагийн дотор хүргэсэн',h!==null&&h>=0?h.toFixed(1)+' цаг':dash,hOk]);
    R.push(['4°C орчим (2–8°C) хадгалсан',t!==null?t+' °C':dash,tOk]);
    R.push(['Битүүмжилсэн, нарнаас хамгаалсан',[ck('c1'),ck('c2')].filter(Boolean).length+'/2',(ck('c1')&&ck('c2'))?true:((ck('c1')||ck('c2'))?false:null)]);

    // summary
    var html='',ok=0,done=0;
    R.forEach(function(r,i){var s=r[2]===null?dash:(r[2]?'✓ Тийм':'✗ Үгүй');if(r[2]!==null){done++;if(r[2])ok++;}
      html+='<tr><td>'+(i+1)+'</td><td>'+r[0]+'</td><td>'+r[1]+'</td><td style="font-weight:bold;color:'+(r[2]===null?'inherit':(r[2]?'var(--ok)':'var(--warn)'))+'">'+s+'</td></tr>';});
    html+='<tr class="avg"><td></td><td>Нийт</td><td>'+(done?ok+' / '+R.length+' шаардлага':dash)+'</td><td></td></tr>';
    $('sumBody').innerHTML=html;
    $('cOk').textContent=done?ok+'/'+R.length:dash;
    $('cH').textContent=h!==null&&h>=0?h.toFixed(1):dash;
    $('cT').textContent=t!==null?t:dash;
  }

  var fields=function(){return Array.prototype.slice.call(document.querySelectorAll('[data-save]'));};
  function save(){var data={};fields().forEach(function(el){data[el.id]=el.type==='checkbox'?el.checked:el.value;});try{localStorage.setItem(KEY,JSON.stringify(data));}catch(e){}}
  function load(){var data=null;try{data=JSON.parse(localStorage.getItem(KEY)||'null');}catch(e){}if(!data)return;
    fields().forEach(function(el){if(!(el.id in data))return;if(el.type==='checkbox')el.checked=!!data[el.id];else el.value=data[el.id];});}
  load();calc();
  document.addEventListener('input',function(){calc();save();});
  document.addEventListener('change',function(){calc();save();});

  var statusEl=$('status'),statusTimer;
  function status(t){statusEl.textContent=t;clearTimeout(statusTimer);statusTimer=setTimeout(function(){statusEl.textContent='';},4000);}
  function val(id){return v(id)||dash;}
  function yn(id){return ck(id)?'тийм':'үгүй';}

  function summary(){
    calc();var L=[];
    L.push('АЖЛЫН ХУУДАС: Ундны усны дээж авалт');
    L.push('Нэр: '+val('name')+' | Анги: '+val('cls')+' | Огноо: '+val('date')+' | Дээж: '+val('sample'));
    L.push('Эх үүсвэр: '+val('source'));L.push('');
    L.push('А. Цэг: '+val('kind')+', '+val('point')+' — '+val('place')+'; урсгасан '+val('flush')+' мин; цаг агаар: '+val('weather'));
    L.push('Б. Сав: '+val('bType')+', '+val('bVol')+' мл, '+val('rinse')+' удаа зайлсан; ариутгасан '+yn('b1')+', агаарын зай '+yn('b2')+', гар хүргээгүй '+yn('b3'));
    L.push('В. Шошго: '+val('lN')+' | '+val('lD')+' | '+val('lT')+' | '+val('lK')+' | '+val('lP')+'; ус нэвтрэхгүй '+yn('lW'));
    L.push('Г. Тээвэрлэлт: '+fmtDT(v('tStart'))+' → '+fmtDT(v('tEnd'))+' = '+$('hVal').textContent+' цаг; '+val('cool')+' °C; битүүмжилсэн '+yn('c1')+', нарнаас хамгаалсан '+yn('c2'));
    L.push('');L.push('ШААРДЛАГЫН ХУРААНГУЙ');
    Array.prototype.forEach.call($('sumBody').querySelectorAll('tr'),function(tr){var td=tr.querySelectorAll('td');L.push((td[0].textContent?td[0].textContent+'. ':'')+td[1].textContent+': '+td[2].textContent+(td[3].textContent?' — '+td[3].textContent:''));});
    L.push('');
    var qs=['Төлөөлөхүйц дээж гэж юу вэ?','Цоргыг яагаад урсгадаг вэ?','Яагаад агаарын зай үлдээдэг вэ?','Ахуйн сав яагаад болохгүй вэ?','4°C, 24 цагийг зөрчвөл юу болох вэ?'];
    qs.forEach(function(q,k){L.push((k+1)+'. '+q);L.push('   '+val('q'+(k+1)));});
    L.push('');L.push('Дүгнэлт: '+val('concl'));
    return L.join('\\n');
  }

  $('btnCopy').addEventListener('click',function(){
    var text=summary();
    function fallback(){var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();
      var ok=false;try{ok=document.execCommand('copy');}catch(e){}document.body.removeChild(ta);status(ok?'Хариулт хуулагдлаа.':'Хуулж чадсангүй.');}
    try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){status('Хариулт хуулагдлаа.');},fallback);}else fallback();}catch(e){fallback();}
  });
  var dlg=$('dlg');
  $('btnClear').addEventListener('click',function(){dlg.classList.add('show');$('dlgNo').focus();});
  $('dlgNo').addEventListener('click',function(){dlg.classList.remove('show');});
  $('dlgYes').addEventListener('click',function(){
    fields().forEach(function(el){if(el.type==='checkbox')el.checked=false;else el.value='';});
    try{localStorage.removeItem(KEY);}catch(e){}
    calc();dlg.classList.remove('show');status('Цэвэрлэгдлээ.');
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')dlg.classList.remove('show');});
})();

<\/script>
</body>
</html>
`;export{e as default};