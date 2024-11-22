
import { motion } from 'framer-motion'



import { useGetAllSkillsQuery } from '@/redux/featuresApi/skills/skillsApi'
import Spinner from '@/UtilsFeatures/Spinner'
import SkillCard from './SkillCard'

const Skills = () => {
  const { data: skillData, isLoading } = useGetAllSkillsQuery({})
  const skillsData = skillData?.data || [];

  return (
    <section className='py-20 bg-gray-100' id='skills'>
      <div className='container mx-auto px-4'>
        <div>
          <motion.h2
            className='text-4xl font-extrabold text-center text-gray-800 mb-12'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Skills
          </motion.h2>

          {isLoading ? (
            <div className='flex justify-center items-center h-64'>
              <Spinner />
            </div>
          ) : (
            <motion.div
              className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              {skillsData.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </motion.div>
          )}
        </div>

        {/* Divider */}

      </div>
    </section>
  )
}

export default Skills
