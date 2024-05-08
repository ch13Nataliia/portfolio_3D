import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './pages/Cover/Cover';
import coverImg from '../assets/Cover2.png';
import FirstPage from './pages/Hero/FirstPage';
import SkillsPage from './pages/Skills/SkillsPage';
import Services from './pages/Serve/Services';
import AboutPage from './pages/About/AboutPage';
import ProjectPageOne from './pages/Projects/ProjectPageOne';
import ProjectPageTwo from './pages/Projects/ProjectPageTwo';

function MyBook() {
  return (
    <HTMLFlipBook width={600} height={800} showCover="true">
      <Page numer={1}>
        <Cover coverImg={coverImg} title="Portfolio" subtitle="Nataliia Tsirul"/>
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
      <Page numer={6}>
       <ProjectPageOne />
      </Page>
      <Page numer={7}>
       <ProjectPageTwo />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
