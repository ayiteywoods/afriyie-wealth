import React from 'react';


function ContactForm() {
    return(
        <section className="section border-top bg-secondary text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mb-4 mx-auto">
                        <h2 className="intouch text-center" >GET IN TOUCH</h2>
                        <h6 className="text-center">Do you have any question, request or 
                            inquiry? We would love to hear from you.</h6>
                        <div>
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                    
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                     placeholder="name@example.com"></input>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                    
                                    <input type="subject" class="form-control" id="exampleFormControlInput1"
                                     placeholder="Subject"></input>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mb-3">
                                <div class="form-group">
                                    
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                                    placeholder="Enter Message Here"></textarea>
                                </div>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <button type="submit" class="btn btn-warning mb-2 col-12">Send Message</button>

                                </div>
                                
                            </div>
                        </form>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
} 

export default ContactForm;