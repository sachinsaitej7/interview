This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

For styling, we use Tailwindcss and Preline components. You are welcome to use any other UI framework to get Tasks done. 
For Icons, we use https://lucide.dev/guide/packages/lucide-react. Again you are welcome to use a raw svg (or any other package.)

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks

### Bugs
1. Rotten Tomatos movies (provider [rt](/src/server/providers/rt/)) are not showing up on the front page. Eg: Breaking Bad should show up under "Crime" genre, but its not.
   Differences between RT (not working) and Imdb (working):
   1. Data might have different structure compared to IMDB data (e.g. field names).
   2. RT data doesn't have a poster, assume the first image as the poster. 
2. Genre List is not sorted. 
3. Show a fallback image when image fails to load. (There is a poster without an image)

### Improvements
1. Favorite feature.
    1. [Backend] Expose functionality to favorite a movie. (keep favorites in memory)
    2. [Frontend] Show "star" icon to enable favorite.
    3. note: You can assume that the favoriting is a global feature. no need to worry about user authentication.
2. Make the front page look pretty.
    1. Get caraousel working. https://preline.co/docs/carousel.html     
    2. Make Plot show up on hover. (extra points: after 500ms delay)    
    3. Make thumbnails switch from time to time.
    4. You are welcome to make changes to the font / padding / margins if you think they are needed.




## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwindcss Documentation](https://tailwindcss.com/docs/) - learn tailwindcss to quickly improve css styling.
- [Preline documenation](https://preline.co/docs/index.html) - learn preline components