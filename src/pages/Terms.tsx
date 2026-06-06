import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PolicyContent } from '@/components/ui/PolicyContent'

export function Terms() {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Sportykle Terms and Conditions. Read the rules and regulations for using our application and website."
      />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader
            title="Terms and Conditions"
            subtitle="Last updated: June 2026"
            className="[&_h2]:text-2xl md:[&_h2]:text-3xl [&_p]:text-sm"
          />
          <PolicyContent
            sections={[
              {
                title: 'Introduction',
                content: (
                  <p>
                    Welcome to Sportykle! These terms and conditions outline the rules and regulations for the use of our application
                    and website. By accessing and using our services, you agree to comply with these terms and conditions. Please read
                    them carefully. This page states the Terms and Conditions under which you (Visitor) may visit this website
                    (&quot;Website&quot;) and use our services. If you do not accept the Terms and Conditions stated here, we request
                    you to exit this site. Sportykle reserves the right to revise these Terms and Conditions at any time by updating
                    this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because
                    they are binding on all users of this Website.
                  </p>
                ),
              },
              {
                title: 'Acceptance of Terms',
                content: (
                  <p>
                    By using Sportykle, you accept and agree to be bound by these terms and conditions. If you do not agree with any
                    part of these terms, you must not use our services.
                  </p>
                ),
              },
              {
                title: 'Modifications',
                content: (
                  <p>
                    Sportykle reserves the right to modify these terms and conditions at any time. We will notify you of any changes
                    by updating the terms on our website. Your continued use of our services after such modifications indicates your
                    acceptance of the new terms.
                  </p>
                ),
              },
              {
                title: 'Use of the Site',
                content: (
                  <>
                    <p>You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>Use the Site in any way that violates any applicable federal, state, local, or international law or regulation.</li>
                      <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site, or which, as determined by us, may harm us or users of the Site.</li>
                      <li>Use the Site in any manner that could disable, overburden, damage, or impair the Site or interfere with any other party&apos;s use of the Site.</li>
                      <li>Use any robot, spider, or other automatic device, process, or means to access the Site for any purpose, including monitoring or copying any of the material on the Site.</li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'Use of Content',
                content: (
                  <p>
                    All logos, brands, marks, headings, labels, names, signatures, numerals, shapes, or any combinations thereof,
                    appearing on this site, except as otherwise noted, are properties either owned or used under license by the
                    business and/or its associate entities who feature on this Website. The use of these properties or any other
                    content on this site, except as provided in these Terms and Conditions or in the site content, is strictly
                    prohibited. You may not sell or modify the content of this Website or reproduce, display, publicly perform,
                    distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective
                    organization&apos;s or entity&apos;s written permission.
                  </p>
                ),
              },
              {
                title: 'User Accounts',
                content: (
                  <p>
                    To access certain features of Sportykle, you may be required to create an account. You agree to provide accurate
                    and complete information during the registration process and to update this information as necessary. You are
                    responsible for maintaining the confidentiality of your account credentials and for all activities that occur under
                    your account.
                  </p>
                ),
              },
              {
                title: 'User Contributions',
                content: (
                  <p>
                    The Site may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other
                    interactive features (collectively, &quot;Interactive Services&quot;) that allow users to post, submit, publish,
                    display, or transmit to other users or other persons (hereinafter, &quot;post&quot;) content or materials
                    (collectively, &quot;User Contributions&quot;) on or through the Site. All User Contributions must comply with the
                    content standards set out in these Terms. Any User Contribution you post to the Site will be considered
                    non-confidential and non-proprietary. By providing any User Contribution on the Site, you grant us and our
                    affiliates and service providers, and each of their and our respective licensees, successors, and assigns the right
                    to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material
                    for any purpose.
                  </p>
                ),
              },
              {
                title: 'Use of Services',
                content: (
                  <p>
                    Sportykle grants you a limited, non-exclusive, non-transferable license to use our services in accordance with these
                    terms. You agree not to use our services for any unlawful or prohibited purpose.
                  </p>
                ),
              },
              {
                title: 'Prohibited Uses',
                content: (
                  <>
                    <p>You agree not to use the Site for any of the following prohibited activities:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>Engaging in any illegal or unauthorized activities.</li>
                      <li>Posting any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable.</li>
                      <li>Impersonating any person or misrepresenting your identity or affiliation with any person or organization.</li>
                      <li>Sending, knowingly receiving, uploading, downloading, using, or reusing any material that does not comply with these Terms.</li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'Subscription, Payments and Pricing',
                content: (
                  <p>
                    Access to certain features of Sportykle requires a subscription. By subscribing, you agree to pay the applicable
                    subscription fees. All fees are non-refundable, and we do not offer refunds or credits for partial subscription
                    periods. All prices for subscription plans are listed on our website and are subject to applicable taxes and
                    charges. Sportykle reserves the right to change the prices of our subscription plans at any time without prior
                    notice. Any changes to pricing will be posted on our website and will be effective immediately upon posting. Any
                    promotional pricing or discounts are subject to the terms and conditions of the specific promotion and may be
                    subject to change without notice.
                  </p>
                ),
              },
              {
                title: 'Intellectual Property',
                content: (
                  <p>
                    All content and materials available on Sportykle, including but not limited to text, graphics, logos, and software,
                    are the property of Sportykle or its licensors and are protected by intellectual property laws. You may not
                    reproduce, distribute, or create derivative works from any content or materials without our express written
                    permission.
                  </p>
                ),
              },
              {
                title: 'Privacy',
                content: (
                  <p>
                    Your use of Sportykle is also governed by our{' '}
                    <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>, which outlines how we collect,
                    use, and protect your personal information. By using our services, you consent to our collection and use of your
                    information as described in the Privacy Policy.
                  </p>
                ),
              },
              {
                title: 'Limitation of Liability',
                content: (
                  <p>
                    Sportykle is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. We make no warranties, express
                    or implied, regarding the availability, accuracy, or reliability of our services. To the fullest extent permitted
                    by law, Sportykle shall not be liable for any damages arising out of your use of our services.
                  </p>
                ),
              },
              {
                title: 'Termination',
                content: (
                  <p>
                    We reserve the right to terminate or suspend your access to Sportykle at our sole discretion, without notice, for
                    conduct that we believe violates these terms or is harmful to other users or us.
                  </p>
                ),
              },
              {
                title: 'Acceptable Website and Application Use',
                content: (
                  <>
                    <p className="font-medium text-slate-900 dark:text-white">General Rules</p>
                    <p className="mt-2">Visitors may not use the Website in order to transmit, distribute, store, or destroy material:</p>
                    <ol className="list-decimal pl-5 space-y-2 mt-2">
                      <li>That could constitute or encourage conduct that would be considered a criminal offense or violate any applicable law or regulation.</li>
                      <li>In a manner that will infringe the copyright, trademark, trade secret, or other intellectual property rights of others or violate the privacy or publicity of other personal rights of others.</li>
                      <li>That is libelous, defamatory, pornographic, profane, obscene, threatening, abusive, or hateful.</li>
                    </ol>
                  </>
                ),
              },
              {
                title: 'Indemnity',
                content: (
                  <p>
                    The User agrees to indemnify and hold harmless the Company, its officers, directors, employees, and agents from and
                    against any claims, actions, demands, liabilities, losses, or damages arising from or resulting from their use of
                    Sportykle or their breach of the terms.
                  </p>
                ),
              },
              {
                title: 'Liability',
                content: (
                  <p>
                    User agrees that neither the Company nor its group companies, directors, officers, or employees shall be liable for
                    any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use or the
                    inability to use the service, or for the cost of procurement of substitute goods or services, or resulting from any
                    goods, data, information, or services purchased or obtained, messages received, or transactions entered into
                    through or from the service, or resulting from unauthorized access to or alteration of user&apos;s transmissions or
                    data, or arising from any other matter relating to the service, including but not limited to damages for loss of
                    profits, use, data, or other intangibles, even if the Company has been advised of the possibility of such damages.
                    In no event shall the Company&apos;s total liability to the User for all damages, losses, and causes of action
                    exceed the amount paid by the User to the Company, if any, that is related to the cause of action.
                  </p>
                ),
              },
              {
                title: 'Disclaimer of Consequential Damages',
                content: (
                  <p>
                    In no event shall the Company or any parties, organizations, or entities associated with the corporate brand name us
                    or otherwise, mentioned at this Website, be liable for any damages whatsoever (including, without limitations,
                    incidental and consequential damages, lost profits, or damage to computer hardware, or loss of data information, or
                    business interruption) resulting from the use or inability to use the Website and the Website material, whether
                    based on warranty, contract, tort, or any other legal theory, and whether or not such organization or entities were
                    advised of the possibility of such damages.
                  </p>
                ),
              },
              {
                title: 'Disclaimer of Warranties',
                content: (
                  <p>
                    The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any warranties of any kind,
                    either express or implied. Neither Sportykle nor any person associated with Sportykle makes any warranty or
                    representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the
                    Site.
                  </p>
                ),
              },
              {
                title: 'Governing Law',
                content: (
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably
                    submit to the exclusive jurisdiction of the courts in Kerala, India.
                  </p>
                ),
              },
              {
                title: 'Contact Us',
                content: (
                  <>
                    <p>
                      If you have any questions or concerns about these terms and conditions, please contact us at{' '}
                      <a href="mailto:support@sportykle.com" className="text-brand-600 hover:underline">support@sportykle.com</a>
                      {' '}or call{' '}
                      <a href="tel:+919744322443" className="text-brand-600 hover:underline">+91 97 443 22 443</a>.
                    </p>
                    <p className="mt-4">Thank you for using Sportykle!</p>
                    <p className="font-medium text-slate-900 dark:text-white">Best regards,<br />The Sportykle Team</p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>
    </>
  )
}
