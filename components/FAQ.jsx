import Link from "next/link";
import { buyProduct } from "./buyProduct";

function FAQ() {
  return (
    <section className="bg-slate-100 overflow-hidden" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col text-left basis-1/2">
            <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
            <p className="text-3xl md:text-4xl font-extrabold text-base-content">
              Frequently Asked Questions
            </p>
          </div>

          <ul className="basis-1/2">
            <li>
              <details className="collapse collapse-plus relative flex gap-2 items-center w-full py-3 text-base font-semibold text-left border-t md:text-lg border-base-content/10">
                <summary className="collapse-title text-xl font-medium flex-1 focus:text-primary">
                  How can Trip Plans help me?
                </summary>
                <div className="collapse-content pb-5 leading-relaxed space-y-2 text-base font-medium">
                  <p>
                    With Trip Plans, you can organize all your travel details in
                    one place. It helps you remember travel dates, track
                    destinations, and store important notes, making your trips
                    stress-free.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details className="collapse collapse-plus relative flex gap-2 items-center w-full py-3 text-base font-semibold text-left border-t md:text-lg border-base-content/10">
                <summary className="collapse-title text-xl font-medium flex-1 focus:text-primary">
                  Who can use Trip Plans?
                </summary>
                <div className="collapse-content pb-5 leading-relaxed space-y-2 text-base font-medium">
                  <p>
                    Anyone who loves to travel can use Trip Plans! Whether
                    you're planning a vacation, a business trip, or a weekend
                    getaway, Trip Plans is here to simplify your journey.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details className="collapse collapse-plus relative flex gap-2 items-center w-full py-3 text-base font-semibold text-left border-t md:text-lg border-base-content/10">
                <summary className="collapse-title text-xl font-medium flex-1 focus:text-primary">
                  Is Trip Plans free to use?
                </summary>
                <div className="collapse-content pb-5 leading-relaxed space-y-2 text-base font-medium">
                  <p>
                    Yes, Trip Plans offers a free plan that allows you to create
                    one trip with up to 5 locations. It's a great way to get
                    started with trip planning.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details className="collapse collapse-plus relative flex gap-2 items-center w-full py-3 text-base font-semibold text-left border-t md:text-lg border-base-content/10">
                <summary className="collapse-title text-xl font-medium flex-1 focus:text-primary">
                  What are the benefits of upgrading to Premium?
                </summary>
                <div className="collapse-content pb-5 leading-relaxed space-y-2 text-base font-medium">
                  <p>
                    Upgrading to Premium gives you access to 3 trips with up to
                    10 locations per trip. It also provides lifetime access to
                    all premium features, ensuring you're always ready to plan
                    your next adventure.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details className="collapse collapse-plus relative flex gap-2 items-center w-full py-3 text-base font-semibold text-left border-t md:text-lg border-base-content/10">
                <summary className="collapse-title text-xl font-medium flex-1 focus:text-primary">
                  Why choose the VIP plan?
                </summary>
                <div className="collapse-content pb-5 leading-relaxed space-y-2 text-base font-medium">
                  <p>
                    The VIP plan offers the ultimate trip planning experience.
                    With access to 5 trips and the ability to include up to 20
                    locations per trip, VIP users enjoy lifetime access to
                    advanced features for a seamless travel planning experience.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details className="collapse collapse-plus relative flex gap-2 items-center w-full py-3 text-base font-semibold text-left border-t md:text-lg border-base-content/10">
                <summary className="collapse-title text-xl font-medium flex-1 focus:text-primary">
                  How do I get started with Trip Plans?
                </summary>
                <div className="collapse-content pb-5 leading-relaxed space-y-2 text-base font-medium">
                  <p>
                    Simply sign in via Google or email on our website. Once
                    you're logged in, you can start planning your trips right
                    away!
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details className="collapse collapse-plus relative flex gap-2 items-center w-full py-3 text-base font-semibold text-left border-t md:text-lg border-base-content/10">
                <summary className="collapse-title text-xl font-medium flex-1 focus:text-primary">
                  Is my data safe with Trip Plans?
                </summary>
                <div className="collapse-content pb-5 leading-relaxed space-y-2 text-base font-medium">
                  <p>
                    Absolutely! We take your privacy seriously. Trip Plans uses
                    industry-standard security measures to protect your data and
                    ensure it remains secure at all times.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details className="collapse collapse-plus relative flex gap-2 items-center w-full py-3 text-base font-semibold text-left border-t md:text-lg border-base-content/10">
                <summary className="collapse-title text-xl font-medium flex-1 focus:text-primary">
                  How can I contact Trip Plans for support?
                </summary>
                <div className="collapse-content pb-5 leading-relaxed space-y-2 text-base font-medium">
                  <p>
                    If you have any questions or need assistance, you can write
                    to us via email at{" "}
                    <a
                      href="mailto:nurgasab@gmail.com"
                      className="link link-accent"
                    >
                      nurgasab@gmail.com
                    </a>
                    , and we'll respond to address your concerns.
                  </p>
                </div>
              </details>
            </li>
          </ul>
        </div>
        <div className="space-y-4 md:space-y-6 max-w-md mx-auto mt-16 md:mt-24">
          <Link
            href="#buy"
            role="button"
            className="btn btn-error group btn-block"
            title="BUY NOW"
            onClick={buyProduct}
          >
            BUY NOW
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
