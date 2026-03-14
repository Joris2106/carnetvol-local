# 🚁 CarnetVol — Journal de bord hélicoptère

**URL de l'application :** [https://joris2106.github.io/carnetvol](https://joris2106.github.io/carnetvol)

Application web progressive (PWA) installable sur Android, iOS et desktop.

---

## 📱 Installation sur Android

1. Ouvrir **[https://joris2106.github.io/carnetvol](https://joris2106.github.io/carnetvol)** dans **Chrome** sur Android
2. Une bannière **"Installer CarnetVol"** apparaît → appuyer sur **INSTALLER**
3. L'app s'ajoute à votre écran d'accueil

Si la bannière n'apparaît pas :
- Menu Chrome ⋮ → **"Ajouter à l'écran d'accueil"**

---

## 🗂️ Structure

```
carnetvol/
├── index.html      ← Application complète
├── manifest.json   ← Configuration PWA
├── sw.js           ← Service Worker (hors-ligne)
└── icons/          ← Icônes toutes tailles
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

---

## 🚀 GitHub Pages

Settings → Pages → Branch: main → / (root) → Save

---

## 💾 Données

- Stockées **localement** sur l'appareil (localStorage)
- 1 324 vols + 153 séances simulateur pré-chargés
- Aucune donnée envoyée sur internet
