# IMARA INSTITUT — FONCTIONNALITÉS & STACK TECHNIQUE

---

## FONCTIONNALITÉS INDISPENSABLES

### 1. Réservation Institut — Planity (existant)
- **Garder Planity** (déjà configuré sur le site actuel)
- Intégration : widget iframe ou lien direct `planity.com/imara-77127-lieusaint`
- Bouton flottant bas-droite sur toutes les pages Institut
- Confirmation SMS automatique (natif Planity)
- **Ajouter** : bouton "Réserver" dans chaque card prestation → ouvre Planity pré-filtré sur la prestation

### 2. Inscriptions Formations — Formulaire multi-étapes
```
Étape 1 : Choisir formation (liste déroulante des 22 formations)
Étape 2 : Choisir date session (calendrier disponibilités)
Étape 3 : Coordonnées (Nom, Prénom, Tel, Email, Ville)
Étape 4 : Financement (CPF / OPCO / Particulier / Paiement fractionné)
Étape 5 : Confirmation + email automatique à Maryline
```
- Outil : **Tally.so** (gratuit) ou **HubSpot Free Forms**
- Email notif auto → maryline@imarainstitut.com

### 3. Avis Google — Widget temps réel
- Intégrer **Elfsight Google Reviews** widget (5€/mois) ou équivalent
- Afficher note moyenne + 6 derniers avis
- Section dédiée + section témoignages homepage

### 4. WhatsApp Business — Bouton flottant
```html
<!-- Bas-gauche, toujours visible -->
<a href="https://wa.me/33XXXXXXXXX?text=Bonjour%20Imara%20Institut">
```
- Friction zéro pour questions rapides
- Configurer message pré-rempli selon page (Institut vs Académie)

### 5. Pop-in Capture Email (sortie)
- Déclencheur : `mouseleave` sur desktop / 40 secondes sur mobile
- Offre Institut : "-10% sur votre 1er soin" → échange email
- Offre Académie : "Guide gratuit : Lancer son activité beauté"
- Outil : **Mailchimp** popup (gratuit jusqu'à 500 contacts)

### 6. FAQ Accordéon
**Institut FAQ :**
- Combien de temps durent les extensions de cils ?
- Quelle différence entre Volume Russe et pose Mixte ?
- Comment entretenir son maquillage permanent ?
- Est-ce que la lumière pulsée est douloureuse ?

**Académie FAQ :**
- Comment utiliser mon CPF pour financer une formation ?
- Les formations sont-elles certifiantes ?
- Quel matériel dois-je apporter ?
- Y a-t-il un suivi après la formation ?

### 7. Planification sessions — Calendrier formations
- Page dédiée `/academie/planning/`
- Vue mensuelle avec sessions disponibles / complet
- Outil : **Google Calendar embed** ou **Notion public** (gratuit)

---

## PERFORMANCES TECHNIQUES (Scores Lighthouse cibles)

| Métrique | Cible |
|----------|-------|
| Performance mobile | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | 100 |
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |

**Optimisations obligatoires :**
- Toutes images en WebP + lazy loading
- Fonts Google via `font-display: swap`
- Pas de scripts tiers bloquants
- CDN pour assets statiques

---

## SEO LOCAL (priorité #1)

### Google My Business
- Vérifier/compléter fiche GMB Imara Institut
- Photos récentes (mensuel)
- Répondre à tous les avis < 48h
- Posts GMB : 1 par semaine (promo, formation du mois)

### Mots-clés cibles (Île-de-France / Lieusaint)
```
Institut :
- "extension de cils Lieusaint"
- "microblading Lieusaint 77"
- "maquillage permanent Seine-et-Marne"
- "radio fréquence visage Lieusaint"

Académie :
- "formation extension de cils Île-de-France"
- "formation microblading CPF"
- "formation esthétique Lieusaint"
- "centre de formation beauté 77"
```

### Schema.org (données structurées)
```json
{
  "@type": ["BeautySalon", "EducationalOrganization"],
  "name": "Imara Institut",
  "address": { "addressLocality": "Lieusaint", "postalCode": "77127" },
  "hasCredential": "Qualiopi",
  "priceRange": "€€"
}
```

---

## STACK TECHNIQUE RECOMMANDÉE

### Option A — Webflow (recommandé si pas de dev)
- **Prix** : ~25€/mois (CMS plan)
- **Avantages** : Design pixel-perfect, animations intégrées, CMS pour blog/formations, SEO solide
- **Délai** : 3-4 semaines designer expérimenté
- **Intégrations** : Planity (iframe), Tally forms, Elfsight reviews

### Option B — Next.js (ce repo existe déjà)
- **Prix** : Hébergement Vercel gratuit (hobby) → ~20€/mois (pro)
- **Avantages** : Performance maximale, contrôle total, évolutif
- **Délai** : 6-8 semaines développeur full-stack
- **Stack** : Next.js 14 App Router + Tailwind CSS + Contentlayer (blog) + Resend (emails)

### Option C — WordPress + Divi/Elementor (budget serré)
- **Prix** : ~10€/mois hébergement + ~90€/an thème
- **Avantages** : Autonomie de gestion, plugins nombreux
- **Inconvénients** : Performance moyenne, maintenance sécurité, vitesse moindre

**Recommandation : Option A (Webflow)** pour ratio résultat/temps/budget.

---

## ANALYTICS & SUIVI

- **Google Analytics 4** : events personnalisés sur CTA (clics "Réserver", "S'inscrire")
- **Google Search Console** : monitoring positions SEO
- **Microsoft Clarity** (gratuit) : heatmaps + session recordings
- **Meta Pixel** : si budget publicité Facebook/Instagram prévu

---

## RGPD & LÉGAL

- Bannière cookies (Cookiebot ou Axeptio — ~10€/mois)
- Mentions légales à jour
- CGV formations (Maryline à valider avec juriste)
- Politique de confidentialité (formulaires + analytics)
- Données formulaires : hébergement France/Europe obligatoire
