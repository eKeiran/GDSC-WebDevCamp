import uniqid from 'uniqid'
import { projects } from '../portfolio'
import ProjectContainer from '../components/ProjectContainer/ProjectContainer'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='max-w-[1000px] m-0 grid gap-8 lg:grid-cols-3'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
