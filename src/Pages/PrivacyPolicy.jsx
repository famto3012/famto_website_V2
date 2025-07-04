import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const PrivacyPolicy = React.memo(() => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  return (
    <main className="relative">
      <div className="relative w-full">
        <figure className="h-[19rem] md:h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src="/privacypolicy/privacy.svg"
            alt="Terms & Condition"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col items-start ps-5">
          <Link to={"/"} className="mt-2 md:mt-8 md:ms-[40px]">
            <img
              className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[1rem] md:ps-[1rem] transition-all"
              src="/home/logo/whiteLogo.svg"
              alt="Logo"
            />
          </Link>
          <h4 className="text-white text-[16px] md:text-[20px] font-medium text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">
            Privacy Policy
          </h4>
        </div>
      </div>

      <section
        className="w-full text-[13px] md:text-[14px] px-[2rem] md:px-[4rem] 
      py-[1rem] mb-[2rem] font-[400]"
      >
        <h3 className="termHeading">Privacy Policy</h3>
        <p>
          This website privacy policy (
          <span className="font-[600]">“Privacy Policy”</span> or{" "}
          <span className="font-[600]">“Policy”</span>) describes My Famto’s
          use, and disclosure of information about you in connection with your
          use of the domain and mobile application including all linked domains
          integrated within the site, (herein after together referred to as{" "}
          <span className="font-[600]">“Site”</span> or{" "}
          <span className="font-[600]">“Website”</span>
          ). The terms “we”, “us” or “our”, refer to the site. When you use the
          service available at our website, you consent to our collection, use,
          and disclosure of information about you as described in this Privacy
          Policy. This Privacy Policy does not apply to any information you may
          provide while on such third-party websites. We encourage you to
          carefully read the privacy policies on those third-party websites
          before providing any of your information on such sites. We reserve the
          right to update, change, amend or modify this Privacy Policy at any
          time and said changes will be effective upon posting. Every time there
          is a change, we will display a notice on our Site thereof. We may also
          notify you by email, in our discretion. We will use your personal
          information in a manner consistent with the Privacy Policy in effect
          at the time you submitted the information, unless you consent to the
          new or revised policy. In every respect, by using the Site, you agree
          to be bound by terms of this Privacy Policy.
        </p>

        <h3 className="termHeading">1.Introduction</h3>
        <p>
          1.1 Your privacy is important to you and to us. So we’ll protect the
          information you share with us. To protect your privacy, the site
          follows different principles in accordance with worldwide practices
          for customer privacy and data protection. 1.2 We are committed to
          respecting your online privacy and recognize your need for appropriate
          protection and management of any personally identifiable information
          (“Personal Information”) you share with us. For purpose of this
          Policy, Personal Information means any information that may be used to
          identify an individual, including, but not limited to, a first and
          last name, a home or other physical address and an email address or
          other contact information, whether at work or at home. In general, you
          can visit the site’s web pages without telling us who you are or
          revealing any Personal Information about yourself. If however,
          Personal Information is reveled to us, we won’t sell or give away any
          content of your Personal Information to anyone, and use
          state-of-the-art security measures to protect your information from
          unauthorized users.
        </p>

        <h3 className="termHeading">
          2.Information we collect and how we use it
        </h3>
        <p>
          2.1 When you visit or use our service, we collect and store
          information about you, your computer or mobile device and your
          activities. This information may include, but is not limited to:
        </p>
        <p>
          2.2.1 Your computer’s IP address; technical information about your
          computer or mobile device (such as type of device, web browser or
          operating system);
        </p>
        <p>
          2.2.2 Your mobile device’s unique ID number (when available), your
          mobile device’s geographic location (specific geographic location if
          you’ve enabled collection of that information, or general geographic
          location automatically);
        </p>
        <p>
          2.2.3 Your provided full name, e-mail address, ip code and other
          information you may provide with your account, such as your gender and
          birth date;
        </p>
        <p>
          2.2.4 How long you visited our service and which features you used;
        </p>
        <p>
          2.2.5 You agree to comply with all applicable privacy and data
          protection regulations. Further, you agree to not use our service to
          send us sensitive information where unauthorized disclosure could
          cause material, severe, or catastrophic harm or impact to us, any data
          subjects or relying parties. Sensitive Information includes,
          passwords, authentication/authorization credentials, information under
          strict regulatory or contractual handling requirements (e.g., PCI,
          HIPAA, and state and federal data security laws) such as, credit card
          information, credit card numbers, CIV numbers (three digit codes for
          Visa and MasterCard, four digit code for American Express) and
          magnetic stripe information, social security numbers, driver’s license
          numbers, passport numbers, government issued identification numbers,
          financial account information, health data, biometric data, personally
          identifiable information knowingly collected from children under the
          age of 13 or from online services directed toward children, real time
          geolocation data which can identify an individual, business secrets
          deemed highly confidential (e.g, highly-confidential business
          strategies and communications, sensitive attorney-client privileged
          and confidential communications). We collect, store, and use your user
          data on our servers to provide you with the ability to better maintain
          and improve your services.
        </p>
        <p>
          2.3 Additionally, we shall not be liable for any loss or damage
          sustained by reason of any disclosure (inadvertent or otherwise) of
          any information concerning the user’s account and / or information
          relating to or regarding online transactions using credit cards /
          debit cards and / or their verification process and particulars nor
          for any error, omission or inaccuracy with respect to any information
          so disclosed and used whether or not in pursuance of a legal process
          or otherwise.
        </p>
        <p>
          2.4 We use the information to improve the Service’s functionality,
          quality and also personalize your experience. We also use this
          information to display relevant advertising, provide support, message
          you, and comply with legal obligations.
        </p>
        <p>
          2.5 Please note that some of this information is automatically
          collected without you voluntarily choosing to provide this information
          to us.
        </p>

        <h3 className="termHeading">3.Privacy Policy</h3>
        <p>
          We will ask you when we need information that personally identifies
          you or allows us to contact you. Generally, this information is
          requested when you create a registration or login ID on the Site or
          when you connect or browse connected sites, linked or listed on our
          Website, or join a limited-access premium site. We use your Personal
          Information for four primary purposes: 
        </p>
        <ul className=" list-disc ps-[1rem] md:ps-[3rem]">
          <li>
            To make the site easier for you to use by not having to enter
            information more than once; 
          </li>
          <li>
            To help you quickly find services or information that you are
            looking for;
          </li>
          <li>To help us create content most relevant to you; </li>
          <li>
            To alert you to special offers, updated information and other new
            services available on our Site.
          </li>
        </ul>

        <h3 className="termHeading">4.Third party services</h3>
        <p>
          Our services are designed to allow you to assign tasks to field
          workers, communicate with your field workers and customers (“Users”),
          and view information pertaining to your field workers’ activity. We do
          this in part using GPS and other sensors on devices running our
          applications. Some information is automatically collected from or
          about your users and field workers when you use our services and may
          include, for example, geographic coordinates, phone numbers, names,
          and addresses.
        </p>

        <h3 className="termHeading">5.Consent</h3>
        <p>
          5.1 If you choose not to register or provide Personal Information, you
          can still use most of the Website. But you will not be able to access
          areas that require registration. If you decide to register, you will
          be able to select the kinds of information you want to receive from us
          by subscribing to various services, like our electronic newsletters.
          If you do not want us to communicate with you about other offers
          regarding the Site’s programs, events, or Services by email, postal
          mail, or telephone, you may select the option stating that you do not
          wish to receive messages from us.
        </p>
        <p>
          5.2 By accessing our Site you agree to allow us to share data
          lawfully, with third parties who work on our behalf to provide your
          services, to comply with laws or to respond to lawful requests and
          legal process (provided, we will endeavor to notify you if we have
          received a lawful request for your information), to protect the rights
          and property of ours, our agents, customers, and others including to
          enforce our agreements, policies, and terms of use, in an emergency,
          including to protect the personal safety of any person; and for the
          purposes of a business deal (or negotiation of a business deal)
          involving sale or transfer of all or a part of our business or assets
          (business deals may include, for example, any merger, financing,
          acquisition, divestiture, or bankruptcy transaction or proceeding).
        </p>
        <h3 className="termHeading">6.Access</h3>
        <p>
          We will provide you with the means to ensure that your Personal
          Information is correct and current. You may review and update this
          information at any time at the login section.
          <br />
          There, you can:
        </p>
        <ul className=" list-disc ps-[1rem] md:ps-[3rem]">
          <li>View and edit personal information you have already given us;</li>
          <li>
            Tell us whether you want us to send you marketing information, or
            whether you want third parties to send you their offers by postal
            mail;
          </li>
          <li>
            Sign up for electronic newsletters about our services and products;
            and Register.
          </li>
          <li>
            {" "}
            Once you register, you won’t need to do it again. Wherever you go on
            the Site, your information stays with you.
          </li>
        </ul>

        <h3 className="termHeading">7.Security</h3>
        <p>
          7.1 The Site has taken strong measures to protect the security of your
          Personal Information and to ensure that your choices for its intended
          use are honored. We take strong precautions to protect your data from
          loss, misuse, unauthorized access or disclosure, alteration, or
          destruction.
        </p>
        <p>
          7.2 Since this is an ‘information only site’, we do not guarantee your
          e-commerce transactions to be entirely safe and secure. If you make a
          financial transaction through our affiliate / connected web links, you
          must ensure that you are: a) compliant with the linked website’s terms
          of use; and b) have agreed to their privacy policy and online security
          framework. Should infringement or violation happen as a result of you
          accessing web pages that have been listed on our Site, we do not take
          responsibility for any security lapse.
        </p>
        <p>
          7.3 You also have a significant role in protecting your information.
          No one can see or edit your Personal Information without knowing your
          user name and password, so do not share these with others.
        </p>
        <p>
          7.4 Data Security: In addition to the above, we will maintain security
          procedures and practices to store in a secure fashion and protect all
          personally identifiable information regarding the end user (
          <span className="font-[600]">“PII”</span>) that is collected by us and
          stored in a database owned or controlled by us the ({" "}
          <span className="font-[600]">“Database”</span>
          ), against accidental or unlawful destruction or loss, unauthorized
          disclosure or access. Such security procedures and practices shall be
          implemented in accordance with all applicable data protection laws and
          shall be appropriate to the nature of the information collected and
          shall be aligned with industry standard practices for the management,
          transport, and storage of PII.
        </p>
        <h3 className="termHeading">8.Notice to parents</h3>
        <p>
          8.1 We want to help you guard your children’s privacy. We encourage
          you to talk to your children (below 13 years) about safe and
          responsible use of their Personal Information while using our Site.
          The Site does not publish content that is harmful, derogatory or
          pornographic in nature. However, the Website shall not incur any
          liability should your children provide us any Personal Information
          without parental consent. If you become aware that a child has
          provided us with personal information without parental consent, please
          contact us. If we become aware that a child under 13 has provided us
          with Personal Information without parental consent, we take steps to
          remove such information and terminate the child’s account.
        </p>
        <h3 className="termHeading">9.Registration</h3>
        <p>
          9.1 When you login to the Site’s secure pages, we may ask you to
          register yourself electronically. When you do, we merge your
          registration information with any information you’ve already left with
          us (we call that information your personal profile). If you haven’t
          previously registered with us, we create a personal profile for you
          from your registration information. If you ever want to review or
          update that information, you can visit the Site, click on update
          profile, and edit any of the Personal Information in your profile.
        </p>
        <h3 className="termHeading">10.Customer profiles</h3>
        <p>
          10.1 As mentioned above, every registered customer has a unique
          personal profile. Each profile is assigned a unique personal
          identification number, which helps us ensure that only you can access
          your profile.
        </p>
        <p>
          10.2 Cookies: When you visit our Site, we may place “cookies” on your
          computer to recognize you. We do this to store your preferences,
          collect statistical data and track your use of our service. Cookies
          are widely used, and most web browsers are configured initially to
          accept cookies automatically. If you prefer not to accept cookies, you
          may adjust and configure your browser settings accordingly. However,
          if you turn off cookies, or refuse to accept a request to place a
          cookie, some features and services on the Site may not function
          properly. Ad companies (including but not limited to Google and Face
          book) may also place cookies on your computer to track your activities
          across various sites so that they can display targeted advertisements.
        </p>
        <p>
          10.3 We provide you with access to your user data and ability to
          delete any of your user data. We also take commercially reasonable
          steps to safeguard user data. We may also collect registration and
          other information about you as our customer through our Site. Our
          collection and use of information collected about you on our website
          is governed by this Privacy Policy.
        </p>
        <h3 className="termHeading">
          11.What we do with the information you share
        </h3>
        <p>
          11.1 When you join us, you provide us with your contact information,
          including your name and email address. We use this information to send
          you updates about our services, questionnaires to measure your
          satisfaction with our service and announcements about new and exciting
          services that we offer.
        </p>
        <p>
          11.2 We will disclose your Personal Information, without notice, only
          if required to do so by law or in the good faith belief that such
          action is necessary to: (a) confirm to the edicts of the law or comply
          with legal process served on the Site; (b) protect and defend the
          rights or property of ours; and (c) act in urgent circumstances to
          protect the personal safety of our users or the public.
        </p>
        <h3 className="termHeading">12.Information sharing and disclosure</h3>
        <p>
          12.1 We do not rent or sell Personal Information about you with other
          people (save with your consent) or non-affiliated companies, except to
          provide services you’ve requested, under the following circumstances: {" "}
          <br />
          <ul>
            <li>
              We respond to court orders, legal proceedings or to establish or
              exercise our legal rights or defend against legal claims.{" "}
            </li>
            <li>
              We believe it is necessary to share information in order to
              investigate, prevent, or take action regarding illegal activities,
              suspected fraud, situations involving potential threats to the
              physical safety of any person, violations of the Website’s terms
              of use, or as otherwise required by law. 
            </li>
            <li>
              We shall transfer information about you only if we are acquired by
              another company or individual. In this event, the Website will
              notify you before information about you is transferred and becomes
              subject to a different privacy policy.{" "}
            </li>
            <li>
              We may need to contact you to comply or co-operate with a legal
              request. For this purpose, we will use the email address provided
              to us by you. All communications sent by us at such email address
              shall be deemed to have been communicated to you.
            </li>
          </ul>
        </p>
        <h3 className="termHeading">13.Confidentiality and security</h3>
        <p>
          13.1 We limit access to Personal Information about you to employees
          who we believe reasonably need to come into contact with that
          information to provide products or services to you or in order to do
          their jobs.
        </p>
        <p>
          13.2 We follow generally accepted industry standards to protect the
          Personal Information submitted to us, both during transmission and
          once we receive it. However, no method of transmission over the
          Internet or via mobile device, or method of electronic storage, is
          100% secure. Therefore, while we strive to use commercially acceptable
          means to protect your Personal Information, we cannot guarantee its
          absolute security.
        </p>
        <h3 className="termHeading">14.Your consent</h3>
        <p>
          14.1 By using the Website and mobile app, you consent to the terms of
          our Privacy Policy and to the Site’s processing of Personal
          Information for the purposes given above as well as those explained..
        </p>
        <h3 className="termHeading">
          15.Privacy policy concerns and grievance redressal mechanism
        </h3>
        <p>
          15.1 If you have any grievance relating to the processing/usage of
          information provided by you or the Site’s Privacy Policy, you may
          email our grievance officer at our Site or write at the following
          address:
          <br />
          <br />
          Legal Department 
          <br />
          <span
            style={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            My Famto Private Limited
          </span>
          <br />
          Thiruvatira, ORA-8 
          <br />
          near TG Mini Hall
          <br />
          Thiruvananthapuram, Kerala, India 695573
        </p>
        <h3 className="termHeading">16.Contact information</h3>
        <p>
          16.1 We welcome your comments regarding this privacy statement at the
          contact address given at the website. Should there be any concerns
          about contravention of this Privacy Policy, we will employ all
          commercially reasonable efforts to address the same. The terms in this
          Policy may be changed by us at any time. We are free to offer its
          services to any client/prospective client without restriction.
        </p>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  );
});

PrivacyPolicy.displayName = "PrivacyPolicy";

export default PrivacyPolicy;
