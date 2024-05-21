(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(":root{--megajackpot-bar-height: 35px;--megajackpot-button-color: #fad05e;--megajackpot-bg-color: rgb(16, 4, 124);--megajackpot-bg2-color: rgb(27, 12, 165)}.megajackpot-bar{position:absolute;bottom:0;height:var(--megajackpot-bar-height);width:100%;max-width:100vw;z-index:2;display:flex;justify-content:space-between;overflow:hidden;font-family:sans-serif;box-shadow:0 0 10px #0006;font-size:16px}@keyframes data-section-animation{0%{transform:translateY(0)}25%{transform:translateY(-35px)}50%{transform:translateY(-70px)}75%{transform:translateY(-105px)}to{transform:translateY(-140px)}}.megajackpot-data-section{width:-moz-fit-content;width:fit-content;height:35px;padding-left:10px;animation:data-section-animation 10s cubic-bezier(.9,0,.1,1) infinite}@keyframes megajackpot-label-first-child-animation{0%{opacity:1;transform:translateY(0)}50%{opacity:1;transform:translateY(0)}51%{opacity:0}60%{opacity:0;transform:translateY(140px)}61%{opacity:1}to{transform:translateY(140px)}}.megajackpot-data-label{width:100%;height:100%;text-align:center;display:flex;align-items:center;justify-content:center;font-size:16px;color:#fff}.megajackpot-data-label:first-child{animation:megajackpot-label-first-child-animation 10s cubic-bezier(.9,0,.1,1) infinite}.megajackpot-data-label-text{margin-right:5px;color:#fff}.megajackpot-other-win-bar-section{width:-moz-fit-content;width:fit-content;height:35px;padding-left:10px}.megajackpot-other-win-data-label{width:100%;height:100%;text-align:center;display:flex;align-items:center;justify-content:center;font-size:16px;color:#fff}.megajackpot-other-win-data-text{margin-right:5px;color:#fff}.megajackpot-opt-graphic-image{min-width:0;min-height:0;max-height:35px;-o-object-fit:contain;object-fit:contain}.megajackpot-opt-button{background:none;display:flex;align-items:center;height:100%;border:none;padding:0 10px;font-weight:700;cursor:pointer}.megajackpot-opt-button>img{height:13px}.megajackpot-opt-button>*:not(last-child){margin-right:5px}.megajackpot-opt-button>span{font-weight:700;color:var(--megajackpot-button-color);font-size:16px;text-transform:uppercase;line-height:13px}.megajackpot-dialog-backdrop{position:absolute;top:0;left:0;height:100vh;width:100vw;background-color:#0006;z-index:50;pointer-events:none;opacity:0;transition:opacity .3s ease-in-out}.megajackpot-dialog-backdrop.open{pointer-events:initial;opacity:1}.megajackpot-dialog{z-index:51;background-color:var(--megajackpot-bg-color);font-family:sans-serif;font-size:16px;color:#fff;border-radius:10px;border:0;overflow-y:auto;box-shadow:0 4px 8px #0003;position:absolute;left:50%;bottom:var(--megajackpot-bar-height);max-height:calc(100vh - var(--megajackpot-bar-height));width:100vw;max-width:500px;transform:translate(-50%,calc(100% + var(--megajackpot-bar-height)));transition:transform .3s ease-in-out}.megajackpot-dialog.open{transform:translate(-50%)}.megajackpot-dialog-header{height:40px;display:flex;justify-content:center;position:relative}.megajackpot-dialog-close-button{color:#fff;position:absolute;right:0;font-size:20px;background:#0000;border:0;padding:5px 10px;cursor:pointer;font-weight:700;margin-bottom:20px}.megajackpot-dialog-content>section{padding:13px 25px}.megajackpot-dialog-content>section:first-child{background-color:var(--megajackpot-bg2-color)}.megajackpot-dialog-content h1{margin:0 0 5px;text-align:center;text-transform:uppercase;font-weight:600}.megajackpot-dialog-content h2{margin:0;font-weight:500;text-align:center;text-transform:uppercase;font-size:16px}.megajackpot-dialog-content p{margin:0;text-align:center}.megajackpot-dialog-content ol{list-style-position:inside;padding-left:0;margin-bottom:10px}.megajackpot-dialog-content ol>li:not(first-child){margin-top:15px}.megajackpot-dialog-content button{display:block;margin:25px auto 20px;background:var(--megajackpot-bg-color);padding:7px 12px;border:2px solid var(--megajackpot-button-color);border-radius:5px;cursor:pointer;font-weight:700;color:var(--megajackpot-button-color);font-size:16px;text-transform:uppercase;transition:background-color .2s ease-in-out}.megajackpot-dialog-content button:hover{background:var(--megajackpot-bg2-color)}.megajackpot-other-player-won-dialog{position:fixed;top:0;left:50%;transform:translate(-50%,-100%);visibility:hidden;transition:transform .5s ease-in-out;background-color:transparent;text-align:center;color:#fff;padding:0 20px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;width:80%;max-width:600px;box-sizing:border-box}.megajackpot-other-player-won-img{min-width:0;min-height:0;max-height:35px;-o-object-fit:contain;object-fit:contain}.megajackpot-other-player-won-dialog-content{position:relative;padding:20px 0}.megajackpot-other-player-won-bg-img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:auto;z-index:-1}.megajackpot-header{position:relative;padding:5px 10px;height:auto;background-repeat:no-repeat;background-position:center center;background-size:cover;color:#fff;font-size:1.5rem;line-height:1.2;display:flex;align-items:center;justify-content:center;text-align:center;box-sizing:border-box}@media (max-width: 600px){.megajackpot-other-win-dialog{width:90%;padding:0 10px}.megajackpot-header{font-size:1.2rem;padding:5px}}.megajackpot-player-win-dialog{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:60;display:flex;align-items:center;justify-content:center;background:#000c;transition:opacity .3s ease-in-out}.megajackpot-player-win-dialog.hidden{pointer-events:none;opacity:0}.megajackpot-player-win-dialog>div{width:100vw;max-width:700px;padding:30px}.megajackpot-player-win-gfx{width:100%;padding-top:75%;position:relative}.megajackpot-player-win-gfx>*{position:absolute;top:50%;left:50%;width:100%;transform:translate(-50%,-50%) scale(1);transition:transform .4s cubic-bezier(.68,-.55,.265,1.55)}.hidden .megajackpot-player-win-gfx>*{transform:translate(-50%,-50%) scale(0)}@keyframes megajackpot-breathe-animation{50%{opacity:.2}}.megajackpot-player-win-glow{width:123%;animation:megajackpot-breathe-animation 5s infinite}@keyframes megajackpot-scroll-bg-animation{0%{background-position-y:0%}to{background-position-y:400%}}.megajackpot-player-win-coins{background-repeat:repeat-y;background-size:contain;background-position-x:0;background-position-y:0;height:130%;animation:megajackpot-scroll-bg-animation 5s linear infinite;-webkit-mask:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,1) 20%,rgba(0,0,0,1) 50%,rgba(0,0,0,1) 80%,rgba(0,0,0,0) 100%) 100% 50% / 100% 100% repeat-x;mask:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,1) 20%,rgba(0,0,0,1) 50%,rgba(0,0,0,1) 80%,rgba(0,0,0,0) 100%) 100% 50% / 100% 100% repeat-x}.megajackpot-player-win-jackpot{top:25%}.megajackpot-player-win-heading{top:48%;height:30%;width:auto}.megajackpot-player-win-amount{top:75%;background-repeat:no-repeat;background-size:cover;background-position:center;width:80%;height:18%;display:flex;align-items:center;justify-content:center}.megajackpot-player-win-amount>span{font-size:46px;font-weight:700;color:#fff;opacity:.8}@media only screen and (max-width: 650px){.megajackpot-player-win-amount>span{font-size:36px}}@media only screen and (max-width: 600px){.megajackpot-player-win-amount>span{font-size:30px}}@media only screen and (max-width: 550px){.megajackpot-player-win-amount>span{font-size:24px}}@media only screen and (max-width: 500px){.megajackpot-player-win-amount>span{font-size:20px}}.megajackpot-player-win-btn{margin:100px auto 0;display:block;background:none;background-repeat:no-repeat;background-position:center;background-size:contain;border:none;width:174px;height:44px;cursor:pointer}")),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
function E(t, a, n, o, l, c) {
  const s = {
    1: 0,
    100: 2,
    1e5: 5
  }, r = t < 0, i = Math.abs(t).toString().padStart(3, "0"), p = c === 1e5 && i.length >= 6, m = p ? s[c] : 2, d = i.substring(0, i.length - m), g = i.substr(i.length - m, 2);
  let u = d.length, h = "";
  for (; (u -= 3) > 0; )
    h = `${o}${d.substr(u, 3)}${h}`;
  return `${r ? "-" : ""}${a}${d.substr(0, u + 3)}${h}${g === "00" ? "" : l + g}${p ? "k" : ""}${n}`;
}
function y(t) {
  return t.replace(/\\u([\dA-F]{4})/gi, (a, n) => String.fromCharCode(parseInt(n, 16)));
}
async function w(t, a) {
  const n = t.apiUrl + "/feed/jackpotdata?operator=" + t.operator + "&player=" + t.player + "&hash=" + t.hash + (a ? "&timestamp=" + a : ""), o = await fetch(n);
  if (o.ok)
    return await o.json();
  throw new Error("Failed to get jackpot data, status = " + o.status);
}
async function b(t, a) {
  const n = a.apiUrl + (t ? "/api/optout?operator=" : "/api/optin?operator=") + a.operator + "&player=" + a.player + "&hash=" + a.hash, o = await fetch(n);
  if (!o.ok)
    throw new Error("Failed to opt in/out, status = " + o.status);
}
const f = {
  getJackpotData: w,
  optInOut: b
};
function k(t) {
  return new Promise((a) => {
    setTimeout(a, t);
  });
}
async function x(t, a) {
  const n = new AbortController();
  await Promise.any([
    new Promise((o) => {
      const l = () => o();
      t.addEventListener("click", l), n.signal.addEventListener("abort", () => {
        t.removeEventListener("click", l);
      });
    }),
    k(a)
  ]), n.abort();
}
const e = {
  elements: {},
  optin: !1,
  config: {},
  currencyPrefix: "",
  currencySuffix: "",
  currencyGrouping: "",
  textTranslations: {},
  buyInAmount: 0,
  previousTimestamp: null,
  velocityInterval: null,
  otherWinQueue: [],
  formatCurrency: function(t) {
    return E(t, e.currencyPrefix, e.currencySuffix, e.currencyGrouping, e.config.currencyDetails.decimal, e.config.currencyDetails.precision);
  },
  updateValues: function(t, a, n, o) {
    e.elements.miniValueLabel.innerText = e.formatCurrency(t), e.elements.minorValueLabel.innerText = e.formatCurrency(a), e.elements.majorValueLabel.innerText = e.formatCurrency(n), e.elements.megaValueLabel.innerText = e.formatCurrency(o);
  },
  async fetchLanguage() {
    await fetch(`${e.config.assetsUrl}/translations/${e.config.language.toLowerCase()}.json`).then((t) => t.json()).then((t) => {
      e.textTranslations = t;
    });
  },
  replaceTextTokens: function(t) {
    return t.replaceAll("{buyInAmount}", e.formatCurrency(e.buyInAmount));
  },
  applyStyling: function(t) {
    e.elements.optinImage.src = t ? e.config.assetsUrl + "/mjp-opt-out-graphic.png" : e.config.assetsUrl + "/mjp-opt-in-graphic.png", e.elements.optinBar.style.backgroundImage = t ? "url(" + e.config.assetsUrl + "/mjp-opt-out-base.png)" : "url(" + e.config.assetsUrl + "/mjp-opt-in-base.png)", e.elements.optinBar.style.alignItems = t ? "end" : "start", e.elements.optinButtonLabel.textContent = t ? e.textTranslations.optOut : e.textTranslations.optIn, e.elements.dialogTitle.textContent = e.replaceTextTokens(t ? e.textTranslations.dialogTitleOptOut : e.textTranslations.dialogTitleOptIn), e.elements.dialogText.textContent = e.replaceTextTokens(t ? e.textTranslations.dialogTextOptOut : e.textTranslations.dialogTextOptIn), e.elements.dialogRules.style.display = t ? "none" : "block", e.elements.optInOutButtonConfirm.textContent = t ? e.textTranslations.optOut : e.textTranslations.optIn;
  },
  constructMegaJackpotBar: function() {
    const t = document.createElement("div");
    t.className = "megajackpot-bar", e.config.containerElement.appendChild(t), e.elements.optinBar = t;
    const a = document.createElement("img");
    a.className = "megajackpot-opt-graphic-image", t.appendChild(a), e.elements.optinImage = a;
    const n = document.createElement("section");
    n.className = "megajackpot-other-win-bar-section", n.style.display = "none";
    const o = document.createElement("div");
    o.className = "megajackpot-other-win-data-label", n.appendChild(o);
    const l = document.createElement("b");
    l.className = "megajackpot-other-win-data-text";
    const c = document.createElement("span");
    o.appendChild(l), o.appendChild(c), t.appendChild(n), e.elements.dataSectionOtherPlayerWin = n, e.elements.otherPlayerWonLabel = c;
    const s = document.createElement("section");
    s.className = "megajackpot-data-section", t.appendChild(s), e.elements.dataSection = s;
    const r = (d) => {
      const g = document.createElement("div");
      g.className = "megajackpot-data-label", s.appendChild(g);
      const u = document.createElement("b");
      u.textContent = d, u.className = "megajackpot-data-label-text";
      const h = document.createElement("span");
      return g.appendChild(u), g.appendChild(h), h;
    };
    e.elements.miniValueLabel = r(e.textTranslations.mini), e.elements.minorValueLabel = r(e.textTranslations.minor), e.elements.majorValueLabel = r(e.textTranslations.major), e.elements.megaValueLabel = r(e.textTranslations.mega);
    const i = document.createElement("button");
    i.className = "megajackpot-opt-button", t.appendChild(i);
    const p = document.createElement("img");
    p.src = e.config.assetsUrl + "/mjp-info-icon.png", i.appendChild(p);
    const m = document.createElement("span");
    i.appendChild(m), e.elements.optinButtonLabel = m, e.elements.optinButton = i, e.elements.optinButton.addEventListener("click", e.showDialog);
  },
  constructDialog: function() {
    const t = document.createElement("div");
    t.className = "megajackpot-dialog-backdrop", e.config.containerElement.appendChild(t);
    const a = document.createElement("div");
    a.className = "megajackpot-dialog";
    const n = document.createElement("div");
    n.className = "megajackpot-dialog-header", a.appendChild(n);
    const o = document.createElement("img");
    o.src = e.config.assetsUrl + "/mjp-opt-in-graphic.png", n.appendChild(o);
    const l = document.createElement("button");
    l.textContent = "✕", l.className = "megajackpot-dialog-close-button", n.appendChild(l);
    const c = document.createElement("div");
    c.className = "megajackpot-dialog-content", a.appendChild(c);
    const s = document.createElement("section");
    c.appendChild(s);
    const r = document.createElement("h1");
    r.textContent = e.textTranslations.dialogTitleOptIn, s.appendChild(r);
    const i = document.createElement("p");
    i.textContent = e.textTranslations.dialogTextOptIn, s.appendChild(i);
    const p = document.createElement("section");
    c.appendChild(p);
    const m = document.createElement("div");
    p.appendChild(m);
    const d = document.createElement("h2");
    d.textContent = e.textTranslations.dialogRulesTitle, m.appendChild(d);
    const g = document.createElement("ol");
    e.textTranslations.dialogRules.forEach((h) => {
      const C = document.createElement("li");
      C.textContent = e.replaceTextTokens(h), g.appendChild(C);
    }), m.appendChild(g);
    const u = document.createElement("button");
    u.textContent = e.textTranslations.optIn, p.appendChild(u), e.elements.optInOutButtonConfirm = u, e.config.containerElement.appendChild(a), e.elements.dialogBackdrop = t, e.elements.dialog = a, e.elements.dialogTitle = r, e.elements.dialogText = i, e.elements.dialogRules = m, l.addEventListener("click", () => e.hideDialog()), t.addEventListener("click", () => e.hideDialog());
  },
  constructOtherPlayerWonDialog: function() {
    let t = document.createElement("div");
    t.className = "megajackpot-other-player-won-dialog";
    let a = document.createElement("img");
    a.src = e.config.assetsUrl + "/mjp-opt-in-graphic.png", a.className = "megajackpot-other-player-won-img", t.appendChild(a);
    let n = document.createElement("div");
    n.className = "megajackpot-other-player-won-dialog-content", t.appendChild(n);
    let o = document.createElement("img");
    o.src = e.config.assetsUrl + "/win/Jackpot_WIN2_0003_Winning_amount.png", o.className = "megajackpot-other-player-won-bg-img", n.appendChild(o);
    let l = document.createElement("h1");
    l.className = "megajackpot-header", n.appendChild(l), e.config.containerElement.appendChild(t), e.elements.otherPlayerWonDialogTitle = l, e.elements.otherPlayerWonDialog = t;
  },
  constructPlayerWinDialog: function() {
    const t = document.createElement("div");
    t.className = "megajackpot-player-win-dialog hidden";
    const a = document.createElement("div");
    t.appendChild(a);
    const n = document.createElement("div");
    n.className = "megajackpot-player-win-gfx", a.appendChild(n);
    const o = document.createElement("img");
    o.className = "megajackpot-player-win-glow", o.src = e.config.assetsUrl + "/win/Jackpot_WIN2_0000s_0004_Glow-copy.png", n.appendChild(o);
    const l = document.createElement("div");
    l.className = "megajackpot-player-win-coins", l.style.backgroundImage = `url(${e.config.assetsUrl}/win/Jackpot_WIN2_0000s_0003_Coins.png)`, n.appendChild(l);
    const c = document.createElement("img");
    c.className = "megajackpot-player-win-base", c.src = e.config.assetsUrl + "/win/Jackpot_WIN2_0000s_0002_Base.png", n.appendChild(c);
    const s = document.createElement("img");
    s.className = "megajackpot-player-win-sprinkles", s.src = e.config.assetsUrl + "/win/Jackpot_WIN2_0000s_0001_Sprinkles.png", n.appendChild(s);
    const r = document.createElement("img");
    r.className = "megajackpot-player-win-jackpot", r.src = e.config.assetsUrl + "/win/Jackpot_WIN2_0000s_0000_Jackpot.png", n.appendChild(r);
    const i = document.createElement("img");
    i.className = "megajackpot-player-win-heading", i.src = e.config.assetsUrl + "/win/Jackpot_WIN2_0000_MEGA.png", n.appendChild(i);
    const p = document.createElement("div");
    p.className = "megajackpot-player-win-amount", p.style.backgroundImage = `url(${e.config.assetsUrl + "/win/Jackpot_WIN2_0003_Winning_amount.png"})`, n.appendChild(p);
    const m = document.createElement("span");
    m.textContent = e.formatCurrency(1e5), p.appendChild(m);
    const d = document.createElement("button");
    d.className = "megajackpot-player-win-btn", d.style.backgroundImage = `url(${e.config.assetsUrl + "/win/Jackpot_WIN2_0002_CLOSE.png"})`, a.appendChild(d), d.addEventListener("click", () => e.hidePlayerWinDialog()), e.config.containerElement.appendChild(t), e.elements.playerWinDialog = t, e.elements.playerWinDialogAmount = m;
  },
  showOtherPlayerWonBar: async function(t, a) {
    e.elements.dataSectionOtherPlayerWin.style.display = "block", e.elements.dataSection.style.display = "none", e.elements.otherPlayerWonLabel.innerText = e.textTranslations.dialogOtherPlayerWonTitle.replaceAll("{jackpotSize}", t).replaceAll("{jackpotAmount}", e.formatCurrency(a)), await k(5e3), e.elements.dataSection.style.display = "block", e.elements.dataSectionOtherPlayerWin.style.display = "none";
  },
  showOtherPlayerWonDialog: async function(t, a) {
    const n = e.elements.otherPlayerWonDialog;
    e.elements.otherPlayerWonDialogTitle.textContent = e.textTranslations.dialogOtherPlayerWonTitle.replaceAll("{jackpotSize}", t).replaceAll("{jackpotAmount}", e.formatCurrency(a)), n.style.transform = "translate(-50%, 0)", n.style.visibility = "visible", await x(n, 5e3), n.style.transform = "translate(-50%, -100%)", await k(500);
  },
  showDialog: function() {
    e.elements.dialogBackdrop.classList.add("open"), e.elements.dialog.classList.add("open");
  },
  hideDialog: function() {
    e.elements.dialogBackdrop.classList.remove("open"), e.elements.dialog.classList.remove("open");
  },
  showPlayerWinDialog: function(t) {
    e.elements.playerWinDialogAmount.textContent = e.formatCurrency(t), e.elements.playerWinDialog.classList.remove("hidden");
  },
  hidePlayerWinDialog: function() {
    e.elements.playerWinDialog.classList.add("hidden");
  },
  checkForWinners: async function() {
    for (; e.otherWinQueue.length > 0; ) {
      const t = e.otherWinQueue.shift();
      await Promise.all([
        e.showOtherPlayerWonDialog(t.poolName, t.amount),
        e.showOtherPlayerWonBar(t.poolName, t.amount)
      ]);
    }
    setTimeout(e.checkForWinners, 1e3);
  },
  applyJackpotData: function(t) {
    e.previousTimestamp = t.timestamp, e.optin = t.player.isOptedIn, e.buyInAmount = t.player.buyInAmount, e.applyStyling(e.optin);
    let { MINI_VALUE: a, MINOR_VALUE: n, MAJOR_VALUE: o, MEGA_VALUE: l } = t.jackpots;
    e.updateValues(a, n, o, l), e.velocityInterval && clearInterval(e.velocityInterval), e.velocityInterval = setInterval(() => {
      a += t.jackpots.MINI_VELOCITY, n += t.jackpots.MINOR_VELOCITY, o += t.jackpots.MAJOR_VELOCITY, l += t.jackpots.MEGA_VELOCITY, e.updateValues(a, n, o, l);
    }, 1e3), t.winner && e.showPlayerWinDialog(t.winner.amount), t.winnings && e.otherWinQueue.push(...t.winnings);
  },
  fetchNewJackpotData: async function() {
    try {
      const t = await f.getJackpotData(e.config, e.previousTimestamp);
      e.applyJackpotData(t);
    } catch (t) {
      console.error("Error fetching new jackpot data:", t);
    }
  },
  init: async function(t) {
    e.config = t, e.currencyPrefix = y(e.config.currencyDetails.prefix), e.currencySuffix = y(e.config.currencyDetails.suffix), e.currencyGrouping = y(e.config.currencyDetails.grouping);
    try {
      await e.fetchLanguage();
      const a = await f.getJackpotData(e.config, null);
      e.constructMegaJackpotBar(), e.constructDialog(), e.constructOtherPlayerWonDialog(), e.constructPlayerWinDialog(), e.applyJackpotData(a), e.elements.optInOutButtonConfirm.addEventListener("click", async () => {
        try {
          await f.optInOut(e.optin, e.config), e.optin = !e.optin, e.applyStyling(e.optin);
        } catch (n) {
          console.error("Error opting in/out:", n);
        }
      });
    } catch (a) {
      console.error("Error fetching jackpot data during initialization:", a);
    }
    setInterval(() => {
      e.fetchNewJackpotData();
    }, 15e3), setTimeout(e.checkForWinners, 1e3);
  }
};
export {
  e as default
};
