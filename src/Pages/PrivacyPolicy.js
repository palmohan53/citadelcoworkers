import React,{useEffect} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PrivacyPolicy = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Privacy Policy - citadel coworkers</title>
                    <meta name="description" content="Privacy Policy Introduction : We are committed to safeguarding the privacy of [our website visitors and service users]. This policy applies where we are acting as a data controller with respect to the personal data of [our website visitors and service users]; in other words, where we determine the purposes and means of the processing […]" />
                </Helmet>
                <section className="innerBanner">
                    {/* <img src="/images/inr-banner.jpg" alt=""/> */}
                    <div className="innerBannerContent">
                        <h1>Privacy Policy</h1>
                    </div>
                    <div className="bannerOvelay"></div>
                </section>
                <section className="contentRich mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 pr-5">
                                <div className="contentRichContent">
                                    <div className="sectionHeading mb-3 min-width-100">
                                        <h2>Introduction</h2>
                                    </div>
                                    <ul className="mb-4">
                                        <li>We are committed to safeguarding the privacy of [our website visitors and service users].</li>
                                        <li>This policy applies where we are acting as a data controller with respect to the personal data of [our website visitors and service users]; in other words, where we determine the purposes and means of the processing of that personal data.</li>
                                        <li>We use cookies on our website. Insofar as those cookies are not strictly necessary for the provision of [our website and services], we will ask you to consent to our use of cookies when you first visit our website.</li>
                                        <li>Our website incorporates privacy controls which affect how we will process your personal data. By using the privacy controls, you can [specify whether you would like to receive direct marketing communications and limit the publication of your information]. You can access the privacy controls by sending us email at <a href="mailto:sales@citadelcoworkers.com">sales@citadelcoworkers.com</a></li>
                                        <li>In this policy, “we”, “us” and “our” refer to [data controller name].[ For more information about us, see Section 19.]</li>
                                    </ul>
                                    <h3>How we use your personal data :</h3>
                                    <ul className="mb-4">
                                        <li>&nbsp;In this Section 2 we have set out:<br/>(a) the general categories of personal data that we may process;<br/>(b) [in the case of personal data that we did not obtain directly from you, the source and specific categories of that data];<br/>(c) the purposes for which we may process personal data; and<br/>(d) the legal bases of the processing.</li>
                                        <li>&nbsp;We may process [data about your use of our website and services] (“usage data”). The usage data may include [your IP address, geographical location, browser type and version, operating system, url, referral source, length of visit, page views, session replays, heatmaps and website navigation paths, as well as information about the timing, frequency and pattern of your service use]. The source of the usage data is [our analytics tracking system]. This usage data may be processed [for the purposes of analysing the use of the website and services]. The legal basis for this processing is [consent] OR [our legitimate interests, namely [monitoring and improving our website and services]].</li>
                                        <li>We may process [your account data] (“account data”). [The account data may [include your name, email address, contact number, company information, information provided by third party].][The source of the account data is [you or your employer or third party].] The account data may be processed [for the purposes of operating our website, providing our services, ensuring the security of our website and services, relating to credit score, background verification, maintaining back-ups of our databases and communicating with you.] The legal basis for this processing is [consent] OR [our legitimate interests, namely [the proper administration of our website and business including its operations in an efficient manner]] OR [the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract].</li>
                                        <li>&nbsp;We may process [your information included in your personal profile on our website] (“profile data”).[ The profile data may include [your name, address, telephone number, email address, profile pictures, gender, date of birth, interests and hobbies, educational details, company information, billing information, bank account details, social media profile and employment details].] The profile data may be processed for [the purposes of enabling and monitoring your use of our website and services]. The legal basis for this processing is [consent] OR [our legitimate interests, namely [the proper administration of our website and business]] OR [the performance of a contract between you and us and/or taking steps, at you request, to enter into such a contract].</li>
                                        <li>We may process [your personal data that are provided in the course of the use of our services] (“service data”).[.][ The source of the service data is [you or your employer].] The service data may be processed [for the purposes of operating our website, providing our services, ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you]. The legal basis for this processing is [consent] OR [our legitimate interests, namely [the proper administration of our website and business]] OR [the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract].</li>
                                        <li>&nbsp;We may process [information that you post for publication on our website or through our services] (“publication data”). The publication data may be processed [for the purposes of enabling such publication and administering our website and services]. The legal basis for this processing is [consent] OR [our legitimate interests, namely [the proper administration of our website and business]] OR [the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract].</li>
                                        <li>&nbsp;We may process [information contained in any enquiry you submit to us via website forms, email, telephone call, chat, skype and any other communication mode regarding services] (“enquiry data”). The enquiry data may be processed [for the purposes of offering, marketing and selling relevant services to you]. The legal basis for this processing is [consent] OR [our legitimate interests, namely [the provision of services] OR [the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract].</li>
                                        <li>We may process [information relating to our customer relationships, including customer contact information] (“customer relationship data”).[ The customer relationship data may include [your name, your employer, your job title or role, your contact details, your company information, billing and bank account information, correspondence information, your company’s credit information and information contained in communications between us and you or your employer].][ The source of the customer relationship data is [you or your employer or third party].] The customer relationship data may be processed [for the purposes of managing our relationships with customers, communicating with customers, keeping records of those communications and promoting our products and services to customers]. The legal basis for this processing is [consent] OR [our legitimate interests, namely [the proper management of our customer relationships]].</li>
                                        <li>We may process [information relating to billing and transactions, including purchases of ]services, that you enter into with us and/or through our website] (“billing data”).[ The billing data may include [your contact details bank account details, billing details, contract details and the transaction details].] The billing data may be processed [for the purpose of supplying the purchased services and keeping proper records of those transactions]. The legal basis for this processing is [the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract and our legitimate interests, namely [the proper administration of our website and business]].</li>
                                        <li>&nbsp;We may process [information that you provide to us for the purpose of subscribing to our email notifications and/or newsletters and/or downloadable content] (“notification data”). The notification data may be processed [for the purposes of sending you the relevant notifications and/or newsletters and/or downloadable content]. The legal basis for this processing is [consent] OR [the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract].</li>
                                        <li>&nbsp;We may process [information contained in or relating to any communication that you send to us] (“correspondence data”). The correspondence data may include [the communication content and metadata associated with the communication].[ Our website will generate the metadata associated with communications made using the website contact forms, email, telephone call, chat, skype and any other communication mode.] The correspondence data may be processed [for the purposes of communicating with you and record-keeping]. The legal basis for this processing is [our legitimate interests, namely [the proper administration of our website and business and communications with users]].</li>
                                        <li>&nbsp;We may process [any of your personal data identified in this policy] where necessary for [the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure]. The legal basis for this processing is our legitimate interests, namely [the protection and assertion of our legal rights, your legal rights and the legal rights of others].</li>
                                        <li>&nbsp;We may process [any of your personal data identified in this policy] where necessary for [the purposes of obtaining or maintaining insurance coverage, managing risks, or obtaining professional advice]. The legal basis for this processing is our legitimate interests, namely [the proper protection of our business against risks].</li>
                                        <li>In addition to the specific purposes for which we may process your personal data set out in this Section 2, we may also process [any of your personal data] where such processing is necessary[ for compliance with a legal obligation to which we are subject, or] in order to protect your vital interests or the vital interests of another natural person.</li>
                                        <li>Please do not supply any other person’s personal data to us, unless we prompt you to do so.</li>
                                        </ul>
                                    <h3>Providing your personal data to others</h3>
                                    <ul className="mb-4">
                                        <li>We may disclose [your personal data] to any member of our group of companies (this means our subsidiaries, our ultimate holding company and all its subsidiaries) insofar as reasonably necessary for the purposes, and on the legal bases, set out in this policy.</li>
                                        <li>We may disclose [your personal data] to any of our employees or prospective employees, candidates insofar as reasonably necessary for the purposes, execution of the services and on the legal bases, set out in this policy and for the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.</li>
                                        <li>&nbsp;We may disclose [your personal data] to [our insurers and/or professional advisers and/or agents] insofar as reasonably necessary for the purposes of [obtaining or maintaining insurance coverage, managing risks, obtaining professional advice, or the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure].</li>
                                        <li>We may disclose [your company information] to [our suppliers or subcontractors][ identified at [https://www.creditsafe.com]] insofar as reasonably necessary for [managing risks, managing credit risks, obtaining professional advice].</li>
                                        <li>&nbsp;Financial transactions relating to [our website and services] [are] OR [may be] handled by our payment services providers, [Paypal and Stripe]. We will share transaction data with our payment services providers only to the extent necessary for the purposes of [processing your payments, refunding such payments and dealing with complaints and queries relating to such payments and refunds]. You can find information about the payment services providers’ privacy policies and practices at [https://stripe.com/guides/general-data-protection-regulation, https://stripe.com/us/privacy],[https://www.paypal.com/uk/webapps/mpp/ua/privacy-prev.]</li>
                                        <li>&nbsp;We may disclose [your enquiry data] to [one or more of those selected third party suppliers of services identified on our website] for the purpose of [enabling them to contact you so that they can offer, market and sell to you relevant goods and/or services].[ Each such third party will act as a data controller in relation to the enquiry data that we supply to it; and upon contacting you, each such third party will supply to you a copy of its own privacy policy, which will govern that third party’s use of your personal data.]</li>
                                        <li>In addition to the specific disclosures of personal data set out in this Section 4, we may disclose your personal data where such disclosure is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.[ We may also disclose your personal data where such disclosure is necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure.]</li>
                                        <li>&nbsp;You acknowledge that [personal data that you submit for publication through our website or services] may be available, via the internet, around the world. We cannot prevent the use (or misuse) of such personal data by others.</li>
                                        </ul>
                                    <h3>Retaining and deleting personal data</h3>
                                    <ul className="mb-4">
                                        <li>&nbsp;This Section 5 sets out our data retention policies and procedure, which are designed to help ensure that we comply with our legal obligations in relation to the retention and deletion of personal data.</li>
                                        <li>&nbsp;Personal data that we process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or those purposes.</li>
                                        <li>&nbsp;We will retain your personal data as follows:<br/>(a) [“publication data”, “enquiry data”, “billing data”, “notification data”] will be retained for a minimum period of [6 months] following [contact date or agreement termination date whichever is applicable], and for a maximum period of [7 years]</li>
                                        <li>&nbsp;In some cases it is not possible for us to specify in advance the periods for which your personal data will be retained. In such cases, we will determine the period of retention based on the following criteria:<br/>(a) the period of retention of [“customer relationship data”, “service data”] will be determined based on [customer consent].</li>
                                        <li>&nbsp;Notwithstanding the other provisions of this Section 4, we may retain your personal data where such retention is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.</li>
                                    </ul>
                                    <h3>Security of personal data</h3>
                                    <ul className="mb-4">
                                        <li>&nbsp;We will take appropriate technical and organisational precautions to secure your personal data and to prevent the loss, misuse or alteration of your personal data.</li>
                                        <li>&nbsp;We will store [all your personal data] on [secure servers, personal computers and mobile devices, and in secure manual record-keeping systems].</li>
                                        <li>&nbsp;Data[ relating to [your enquiries and financial transactions]] that is sent from your web browser to our web server, or from our web server to your web browser, will be protected using encryption technology.</li>
                                        <li>You acknowledge that the transmission of unencrypted (or inadequately encrypted) data over the internet is inherently insecure, and we cannot guarantee the security of data sent over the internet.</li>
                                        <li>&nbsp;You should ensure that your password is not susceptible to being guessed, whether by a person or a computer program. You are responsible for keeping the password you use for accessing our website confidential and we will not ask you for your password (except when you log in to our website).</li>
                                    </ul>
                                    <h3>Security of personal data</h3>
                                    <ul className="mb-4">
                                        <li>&nbsp;We will take appropriate technical and organisational precautions to secure your personal data and to prevent the loss, misuse or alteration of your personal data.</li>
                                        <li>&nbsp;We will store [all your personal data] on [secure servers, personal computers and mobile devices, and in secure manual record-keeping systems].</li>
                                        <li>&nbsp;Data[ relating to [your enquiries and financial transactions]] that is sent from your web browser to our web server, or from our web server to your web browser, will be protected using encryption technology.</li>
                                        <li>You acknowledge that the transmission of unencrypted (or inadequately encrypted) data over the internet is inherently insecure, and we cannot guarantee the security of data sent over the internet.</li>
                                        <li>&nbsp;You should ensure that your password is not susceptible to being guessed, whether by a person or a computer program. You are responsible for keeping the password you use for accessing our website confidential and we will not ask you for your password (except when you log in to our website).</li>
                                    </ul>
                                    <h3>Amendments</h3>
                                    <ul className="mb-4">
                                        <li>We may update this policy from time to time by publishing a new version on our website.</li>
                                        <li>&nbsp;You should check this page occasionally to ensure you are happy with any changes to this policy.</li>
                                        <li>&nbsp;We [may] notify you of [changes] OR [significant changes] to this policy [by email or through the private messaging system on our website].</li>
                                    </ul>
                                    <h3>Your rights</h3>
                                    <ul className="mb-4">
                                        <li>&nbsp;In this Section 7, we have summarised the rights that you have under data protection law. Some of the rights are complex, and not all of the details have been included in our summaries. Accordingly, you should read the relevant laws and guidance from the regulatory authorities for a full explanation of these rights.</li>
                                        <li>Your principal rights under data protection law are:<br/>
                                            (a) the right to access;<br/>
                                            (b) the right to rectification;<br/>
                                            (c) the right to erasure;<br/>
                                            (d) the right to restrict processing;<br/>
                                            (e) the right to object to processing;<br/>
                                            (f) the right to data portability;<br/>
                                            (g) the right to complain to a supervisory authority; and<br/>
                                            (h) the right to withdraw consent.<br/>
                                        </li>
                                        <li>You have the right to confirmation as to whether or not we process your personal data and, where we do, access to the personal data, together with certain additional information. That additional information includes details of the purposes of the processing, the categories of personal data concerned and the recipients of the personal data. Providing the rights and freedoms of others are not affected, we will supply to you a copy of your personal data. The first copy will be provided free of charge, but additional copies may be subject to a reasonable fee.[ You can obtain [your personal data] by sending an email to <a href="mailto:sales@citadelcoworkers.com">sales@citadelcoworkers.com</a></li>
                                        <li>You have the right to have any inaccurate personal data about you rectified and, taking into account the purposes of the processing, to have any incomplete personal data about you completed.</li>
                                        <li>&nbsp;In some circumstances you have the right to the erasure of your personal data without undue delay. Those circumstances include: [the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed; you withdraw consent to consent-based processing; you object to the processing under certain rules of applicable data protection law; the processing is for direct marketing purposes; and the personal data have been unlawfully processed]. However, there are exclusions of the right to erasure. The general exclusions include where processing is necessary: [for exercising the right of freedom of expression and information; for compliance with a legal obligation; or for the establishment, exercise or defence of legal claims].</li>
                                        <li>&nbsp;In some circumstances you have the right to restrict the processing of your personal data. Those circumstances are: you contest the accuracy of the personal data; processing is unlawful but you oppose erasure; we no longer need the personal data for the purposes of our processing, but you require personal data for the establishment, exercise or defence of legal claims; and you have objected to processing, pending the verification of that objection. Where processing has been restricted on this basis, we may continue to store your personal data. However, we will only otherwise process it: with your consent; for the establishment, exercise or defence of legal claims; for the protection of the rights of another natural or legal person; or for reasons of important public interest.</li>
                                        <li>&nbsp;You have the right to object to our processing of your personal data on grounds relating to your particular situation, but only to the extent that the legal basis for the processing is that the processing is necessary for: the performance of a task carried out in the public interest or in the exercise of any official authority vested in us; or the purposes of the legitimate interests pursued by us or by a third party. If you make such an objection, we will cease to process the personal information unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing is for the establishment, exercise or defence of legal claims.</li>
                                        <li>&nbsp;You have the right to object to our processing of your personal data for direct marketing purposes (including profiling for direct marketing purposes). If you make such an objection, we will cease to process your personal data for this purpose.</li>
                                        <li>&nbsp;You have the right to object to our processing of your personal data for scientific or historical research purposes or statistical purposes on grounds relating to your particular situation, unless the processing is necessary for the performance of a task carried out for reasons of public interest.</li>
                                        <li>&nbsp;To the extent that the legal basis for our processing of your personal data is:
                                            (a) consent; or
                                            (b) that the processing is necessary for the performance of a contract to which you are party or in order to take steps at your request prior to entering into a contract, and such processing is carried out by automated means, you have the right to receive your personal data from us in a structured, commonly used and machine-readable format. However, this right does not apply where it would adversely affect the rights and freedoms of others.
                                        </li>
                                        <li>&nbsp;You may exercise any of your rights in relation to your personal data [by written notice to <a href="mailto:sales@citadelcoworkers.com">sales@citadelcoworkers.com</a> in addition to the other methods specified in this Section 7].</li>
                                        <li>&nbsp;If you consider that our processing of your personal information infringes data protection laws, you have a legal right to lodge a complaint with a supervisory authority responsible for data protection. You may do so in the EU member state of your habitual residence, your place of work or the place of the alleged infringement.</li>
                                        <li>&nbsp;To the extent that the legal basis for our processing of your personal information is consent, you have the right to withdraw that consent at any time. Withdrawal will not affect the lawfulness of processing before the withdrawal.</li>
                                    </ul>
                                    <h3>Third party websites</h3>
                                    <ul className="mb-4">
                                        <li>Our website may include hyperlinks to, and details of, third party websites.</li>
                                        <li>We have no control over, and are not responsible for, the privacy policies and practices of third parties.</li>
                                    </ul>
                                    <h3>Updating information</h3>
                                    <ul className="mb-4">
                                        <li>Please let us know if the personal information that we hold about you needs to be corrected or updated. An email request the change should be sent to&nbsp;sales@citadelcoworker.com</li>
                                    </ul>
                                    <h3>Acting as a data processor</h3>
                                    <ul className="mb-4">
                                        <li>In respect of [your projects that may be carried out by our employees on your instructions], we do not act as a data controller; instead, we [may] act as a data processor subject to a contract between us to that effect.</li>
                                        <li>Insofar as we act as a data processor rather than a data controller, this policy shall not apply. Our legal obligations as a data processor are instead set out in the contract between us and the relevant data controller</li>
                                    </ul>
                                    <h3>About cookies</h3>
                                    <ul className="mb-4">
                                        <li>&nbsp;A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.</li>
                                        <li>&nbsp;Cookies may be either “persistent” cookies or “session” cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.</li>
                                        <li>&nbsp;Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.</li>
                                    </ul>
                                    <h3>Cookies that we use</h3>
                                    <ul className="mb-4">
                                        <li><p>Please refer to out cookie policy for more information at [https://www.citadelcoworker.com/cookie-policy]</p></li>
                                    </ul>
                                    <h3>Managing cookies</h3>
                                    <ul className="mb-4">
                                        <li>&nbsp;Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via these links:<br/>(a) https://support.google.com/chrome/answer/95647?hl=en (Chrome);<br/>(b) https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences (Firefox);<br/>(c) http://www.opera.com/help/tutorials/security/cookies/ (Opera);<br/>(d) https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies (Internet Explorer);<br/>(e) https://support.apple.com/kb/PH21411 (Safari); and<br/>(f) https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy (Edge).</li>
                                        <li>&nbsp;Blocking all cookies will have a negative impact upon the usability of many websites.</li>
                                        <li>&nbsp;If you block cookies, you will not be able to use all the features on our website.</li>
                                        <li>For information about cookie policy refer to [https://www.virtualemployee.com/cookie-policy]</li>
                                    </ul>
                                    <h3>Our details</h3>
                                    <ul className="mb-4">
                                        <li>&nbsp;This website is owned and operated by [Citadel Coworkers LLP].</li>
                                        <li>We are registered in [India], and our registered office is at [10th Floor, B28, Manaar Tower, Sector 132, Noida, Uttar Pradesh 201304].</li><li>&nbsp;You can contact us:<br/>(a) [by post, to [the postal address given above]];<br/>(b) [using our website contact form];<br/>(c) [by telephone, on [the contact number published on our website from time to time]]; or<br/>(d) [by email, using [the email address published on our website from time to time]].</li>
                                    </ul>
                                    <h3>Data protection officer</h3>
                                    <ul className="mb-4"><li><p>Our data protection officer’s contact details are:<br/><a href="mailto:sales@citadelcoworkers.com">sales@citadelcoworkers.com</a>.</p></li></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </HelmetProvider>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
};

export default PrivacyPolicy;