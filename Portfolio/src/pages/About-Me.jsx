import Nav from "../components/Nav"
import Footer from "../components/Footer"

const frontEndProficiencies = [
  {
    id: 1,
    proficiency: 'HTML',
  },
  {
    id: 2,
    proficiency: "CSS",
  },
  {
    id: 3,
    proficiency: "JavaSCript",
  },
  {
    id: 4,
    proficiency: "jQuery",
  },
  {
    id: 5,
    proficiency: "React",
  },
  {
    id: 6,
    proficiency: "Bootstrap",
  },
]

const backEndProficiencies = [  
  {
    id: 1,
    proficiency: 'APIs',
  },
  {
    id: 2,
    proficiency: "Node",
  },
  {
    id: 3,
    proficiency: "Express",
  },
  {
    id: 4,
    proficiency: "MySQL - Sequelize",
  },
  {
    id: 5,
    proficiency: "MongoDB - Mongoose",
  },
  {
    id: 6,
    proficiency: "REST",
  },
  {
    id: 7,
    proficiency: "GraphQL",
  },
]

export default function AboutMe () {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Nav/>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl dark:text-white">
              About Me
            </h2>
            <p className="mt-4 text-base/7 text-pretty text-gray-600 dark:text-gray-400">
              Hi, my name's Tim. I'm an aspiring full-stack web develop and this website showcases some of my work.
            </p>
          </div>
          {/* Front End */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <h2 className="text-xl/8 font-semibold text-gray-900 dark:text-white">Front End Proficiencies</h2>
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {frontEndProficiencies.map((prof) => (
                  <li key={prof.id}>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {prof.proficiency}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Back End */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <h2 className="text-xl/8 font-semibold text-gray-900 dark:text-white">Back End Proficiencies</h2>
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {backEndProficiencies.map((prof) => (
                  <li key={prof.id}>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {prof.proficiency}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
