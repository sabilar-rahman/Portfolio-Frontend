import AddSkillsModal from "@/pages/component/AddSkillsModal"
import SkillCard from "@/pages/home/Skills/SkillCard"
import { useGetAllSkillsQuery } from "@/redux/featuresApi/skills/skillsApi"
import Spinner from "@/UtilsFeatures/Spinner"



const Skills = () => {
  const { data: skillData, isLoading } = useGetAllSkillsQuery({})

  const skillsData = skillData?.data

  return (
    <div className='p-4 lg:p-8 min-h-screen flex flex-col'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-semibold text-gray-800'>My Skills</h1>
        <AddSkillsModal />
      </div>

      <div className='h-1 w-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 my-6'></div>

      {isLoading ? (
        <div className='flex-1 flex items-center justify-center'>
          <Spinner />
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillsData?.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Skills
