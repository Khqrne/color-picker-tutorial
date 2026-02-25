## Aufgaben

**Aufgabe 1: Titel und Beschreibung hinzufügen**

Mache deine App benutzerfreundlicher. Füge ganz oben (aber noch innerhalb des `<body>`) eine Hauptüberschrift (`<h1>`) hinzu, zum Beispiel "Mein magischer Color Picker". Ergänze darunter einen kurzen Erklärungstext (`<p>`), der dem Nutzer sagt, was er hier tun kann.


**Aufgabe 2: Dynamischer Seitenhintergrund mit weichem Übergang**

Wenn du eine neue Farbe auswählst, soll sich nicht nur der Text ändern, sondern der Hintergrund der gesamten Webseite soll diese Farbe annehmen. Damit das gut aussieht, soll der Farbwechsel fließend passieren (Animation).
1. Gehe in deine CSS-Datei und füge dem `body` eine `transition` hinzu.
2. Gehe in deine JS-Datei und sorge dafür, dass bei einer Farbänderung auch der `document.body.style.backgroundColor` angepasst wird.


**Aufgabe 3: "In die Zwischenablage kopieren"-Button**

Niemand tippt gerne Farbcodes ab! Füge neben dem HEX- und RGB-Wert jeweils einen kleinen Button hinzu. Wenn man darauf klickt, soll der Text in die Zwischenablage kopiert werden. Nutze in JavaScript das `click`-Event und den Befehl `navigator.clipboard.writeText()`.



**Aufgabe 4: Der Zufallsfarbe-Button**

Füge einen neuen Button mit der Aufschrift "Zufallsfarbe" hinzu. Wenn man darauf klickt, soll JavaScript einen zufälligen HEX-Code generieren, das Input-Feld darauf einstellen und natürlich auch die Texte und den Hintergrund aktualisieren.
*Tipp für das JavaScript:* Eine zufällige HEX-Farbe kann man mit `Math.random()` generieren.


**Aufgabe 5: Dynamische Farbpalette**

Erstelle eine Funktion, um Lieblingsfarben zu speichern. Baue einen "Farbe speichern"-Button und darunter einen leeren Bereich (Container) ein. Bei jedem Klick auf den Button soll JavaScript ein neues, kleines HTML-Element (`div`) erzeugen, es mit der aktuellen Farbe einfärben und in den Container einfügen.

---

---

---

## Lösungen

**Lösung 1: Titel und Beschreibung hinzufügen**

Füge diesen Code in der `index.html` direkt nach dem öffnenden `<body>`-Tag und vor dem `<div class="color-picker">` ein:

```html
<h1>Mein magischer Color Picker</h1>
<p>Wähle eine Farbe aus und kopiere dir die passenden Codes für dein nächstes Projekt!</p>
```

**Lösung 2: Dynamischer Seitenhintergrund mit weichem Übergang**

In der `styles.css` beim `body` ergänzen:

```css
body {
    /* ... bestehender Code ... */
    transition: background-color 0.5s ease;
}
```

In der `script.js` den Event-Listener erweitern:

```javascript
document.getElementById('colorInput').addEventListener('input', function() {
    const color = this.value;
    document.getElementById('hexValue').textContent = color;
    document.getElementById('rgbValue').textContent = hexToRgb(color);
    
    // Hintergrundfarbe der Seite anpassen
    document.body.style.backgroundColor = color; 
});
```

**Lösung 3: "In die Zwischenablage kopieren"-Button**

In der `index.html` die Absätze um Buttons erweitern:

```html
<p>HEX: <span id="hexValue">#ff0000</span> <button id="copyHex">Kopieren</button></p>
<p>RGB: <span id="rgbValue">rgb(255, 0, 0)</span> <button id="copyRgb">Kopieren</button></p>
```

In der `script.js` ganz unten die neuen Event-Listener hinzufügen:

```javascript
document.getElementById('copyHex').addEventListener('click', function() {
    const hexText = document.getElementById('hexValue').textContent;
    navigator.clipboard.writeText(hexText);
    alert("HEX-Code " + hexText + " kopiert!");
});

document.getElementById('copyRgb').addEventListener('click', function() {
    const rgbText = document.getElementById('rgbValue').textContent;
    navigator.clipboard.writeText(rgbText);
    alert("RGB-Code " + rgbText + " kopiert!");
});
```

**Lösung 4: Der Zufallsfarbe-Button**

In der `index.html` (z.B. über der `<div class="color-info">`) den Button einfügen:

```html
<button id="randomColorBtn">Zufallsfarbe generieren</button>
```

In der `script.js` folgenden Code ergänzen:

```javascript
document.getElementById('randomColorBtn').addEventListener('click', function() {
    // Generiert einen zufälligen 6-stelligen Hex-Code
    const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    const colorInput = document.getElementById('colorInput');
    colorInput.value = randomHex; 
    
    // Löst das 'input' Event aus, um Texte und Hintergrund zu aktualisieren
    colorInput.dispatchEvent(new Event('input')); 
});
```

**Lösung 5: Dynamische Farbpalette**

In der `index.html` ganz unten im `.color-picker` Div einfügen:

```html
<button id="saveColorBtn">Farbe speichern</button>
<div id="palette" class="palette-container"></div>
```

In der `styles.css` das Design für die Palette und die Farb-Quadrate hinzufügen:

```css
.palette-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
    justify-content: center;
}

.swatch {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
```

In der `script.js` die Logik zum Erzeugen der Elemente hinzufügen:

```javascript
document.getElementById('saveColorBtn').addEventListener('click', function() {
    const currentColor = document.getElementById('colorInput').value;
    const palette = document.getElementById('palette');
    
    // Erstelle ein neues Div-Element
    const newSwatch = document.createElement('div');
    newSwatch.classList.add('swatch'); 
    newSwatch.style.backgroundColor = currentColor; 
    
    // Füge das neue Element in den Container ein
    palette.appendChild(newSwatch);
});
```
