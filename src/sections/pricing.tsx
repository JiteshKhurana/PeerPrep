import PricingPlan from '@/components/pricing-plan'

export default function Pricing() {
  return (
    <section className="inset-0 flex w-full flex-col items-center justify-center border-b-2 border-b-black bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Pricing
        </h2>
        <div className="grid grid-cols-2 gap-8 w900:mx-auto w900:w-2/3 w900:grid-cols-1 w500:w-full">
          <PricingPlan
            planName="Basic"
            description="Free forever plan to connect with peers and take unlimited mock interviews."
            price="Free"
            perks={[
              'Connect with peers',
              'Unlimited mock interviews',
              'Upskill yourself',
            ]}
          />
          <PricingPlan
            planName="Growth"
            description="Mock Interview with the creator of PeerPrep, Jitesh Khurana."
            price="₹250"
            perks={[
              'Interviews by Jitesh Khurana',
              'Doubt support',
              'Direct messaging anytime',
              'Career advice',
              'Roadmaps',
            ]}
            mostPopular
          />
        </div>
      </div>
    </section>
  )
}
