// Libraries
import Head from 'next/head';
// Custom Components
//import DishTile from '../components/Dishes/DishTile';
// CSS
import styles from '../styles/Home.module.css';

export default function Home() {
  // A demo dish to label the parts for new users
  const eatTile = {
    meat: 'pork',
    zhtw: '刈包',
    pinyin: 'guàbāo',
    en: 'Pork Belly Bun',
  };

  /* const drinkTile = {
    category: 'drink',
    zhtw: '珍珠奶茶',
    pinyin: 'zhēnzhū nǎichá',
    en: 'Bubble Milk Tea',
  }; */

  // The welcome page
  return (
    <div>
      <Head>
        <title>Eatt</title>
        <meta name="description" content="Expand your meals with bilingual menus for your favorite local restaurants" />
        <meta name="keywords" content="translation, menu, chinese, english, mandarin, taiwan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.block1}>
        <h1 className={styles.shout}>
          <span className={styles.flash}>Eat</span> your heart out
        </h1>
        <img alt="Gua Bao" className={styles.image} src="./img/pexels-adrian-dorobantu-2089712.jpg" height="auto" />
        <div className={styles.dish}>{/* <DishTile item={eatTile} className={styles.food} />{' '} */}</div>
      </div>
      {/* <div className={styles.block2}>
        <h1 className={styles.shout}>
          <span className={styles.flash}>Drink</span> and be merry.
        </h1>

        <img
          src="./img/taiwan-pearl-milk-tea-with-bubble-ximending-taipei-taiwan.jpg"
          alt="Milk Tea"
          height="auto"
        />
        <div className={styles.dish}>
          <Dish item={drinkTile} />{' '}
        </div>
      </div> */}

      <footer>I'm a footer!</footer>
    </div>
  );
}

/* <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <!-- Including the bootstrap css via CDN -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Menu App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
 */
