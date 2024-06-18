import Marquee from 'react-fast-marquee'
import {
  UserCheck,
  Repeat,
  Code,
  MessageCircle,
  TrendingUp,
  Users,
} from 'lucide-react'

export default function Features() {
  const icons = [
    <UserCheck key={0} size={48} />,
    <Repeat key={1} size={48} />,
    <Code key={2} size={48} />,
    <MessageCircle key={3} size={48} />,
    <TrendingUp key={4} size={48} />,
    <Users key={5} size={48} />,
  ]

  const features = [
    {
      title: 'Mock Interviews',
      text: 'Practice technical interviews with peers to improve your skills and confidence.',
    },
    {
      title: 'Role Switching',
      text: 'Alternate between being an interviewer and an interviewee to gain a comprehensive understanding of the interview process.',
    },
    {
      title: 'Technical Challenges',
      text: 'Solve problems related to data structures, algorithms, frontend, and backend development.',
    },
    {
      title: 'Peer Feedback',
      text: 'Receive constructive feedback from peers to identify areas of improvement.',
    },
    {
      title: 'Skill Development',
      text: 'Enhance your technical and soft skills through regular practice and feedback.',
    },
    {
      title: 'Community Support',
      text: 'Join a community of like-minded individuals focused on mutual growth and success.',
    },
  ]

  return (
    <div>
      <section className="border-t-2 border-t-black bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Key Features of PeerPrep
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            return (
              <div
                className="flex flex-col gap-3 rounded-base border-2 border-black bg-white p-5 shadow-base"
                key={i}
              >
                <div className="h-12 w-12 rounded-base">{icons[i]}</div>

                <h4 className="mt-2 text-xl font-heading">{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            )
          })}
        </div>
      </section>
      <div>
        <Marquee
          className="border-y-2 border-y-black bg-white py-3 font-base sm:py-5"
          direction="left"
        >
          {Array(10)
            .fill('xd')
            .map((x, id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="mx-10 text-xl font-heading sm:text-2xl lg:text-4xl">
                    PeerPrep: Connect, Practice, Succeed
                  </span>
                  <UserCheck className="w-[35px] sm:w-[45px]" />
                </div>
              )
            })}
        </Marquee>
      </div>
    </div>
  )
}
