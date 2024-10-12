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

html, body, #root, .app {
  height: 100%;
  width:100%;
  @apply text-sm;
  @apply bg-gray-500;
  @apply text-gray-900;
}
```

To set the dark mode and use colors
```bash
npm i -D tw-colors
```

### The links
completed code - https://github.com/ed-roh/inventory-management/tree/master 


**Next Steps**<br/>
Working on the tailwind Config file to do the dark mode and light mode


## Working with React Redux toolkit
```bash
npm i react-redux @reduxjs/toolkit 
```

## Using Prisma
```bash
npm i -D prisma @prisma/client
```

```bash
npm i  @prisma/client
```

After the prisma client, create a file in the lin

```bash
// To prevent too many prisma client, we have to add store the database in  globalThis.prisma for the development mode only
// globalThis is not affected by hotreload

// Prisma Learning, do this before doing Prisma init, after add this, do Prisma init

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Nextjs hotreload will use the globalThis.prisma

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db


// export const db = new PrismaClient(); it is for production
```

Then `npx prisma init`


I stopped at 1:37:04 -> I will setup supabase db


