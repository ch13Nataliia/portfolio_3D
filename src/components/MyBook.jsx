import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './pages/Cover/Cover';
import coverImg from '../assets/Cover2.png';
import FirstPage from './pages/Hero/FirstPage';
import SkillsPage from './pages/Skills/SkillsPage';
import Services from './pages/Serve/Services';
import AboutPage from './pages/About/AboutPage';

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
     <AboutPage />
      </Page>
      <Page numer={5}>
       <Services />
      </Page>
     
    </HTMLFlipBook>
  );
}

export default MyBook;
