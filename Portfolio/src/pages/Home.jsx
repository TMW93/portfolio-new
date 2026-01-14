import Nav from '../components/Nav'
import Footer from '../components/Footer'
import basketballSandbox from '../assets/images/basketball-sandbox.png'
import mtkTutoring from '../assets/images/mtk-tutoring.png'
import cookTube from '../assets/images/cooktube.png'
import movieClub from '../assets/images/movie-club.png'
import techBlog from '../assets/images/tech-blog.png'
import employeeTracker from '../assets/images/employee-tracker.png'
import eCommerceBackend from '../assets/images/e-commerce-backend.png'

const githubLogo =   {
  name: 'GitHub',
  href: 'https://github.com/TMW93',
  icon: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const posts = [
  {
    id: 1,
    title: 'Basketball Sandbox',
    href: 'https://acba-sandbox.onrender.com/',
    description: 'A website to display games, scores, standings, news, merch and more for a local basketball organisation',
    imageUrl: basketballSandbox,
    status: 'Online',
    githubRepo: 'https://github.com/TMW93/ACBA',
  },
  {
    id: 2,
    title: 'Booking Website',
    href: '#',
    description: 'A website that allows users to book hourly timeslots on a 7 day calendar.',
    imageUrl: mtkTutoring,
    status: 'Offline',
    githubRepo: 'https://github.com/TMW93/mtk-tutoring',
  },
  {
    id: 3,
    title: 'Cooking Website',
    href: '#',
    description: 'A site to grab and favourite cooking recipes',
    imageUrl: cookTube,
    status: 'Offline',
    githubRepo: 'https://github.com/TMW93/Cooktube',
  },
  {
    id: 4,
    title: 'Movie Review Website',
    href: '#',
    description: 'A website to post reviews for selected movies, rotating every week.',
    imageUrl: movieClub,
    status: 'Offline',
    githubRepo: 'https://github.com/isaacfallon/Movie-Club-Project-2',
  },
  {
    id: 5,
    title: 'Blog Website',
    href: '#',
    description: 'A website that displays posts and comments from users',
    imageUrl: techBlog,
    status: 'Offline',
    githubRepo: 'https://github.com/TMW93/Tech-Blog',
  },
  {
    id: 6,
    title: 'SQL E-Commerce Backend',
    href: '#',
    description: 'A project to store item data from a store using postgress',
    imageUrl: eCommerceBackend,
    status: 'Offline',
    githubRepo: 'https://github.com/TMW93/E-Commerce-Back-End',
  },
]

export default function Home () {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
      <Nav/>
      <div className="flex-1 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            My Portfolio
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
            Here are some of the projects I have worked on:
          </p>
        </div>
        {/* Images */}
        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-center items-center overflow-hidden rounded-2xl bg-gray-900 px-18 pt-80 pb-8 sm:pt-48 lg:pt-80 dark:bg-gray-800"
            >
              <img alt="" src={post.imageUrl} className="absolute inset-0 -z-10 size-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40 dark:from-black/80 dark:via-black/40" />
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                <span className="mr-8">
                  Status
                </span>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50 dark:fill-gray-300/50">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <span>
                      {post.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10" /> 
              <h3 className="mt-3 text-lg/6 font-semibold text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
