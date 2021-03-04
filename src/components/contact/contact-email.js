import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const ContactEmail = (props) => {



    const [Name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [mobileno, setMobile] = useState("");
    const [message, setMessage] = useState("");

    const [isloading, setLoading] = useState(false);


    const notify = (type) => {
        if (type === 'S') {
            toast.success('Hi, we have received your message, one of our representative will get back to you shortly. Meanwhile you can also call on +91-9476035176 or +91-9679578933', {
                duration: 10000, style: {
                    boxShadow: '0 0 3px 1px rgba(0,0,0,0.4)',
                    background: '#159ecc',
                    color: '#fff',
                    fontWeight: '700'
                }


            });
        } else {
            toast.error('Error! Oops something went wrong please try again', {
                duration: 60000, style: {
                    boxShadow: '0 0 3px 1px rgba(0,0,0,0.4)',
                    background: '#ee2a58',
                    color: '#fff',
                    fontWeight: '700'
                }
            });
        }
    }

    const clearField = () => {

        setEmail("");
        setMessage("");
        setMobile("");
        setName("");

    }



    let submitButtonRender = (
        <button class="btn" type="submit" >
            <i class="fa fa-location-arrow" style={{ color: "#159ecc", marginRight: "0.3rem" }}></i>Send Message
        </button>
    );



    if (isloading) {
        submitButtonRender = (
            <button class="btn" type="submit" disabled>
                <i class="fa fa-location-arrow" ></i>Send Message
            </button>
        );
    }



    let handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");
        emailjs.sendForm('service_sslln3f', 'template_d4q6wgd', e.target, 'user_Lww2ekuRcxwOutdCSIixe')
            .then((result) => {
                setLoading(false);
                notify('S');
                clearField();
                //setMessage("Request has been sent successfully. One of our agent will contact you soon, meanwhile you can call us on +91 9434260164  or +91 9933216535 ")
                // console.log(result.text);
            }, (error) => {
                setLoading(false);
                notify('E');

                //  console.log(error.text);
                // setMessage("Please try again. Something is wrong")
            });



    }


    return (


        <form id="contact-form" name="contact-form" onSubmit={handleSubmit} className="contact-form1">

            <input type="text" placeholder="Your Name"
                value={Name}
                name="name"
                onChange={e => setName(e.target.value)}
                required
            />
            <input type="text" maxLength="10"
                required name="mobile"
                value={mobileno}
                onChange={e => setMobile(e.target.value)}
                placeholder="Your Phone No"
            />
            <input name="email"
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required />
            <textarea name="message"
                placeholder="Your Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required></textarea>
            {/* <div class="g-recaptcha" data-sitekey="6LdChmgUAAAAAGxP42yYWV5Plax32bUox12DJwFS"></div> */}
            {/* <label id="err" ></label> */}

            {submitButtonRender}

        </form>

        // <section class="contact-v2">
        //     <div class="container">
        //         <div class="row">

        //             <div class="col-md-7" data-aos="fade-up" data-aos-duration="600">
        //                 <div class="section-title">
        //                     <h4 style={{ fontSize: "2rem" }}>CONTACT US</h4>
        //                     <p class="section-subtitle">Say hello</p>
        //                 </div>
        //                 <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
        //                     <div class="form-group">
        //                         <input
        //                             class="form-control"
        //                             name="name"
        //                             placeholder="Your Name"
        //                             type="text"
        //                             value={Name}
        //                             onChange={e => setName(e.target.value)}
        //                             required
        //                             ref={nameText}
        //                         />
        //                     </div>
        //                     <div class="form-group">
        //                         <input
        //                             class="form-control"
        //                             maxLength="10"
        //                             required name="mobile"
        //                             value={mobileno}
        //                             onChange={e => setMobile(e.target.value)}
        //                             placeholder="Your Phone No"
        //                             type="text"
        //                         />
        //                     </div>
        //                     <div class="form-group">
        //                         <input
        //                             class="form-control"
        //                             name="email"
        //                             type="email"
        //                             placeholder="Your Email Address"
        //                             value={email}
        //                             onChange={e => setEmail(e.target.value)}
        //                             required
        //                         />
        //                     </div>
        //                     <div class="form-group">
        //                         <textarea
        //                             class="form-control"
        //                             name="message"
        //                             placeholder="Your Message"
        //                             value={message}
        //                             onChange={e => setMessage(e.target.value)}
        //                             required
        //                         ></textarea>
        //                     </div>
        //                     {submitButtonRender}
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </section >

    )
}
export default ContactEmail;