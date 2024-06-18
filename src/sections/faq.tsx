import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Marquee from 'react-fast-marquee'

export default function Faq() {
  return (
    <div>
      <section className=" bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto grid w-[700px] max-w-full px-5">
          <Accordion className="text-base sm:text-lg" type="single" collapsible>
            <AccordionItem className="mb-2" value="item-1">
              <AccordionTrigger>What is PeerPrep?</AccordionTrigger>
              <AccordionContent>
                PeerPrep is a platform that enables students to connect with
                their peers and conduct mock interviews. It helps students
                practice technical interviews, including problem-solving for
                data structures and algorithms, frontend, and backend
                development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-2">
              <AccordionTrigger>
                How does the role-switching feature work?
              </AccordionTrigger>
              <AccordionContent>
                The role-switching feature allows students to alternate between
                being an interviewer and an interviewee. This reciprocal process
                helps both parties gain a comprehensive understanding of the
                interview process and improve their skills.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-3">
              <AccordionTrigger>
                What types of technical challenges are available?
              </AccordionTrigger>
              <AccordionContent>
                PeerPrep offers a variety of technical challenges, including
                problems related to data structures, algorithms, frontend
                development, and backend development. These challenges are
                designed to help students prepare for real technical interviews.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How can I provide and receive feedback?
              </AccordionTrigger>
              <AccordionContent>
                After each mock interview session, both the interviewer and the
                interviewee can provide feedback to each other. This feedback is
                crucial for identifying areas of improvement and enhancing
                overall performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <div>
        <Marquee
          className="border-y-2 border-y-black bg-white py-3 font-base sm:py-5"
          direction="right"
        >
          {Array(10)
            .fill('xd')
            .map((x, id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="mx-10 text-xl font-heading sm:text-2xl lg:text-4xl">
                    PeerPrep: Connect, Practice, Succeed
                  </span>
                  <img
                    className="w-[35px] sm:w-[45px]"
                    src={'/neobrutalism-icons/star3.svg'}
                    alt="star"
                  />
                </div>
              )
            })}
        </Marquee>
      </div>
    </div>
  )
}
