// ── Data ──
var D=[
["Pre-1800",[[64,4,4.32,"Seneca","Letters from a Stoic"],[180,5,4.29,"Marcus Aurelius","Meditations"],[426,4,3.92,"Augustine","City of God"],[1755,3,3.85,"Rousseau","Discourse on Inequality"],[1759,4,3.76,"Voltaire","Candide"]]],
["19c",[[1844,4,4.17,"Marx","Economic & Philosophic Manuscripts"],[1844,4,4.12,"Emerson","Self-Reliance"],[1854,4,3.77,"Thoreau","Walden"],[1863,3,3.84,"Tolstoy","The Cossacks"],[1864,4,4.19,"Dostoevsky","Notes from Underground"],[1871,3,4.0,"Nietzsche","Birth of Tragedy"],[1887,5,4.15,"Nietzsche","On the Genealogy of Morals"],[1895,1,3.9,"Wells","The Time Machine"]]],
["1910s",[[1916,4,3.64,"Joyce","Portrait of the Artist"]]],
["1920s",[[1924,5,3.9,"Zamyatin","We"],[1927,5,3.81,"Woolf","To the Lighthouse"]]],
["1930s",[[1930,2,3.81,"Platonov","The Foundation Pit"],[1931,5,4.17,"Woolf","The Waves"],[1932,5,3.99,"Huxley","Brave New World"],[1938,4,3.93,"C.S. Lewis","Out of the Silent Planet"]]],
["1940s",[[1940,4,3.92,"Hardy","A Mathematician's Apology"],[1943,3,4.02,"C.S. Lewis","Perelandra"],[1945,3,3.92,"C.S. Lewis","That Hideous Strength"],[1946,2,4.38,"Frankl","Man's Search for Meaning"],[1947,5,4.11,"Horkheimer","Dialectic of Enlightenment"],[1948,4,4.15,"Orwell","1984"],[1949,5,4.29,"Kafka","Diaries, 1910–1923"]]],
["1950s",[[1951,5,4.25,"Adorno","Minima Moralia"],[1951,5,3.81,"Salinger","The Catcher in the Rye"],[1952,2,3.91,"Vonnegut","Player Piano"],[1952,3,3.92,"Ellison","Invisible Man"],[1952,4,3.82,"Hemingway","The Old Man and the Sea"],[1953,5,4.01,"Bradbury","Fahrenheit 451"],[1955,4,4.29,"Benjamin","Illuminations"],[1955,5,3.87,"Nabokov","Lolita"],[1956,2,4.06,"Camus","The Fall"],[1956,4,3.94,"Huxley","Doors of Perception"],[1957,4,3.97,"Salinger","Franny and Zooey"],[1959,4,3.88,"Roth","Goodbye, Columbus"],[1959,4,3.6,"Knowles","A Separate Peace"]]],
["1960s",[[1960,5,3.58,"Updike","Rabbit, Run"],[1962,2,3.89,"Habermas","Structural Transformation"],[1963,4,4.05,"Plath","The Bell Jar"],[1964,5,3.99,"Marcuse","One-Dimensional Man"],[1967,4,4.2,"Ashbery","Selected Poems"],[1968,3,4.19,"Didion","Slouching Towards Bethlehem"],[1968,5,3.85,"Watson","The Double Helix"],[1969,5,3.71,"Roth","Portnoy's Complaint"]]],
["1970s",[[1970,4,4.21,"Suzuki","Zen Mind, Beginner's Mind"],[1971,4,3.81,"Updike","Rabbit Redux"],[1973,5,4.05,"Bedford","Aldous Huxley: A Biography"],[1973,2,4.08,"Vonnegut","Breakfast of Champions"],[1974,4,3.78,"Pirsig","Zen and the Art of Motorcycle Maintenance"],[1974,3,4.08,"Dillard","Pilgrim at Tinker Creek"],[1977,4,4.23,"Dillard","Holy the Firm"],[1978,4,4.33,"Benjamin","Reflections"],[1979,3,4.03,"Didion","The White Album"]]],
["1980s",[[1981,3,4.1,"Kidder","The Soul of a New Machine"],[1982,5,4.46,"Benjamin","The Arcades Project"],[1984,2,4.12,"Kundera","The Unbearable Lightness of Being"],[1985,4,3.64,"Ellis","Less Than Zero"],[1985,4,3.86,"DeLillo","White Noise"],[1985,3,3.92,"García Márquez","Love in the Time of Cholera"],[1986,4,3.69,"Carse","Finite and Infinite Games"],[1987,3,3.84,"Foster Wallace","The Broom of the System"],[1988,4,3.88,"Foster Wallace","Girl with Curious Hair"]]],
["1990s",[[1991,4,3.83,"Pirsig","Lila"],[1991,3,3.7,"DeLillo","Mao II"],[1993,4,3.99,"Norris","Dakota"],[1994,3,4.05,"Agamben","Homo Sacer"],[1995,5,4.26,"Carson","Plainwater"],[1996,4,4.11,"Markson","Reader's Block"],[1996,4,4.27,"Foster Wallace","Infinite Jest"],[1997,4,4.24,"Foster Wallace","A Supposedly Fun Thing"],[1997,4,3.95,"DeLillo","Underworld"],[1997,4,3.93,"Roth","American Pastoral"],[1998,2,4.06,"Hoffman","The Man Who Loved Only Numbers"],[1998,2,3.84,"Winchester","The Professor and the Madman"],[1999,4,4.14,"Dillard","For the Time Being"],[1999,3,3.87,"Foster Wallace","Brief Interviews with Hideous Men"],[1999,4,4.11,"Greene","The Elegant Universe"]]],
["2000s",[[2000,2,4.18,"Chabon","Kavalier & Clay"],[2001,4,3.87,"Didion","Political Fictions"],[2001,4,3.84,"Franzen","The Corrections"],[2003,3,3.28,"DeLillo","Cosmopolis"],[2004,3,4.09,"Foster Wallace","Oblivion"],[2004,2,4.11,"Greene","The Fabric of the Cosmos"],[2005,4,4.19,"Foster Wallace","Consider the Lobster"],[2005,4,3.93,"Didion","The Year of Magical Thinking"],[2009,3,3.84,"Smith","Changing My Mind"],[2009,4,4.18,"Biss","Notes from No Man's Land"]]],
["2010s",[[2010,4,3.93,"Lipsky","Although of Course You End Up Becoming Yourself"],[2010,3,3.85,"Kirkpatrick","The Facebook Effect"],[2011,5,4.1,"Greene","The Hidden Reality"],[2012,4,3.87,"Foster Wallace","Both Flesh and Not"],[2012,4,3.72,"Cusk","Aftermath"],[2012,4,3.74,"Max","Every Love Story Is a Ghost Story"],[2013,3,3.7,"Norman","I Hate to Leave This Beautiful Place"],[2013,4,4.12,"Stone","The Everything Store"],[2013,2,3.28,"Waldman","The Love Affairs of Nathaniel P."],[2013,3,3.19,"Grossman","You"],[2014,4,3.94,"Ellenberg","How Not to Be Wrong"],[2014,3,3.93,"Biss","On Immunity"],[2014,3,4.11,"Levy","Things I Don't Want to Know"],[2014,5,3.67,"Cusk","Outline"],[2014,3,3.9,"Solnit","Wanderlust"],[2015,4,4.04,"Nelson","The Argonauts"],[2016,4,3.97,"Cusk","Transit"],[2016,4,4.47,"Desmond","Evicted"],[2017,5,3.66,"Batuman","The Idiot"],[2018,2,3.65,"Moshfegh","My Year of Rest and Relaxation"],[2018,4,3.51,"Martin","Early Work"],[2018,2,3.88,"Ma","Severance"],[2018,3,4.02,"Lewis","The Fifth Risk"],[2018,2,3.19,"Christensen","The Last Cruise"],[2018,4,3.88,"Cusk","Kudos"],[2018,4,3.83,"Smith","Feel Free"],[2018,3,3.33,"Yang","The Souls of Yellow Folk"],[2018,3,4.18,"Levy","The Cost of Living"],[2018,3,3.76,"Groff","Florida"],[2018,4,4.38,"Carreyrou","Bad Blood"],[2018,3,3.39,"DeWitt","Some Trick"],[2018,5,3.43,"Halliday","Asymmetry"],[2018,2,4.17,"Reiter","Astroball"]]]
];

// ── Color helpers ──
var ratingLight={1:'#eeaaa8',2:'#eebb9e',3:'#e0c888',4:'#a89ec8',5:'#a8e0ca'};
var ratingDark={1:'#3a0808',2:'#3a1404',3:'#382806',4:'#0e0a2a',5:'#022418'};
function seeded(i){return((Math.sin(i*127.1+311.7)*43758.5453)%1+1)%1;}
function lerpColor(a,b,t){
  var ar=parseInt(a.slice(1,3),16),ag=parseInt(a.slice(3,5),16),ab=parseInt(a.slice(5,7),16);
  var br=parseInt(b.slice(1,3),16),bg=parseInt(b.slice(3,5),16),bb=parseInt(b.slice(5,7),16);
  var r=Math.round(ar+(br-ar)*t),g=Math.round(ag+(bg-ag)*t),bl=Math.round(ab+(bb-ab)*t);
  return '#'+((1<<24)+(r<<16)+(g<<8)+bl).toString(16).slice(1);
}
function ratingGapColor(rating,gap,i){
  var t=Math.min(Math.abs(gap)/2.5,1);
  t=t*0.85+seeded(i*13+7)*0.15;
  return lerpColor(ratingLight[rating],ratingDark[rating],Math.min(1,Math.max(0,t)));
}

// ── Globals ──
var tip=document.getElementById('tip');
var container=document.getElementById('shelves');
var vpEl=document.getElementById('viewport');
var zoomLabel=document.getElementById('zoom-label');
var worldEl=document.getElementById('world');
var shelfEl=document.getElementById('bookshelf');
var scale=1,panX=0,panY=0;
var minZoom=0.15;

// ── House-first geometry ──
// Define house as RATIOS so everything scales when shelf content changes.
// positionFurniture derives absolute sizes from actual shelf dimensions.
var HR={
  shelfFracW:0.38,   // shelf is 38% of study width
  shelfFracH:0.48,   // shelf is 48% of study height
  kitchenFrac:0.42,  // kitchen width as fraction of study width
  shelfPosL:0.35,    // shelf horizontal offset (35% from left of free space)
  shelfPosTop:0.55,  // shelf vertical offset (55% from top of free space)
  extPadFrac:0.45    // exterior padding as fraction of house width
};
// Target shelf size for initial/empty render (viewport-based)
var shelfTargetW=300;
var shelfTargetH=260;

// Save base inline styles so positionFurniture can reset before re-applying
var baseStyleIds=[
  'shelf-back','shelf-left','shelf-right','shelf-top',
  'wall','wainscot','floor','baseboard','lamp','plant','picture',
  'room','bookshelf','armchair','side-table','window-l','window-r',
  'clock','rug','floor-cat',
  'house','roof','chimney','attic','attic-box1','attic-box2',
  'ceiling-beam','kitchen','kitchen-counter','kitchen-cabinet',
  'kitchen-table','room-divider','house-wall-l','house-wall-r','foundation',
  'exterior','sky','stars','moon','ground','ground-dirt','tree-l','tree-r'
];
var baseStyles={};
baseStyleIds.forEach(function(id){baseStyles[id]=document.getElementById(id).style.cssText;});

function applyTransform(){
  worldEl.style.transform='translate('+panX+'px,'+panY+'px) scale('+scale+')';
  zoomLabel.textContent=scale.toFixed(1)+'x · scroll to zoom';
}

// ── Render ──
function renderShelf(data){
  container.innerHTML='';
  var allGroups=[];
  data.forEach(function(g){allGroups.push(g);});
  var totalBooks=0;
  allGroups.forEach(function(g){totalBooks+=g[1].length;});
  if(totalBooks===0)return;

  document.getElementById('book-count').textContent=totalBooks+' books';

  // Use house-derived shelf target instead of viewport
  var tW=shelfTargetW;
  var tH=shelfTargetH;
  var decadeGap=8;
  var shelfPadSide=16;
  var panelW=12,topH=10,pad=8;
  var shelfFurW=panelW*2+pad*2;
  var rowChrome=10+3+18;

  // Solve for row count + spine size to fill shelf target
  var bestCfg={rows:3,sw:20,hs:1,sc:0};
  for(var tr=1;tr<=6;tr++){
    var pr=Math.ceil(totalBooks/tr);
    var bw=tW-shelfFurW-shelfPadSide*2-16;
    var ag=Math.max(0,Math.round(allGroups.length/tr)-1)*decadeGap;
    var sw=Math.min(38,(bw-ag)/pr);
    if(sw<8)continue;
    var rh=(tH-topH-pad/2-20)/tr-rowChrome;
    var hs=Math.min(2.2,rh/185);
    if(hs<0.6)continue;
    var fW=(pr*sw+ag+shelfPadSide*2+16+shelfFurW)/tW;
    var fH=(tr*(185*hs+rowChrome)+topH+pad/2+20)/tH;
    var sc=Math.min(fW,fH,1);
    if(sc>bestCfg.sc)bestCfg={rows:tr,sw:sw,hs:hs,sc:sc};
  }
  var numRows=bestCfg.rows;
  var perRow=Math.ceil(totalBooks/numRows);
  var heightScale=bestCfg.hs;
  var availW=tW-shelfFurW-8;
  var baseFontSize=Math.round(Math.min(11,7*Math.max(1,Math.sqrt(heightScale)))*10)/10;
  var charW=baseFontSize*0.6;

  var rows=[];
  var currentRow=[],currentCount=0;
  allGroups.forEach(function(g){
    var n=g[1].length;
    if(currentCount+n>perRow&&currentRow.length>0){rows.push(currentRow);currentRow=[];currentCount=0;}
    currentRow.push(g);currentCount+=n;
  });
  if(currentRow.length)rows.push(currentRow);

  var globalI=0;

  rows.forEach(function(row){
    var rowBooks=0,rowGroups=row.length;
    row.forEach(function(g){rowBooks+=g[1].length;});
    var rowGaps=(rowGroups-1)*decadeGap;
    var spineW=Math.max(8,Math.min(44,(availW-rowGaps-shelfPadSide*2)/rowBooks));

    var rowDiv=document.createElement('div');
    rowDiv.style.cssText='position:relative;padding:0 '+shelfPadSide+'px;';

    var booksDiv=document.createElement('div');
    booksDiv.style.cssText='display:flex;align-items:flex-end;min-height:'+Math.round(185*heightScale+10)+'px;gap:'+decadeGap+'px;padding:0 4px;';

    var labelsDiv=document.createElement('div');
    labelsDiv.style.cssText='display:flex;padding:2px '+shelfPadSide+'px 0;gap:'+decadeGap+'px;';

    row.forEach(function(group){
      var label=group[0],books=group[1];
      var gDiv=document.createElement('div');
      gDiv.style.cssText='display:flex;align-items:flex-end;';

      books.forEach(function(b){
        var h=(50+b[1]*25+seeded(globalI)*10)*heightScale;
        var baseW=spineW-1+seeded(globalI*3+1)*3;
        var titleLen=b[4].length;
        var availH=h-10;
        var neededW=titleLen*charW;
        var needsTwoLines=neededW>availH;
        var w=needsTwoLines?Math.max(baseW,16):baseW;
        var col=ratingGapColor(b[1],b[1]-b[2],globalI);

        var bookEl=document.createElement('div');
        bookEl.className='book';
        bookEl.style.width=w+'px';bookEl.style.height=h+'px';
        bookEl.dataset.y=b[0];bookEl.dataset.m=b[1];bookEl.dataset.g=b[2];
        bookEl.dataset.a=b[3];bookEl.dataset.t=b[4];

        var inner=document.createElement('div');
        inner.className='book-inner';
        inner.style.cssText='width:100%;height:100%;background:'+col+';';
        inner.innerHTML='<div class="book-hl"></div><div class="book-sh"></div><div class="book-tp"></div>';

        if(h>50&&w>5){
          var titleEl=document.createElement('div');
          titleEl.className='book-title';
          titleEl.style.width=availH+'px';titleEl.style.maxWidth=availH+'px';
          var fs=baseFontSize;
          if(neededW>availH*2)fs=Math.max(4.5,baseFontSize*(availH*2/neededW));
          titleEl.style.fontSize=fs+'px';
          titleEl.textContent=b[4];
          inner.appendChild(titleEl);
        }
        bookEl.appendChild(inner);gDiv.appendChild(bookEl);globalI++;
      });
      booksDiv.appendChild(gDiv);

      var lDiv=document.createElement('div');
      lDiv.style.cssText='text-align:center;font-size:8px;color:rgba(255,255,255,0.2);letter-spacing:0.05em;width:'+(books.length*spineW)+'px;';
      lDiv.textContent=label;
      labelsDiv.appendChild(lDiv);
    });

    rowDiv.appendChild(booksDiv);

    var plank=document.createElement('div');
    plank.style.cssText='height:10px;background:linear-gradient(180deg,#8b6914 0%,#a07828 20%,#7a5c18 50%,#6b4e12 80%,#5a4010 100%);border-radius:0 0 2px 2px;box-shadow:0 3px 8px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.1);margin:0 4px;';
    rowDiv.appendChild(plank);
    var edge=document.createElement('div');
    edge.style.cssText='height:3px;background:linear-gradient(180deg,#5a4010,#4a3008);margin:0 4px;border-radius:0 0 3px 3px;box-shadow:0 2px 6px rgba(0,0,0,0.4);';
    rowDiv.appendChild(edge);
    rowDiv.appendChild(labelsDiv);

    container.appendChild(rowDiv);
  });

  positionFurniture();
}

// ── Position furniture & room ──
function positionFurniture(){
  // Reset all elements to their base styles before re-applying positioning
  baseStyleIds.forEach(function(id){document.getElementById(id).style.cssText=baseStyles[id];});
  shelfEl.style.width='';shelfEl.style.height='';
  container.style.marginLeft='';container.style.marginTop='';

  var panelW=12,topH=10,pad=8;
  var cw=container.offsetWidth;
  var ch=container.offsetHeight;

  // ── Shelf furniture ──
  shelfEl.style.width=(cw+panelW*2+pad*2)+'px';
  shelfEl.style.height=(ch+topH+pad)+'px';
  container.style.marginLeft=(panelW+pad)+'px';
  container.style.marginTop=(topH+pad/2)+'px';

  document.getElementById('shelf-back').style.cssText+='left:'+panelW+'px;top:'+topH+'px;width:'+(cw+pad*2)+'px;height:'+(ch+pad)+'px;';
  document.getElementById('shelf-left').style.cssText+='left:0;top:0;width:'+panelW+'px;height:'+(ch+topH+pad)+'px;';
  document.getElementById('shelf-right').style.cssText+='right:0;top:0;width:'+panelW+'px;height:'+(ch+topH+pad)+'px;';
  document.getElementById('shelf-top').style.cssText+='left:0;top:0;width:'+(cw+panelW*2+pad*2)+'px;height:'+topH+'px;';

  var shelfW=shelfEl.offsetWidth;
  var shelfH=shelfEl.offsetHeight;

  // ── Derive house from actual shelf using ratios ──
  var studyW=Math.round(shelfW/HR.shelfFracW);
  var studyH=Math.round(shelfH/HR.shelfFracH);
  var padL=Math.round((studyW-shelfW)*HR.shelfPosL);
  var padR=studyW-shelfW-padL;
  var padTop=Math.round((studyH-shelfH)*HR.shelfPosTop);
  var padBot=studyH-shelfH-padTop;

  var roomW=studyW;
  var roomH=studyH;

  var roomEl=document.getElementById('room');
  roomEl.style.left=-padL+'px';
  roomEl.style.top=-padTop+'px';
  roomEl.style.width=roomW+'px';
  roomEl.style.height=roomH+'px';

  // Wall/wainscot/floor
  var wallH=padTop;
  var floorH=padBot;
  var wainscotH=roomH-wallH-floorH;
  var floorTop=wallH+wainscotH;

  document.getElementById('wall').style.cssText+='left:0;top:0;width:'+roomW+'px;height:'+wallH+'px;';
  document.getElementById('wainscot').style.cssText+='left:0;top:'+wallH+'px;width:'+roomW+'px;height:'+wainscotH+'px;';
  document.getElementById('floor').style.cssText+='left:0;top:'+floorTop+'px;width:'+roomW+'px;height:'+floorH+'px;';
  document.getElementById('baseboard').style.cssText+='left:0;top:'+floorTop+'px;width:'+roomW+'px;';

  // Room furniture — scale proportionally to shelf size
  var fs=Math.max(1,shelfW/170);
  var fb=floorH+6;
  document.getElementById('lamp').style.cssText+='right:'+Math.round(padR*0.08)+'px;bottom:'+fb+'px;transform:scale('+fs.toFixed(2)+');transform-origin:bottom right;';
  document.getElementById('plant').style.cssText+='left:'+Math.round(padL*0.15)+'px;bottom:'+fb+'px;transform:scale('+fs.toFixed(2)+');transform-origin:bottom left;';
  document.getElementById('picture').style.cssText+='left:'+Math.round(padL*0.1)+'px;top:'+Math.round(wallH*0.12)+'px;width:50px;height:40px;transform:scale('+fs.toFixed(2)+');transform-origin:top left;';
  document.getElementById('armchair').style.cssText+='right:'+Math.round(padR*0.12)+'px;bottom:'+fb+'px;transform:scale('+fs.toFixed(2)+');transform-origin:bottom right;';
  document.getElementById('side-table').style.cssText+='right:'+Math.round(padR*0.42)+'px;bottom:'+fb+'px;transform:scale('+fs.toFixed(2)+');transform-origin:bottom right;';
  document.getElementById('window-l').style.cssText+='left:'+Math.round(padL*0.12)+'px;top:'+Math.round(wallH*0.06)+'px;transform:scale('+fs.toFixed(2)+');transform-origin:top left;';
  document.getElementById('window-r').style.cssText+='right:'+Math.round(padR*0.1)+'px;top:'+Math.round(wallH*0.06)+'px;transform:scale('+fs.toFixed(2)+');transform-origin:top right;';
  document.getElementById('clock').style.cssText+='right:'+Math.round(padR*0.42)+'px;top:'+Math.round(wallH*0.08)+'px;transform:scale('+fs.toFixed(2)+');transform-origin:top right;';
  document.getElementById('rug').style.cssText+='right:'+Math.round(padR*0.05)+'px;top:'+Math.round(floorTop+8)+'px;width:'+Math.round(padR*0.65)+'px;transform:scaleX('+fs.toFixed(2)+');transform-origin:right top;';
  document.getElementById('floor-cat').style.cssText+='left:'+Math.round(padL*0.35)+'px;bottom:'+fb+'px;transform:scale('+fs.toFixed(2)+');transform-origin:bottom left;';

  // ── House cross-section ── (scaled proportionally)
  var wallThick=Math.max(10,Math.round(studyW*0.014));
  var kitchenW=Math.round(studyW*HR.kitchenFrac);
  var atticH=Math.round(studyH*0.1);
  var roofPeakH=Math.round(studyH*0.2);
  var ceilingH=Math.max(6,Math.round(studyH*0.018));
  var foundH=Math.max(12,Math.round(studyH*0.036));

  // World coordinates (shelf top-left = 0,0)
  var roomLW=-padL;
  var roomRW=-padL+studyW;
  var roomTW=-padTop;
  var roomBW=-padTop+studyH;

  var hInnerL=roomLW-kitchenW-wallThick;
  var hOuterL=hInnerL-wallThick;
  var hOuterR=roomRW+wallThick;
  var hCeilY=roomTW-ceilingH;
  var hAtticTop=hCeilY-atticH;
  var hRoofPeak=hAtticTop-roofPeakH;
  var hFloorY=roomBW;
  var hFdnBot=hFloorY+wallThick+foundH;

  var roofOverhang=Math.round(studyW*0.03);
  var hcL=hOuterL-roofOverhang;
  var hcT=hRoofPeak-5;
  var hcR=hOuterR+roofOverhang;
  var hcB=hFdnBot;
  var hcW=hcR-hcL;
  var hcH=hcB-hcT;

  function hlx(wx){return wx-hcL;}
  function hly(wy){return wy-hcT;}

  document.getElementById('house').style.cssText+='left:'+hcL+'px;top:'+hcT+'px;width:'+hcW+'px;height:'+hcH+'px;';

  // Roof
  var roofH=hly(hAtticTop)-hly(hRoofPeak);
  document.getElementById('roof').style.cssText+='left:0;top:0;width:'+hcW+'px;height:'+(roofH+5)+'px;background:linear-gradient(180deg,#3a3228,#4a4238,#3a3228);clip-path:polygon(50% 0%,0% 100%,100% 100%);';

  // Chimney
  var chimLeft=Math.round(hlx(hOuterL+(hOuterR-hOuterL)*0.72));
  var chimH=Math.round(roofPeakH*0.5);
  var chimW=Math.max(16,Math.round(studyW*0.022));
  document.getElementById('chimney').style.cssText+='left:'+chimLeft+'px;top:'+Math.round(roofH*0.3)+'px;width:'+chimW+'px;height:'+chimH+'px;';

  // Attic
  var atticLocalT=hly(hAtticTop);
  var atticLocalL=hlx(hOuterL+wallThick);
  var atticInnerW=hOuterR-hOuterL-wallThick*2;
  document.getElementById('attic').style.cssText+='left:'+atticLocalL+'px;top:'+atticLocalT+'px;width:'+atticInnerW+'px;height:'+atticH+'px;background:linear-gradient(180deg,#1e1812,#221c14);';
  document.getElementById('attic-box1').style.cssText+='left:'+(atticLocalL+25)+'px;top:'+(atticLocalT+atticH-22)+'px;transform:scale('+Math.max(1,fs*0.6).toFixed(2)+');transform-origin:bottom left;';
  document.getElementById('attic-box2').style.cssText+='left:'+(atticLocalL+65)+'px;top:'+(atticLocalT+atticH-18)+'px;transform:scale('+Math.max(1,fs*0.6).toFixed(2)+');transform-origin:bottom left;';

  // Ceiling beam
  var ceilLocalT=hly(hCeilY);
  document.getElementById('ceiling-beam').style.cssText+='left:'+hlx(hOuterL)+'px;top:'+ceilLocalT+'px;width:'+(hOuterR-hOuterL)+'px;height:'+ceilingH+'px;background:linear-gradient(180deg,#5a4830,#4a3820,#3a2810);';

  // House walls
  var wallsTop=atticLocalT;
  var wallsH=hly(hFloorY+wallThick)-wallsTop;
  document.getElementById('house-wall-l').style.cssText+='left:'+hlx(hOuterL)+'px;top:'+wallsTop+'px;width:'+wallThick+'px;height:'+wallsH+'px;background:linear-gradient(90deg,#4a3828,#5a4838,#4a3828);';
  document.getElementById('house-wall-r').style.cssText+='left:'+hlx(hOuterR-wallThick)+'px;top:'+wallsTop+'px;width:'+wallThick+'px;height:'+wallsH+'px;background:linear-gradient(90deg,#4a3828,#5a4838,#4a3828);';

  // Room divider
  var divLocalL=hlx(roomLW-wallThick);
  var roomsTop=hly(roomTW);
  document.getElementById('room-divider').style.cssText+='left:'+divLocalL+'px;top:'+roomsTop+'px;width:'+wallThick+'px;height:'+roomH+'px;background:linear-gradient(90deg,#4a3828,#5a4838,#4a3828);';

  // Kitchen
  var kLocalL=hlx(hOuterL+wallThick);
  var kLocalT=roomsTop;
  var kH=roomH;
  var kWallH=Math.round(kH*0.22);
  var kFloorH=Math.round(kH*0.18);
  var kWainH=kH-kWallH-kFloorH;
  document.getElementById('kitchen').style.cssText+='left:'+kLocalL+'px;top:'+kLocalT+'px;width:'+kitchenW+'px;height:'+kH+'px;background:linear-gradient(180deg,#2e3828 0%,#2a3424 '+Math.round(kWallH/kH*100)+'%,#38302a '+Math.round(kWallH/kH*100)+'%,#302820 '+Math.round((kWallH+kWainH)/kH*100)+'%,#2a2218 '+Math.round((kWallH+kWainH)/kH*100)+'%,#221c14 100%);';

  var kCounterW=Math.round(kitchenW*0.6);
  var kCounterH=Math.round(kH*0.1);
  document.getElementById('kitchen-counter').style.cssText+='left:'+kLocalL+'px;top:'+(kLocalT+kH-kFloorH-kCounterH)+'px;width:'+kCounterW+'px;height:'+kCounterH+'px;';
  document.getElementById('kitchen-cabinet').style.cssText+='left:'+(kLocalL+20)+'px;top:'+(kLocalT+kWallH+15)+'px;width:'+Math.round(kitchenW*0.4)+'px;height:'+Math.round(kH*0.07)+'px;';
  document.getElementById('kitchen-table').style.cssText+='left:'+(kLocalL+Math.round(kitchenW*0.55))+'px;top:'+(kLocalT+kH-kFloorH-Math.round(kH*0.08))+'px;width:'+Math.round(kitchenW*0.22)+'px;height:'+Math.round(kH*0.08)+'px;';

  // Foundation
  document.getElementById('foundation').style.cssText+='left:'+hlx(hOuterL)+'px;top:'+hly(hFloorY)+'px;width:'+(hOuterR-hOuterL)+'px;height:'+(wallThick+foundH)+'px;background:linear-gradient(180deg,#2a2420,#222018,#1a1810);border-top:3px solid #3a3428;';

  // ── Exterior ── (scaled proportionally)
  var extPad=Math.round(hcW*HR.extPadFrac);
  var ecL=hcL-extPad;
  var ecT=hcT-extPad;
  var ecR=hcR+extPad;
  var ecB=hcB+Math.round(extPad*0.5);
  var ecW=ecR-ecL;
  var ecH=ecB-ecT;

  function elx(wx){return wx-ecL;}
  function ely(wy){return wy-ecT;}

  document.getElementById('exterior').style.cssText+='left:'+ecL+'px;top:'+ecT+'px;width:'+ecW+'px;height:'+ecH+'px;';

  var groundWorldY=hFdnBot;
  var groundLocalY=ely(groundWorldY);

  document.getElementById('sky').style.cssText+='left:0;top:0;width:'+ecW+'px;height:'+groundLocalY+'px;background:linear-gradient(180deg,#080c18 0%,#0e1428 30%,#141c30 60%,#1a2438 100%);';

  var starShadows=[];
  for(var si=0;si<80;si++){
    var sx=Math.round(seeded(si*7+1)*ecW);
    var sy=Math.round(seeded(si*7+3)*groundLocalY*0.8);
    var ss=1+Math.round(seeded(si*7+5)*0.5);
    var sb=(0.2+seeded(si*7+9)*0.5).toFixed(2);
    starShadows.push(sx+'px '+sy+'px 0 '+ss+'px rgba(255,255,240,'+sb+')');
  }
  document.getElementById('stars').style.cssText+='left:0;top:0;width:1px;height:1px;box-shadow:'+starShadows.join(',')+';';

  var moonSize=Math.max(30,Math.round(extPad*0.1));
  document.getElementById('moon').style.cssText+='left:'+Math.round(ecW*0.12)+'px;top:'+Math.round(groundLocalY*0.1)+'px;width:'+moonSize+'px;height:'+moonSize+'px;';

  document.getElementById('ground').style.cssText+='left:0;top:'+(groundLocalY-3)+'px;width:'+ecW+'px;height:'+Math.round(extPad*0.25+3)+'px;background:linear-gradient(180deg,#1e3a1a 0%,#183016 30%,#142810 100%);';
  document.getElementById('ground-dirt').style.cssText+='left:0;top:'+(groundLocalY+Math.round(extPad*0.25))+'px;width:'+ecW+'px;height:'+(ecH-groundLocalY-Math.round(extPad*0.25))+'px;background:linear-gradient(180deg,#1a1e10 0%,#141808 100%);';

  var treeScale=Math.max(1,extPad/300);
  document.getElementById('tree-l').style.cssText+='left:'+Math.round(elx(hOuterL-extPad*0.5))+'px;top:'+(groundLocalY-Math.round(140*treeScale))+'px;width:'+Math.round(80*treeScale)+'px;height:'+Math.round(140*treeScale)+'px;';
  document.getElementById('tree-r').style.cssText+='left:'+Math.round(elx(hOuterR+extPad*0.3))+'px;top:'+(groundLocalY-Math.round(90*treeScale))+'px;width:'+Math.round(55*treeScale)+'px;height:'+Math.round(90*treeScale)+'px;';

  // ── Zoom / Pan ──
  var wrapW=vpEl.offsetWidth;
  var wrapH=vpEl.offsetHeight;
  minZoom=Math.max(0.03,Math.min(wrapW/ecW,wrapH/ecH)*0.85);
  scale=Math.min(wrapW/shelfW,wrapH/shelfH);
  panX=(wrapW-shelfW*scale)/2;
  panY=(wrapH-shelfH*scale)/2;
  applyTransform();
}

// ── Empty shelf with decorations ──
function renderEmptyShelf(){
  container.innerHTML='';
  // Use house-derived shelf target instead of viewport
  var tW=shelfTargetW;
  var tH=shelfTargetH;
  var panelW=12,topH=10,pad=8;
  var shelfPadSide=16;
  var numRows=3;
  var rowChrome=10+3;
  var contentW=tW-panelW*2-pad*2-shelfPadSide*2-8;
  var rowH=Math.floor((tH-topH-pad-20)/numRows);
  var booksH=rowH-rowChrome;

  document.getElementById('book-count').textContent='';

  // Decoration pieces: [row, xPercent, html]
  var decos=[
    // Row 0: dragon, leaning books, globe
    [0,0.06,'<div style="position:relative;width:44px;height:48px;">'
      +'<div style="position:absolute;bottom:0;left:10px;width:22px;height:14px;background:linear-gradient(135deg,#5a7a58,#4a6648);border-radius:10px 5px 3px 7px;"></div>'
      +'<div style="position:absolute;bottom:10px;left:3px;width:7px;height:18px;background:linear-gradient(180deg,#5a7a58,#4a6648);border-radius:3px;transform:rotate(12deg);"></div>'
      +'<div style="position:absolute;bottom:24px;left:-1px;width:11px;height:9px;background:#5a7a58;border-radius:5px 5px 3px 3px;"></div>'
      +'<div style="position:absolute;bottom:29px;left:1px;width:3px;height:3px;background:#7a5a30;border-radius:50%;"></div>'
      +'<div style="position:absolute;bottom:6px;right:1px;width:13px;height:3px;background:#4a6648;border-radius:0 4px 4px 0;transform:rotate(-10deg);"></div>'
      +'<div style="position:absolute;bottom:14px;left:16px;width:15px;height:11px;background:linear-gradient(135deg,#6a8a65,#5a7a58);border-radius:0 12px 2px 0;transform:rotate(-8deg);opacity:0.85;"></div>'
      +'</div>'],
    [0,0.38,'<div style="display:flex;align-items:flex-end;gap:1px;">'
      +'<div style="width:8px;height:38px;background:linear-gradient(90deg,#6a3a3a,#7a4a4a);border-radius:1px;transform:rotate(-3deg);"></div>'
      +'<div style="width:7px;height:42px;background:linear-gradient(90deg,#3a4a6a,#4a5a7a);border-radius:1px;transform:rotate(-1deg);"></div>'
      +'<div style="width:9px;height:36px;background:linear-gradient(90deg,#5a6a3a,#6a7a4a);border-radius:1px;transform:rotate(2deg);"></div>'
      +'<div style="width:4px;height:46px;background:linear-gradient(90deg,#8a7a5a,#7a6a4a);border-radius:1px 1px 0 0;margin-left:1px;"></div>'
      +'</div>'],
    [0,0.78,'<div style="position:relative;width:28px;height:42px;">'
      +'<div style="position:absolute;bottom:0;width:16px;height:5px;background:linear-gradient(180deg,#7a6a4a,#5a4a30);border-radius:1px;left:6px;"></div>'
      +'<div style="position:absolute;bottom:5px;width:4px;height:8px;background:#6a5a3a;left:12px;"></div>'
      +'<div style="position:absolute;bottom:13px;left:4px;width:20px;height:20px;background:linear-gradient(135deg,#4a6a7a,#3a5a6a);border-radius:50%;border:1.5px solid #7a6a4a;"></div>'
      +'<div style="position:absolute;bottom:22px;left:13px;width:12px;height:1.5px;background:rgba(255,255,255,0.15);transform:rotate(-20deg);"></div>'
      +'<div style="position:absolute;bottom:17px;left:14px;width:1.5px;height:12px;background:rgba(255,255,255,0.1);"></div>'
      +'</div>'],

    // Row 1: candle, prompt text, cat
    [1,0.08,'<div style="position:relative;width:20px;height:44px;">'
      +'<div style="position:absolute;bottom:0;left:3px;width:14px;height:5px;background:linear-gradient(180deg,#8a7a5a,#6a5a3a);border-radius:8px/3px;"></div>'
      +'<div style="position:absolute;bottom:5px;left:6px;width:8px;height:28px;background:linear-gradient(180deg,#e8e0d0,#d8d0c0);border-radius:1px;"></div>'
      +'<div style="position:absolute;bottom:34px;left:8px;width:4px;height:7px;background:radial-gradient(ellipse,#f0c040,#e08020 60%,transparent 70%);border-radius:50% 50% 30% 30%;filter:blur(0.5px);"></div>'
      +'</div>'],
    [1,0.5,'<div style="position:relative;width:90px;">'
      +'<div style="background:linear-gradient(180deg,#3a3020,#2e2618);border:1px solid rgba(180,160,120,0.15);border-radius:2px;padding:5px 6px;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.3);">'
      +'<div style="color:rgba(200,180,140,0.5);font-size:5.5px;letter-spacing:0.08em;line-height:1.5;font-family:Georgia,serif;">enter your Goodreads<br>username to build<br>your shelf</div>'
      +'</div>'
      +'<div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:2px;height:8px;background:#2e2618;"></div>'
      +'</div>'],
    [1,0.88,'<div style="position:relative;width:24px;height:34px;">'
      +'<div style="position:absolute;bottom:0;left:4px;width:16px;height:20px;background:linear-gradient(180deg,#3a3a3a,#2a2a2a);border-radius:8px 8px 4px 4px;"></div>'
      +'<div style="position:absolute;bottom:18px;left:5px;width:14px;height:12px;background:linear-gradient(180deg,#3a3a3a,#2a2a2a);border-radius:50%;"></div>'
      +'<div style="position:absolute;bottom:26px;left:5px;width:4px;height:5px;background:#3a3a3a;border-radius:2px 2px 0 0;transform:rotate(-15deg);"></div>'
      +'<div style="position:absolute;bottom:26px;right:5px;width:4px;height:5px;background:#3a3a3a;border-radius:2px 2px 0 0;transform:rotate(15deg);"></div>'
      +'<div style="position:absolute;bottom:4px;right:0;width:10px;height:3px;background:#3a3a3a;border-radius:0 2px 2px 0;transform:rotate(-20deg);"></div>'
      +'<div style="position:absolute;bottom:22px;left:9px;width:2px;height:2px;background:#7a9a6a;border-radius:50%;"></div>'
      +'<div style="position:absolute;bottom:22px;left:13px;width:2px;height:2px;background:#7a9a6a;border-radius:50%;"></div>'
      +'</div>'],

    // Row 2: hourglass, stacked books, small trophy
    [2,0.12,'<div style="position:relative;width:18px;height:40px;">'
      +'<div style="position:absolute;top:0;left:1px;width:16px;height:3px;background:linear-gradient(180deg,#8a7a5a,#6a5a3a);border-radius:1px;"></div>'
      +'<div style="position:absolute;top:3px;left:3px;width:12px;height:15px;background:rgba(180,160,120,0.25);border-radius:0 0 6px 6px;clip-path:polygon(0 0,100% 0,70% 100%,30% 100%);"></div>'
      +'<div style="position:absolute;bottom:3px;left:3px;width:12px;height:15px;background:rgba(180,160,120,0.25);border-radius:6px 6px 0 0;clip-path:polygon(30% 0,70% 0,100% 100%,0 100%);"></div>'
      +'<div style="position:absolute;bottom:8px;left:5px;width:8px;height:5px;background:rgba(200,170,100,0.35);border-radius:0 0 4px 4px;"></div>'
      +'<div style="position:absolute;bottom:0;left:1px;width:16px;height:3px;background:linear-gradient(180deg,#8a7a5a,#6a5a3a);border-radius:1px;"></div>'
      +'</div>'],
    [2,0.5,'<div style="position:relative;width:50px;height:22px;">'
      +'<div style="position:absolute;bottom:0;left:0;width:46px;height:7px;background:linear-gradient(90deg,#5a3a3a,#6a4a4a);border-radius:1px;"></div>'
      +'<div style="position:absolute;bottom:7px;left:3px;width:40px;height:7px;background:linear-gradient(90deg,#3a5a5a,#4a6a6a);border-radius:1px;"></div>'
      +'<div style="position:absolute;bottom:14px;left:8px;width:32px;height:7px;background:linear-gradient(90deg,#5a5a3a,#6a6a4a);border-radius:1px;"></div>'
      +'</div>'],
    [2,0.85,'<div style="position:relative;width:20px;height:36px;">'
      +'<div style="position:absolute;bottom:0;left:4px;width:12px;height:4px;background:linear-gradient(180deg,#8a7a3a,#6a5a2a);border-radius:1px;"></div>'
      +'<div style="position:absolute;bottom:4px;left:7px;width:6px;height:8px;background:#7a6a2a;"></div>'
      +'<div style="position:absolute;bottom:12px;left:2px;width:16px;height:16px;background:linear-gradient(180deg,#a89a3a,#8a7a2a);border-radius:3px 3px 0 0;"></div>'
      +'<div style="position:absolute;bottom:16px;left:5px;width:10px;height:8px;background:linear-gradient(180deg,#b8a84a,#a89a3a);border-radius:50%;"></div>'
      +'</div>']
  ];

  for(var r=0;r<numRows;r++){
    var rowDiv=document.createElement('div');
    rowDiv.style.cssText='position:relative;padding:0 '+shelfPadSide+'px;';

    var booksDiv=document.createElement('div');
    booksDiv.style.cssText='display:flex;align-items:flex-end;min-height:'+booksH+'px;width:'+contentW+'px;padding:0 4px;position:relative;';

    // Place decorations for this row
    decos.forEach(function(d){
      if(d[0]!==r)return;
      var wrap=document.createElement('div');
      wrap.style.cssText='position:absolute;bottom:0;left:'+Math.round(d[1]*contentW)+'px;';
      if(d[1]===0.5&&r===1)wrap.style.cssText='position:absolute;bottom:0;left:50%;transform:translateX(-50%);';
      wrap.innerHTML=d[2];
      booksDiv.appendChild(wrap);
    });

    rowDiv.appendChild(booksDiv);

    var plank=document.createElement('div');
    plank.style.cssText='height:10px;background:linear-gradient(180deg,#8b6914 0%,#a07828 20%,#7a5c18 50%,#6b4e12 80%,#5a4010 100%);border-radius:0 0 2px 2px;box-shadow:0 3px 8px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.1);margin:0 4px;';
    rowDiv.appendChild(plank);
    var edge=document.createElement('div');
    edge.style.cssText='height:3px;background:linear-gradient(180deg,#5a4010,#4a3008);margin:0 4px;border-radius:0 0 3px 3px;box-shadow:0 2px 6px rgba(0,0,0,0.4);';
    rowDiv.appendChild(edge);

    container.appendChild(rowDiv);
  }
  positionFurniture();
}

// ── Goodreads ──
function groupByEra(books){
  var groups={};
  books.forEach(function(b){
    var year=b[0],label;
    if(year<1800)label='Pre-1800';
    else if(year<1900)label='19c';
    else label=Math.floor(year/10)*10+'s';
    if(!groups[label])groups[label]=[];
    groups[label].push(b);
  });
  return Object.keys(groups).sort(function(a,b){
    var ya=a==='Pre-1800'?0:a==='19c'?1800:parseInt(a);
    var yb=b==='Pre-1800'?0:b==='19c'?1800:parseInt(b);
    return ya-yb;
  }).map(function(k){return[k,groups[k]];});
}

function parseRssXml(xmlText){
  var books=[];
  var parser=new DOMParser();
  var doc=parser.parseFromString(xmlText,'text/xml');
  var items=doc.querySelectorAll('item');
  items.forEach(function(item){
    var title=(item.querySelector('title')||{}).textContent||'';
    var desc=(item.querySelector('description')||{}).textContent||'';
    var author=(desc.match(/author:\s*(.+?)(?:<br|$)/)||[])[1]||'';
    var userRating=parseInt((desc.match(/(?:^|\n)\s*rating:\s*(\d+)/)||[])[1])||0;
    var avgRating=parseFloat((desc.match(/average rating:\s*([\d.]+)/)||[])[1])||0;
    var pubYear=parseInt((desc.match(/book published:\s*(\d+)/)||[])[1])||0;
    if(!title)return;
    title=title.replace(/\s*\([^)]*\)\s*$/,'');
    author=author.trim();
    if(userRating===0)userRating=Math.round(avgRating)||3;
    if(pubYear===0)pubYear=2000;
    books.push([pubYear,userRating,avgRating,author,title]);
  });
  return books;
}

function resolveUserId(input,callback,onerror){
  if(/^\d+$/.test(input)){callback(input);return;}
  var m=input.match(/\/show\/(\d+)/)||input.match(/\/(\d+)[\-\.]/);
  if(m){callback(m[1]);return;}
  var username=input.replace(/^https?:\/\/(www\.)?goodreads\.com\/?/,'').replace(/\/$/,'');
  var proxy='https://corsproxy.io/?url='+encodeURIComponent('https://www.goodreads.com/'+username);
  fetch(proxy)
    .then(function(r){
      if(!r.ok)throw new Error('Profile not found');
      return r.text();
    })
    .then(function(html){
      var im=html.match(/\/user\/show\/(\d+)/)||html.match(/list_rss\/(\d+)/);
      if(!im)throw new Error('Could not find user ID on profile page');
      callback(im[1]);
    })
    .catch(onerror);
}

function loadGoodreads(input){
  if(!input)return;
  var btn=document.getElementById('gr-btn');
  btn.textContent='Loading\u2026';
  btn.disabled=true;
  function done(){btn.textContent='Load shelf';btn.disabled=false;}

  resolveUserId(input,function(userId){
    var allBooks=[];
    var perPage=200;
    var maxPage=50;
    function fetchPage(page){
      var rssUrl='https://www.goodreads.com/review/list_rss/'+userId+'?shelf=read&per_page='+perPage+'&page='+page;
      var proxy='https://corsproxy.io/?url='+encodeURIComponent(rssUrl);
      fetch(proxy)
        .then(function(r){
          if(!r.ok)throw new Error('Failed to fetch page '+page);
          return r.text();
        })
        .then(function(xml){
          var books=parseRssXml(xml);
          allBooks=allBooks.concat(books);
          btn.textContent='Loading\u2026 '+allBooks.length+' books';
          if(books.length>0&&page<maxPage){
            setTimeout(function(){fetchPage(page+1);},500);
          }else{
            if(allBooks.length===0){
              alert('No books found. Make sure the profile is public.');
              done();return;
            }
            allBooks.sort(function(a,b){return a[0]-b[0];});
            renderShelf(groupByEra(allBooks));
            history.replaceState(null,'',location.pathname+'?u='+userId);
            document.getElementById('share-btn').style.display='';
            done();
          }
        }).catch(function(err){alert('Failed to load: '+err.message);done();});
    }
    fetchPage(1);
  },function(err){alert('Could not find user: '+err.message);done();});
}

// ── Events ──
document.addEventListener('mousemove',function(e){
  var el=e.target.closest('.book');
  if(el){
    var d=el.dataset;
    var diff=(d.m-d.g).toFixed(2),s=diff>=0?'+':'';
    tip.innerHTML='<div style="font-weight:500;font-size:13px">'+d.t+'</div><div style="opacity:0.5;font-size:11px;margin-top:2px">'+d.a+', '+d.y+'</div><div style="margin-top:6px;font-size:11px">\u2605'+d.m+' \u00b7 Crowd: '+d.g+' \u00b7 Gap: '+s+diff+'</div>';
    tip.style.display='block';
    tip.style.left=Math.min(e.clientX+14,innerWidth-260)+'px';
    tip.style.top=(e.clientY-80)+'px';
  }else tip.style.display='none';
});

document.getElementById('search').addEventListener('input',function(){
  var q=this.value.toLowerCase().trim();
  var allBooks=document.querySelectorAll('.book');
  if(!q){allBooks.forEach(function(b){b.style.opacity='';b.style.filter='';});return;}
  allBooks.forEach(function(b){
    var a=(b.dataset.a||'').toLowerCase();
    var t=(b.dataset.t||'').toLowerCase();
    if(a.indexOf(q)>-1||t.indexOf(q)>-1){b.style.opacity='1';b.style.filter='none';}
    else{b.style.opacity='0.12';b.style.filter='grayscale(1)';}
  });
});

vpEl.addEventListener('wheel',function(e){
  e.preventDefault();
  var rect=vpEl.getBoundingClientRect();
  var mx=e.clientX-rect.left;
  var my=e.clientY-rect.top;
  var old=scale;
  scale=Math.max(minZoom,Math.min(10,scale*(e.deltaY>0?0.92:1.08)));
  panX=mx-(mx-panX)*(scale/old);
  panY=my-(my-panY)*(scale/old);
  applyTransform();
},{passive:false});

var dragging=false,dsx,dsy,psx,psy;
vpEl.addEventListener('mousedown',function(e){
  if(e.target.tagName==='INPUT'||e.target.tagName==='BUTTON')return;
  dragging=true;dsx=e.clientX;dsy=e.clientY;psx=panX;psy=panY;
  vpEl.style.cursor='grabbing';
});
window.addEventListener('mousemove',function(e){
  if(!dragging)return;
  panX=psx+(e.clientX-dsx);panY=psy+(e.clientY-dsy);
  applyTransform();
});
window.addEventListener('mouseup',function(){dragging=false;vpEl.style.cursor='grab';});

document.getElementById('gr-btn').addEventListener('click',function(){
  loadGoodreads(document.getElementById('gr-input').value.trim());
});
document.getElementById('gr-input').addEventListener('keydown',function(e){
  if(e.key==='Enter')loadGoodreads(this.value.trim());
});

document.getElementById('share-btn').addEventListener('click',function(){
  navigator.clipboard.writeText(location.href).then(function(){
    var btn=document.getElementById('share-btn');
    btn.textContent='Copied!';
    setTimeout(function(){btn.textContent='Copy link';},1500);
  });
});

// ── Init ──
requestAnimationFrame(function(){
  var params=new URLSearchParams(location.search);
  var uid=params.get('u');
  if(uid){
    document.getElementById('gr-input').value=uid;
    loadGoodreads(uid);
  }else{
    renderEmptyShelf();
  }
});
