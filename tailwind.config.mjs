/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sansita' : ['"Sansita"'],
			'poppins' : ['"Poppins"']
				  },
		extend: {
			width: {
				'calc-custom': 'calc(-674px + 100vw)',
			  },
			animation: {
				loop: 'loop 25s linear infinite',  // Définir l'animation loop
			  },
			  keyframes: {
				loop: {
				  '0%': {
					transform: 'translateX(0)',  // État de départ
				  },
				  '100%': {
					transform: 'translateX(-200%)',
				},
			},
		  },
		  backgroundImage:{
			grad:"var(--clr-gradient)",
		  },
		  colors: {
			primary : "rgb(var(--primary))",
			secondary : "hsl(var(--secondary))",
			light : "hsl(var(--light))"
		  }
		},

	},

	plugins: [],
}
