import { FaEdit, FaTrash } from 'react-icons/fa'


import Spinner from '@/UtilsFeatures/Spinner'
import { useGetAllExperiencesQuery } from '@/redux/featuresApi/experience/experienceApi'
import AddExperienceModal from '@/pages/component/AddExperienceModal'



const Experience = () => {
  const handleEdit = (index) => {
    console.log(`Edit experience at index: ${index}`)
    // Logic for editing the experience
  }

  const handleDelete = (index) => {
    console.log(`Delete experience at index: ${index}`)
    // Logic for deleting the experience
  }

  const { data: experienceData, isLoading } = useGetAllExperiencesQuery({})

  const experience = experienceData?.data

  return (
    <div className='p-4 lg:p-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-semibold text-gray-800'>My Experiences</h1>
        <AddExperienceModal />
      </div>

      <div className='h-1 w-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 my-6'></div>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200 rounded-lg shadow-md'>
          <thead>
            <tr className='bg-gray-100 text-gray-600 uppercase text-xs leading-normal'>
              <th className='py-3 px-6 text-left'>Company</th>
              <th className='py-3 px-6 text-left'>Designation</th>
              <th className='py-3 px-6 text-left'>Duration</th>
              <th className='py-3 px-6 text-left'>Description</th>
              <th className='py-3 px-6 text-left'>Actions</th>
            </tr>
          </thead>
          {isLoading ? (
            <Spinner />
          ) : (
            <tbody className='text-gray-600 text-sm font-light'>
              {experience?.map((exp, index) => (
                <tr
                  key={index}
                  className='border-b border-gray-200 hover:bg-gray-100'>
                  <td className='py-4 px-6'>{exp?.company}</td>
                  <td className='py-4 px-6'>{exp?.designation}</td>
                  <td className='py-4 px-6'>{`${exp?.startTime} - ${exp?.endTime}`}</td>
                  <td className='py-4 px-6'>{exp?.description}</td>
                  <td className='py-4 px-6 flex space-x-2'>
                    <button
                      onClick={() => handleEdit(index)}
                      className='btn btn-sm bg-blue-100 hover:bg-blue-200 text-blue-600 border border-blue-400 rounded-full p-2'>
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className='btn btn-sm bg-red-100 hover:bg-red-200 text-red-600 border border-red-400 rounded-full p-2'>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default Experience
