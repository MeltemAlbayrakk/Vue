
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';


/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      gri:"#AEAEAE",
      lila:"#684BF3",
      zinc:"#27272a",
      fade:"#f0f0f0",
      redd:"#e11d48",
      yelloww:"#facc15"
    },
    extend: {},
    },
  

  plugins: [
    ["@babel/plugin-transform-private-methods"],
    require('flowbite/plugin'),
    typography,
    forms,
    aspectRatio,
  ],
}

