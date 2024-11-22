

import { useGetAllProjectsQuery } from '@/redux/featuresApi/project/projectApi'
import Spinner from '@/UtilsFeatures/Spinner'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'




const Projects = () => {
  const { data: projectsData, isLoading } = useGetAllProjectsQuery({})

  return (
    <section className='pb-20 bg-gray-100' id='projects'>
      <div className='container mx-auto px-4'>
        <div className='pt-10'>
          {' '}
          <motion.h2
            className='text-4xl font-extrabold text-center text-gray-800 mb-12'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Projects
          </motion.h2>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projectsData?.data?.map((project) => (
                <ProjectCard key={project?._id} project={project} />
              ))}
            </div>
          )}
        </div>
        {/* divider */}
        {/* <Divider /> */}
      </div>
    </section>
  )
}

export default Projects
