# SCCM PREFLIGHT CHECKLIST — CHANGELOG

---

## V11.6 — 2026-04-22
### Changed
- **Tab attiva — indicatore**: cambiato da gradiente `accent→green` a `var(--orange)` solido — colore caldo, nettamente distinto dalla progress bar verde
- **Tab RIEP attiva — indicatore**: cambiato da gradiente `orange→red` a `var(--red)` solido — distinto dall'orange delle tab normali
- **Tab attiva — titolo**: colore aggiornato da `accent` (blu) a `orange` per coerenza con l'indicatore
- **Tab RIEP attiva — titolo**: colore aggiornato da `orange` a `red` per coerenza
- **Light mode**: tutti i colori verificati (`--orange:#EA6C00`, `--red:#DC2626`, `--green:#16A34A` — leggibili su sfondo chiaro)
- **Logica cromatica tab**: 🟠 Orange = tab selezionata · 🟢 Green = progress completamento · 🔴 Red = tab Riepilogo selezionata

---

## V11.5 — 2026-04-22
### Changed
- **Tab progress bar**: colore cambiato da `accent→green` (gradiente) a `green` solido — ora visivamente distinto dall'indicatore della tab attiva

---

## V11.4 — 2026-04-22
### Changed
- **Tab — percentuale**: rimossa la percentuale di completamento (`ptab-sub` nascosto via CSS)
- **Tab — titolo**: dimensione aumentata da `9px/700` a `11px/800`, letter-spacing ottimizzato per non eccedere la tab
- **Tab — progress bar**: margine top portato a `3px` per sfruttare lo spazio liberato

---

## V11.3 — 2026-04-22
### Changed
- **Header — sequenza chip**: riordinati in DATA → VOLO → TRATTA → A/C → ORA → ISSUES
- **Header — chip Issues**: ora usa la stessa classe `.hb` degli altri chip (altezza, padding e bordi identici); il colore del valore rimane reattivo (verde/arancione)
- **Header — orologio**: rimosso il toggle UTC/LOC; l'orologio mostra esclusivamente l'ora UTC. Rimosso il badge modalità e il listener click

---

## V11.2 — 2026-04-22
### Added
- **Drag & Drop — ghost indicator**: elemento DOM `.dd-ghost` pulsante con testo "▼ RILASCIA QUI ▼" che si inserisce fisicamente tra le righe durante il drag
- **Animazione**: aggiunto `@keyframes ins-pulse` per il glow del ghost

### Changed
- **Header — redesign pill-card**: sfondo gradiente, chip card con bordi arrotondati e ombra, orologio accent-tinted, bottoni con border-radius maggiore
- **Drag — vecchio sistema rimosso**: `dd-above` / `dd-below` (bordi sottili) sostituiti dal ghost DOM

---

## V11.1 — 2026-04-21
### Added
- **Offline / PWA**: Service Worker (`sw.js`) con strategia cache-first
- **Web App Manifest**: installazione standalone su iOS/iPadOS; meta tag Apple
- **Font size A− / A+**: 8 livelli (10→20px), persistito in `localStorage`
- **Campo DATA**: input nativo `type="date"`
- **Campo ETD**: input nativo `type="time"`

### Changed
- **Google Fonts rimosso**: font stack nativo, nessuna CDN esterna
- **"DEVELOPED BY VAG"**: rimosso dalla schermata di setup
- **Boarding timer**: rimosso completamente
- **Drag colonna sinistra**: rimossa (handle, CSS e JS `_edd`)
- **Voci custom**: bottoni ISS/✎/✕ in riga orizzontale
- **Handle drag destra**: griglia punti CSS, haptic feedback, touch target 44px
- **787-PF-008**: "Finestre" → "Finestrini su 1 CLEAR"
- **787 Boarding**: rimossa voce "BRIEFING OWE"
- **Riepilogo**: rimossa sezione DELTA ETD

---

*Formato versione: MAJOR.MINOR — il numero intero incrementa solo per major update.*
