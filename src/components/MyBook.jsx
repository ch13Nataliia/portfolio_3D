import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './pages/Cover/Cover';
import coverImg from '../assets/Cover2.png';
import FirstPage from './pages/Hero/FirstPage';
import SkillsPage from './pages/Skills/SkillsPage';

function MyBook() {
  return (
    <HTMLFlipBook width={600} height={800} showCover="true">
      <Page numer={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
      </Page>

      <Page numer={2}>
        <FirstPage />
      </Page>
      <Page numer={3}>
        <SkillsPage />
      </Page>
      <Page numer={4}>
        <div className="demoPage text-gray-800 text-3xl">Page 4</div>
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
