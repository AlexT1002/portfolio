import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainSection from "./sections/MainSection.tsx";
// import AboutSection from "./sections/AboutSection.tsx";
// import ProjectsSection from "./sections/ProjectsSection.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MainSection/>
      {/*<AboutSection/>*/}
      {/*<ProjectsSection/>*/}
  </StrictMode>,
)
