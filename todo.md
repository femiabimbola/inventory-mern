# To do 

Install Nextjs at the frontend 
```bash
npx create-next-app@latest client
```

He is using material ui

```bash
npm i @mui/x-data-grid 
npm @mui/material @motion/react @emotion/styled lucide-react numeral rechart uuid axios
```

Clear all the default nextjs app and in the globalcss

```global.css
*
*::before,
*::after{
  box-sizing:border-box
}

html, body #root .app {
  height: 100%
  width:100%
  @apply text-sm;
  @apply bg-gray-500
  @apply text-gray-900
}
```

To set the dark mode
```bash
npm i -D tw-colors
```