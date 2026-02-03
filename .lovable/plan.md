
# Plan: Dostosowanie Stylu Graficznego Portfolio do CV

## Podsumowanie Analizy

Na podstawie analizy strony CV (amitiel.cv) oraz obecnego portfolio, zidentyfikowano kluczowe roznice w stylu wizualnym:

### Obecny styl Portfolio
- Czarne tlo wszedzie (`--background: 0 0% 0%`)
- Ciemne karty na ciemnym tle (`--card: 0 0% 5%`)
- Male zaokraglenia (`--radius: 0.5rem` = 8px)
- Standardowe paddingi (`py-24`, `p-6`)
- Efekty glow (cyan blur na elementach)

### Docelowy styl CV
- **Jasne tlo** (biale lub jasnoszare) dla sekcji
- **Ciemne bloki/karty** wyrozniajace sie na jasnym tle
- **Wieksze zaokraglenia** (rounded-2xl, rounded-3xl)
- **Wieksze paddingi** wewnatrz kart i sekcji
- Minimalistyczny wyglad bez intensywnych glow effects

---

## Zmiany do Wykonania

### 1. Zmiana Kolorow w CSS (index.css)

Odwrocenie schematu kolorow:

```text
Obecne wartosci:
--background: 0 0% 0%      (czarny)
--card: 0 0% 5%            (ciemny szary)
--secondary: 0 0% 8%       (szary)

Nowe wartosci:
--background: 0 0% 96%     (jasnoszary/bialy)
--card: 0 0% 8%            (ciemny - dla kart)
--secondary: 0 0% 12%      (ciemniejszy akcent)
--foreground: 0 0% 10%     (ciemny tekst na jasnym tle)
```

### 2. Zwiekszenie Border-Radius

**Tailwind config:**
```text
--radius: 0.5rem -> 1rem (16px)
```

**Komponenty - dodanie wiekszych zaokraglen:**
- Karty projektow: `rounded-xl` -> `rounded-2xl` lub `rounded-3xl`
- Karty uslug: `rounded-xl` -> `rounded-2xl`
- Przyciski filtra: `rounded-full` (pozostaje)
- Ikony/tools: `rounded-lg` -> `rounded-xl`

### 3. Zwiekszenie Paddingów

**Sekcje:**
```text
py-24 -> py-32 (wiekszy odstep miedzy sekcjami)
```

**Karty:**
```text
CardHeader: p-6 -> p-8
CardContent: p-6 pt-0 -> p-8 pt-0
Karty projektow: p-4 -> p-6
```

**Container:**
```text
px-4 -> px-6 lub px-8
```

### 4. Usuniecie/Redukcja Efektow Glow

**index.css:**
```text
.glow-cyan {
  box-shadow: 0 0 40px...  ->  usuniecie lub zmniejszenie do 0 0 10px
}
```

**Komponenty:**
- AboutSection: usuniecie `glow-cyan` z avatara i tools
- ServicesSection: usuniecie `group-hover:glow-cyan`

### 5. Aktualizacja Hero Section

Dostosowanie tla hero do nowego jasnego schematu:
- Usunac lub zmodyfikowac gradient overlay
- Dostosowac ParticleField do jasnego tla (ciemniejsze czastki)
- Ewentualnie zachowac ciemne hero jako kontrast

---

## Lista Plikow do Modyfikacji

| Plik | Zmiany |
|------|--------|
| `src/index.css` | Nowe wartosci CSS variables, redukcja glow |
| `tailwind.config.ts` | Zwiekszenie --radius |
| `src/components/ProjectsSection.tsx` | Wieksze rounded, paddingi kart |
| `src/components/ServicesSection.tsx` | Wieksze rounded, paddingi kart |
| `src/components/AboutSection.tsx` | Usuniecie glow, wieksze rounded tools |
| `src/components/ContactSection.tsx` | Wieksze paddingi, rounded inputow |
| `src/components/ui/card.tsx` | Wieksze rounded w komponencie bazowym |
| `src/components/HeroSection.tsx` | Dostosowanie do jasnego/ciemnego kontrastu |
| `src/components/ParticleField.tsx` | Zmiana koloru czastek jesli potrzebna |
| `src/components/Navigation.tsx` | Dostosowanie do jasnego tla |
| `src/components/Footer.tsx` | Dostosowanie kolorow |

---

## Szczegoly Techniczne

### index.css - Nowe zmienne kolorow

```css
:root {
  --background: 0 0% 96%;        /* jasne tlo */
  --foreground: 0 0% 10%;        /* ciemny tekst */
  
  --card: 0 0% 8%;               /* ciemne karty */
  --card-foreground: 0 0% 98%;   /* jasny tekst na kartach */
  
  --secondary: 0 0% 15%;
  --muted: 0 0% 85%;
  --muted-foreground: 0 0% 40%;
  
  --border: 0 0% 85%;
  --radius: 1rem;                /* wieksze zaokraglenia */
}
```

### Przyklad zmian w ProjectsSection

```text
Obecne:
<Link className="... bg-card rounded-xl ...">
  <div className="p-4">

Nowe:
<Link className="... bg-card rounded-3xl ...">
  <div className="p-6">
```

### Przyklad zmian w card.tsx

```text
Obecne:
className={cn("rounded-lg border bg-card...", className)}

Nowe:
className={cn("rounded-2xl border bg-card...", className)}
```

---

## Uwagi

1. **Hero Section** - mozna zachowac ciemne tlo jako efektowny kontrast z reszta strony (jak na wielu stronach CV)
2. **Karty projektow** - beda ciemne na jasnym tle, co da ladny kontrast
3. **Tekst** - nalezy dostosowac kolory tekstu aby byly czytelne na obu typach tla
4. **Nawigacja** - moze wymagac polprzezroczystego jasnego tla zamiast ciemnego
