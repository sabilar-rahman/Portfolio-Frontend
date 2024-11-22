import { useAddExperienceMutation } from '@/redux/featuresApi/experience/experienceApi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaPlusCircle } from 'react-icons/fa'
import { toast } from 'sonner'



const AddExperienceModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const openModal = () => setIsModalOpen(true)

  const closeModal = () => {
    setIsModalOpen(false)
    reset()
  }

  const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleString('en-US', {
      month: 'long',
      year: 'numeric'
    })
  }

  const [handleAddExperience, { isLoading }] = useAddExperienceMutation()

  const onSubmit = async (data) => {
    const experienceData = {
      ...data,
      startTime: formatDate(data.startTime),
      endTime: formatDate(data.endTime)
    }
    try {
      const res = await handleAddExperience(experienceData)

      if ('error' in res) {
        toast.error('Failed to create experience', { duration: 2000 })
      } else {
        toast.success('Experience created successfully', { duration: 2000 })
        closeModal()
      }
    } catch (error) {
      toast.error('Something went wrong', { duration: 2000 })
    }
  }

  return (
    <>
      <button
        className='btn btn-primary flex items-center gap-2'
        onClick={openModal}>
        <FaPlusCircle className='text-xl align-middle' />
        Add Experience
      </button>

      {isModalOpen && (
        <div className='modal modal-open'>
          <div className='modal-box w-11/12 max-w-5xl'>
            <h3 className='font-bold text-lg mb-4'>Add New Experience</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <label className='label' htmlFor='company'>
                  <span className='label-text'>Company Name</span>
                </label>
                <input
                  type='text'
                  id='company'
                  {...register('company', {
                    required: 'Company Name is required'
                  })}
                  className='input input-bordered w-full'
                />
                {errors.companyName && (
                  <span className='text-error text-sm'>
                    {errors.companyName.message}
                  </span>
                )}
              </div>

              <div>
                <label className='label' htmlFor='designation'>
                  <span className='label-text'>Designation</span>
                </label>
                <input
                  id='designation'
                  {...register('designation', {
                    required: 'Designation is required'
                  })}
                  className='input input-bordered w-full'></input>
                {errors.designation && (
                  <span className='text-error text-sm'>
                    {errors.designation.message}
                  </span>
                )}
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                <div>
                  <label className='label' htmlFor='startTime'>
                    <span className='label-text'>Start Time</span>
                  </label>
                  <input
                    type='month'
                    id='startTime'
                    {...register('startTime', {
                      required: 'Start Time is required'
                    })}
                    className='input input-bordered w-full'
                  />
                  {errors.startTime && (
                    <span className='text-error text-sm'>
                      {errors.startTime.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className='label' htmlFor='endTime'>
                    <span className='label-text'>End Time</span>
                  </label>
                  <input
                    type='month'
                    id='endTime'
                    {...register('endTime', {
                      required: 'End Time is required'
                    })}
                    className='input input-bordered w-full'
                  />
                  {errors.endTime && (
                    <span className='text-error text-sm'>
                      {errors.endTime.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className='label' htmlFor='description'>
                  <span className='label-text'>Description</span>
                </label>
                <textarea
                  id='description'
                  {...register('description', {
                    required: 'Description is required'
                  })}
                  className='textarea textarea-bordered w-full h-24'></textarea>
                {errors.description && (
                  <span className='text-error text-sm'>
                    {errors.description.message}
                  </span>
                )}
              </div>

              <div className='modal-action flex gap-4 justify-end'>
                <button
                  type='submit'
                  className={`btn bg-primary text-white hover:bg-primary-dark focus:ring focus:ring-primary-light transition-all ${
                    isLoading && 'loading loading-spinner'
                  }`}>
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
                <button
                  type='button'
                  className='btn bg-white border border-gray-400 text-gray-600 hover:text-white hover:bg-red-500 hover:border-red-500 focus:ring focus:ring-red-300 transition-all'
                  onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default AddExperienceModal
