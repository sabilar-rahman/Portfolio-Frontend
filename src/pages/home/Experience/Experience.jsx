import { useGetAllExperiencesQuery } from '@/redux/featuresApi/experience/experienceApi';
import Spinner from '@/UtilsFeatures/Spinner';

import { motion, AnimatePresence } from 'framer-motion'

const Experience = () => {


    const { data: experienceData, isLoading } = useGetAllExperiencesQuery({})
    const experience = experienceData?.data

    return (

        <section className='py-20 bg-gray-100' id='experience'>
            <div className='container mx-auto px-4'>
                <div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}>
                        <h3 className='text-4xl font-extrabold text-center text-gray-800 mb-12'>
                            Experience
                        </h3>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <>
                                {experience?.map((exp, index) => (
                                    <div
                                        key={index}
                                        className='bg-white rounded-lg p-4 shadow-md mb-4'>
                                        <h4 className='text-xl font-semibold text-gray-700'>
                                            {exp?.company}
                                        </h4>
                                        <p className=' italic'>
                                            {exp?.designation}
                                        </p>
                                        <p className=' italic'>
                                            {`${exp?.startTime} - ${exp?.endTime}`}
                                        </p>
                                        <p className='text-gray-600 mt-2'>{exp?.description}</p>
                                    </div>
                                ))}
                            </>
                        )}
                    </motion.div>

                </div>


            </div>
        </section>
    );
};

export default Experience;