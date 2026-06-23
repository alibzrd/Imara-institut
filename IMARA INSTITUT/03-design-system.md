# IMARA INSTITUT — SYSTÈME DE DESIGN

---

## IDENTITÉ VISUELLE

### Philosophie
Deux univers, une marque.
- **Institut** : sensorialité, féminité, luxe accessible
- **Académie** : expertise, professionnalisme, ambition
- Fil conducteur : chaleur humaine, authenticité afro-caribéenne

---

## PALETTE COULEURS

### Institut (univers chaud)
| Rôle | Nom | Hex | Usage |
|------|-----|-----|-------|
| Primaire | Nude Caramel | `#C4906A` | CTA, accents, bordures actives |
| Secondaire | Terracotta doux | `#E8C4A0` | Fonds de sections, cards |
| Accent | Or mat | `#B8913F` | Icônes premium, prix, badges |

### Académie (univers froid)
| Rôle | Nom | Hex | Usage |
|------|-----|-----|-------|
| Primaire | Bleu nuit ardoisé | `#2A4A5E` | CTA formation, headers |
| Secondaire | Bleu brume | `#5B8FA8` | Fonds, illustrations |
| Accent | Vert certification | `#4A7C59` | Badge CPF, Qualiopi |

### Neutres (communs)
| Rôle | Nom | Hex | Usage |
|------|-----|-----|-------|
| Fond global | Blanc ivoire | `#FAF8F5` | Background principal |
| Texte principal | Gris anthracite | `#2C2C2C` | Corps de texte |
| Texte secondaire | Gris moyen | `#6B6B6B` | Sous-titres, meta |
| Séparateurs | Gris clair | `#E8E4DF` | Dividers, bordures |

---

## TYPOGRAPHIE

### Titres — Cormorant Garamond
```
Font: Cormorant Garamond
Weights: 300 (Light) · 600 (SemiBold) · 700 (Bold)
Source: Google Fonts (gratuit)
Usage: H1, H2, H3, citations, noms de prestations
```
*Pourquoi :* Serif élégant, connotation luxe/beauté, excellent rendu mobile.

### Corps — DM Sans
```
Font: DM Sans
Weights: 400 (Regular) · 500 (Medium) · 700 (Bold)
Source: Google Fonts (gratuit)
Usage: paragraphes, navigation, boutons, labels
```
*Pourquoi :* Humanist sans-serif, lisibilité parfaite petite taille, neutre.

### Accent — Italiana (sparingly)
```
Font: Italiana
Weight: 400
Source: Google Fonts (gratuit)
Usage: taglines, sous-titres hero uniquement
```

### Tailles (mobile-first)
```
H1 :  36px / line-height 1.15
H2 :  28px / line-height 1.2
H3 :  22px / line-height 1.3
Body: 16px / line-height 1.6   ← JAMAIS en dessous de 16px
Small: 14px / line-height 1.5
CTA:  16px / font-weight 700 / letter-spacing 0.5px
```

---

## COMPOSANTS UI

### Boutons
```
CTA Primaire Institut :
  Background: #C4906A
  Texte: #FAF8F5
  Radius: 8px
  Padding: 14px 28px
  Font: DM Sans 700

CTA Primaire Académie :
  Background: #2A4A5E
  Texte: #FAF8F5
  Radius: 8px
  Padding: 14px 28px

CTA Secondaire (outline) :
  Background: transparent
  Bordure: 2px solid current-color
  Radius: 8px

Taille minimum touch target mobile : 44x44px
```

### Cards Prestations
```
Background: #FFFFFF
Radius: 12px
Shadow: 0 2px 16px rgba(0,0,0,0.08)
Image: aspect-ratio 4/3, object-fit cover
Padding contenu: 16px
```

### Cards Formations
```
Background: #FFFFFF
Bordure gauche: 4px solid #2A4A5E
Radius: 8px
Badge CPF: fond #4A7C59, texte blanc, 12px
```

---

## ICONOGRAPHIE

Utiliser **Lucide Icons** (open-source, cohérent).
- 💆 Soins → `sparkles`, `star`, `heart`
- 🎓 Formation → `graduation-cap`, `award`, `users`
- 📍 Lieu → `map-pin`
- ✅ Certif → `shield-check`, `badge-check`
- 💳 Financement → `credit-card`
- 📅 RDV → `calendar`

---

## PHOTOGRAPHIE

### Style recommandé
- **Portrait ciblé** : mains de l'esthéticienne au travail (pas de visage flou d'ambiance générique)
- **Lumière** : naturelle ou softbox, tons chauds (3200-4000K)
- **Sujets** : diversité représentée — clientèle afro-caribéenne et mixte (cohérent avec la marque Imara)
- **Format mobile** : portraits 3:4 pour cards, paysage 16:9 pour headers
- **Post-traitement** : preset cohérent, légèrement désaturé avec tons chauds

### À shooter en priorité
1. Lory + Nawel en action (microblading, extensions cils)
2. Résultats avant/après (maquillage permanent, extensions)
3. L'espace 120m² — propreté, modernité, ambiance
4. Session de formation (groupe 6 max autour d'une table)
5. Détail : kits de démarrage, matériel premium

---

## GRILLE & ESPACEMENTS

```
Mobile (375px) :
  Margin horizontal : 16px
  Max content width : 343px
  Gutter cards : 12px

Tablet (768px) :
  Margin horizontal : 32px
  Colonnes : 2

Desktop (1280px) :
  Max width container : 1200px
  Margin horizontal : auto
  Colonnes : 3-4

Spacing scale (multiples de 4) :
  xs: 4px · sm: 8px · md: 16px · lg: 24px · xl: 48px · 2xl: 80px
```

---

## ANIMATIONS

- **Principe** : subtil, non-distrayant, `prefers-reduced-motion` respecté
- Fade-in sections au scroll : `opacity 0→1, translateY 16px→0, duration 400ms`
- Hover cards : `scale 1.02, shadow amplifiée, 200ms ease`
- CTA hover : `brightness 1.08, 150ms`
- Pas d'autoplay vidéo avec son

---

## FAVICON & LOGOS

Logo actuel à moderniser :
- Version principale : horizontal (navbar)
- Version icône : monogramme "I" stylisé pour favicon
- Couleurs : déclinaison Institut (nude) + Académie (bleu) + neutre (noir sur blanc)

---

## ACCESSIBILITÉ (WCAG AA minimum)

- Contraste texte/fond : ratio ≥ 4.5:1 pour body, 3:1 pour grands titres
- Focus visible sur tous éléments interactifs
- Alt text toutes images
- Aria-labels boutons icônes seuls
- Navigation clavier fonctionnelle
