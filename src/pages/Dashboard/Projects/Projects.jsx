

import { useGetAllProjectsQuery } from '@/redux/featuresApi/project/projectApi'

import Spinner from '@/UtilsFeatures/Spinner'
import AddProjectModal from '@/pages/component/AddProjectModal'
import ProjectCard from '@/pages/home/Porjects/ProjectCard'


const Projects = () => {
  const { data: projectsData, isLoading } = useGetAllProjectsQuery({})

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='p-4 lg:p-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-semibold text-gray-800'>My Projects</h1>
        <AddProjectModal />
      </div>

      <div className='h-1 w-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 my-6'></div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projectsData?.data?.map((project) => (
            <ProjectCard key={project?._id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects
