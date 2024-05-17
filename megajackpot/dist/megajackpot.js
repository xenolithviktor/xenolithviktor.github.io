(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(":root{--megajackpot-bar-height: 35px;--megajackpot-button-color: #fad05e;--megajackpot-bg-color: rgb(16, 4, 124);--megajackpot-bg2-color: rgb(27, 12, 165)}.megajackpot-bar{height:var(--megajackpot-bar-height);max-width:100vw;z-index:2;display:flex;justify-content:space-between;overflow:hidden;font-family:sans-serif;box-shadow:0 0 10px #0006;font-size:16px}@keyframes data-section-animation{0%{transform:translateY(0)}25%{transform:translateY(-35px)}50%{transform:translateY(-70px)}75%{transform:translateY(-105px)}to{transform:translateY(-140px)}}.megajackpot-data-section{width:fit-content;height:35px;padding-left:10px;color:#fff;animation:data-section-animation 10s cubic-bezier(.9,0,.1,1) infinite}@keyframes megajackpot-label-first-child-animation{0%{opacity:1;transform:translateY(0)}50%{opacity:1;transform:translateY(0)}51%{opacity:0}60%{opacity:0;transform:translateY(140px)}61%{opacity:1}to{transform:translateY(140px)}}.megajackpot-data-label{width:100%;height:100%;text-align:center;display:flex;align-items:center;justify-content:center;font-size:16px}.megajackpot-data-label:first-child{animation:megajackpot-label-first-child-animation 10s cubic-bezier(.9,0,.1,1) infinite}.megajackpot-data-label-text{margin-right:5px}.megajackpot-opt-graphic-image{min-width:0;min-height:0;max-height:35px;object-fit:contain}.megajackpot-opt-button{background:none;display:flex;align-items:center;height:100%;border:none;padding:0 10px;font-weight:700;cursor:pointer}.megajackpot-opt-button>img{height:13px}.megajackpot-opt-button>*:not(last-child){margin-right:5px}.megajackpot-opt-button>span{font-weight:700;color:var(--megajackpot-button-color);font-size:16px;text-transform:uppercase;line-height:13px}.megajackpot-dialog-backdrop{position:absolute;top:0;left:0;height:100vh;width:100vw;background-color:#0006;z-index:50;pointer-events:none;opacity:0;transition:opacity .3s ease-in-out}.megajackpot-dialog-backdrop.open{pointer-events:initial;opacity:1}.megajackpot-dialog{z-index:51;background-color:var(--megajackpot-bg-color);font-family:sans-serif;font-size:16px;color:#fff;border-radius:10px;border:0;overflow-y:auto;box-shadow:0 4px 8px #0003;position:absolute;left:50%;bottom:var(--megajackpot-bar-height);max-height:calc(100vh - var(--megajackpot-bar-height));width:100vw;max-width:500px;transform:translate(-50%,calc(100% + var(--megajackpot-bar-height)));transition:transform .3s ease-in-out}.megajackpot-dialog.open{transform:translate(-50%)}.megajackpot-dialog-header{height:40px;display:flex;justify-content:center;position:relative}.megajackpot-dialog-close-button{color:#fff;position:absolute;right:0;font-size:20px;background:#0000;border:0;padding:5px 10px;cursor:pointer;font-weight:700;margin-bottom:20px}.megajackpot-dialog-content>section{padding:13px 25px}.megajackpot-dialog-content>section:first-child{background-color:var(--megajackpot-bg2-color)}.megajackpot-dialog-content h1{margin:0 0 5px;text-align:center;text-transform:uppercase;font-weight:600}.megajackpot-dialog-content h2{margin:0;font-weight:500;text-align:center;text-transform:uppercase;font-size:16px}.megajackpot-dialog-content p{margin:0;text-align:center}.megajackpot-dialog-content ol{list-style-position:inside;padding-left:0;margin-bottom:10px}.megajackpot-dialog-content ol>li:not(first-child){margin-top:15px}.megajackpot-dialog-content button{display:block;margin:25px auto 20px;background:var(--megajackpot-bg-color);padding:7px 12px;border:2px solid var(--megajackpot-button-color);border-radius:5px;cursor:pointer;font-weight:700;color:var(--megajackpot-button-color);font-size:16px;text-transform:uppercase;transition:background-color .2s ease-in-out}.megajackpot-dialog-content button:hover{background:var(--megajackpot-bg2-color)}")),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
const e = {
  elements: {},
  optin: !1,
  config: {},
  currencyPrefix: "",
  currencySuffix: "",
  currencyGrouping: "",
  textTranslations: {},
  buyInAmount: 0,
  currencyFormatter: function(t, l, n, a, o, c) {
    const i = {
      1: 0,
      100: 2,
      1e5: 5
    }, r = t < 0, s = Math.abs(t).toString().padStart(3, "0"), p = c === 1e5 && s.length >= 6, u = p ? i[c] : 2, m = s.substring(0, s.length - u), g = s.slice(-u);
    let d = m.length, f = "";
    for (; (d -= 3) > 0; )
      f = `${a}${m.substr(d, 3)}${f}`;
    return `${r ? "-" : ""}${l}${m.substr(0, d + 3)}${f}${g === "00" ? "" : o + g}${p ? "k" : ""}${n}`;
  },
  unicodeToChar: function(t) {
    return t.replace(/\\u([\dA-F]{4})/gi, (l, n) => String.fromCharCode(parseInt(n, 16)));
  },
  formatCurrency: function(t) {
    return e.currencyFormatter(t, e.currencyPrefix, e.currencySuffix, e.currencyGrouping, e.config.currencyDetails.decimal, e.config.currencyDetails.precision);
  },
  updateValues: function(t, l, n, a) {
    e.elements.miniValueLabel.innerText = e.formatCurrency(t), e.elements.minorValueLabel.innerText = e.formatCurrency(l), e.elements.majorValueLabel.innerText = e.formatCurrency(n), e.elements.megaValueLabel.innerText = e.formatCurrency(a);
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
    const l = document.createElement("img");
    l.className = "megajackpot-opt-graphic-image", t.appendChild(l), e.elements.optinImage = l;
    const n = document.createElement("section");
    n.className = "megajackpot-data-section", t.appendChild(n);
    const a = (r) => {
      const s = document.createElement("div");
      s.className = "megajackpot-data-label", n.appendChild(s);
      const p = document.createElement("b");
      p.textContent = r, p.className = "megajackpot-data-label-text";
      const u = document.createElement("span");
      return s.appendChild(p), s.appendChild(u), u;
    };
    e.elements.miniValueLabel = a(e.textTranslations.mini), e.elements.minorValueLabel = a(e.textTranslations.minor), e.elements.majorValueLabel = a(e.textTranslations.major), e.elements.megaValueLabel = a(e.textTranslations.mega);
    const o = document.createElement("button");
    o.className = "megajackpot-opt-button", t.appendChild(o);
    const c = document.createElement("img");
    c.src = e.config.assetsUrl + "/mjp-info-icon.png", o.appendChild(c);
    const i = document.createElement("span");
    o.appendChild(i), e.elements.optinButtonLabel = i, e.elements.optinButton = o, e.elements.optinButton.addEventListener("click", e.showDialog);
  },
  constructDialog: function() {
    const t = document.createElement("div");
    t.className = "megajackpot-dialog-backdrop", e.config.containerElement.appendChild(t);
    const l = document.createElement("div");
    l.className = "megajackpot-dialog";
    const n = document.createElement("div");
    n.className = "megajackpot-dialog-header", l.appendChild(n);
    const a = document.createElement("img");
    a.src = e.config.assetsUrl + "/mjp-opt-in-graphic.png", n.appendChild(a);
    const o = document.createElement("button");
    o.textContent = "✕", o.className = "megajackpot-dialog-close-button", n.appendChild(o);
    const c = document.createElement("div");
    c.className = "megajackpot-dialog-content", l.appendChild(c);
    const i = document.createElement("section");
    c.appendChild(i);
    const r = document.createElement("h1");
    r.textContent = e.textTranslations.dialogTitleOptIn, i.appendChild(r);
    const s = document.createElement("p");
    s.textContent = e.textTranslations.dialogTextOptIn, i.appendChild(s);
    const p = document.createElement("section");
    c.appendChild(p);
    const u = document.createElement("div");
    p.appendChild(u);
    const m = document.createElement("h2");
    m.textContent = e.textTranslations.dialogRulesTitle, u.appendChild(m);
    const g = document.createElement("ol");
    e.textTranslations.dialogRules.forEach((f) => {
      const h = document.createElement("li");
      h.textContent = e.replaceTextTokens(f), g.appendChild(h);
    }), u.appendChild(g);
    const d = document.createElement("button");
    d.textContent = e.textTranslations.optIn, p.appendChild(d), e.elements.optInOutButtonConfirm = d, e.config.containerElement.appendChild(l), e.elements.dialogBackdrop = t, e.elements.dialog = l, e.elements.dialogTitle = r, e.elements.dialogText = s, e.elements.dialogRules = u, o.addEventListener("click", () => e.hideDialog()), t.addEventListener("click", () => e.hideDialog());
  },
  showDialog: function() {
    e.elements.dialogBackdrop.classList.add("open"), e.elements.dialog.classList.add("open");
  },
  hideDialog: function() {
    e.elements.dialogBackdrop.classList.remove("open"), e.elements.dialog.classList.remove("open");
  },
  fetchNewJackpotData: async function() {
    try {
      const t = e.config.apiUrl + "/feed/jackpotdata?operator=" + e.config.operator + "&player=" + e.config.player + "&hash=" + e.config.hash, n = await (await fetch(t)).json();
      console.log(n), e.buyInAmount = n.player.buyInAmount, e.optin = n.player.isOptedIn, e.applyStyling(e.optin);
      let { MINI_VALUE: a, MINOR_VALUE: o, MAJOR_VALUE: c, MEGA_VALUE: i } = n.jackpots;
      e.updateValues(a, o, c, i);
      let r = 0;
      const s = setInterval(() => {
        ++r > 14 && clearInterval(s), a += n.jackpots.MINI_VELOCITY, o += n.jackpots.MINOR_VELOCITY, c += n.jackpots.MAJOR_VELOCITY, i += n.jackpots.MEGA_VELOCITY, e.updateValues(a, o, c, i);
      }, 1e3);
    } catch (t) {
      console.error("Error fetching jackpot data:", t);
    }
  },
  init: async function(t) {
    e.config = t;
    try {
      await e.fetchLanguage();
      const l = e.config.apiUrl + "/feed/jackpotdata?operator=" + e.config.operator + "&player=" + e.config.player + "&hash=" + e.config.hash, a = await (await fetch(l)).json();
      e.currencyPrefix = e.unicodeToChar(e.config.currencyDetails.prefix), e.currencySuffix = e.unicodeToChar(e.config.currencyDetails.suffix), e.currencyGrouping = e.unicodeToChar(e.config.currencyDetails.grouping), e.optin = a.player.isOptedIn, e.buyInAmount = a.player.buyInAmount, e.constructMegaJackpotBar(), e.constructDialog(), e.applyStyling(e.optin), e.elements.optInOutButtonConfirm.addEventListener("click", async () => {
        const u = e.config.apiUrl + (e.optin ? "/api/optout?operator=" : "/api/optin?operator=") + e.config.operator + "&player=" + e.config.player + "&hash=" + e.config.hash;
        try {
          (await fetch(u)).status === 200 && (e.optin = !e.optin, e.applyStyling(e.optin));
        } catch (m) {
          console.error("Error opting in/out:", m);
        }
      });
      let { MINI_VALUE: o, MINOR_VALUE: c, MAJOR_VALUE: i, MEGA_VALUE: r } = a.jackpots;
      e.updateValues(o, c, i, r);
      let s = 0;
      const p = setInterval(() => {
        ++s > 14 && clearInterval(p), o += a.jackpots.MINI_VELOCITY, c += a.jackpots.MINOR_VELOCITY, i += a.jackpots.MAJOR_VELOCITY, r += a.jackpots.MEGA_VELOCITY, e.updateValues(o, c, i, r);
      }, 1e3);
    } catch (l) {
      console.error("Error fetching jackpot data:", l);
    }
    setInterval(() => {
      e.fetchNewJackpotData();
    }, 15e3);
  }
};
export {
  e as default
};
