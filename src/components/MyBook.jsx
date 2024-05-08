import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './pages/Cover/Cover';
import coverImg from "../assets/Cover2.png"



function MyBook() {
  return (
    <HTMLFlipBook width={600} height={800} showCover="true">
      <Page numer={1}>
        <Cover coverImg={coverImg} title ="My Portfolio" />
      </Page>

      <Page numer={2}>
        <div className="demoPage text-gray-800 text-3xl">Page 2</div>
      </Page>
      <Page numer={3}>
        <div className="demoPage text-gray-800  text-3xl">Page 3</div>
      </Page>
      <Page numer={4}>
        <div className="demoPage text-gray-800 text-3xl">Page 4</div>
      </Page>

    </HTMLFlipBook>
  );
}

export default MyBook;
