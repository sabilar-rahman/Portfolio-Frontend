import  { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaArrowLeft,
  FaTags,
  FaLightbulb
} from 'react-icons/fa'

import moment from 'moment'

import { useGetSingleProjectQuery } from '@/redux/featuresApi/project/projectApi'
import Spinner from '@/UtilsFeatures/Spinner'

const Details = () => {
  const { id } = useParams()

  const { data: projectData } = useGetSingleProjectQuery(id)
  const project = projectData?.data

  const formattedStartDate = project?.startDate
    ? moment(project.startDate).format('YYYY-MM-DD')
    : ''
  const formattedEndDate = project?.endDate
    ? moment(project.endDate).format('YYYY-MM-DD')
    : ''

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return <Spinner />
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-base-200 to-base-300'>
      <div className='container mx-auto px-4 py-32'>
        <Link
          to='/'
          className='mb-8 inline-flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-200 ease-in-out'>
          <FaArrowLeft className='mr-2' /> Back to home
        </Link>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='relative overflow-hidden rounded-lg shadow-2xl'>
            <img
              src={project.thumbnail}
              alt={project.title}
              className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-500'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-primary mb-4'>
              {project.title}
            </h1>
            <p className='text-xl text-base-content mb-6'>
              {project.shortDescription}
            </p>
            <div className='flex items-center text-base-content opacity-70 mb-6'>
              <FaCalendarAlt className='mr-2' />
              <span>
                {formattedStartDate} - {formattedEndDate}
              </span>
            </div>
            <div className='flex space-x-4'>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary'>
                <FaGithub className='mr-2' /> GitHub
              </a>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary'>
                <FaExternalLinkAlt className='mr-2' /> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className='bg-base-100 shadow-xl rounded-lg overflow-hidden'>
          <div className='p-6 md:p-10'>
            <h2 className='text-3xl font-bold mb-6 text-primary'>
              Project Overview
            </h2>
            <p className='text-xl text-base-content mb-8'>
              {project.longDescription}
            </p>

            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div className='bg-base-200 p-6 rounded-lg'>
                <h3 className='text-2xl font-bold mb-4 flex items-center'>
                  <FaTags className='mr-2 ' /> Technologies Used
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies?.map((tech, index) => (
                    <span key={index} className='badge badge-primary badge-lg'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='bg-base-200 p-6 rounded-lg'>
                <h3 className='text-2xl font-bold mb-4 flex items-center'>
                  <FaLightbulb className='mr-2 ' /> Key Features
                </h3>
                <ul className='space-y-2'>
                  {project.features?.map((feature, index) => (
                    <li
                      key={index}
                      className='text-base-content flex items-start'>
                      <span className='inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2'></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
