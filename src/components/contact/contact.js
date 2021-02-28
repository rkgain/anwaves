import React from 'react'
const Contact = (props) => {
    return (
        <main class="content">
            <div class="fullwidth-block">
                <div class="container">
                    <h1 class="section-title">Contact Us</h1>
                    <br />
                    <div class="row">
                        <div class="col-md-6">
                            <form action="#" class="contact-form1">

                                <input type="text" placeholder="Your Name..." id="name" />
                                <input type="text" placeholder="Contact No" id="ph" />
                                <input type="text" placeholder="Email" id="mail" />
                                <textarea name="" id="comment" placeholder="Message..." style={{ height: "6rem" }}></textarea>
                                <div class="g-recaptcha" data-sitekey="6LdChmgUAAAAAGxP42yYWV5Plax32bUox12DJwFS"></div>
                                <label id="err" ></label>

                                <input type="button" class="button" value="Send Message" id="enqbtn" onclick="sendContact()" />

                            </form>

                        </div>
                        <div class="col-md-6">
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3029.2188753874375!2d-73.9617075!3d40.6029943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244f289a17b03%3A0x5108f35e55b5aa3c!2s983+Avenue+S%2C+Brooklyn%2C+NY+11223%2C+Amerika+Serikat!5e0!3m2!1sid!2sid!4v1411068708925" frameborder="0" style={{ border: "0" }} title="Google Map"></iframe>
                            </div>


                        </div>


                    </div>

                </div>

            </div>


        </main>

    )
}
export default Contact;