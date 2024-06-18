export default function Community() {
  const reviews = [
    {
      pfp: 'https://avatars.githubusercontent.com/u/95995545?v=4',
      fullName: 'Jitesh Khurana',
      jobTitle: '4th Year, Thapar University',
      review:
        'PeerPrep has been a game-changer for me. The mock interviews have significantly improved my confidence.',
    },
    {
      pfp: 'https://media.gettyimages.com/id/1213693689/photo/teenager-girl-doing-her-homework-stock-photo.jpg?s=612x612&w=0&k=20&c=p6C8ktVZRHlVNOfufIhypQOs2-H9gN204apBrAta9Qc=',
      fullName: 'Isha Patel',
      jobTitle: '2nd Year, IIT Delhi',
      review:
        'The role-switching feature is fantastic. It has given me a better understanding of both sides of the interview process.',
    },
    {
      pfp: 'https://media.gettyimages.com/id/987130494/photo/group-of-students-joking-and-getting-to-know-each-other.jpg?s=612x612&w=0&k=20&c=xzBrI0krhgttDdaAAwvh6mPYLHjiP_vfF7CPvBTAqvo%3D',
      fullName: 'Rohan Gupta',
      jobTitle: '3rd Year, BITS Pilani',
      review:
        'Practicing technical challenges on PeerPrep has sharpened my problem-solving skills immensely.',
    },
    {
      pfp: 'https://media.gettyimages.com/id/1286909296/photo/young-man-studying-stock-photo.jpg?s=612x612&w=0&k=20&c=6-1e9xgrbtmqVQki6Hl-_9XCUAXJE0mvpvH5W_Sh6no%3D',
      fullName: 'Sneha Reddy',
      jobTitle: '1st Year, NIT Trichy',
      review:
        'The peer feedback is invaluable. It has helped me identify and work on my weak areas.',
    },
    {
      pfp: 'https://media.gettyimages.com/id/1141737652/photo/portrait-of-a-confident-young-man.jpg?s=612x612&w=0&k=20&c=YQaYjmbPGpJ0DXxGSTLHFPWsBKjBsAmR_l-XHYt2vHU%3D',
      fullName: 'Vikram Singh',
      jobTitle: '2nd Year, VIT Vellore',
      review:
        'PeerPrep’s community support is amazing. It’s great to be part of a group that is focused on mutual growth.',
    },
    {
      pfp: 'https://media.gettyimages.com/id/914314344/photo/young-woman-taking-an-exam-writing-at-desk-in-classroom.jpg?s=612x612&w=0&k=20&c=NK4wPPrk0zeWL_9yiuYGBGXGU9qRLurznXmvJeclaRQ%3D',
      fullName: 'Ananya Desai',
      jobTitle: '3rd Year, Manipal University',
      review:
        'The platform has helped me develop both my technical and soft skills through regular practice and feedback.',
    },
  ]

  return (
    <section className="inset-0 flex w-full flex-col items-center justify-center border-b-2 border-b-black bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Loved by the PeerPrep Community
        </h2>
        <div className="grid grid-cols-3 gap-4 lg:gap-8 w900:grid-cols-1 w900:gap-0">
          {[
            [reviews[0], reviews[1]],
            [reviews[2], reviews[3], reviews[4]],
            [reviews[5]],
          ].map((card, index) => (
            <div className="group flex flex-col justify-center" key={index}>
              {card.map(({ jobTitle, pfp, fullName, review }, index) => (
                <div
                  className="mb-4 min-h-48 w-full rounded-base border-2 border-black bg-bg p-5 shadow-base lg:mb-8 w900:mx-auto w900:min-h-20 w900:w-2/3 w500:w-full"
                  key={index}
                >
                  <div className="flex items-center gap-5">
                    <img
                      className="h-12 w-12 rounded-base border-2 border-black"
                      src={pfp}
                      alt="pfp"
                    />

                    <div>
                      <h4 className="text-lg font-heading">{fullName}</h4>
                      <p className="text-sm font-base">{jobTitle}</p>
                    </div>
                  </div>
                  <div className="mt-5">{review}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
