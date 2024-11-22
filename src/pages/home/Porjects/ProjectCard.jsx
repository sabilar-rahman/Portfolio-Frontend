import  { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa'
import moment from 'moment'

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  const formattedStartDate = project?.startDate
    ? moment(project.startDate).format('YYYY-MM-DD')
    : ''
  const formattedEndDate = project?.endDate
    ? moment(project.endDate).format('YYYY-MM-DD')
    : ''

  return (
    <div
      className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <figure className='relative'>
        <img
          src={project?.thumbnail}
          alt={project?.title}
          className='w-full h-56 object-cover'
        />
        {isHovered && (
          <div className='absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center space-x-4 transition-opacity duration-300'>
            <a
              href={project?.githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-circle btn-primary'>
              <FaGithub className='text-2xl' />
            </a>
            <a
              href={project?.liveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-circle btn-primary'>
              <FaExternalLinkAlt className='text-2xl' />
            </a>
          </div>
        )}
      </figure>
      <div className='card-body p-6'>
        <h2 className='card-title text-2xl font-bold text-primary mb-2'>
          {project?.title}
        </h2>
        <p className='text-base-content opacity-70 mb-4'>
          {project?.shortDescription}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project?.technologies?.slice(0, 4).map((tech, index) => (
            <span key={index} className='badge badge-primary text-xs'>
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className='badge badge-primary text-xs'>
              +{project?.technologies?.length - 4} more
            </span>
          )}
        </div>
        <div className='flex items-center text-sm text-base-content opacity-70 mb-4'>
          <FaCalendarAlt className='mr-2' />
          <span>
            {formattedStartDate} - {formattedEndDate}
          </span>
        </div>
        <div className='card-actions justify-end'>
          <Link
            to={`/details/${project?._id}`}
            className='btn btn-primary btn-sm'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
