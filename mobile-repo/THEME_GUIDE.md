# Theme & Styles Guide – Mobile (React Native)

## ✅ Typography

| Style    | Font  | Size  | Weight   | Usage                |
|----------|-------|-------|----------|----------------------|
| Display  | Inter | 28px  | Bold     | Welcome titles       |
| Title    | Inter | 22px  | SemiBold | Screen headers       |
| Subtitle | Inter | 18px  | Medium   | Section titles       |
| Body     | Inter | 16px  | Regular  | Default text         |
| Caption  | Inter | 14px  | Light    | Helper text, Labels  |

**Font Files:**
Include in `assets/fonts/`:
- Inter-Regular.ttf
- Inter-Medium.ttf
- Inter-SemiBold.ttf
- Inter-Bold.ttf

---

## ✅ Color Palette

| Name             | HEX      | Usage                        |
|------------------|----------|------------------------------|
| Primary Purple   | #5A31F4  | Header, Bottom Tabs          |
| Accent Teal      | #2CD3C5  | Buttons, Highlights          |
| Background       | #FFFFFF  | App Background               |
| Card Background  | #F4F5F7  | Product / Profile Cards      |
| Input Border     | #E0E0E0  | Text fields, Dividers        |
| Text Primary     | #333333  | Default text                 |
| Text Secondary   | #7D7D7D  | Subtext                      |
| Success Green    | #00C48C  | Order success state          |
| Error Red        | #FF647C  | Failed payment, errors       |

---

## ✅ Spacing Tokens

Use in `theme/spacing.ts`:
```ts
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};
```

---

## ✅ Shadows & Elevation

| Component | Elevation | Shadow                                 |
|-----------|-----------|----------------------------------------|
| Button    | 2         | Android shadow/elevation               |
| Card      | 3         | Use shadowColor + shadowOffset on iOS  |
| Modal     | 6         | Full-screen shadow                     |

---

## ✅ Border Radius

Use in `theme/borderRadius.ts`:
```ts
export const borderRadius = {
  small: 6,
  medium: 12,
  large: 20,
};
```
- Use large radius for cards, medium for buttons/inputs

---

## ✅ Components & Theme Tokens

Use Tailwind-like or styled-components naming conventions:

// theme/colors.ts
```ts
export const colors = {
  primary: '#5A31F4',
  accent: '#2CD3C5',
  background: '#FFFFFF',
  text: '#333333',
  muted: '#7D7D7D',
  success: '#00C48C',
  danger: '#FF647C',
};
```
- Define in `theme/index.ts` to export all tokens.

---

## ✅ Navigation Theme (React Navigation)

```ts
const NavigationTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    primary: '#5A31F4',
    card: '#F4F5F7',
    text: '#333333',
    border: '#E0E0E0',
    notification: '#2CD3C5',
  },
};
```

---

## 🔧 Extras
- Both web and mobile share common token names (primary, secondary, success, spacing.sm, border.radius.medium) for design consistency.
- Figma files should use shared Tokens Studio naming for compatibility. 