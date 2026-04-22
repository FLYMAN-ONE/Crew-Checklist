# SCCM PREFLIGHT CHECKLIST — CHANGELOG

---

## V11.8 — 2026-04-22
### Changed
- **787-PO-009**: testo aggiornato → "Lascia finestrini clear al cambio crew (In posti molto caldi finestrini scuri)"

---

## V11.7 — 2026-04-22
### Added
- **Install Prompt — bottom sheet**: popup guida per aggiungere l'app alla Home Screen
  - iOS Safari: istruzioni passo-passo (Condividi → Aggiungi alla schermata Home → Aggiungi)
  - iOS altro browser: invito ad usare Safari
  - Android/Chrome: bottone nativo tramite `beforeinstallprompt`
  - Appare dopo 3s, non in modalità standalone, "Non ora" persiste in `localStorage`

---

## V11.6 — 2026-04-22
### Changed
- **Tab attiva**: `var(--orange)` solido — caldo, distinto dalla progress bar
- **Tab RIEP attiva**: `var(--red)` solido
- **Logica cromatica**: 🟠 Orange = selezionata · 🟢 Green = progress · 🔴 Red = Riepilogo

---

## V11.5 — 2026-04-22
### Changed
- **Tab progress bar**: `green` solido — distinto dall'indicatore tab attiva

---

## V11.4 — 2026-04-22
### Changed
- **Tab — percentuale**: rimossa
- **Tab — titolo**: `11px/800`
- **Tab — progress bar**: margine top `3px`

---

## V11.3 — 2026-04-22
### Changed
- **Header — sequenza chip**: DATA → VOLO → TRATTA → A/C → ORA → ISSUES
- **Header — chip Issues**: classe `.hb`, stessa altezza degli altri chip
- **Header — orologio**: UTC fisso, rimosso toggle

---

## V11.2 — 2026-04-22
### Added
- **Drag & Drop — ghost indicator**: `.dd-ghost` pulsante "▼ RILASCIA QUI ▼"

### Changed
- **Header — redesign pill-card**: chip card, sfondo gradiente, orologio accent-tinted
- **Drag**: rimosso sistema `dd-above`/`dd-below`

---

## V11.1 — 2026-04-21
### Added
- **Offline / PWA**: Service Worker cache-first, Web App Manifest, meta tag Apple
- **Font size A− / A+**: 8 livelli (10→20px)
- **Campo DATA**: `type="date"` nativo
- **Campo ETD**: `type="time"` nativo

### Changed
- **Google Fonts**: rimosso, font stack nativo
- **"DEVELOPED BY VAG"**: rimosso
- **Boarding timer**: rimosso
- **Drag colonna sinistra**: rimossa
- **Voci custom**: bottoni in riga orizzontale
- **787-PF-008**: "Finestrini su 1 CLEAR"
- **787 Boarding**: rimossa voce "BRIEFING OWE"
- **Riepilogo**: rimossa sezione DELTA ETD

---

*Formato versione: MAJOR.MINOR — il numero intero incrementa solo per major update.*
