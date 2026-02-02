

# V17 Vision - Case Study

Zamienię pierwszy projekt na pełną prezentację V17 Vision - marki projektującej futurystyczne rozwiązania do wnętrz.

---

## Rozpoznane elementy z materiałów

| Plik | Przeznaczenie | Opis w galerii |
|------|---------------|----------------|
| `v17_designing_your_space.jpg` | Thumbnail + Hero | Key visual marki - "Designing your space" |
| `logo.png` | Galeria - logo | Logo tekstowe V17 Vision |
| `logo_sign.png` | Galeria - znak | Znak graficzny marki |
| `Untitled-1-01.jpg` | Galeria - brand | Prezentacja z ikonami usług |
| `image_8.png` | Galeria - realizacja | Wizualizacja futurystycznego wnętrza |
| `mouse.png` | Galeria - mockup | Brandowane materiały biurowe |
| `tlo.jpg` | Galeria - tekstura | Geometryczne tło 3D |

---

## Dane projektu

**Nazwa:** V17 Vision Branding
**Slug:** `v17-vision-branding`
**Kategoria:** Branding
**Rok:** 2024
**Narzędzia:** Illustrator, Photoshop, Cinema 4D

---

## Teksty do projektu

**Krótki opis:**
> Kompletna identyfikacja wizualna dla studia projektowego specjalizującego się w futurystycznych wnętrzach

**Pełny opis:**
> V17 Vision to innowacyjne studio projektowe specjalizujące się w tworzeniu futurystycznych rozwiązań architektonicznych i wnętrzarskich. Marka łączy zaawansowane technologie z organicznymi, płynnymi formami, tworząc przestrzenie wyprzedzające swoją epokę. Projekt brandingowy obejmował logo, identyfikację wizualną, materiały firmowe oraz key visual.

**Wyzwanie:**
> Klient potrzebował identyfikacji, która komunikuje innowacyjność i przyszłościowe podejście do projektowania przestrzeni. Wyzwaniem było oddanie futurystycznego charakteru przy zachowaniu profesjonalizmu i elegancji.

**Rozwiązanie:**
> Stworzyłem minimalistyczną identyfikację opartą na geometrycznych, trójwymiarowych formach. Logo "V17" wykorzystuje ostre kąty symbolizujące precyzję, a hasło "Designing your space" podkreśla personalizowane podejście do każdego projektu. Biała paleta kolorów z subtelnymi akcentami tworzy wrażenie czystości i nowoczesności.

**Rezultaty:**
> Branding skutecznie pozycjonuje V17 Vision jako lidera w segmencie premium futurystycznego designu wnętrz. Marka zyskała rozpoznawalność w branży architektonicznej i przyciąga klientów poszukujących innowacyjnych rozwiązań.

---

## Opisy obrazów w galerii

1. **Key Visual** - "Designing your space" - główny motyw reklamowy z double exposure
2. **Logo V17 Vision** - minimalistyczne logo tekstowe marki
3. **Znak graficzny** - geometryczny symbol marki
4. **Prezentacja brandingu** - ikony usług z logotypem
5. **Futurystyczne wnętrze** - wizualizacja salonu z organicznymi formami
6. **Materiały firmowe** - podkładka pod mysz z brandingiem
7. **Tekstura 3D** - geometryczne tło wykorzystywane w materiałach

---

## Kroki implementacji

1. Skopiuję wszystkie 7 obrazów do `public/projects/v17-vision/`
2. Zaktualizuję pierwszy projekt w `src/data/projects.ts` z nowymi danymi V17 Vision
3. Zmienię slug z `techstart-logo` na `v17-vision-branding`
4. Ustawię thumbnail jako `v17_designing_your_space.jpg`
5. Dodam wszystkie obrazy z odpowiednimi opisami i podpisami

---

## Szczegóły techniczne

Struktura obrazów w projekcie:

```text
public/
  projects/
    v17-vision/
      designing-your-space.jpg   (thumbnail + hero)
      logo.png
      logo-sign.png
      brand-presentation.jpg
      interior.png
      mousepad.png
      texture.jpg
```

Zmiany w `src/data/projects.ts`:
- Podmiana obiektu projektu o id: 1
- Nowy slug dla routingu: `/project/v17-vision-branding`
- 7 obrazów zamiast 4 placeholderów

