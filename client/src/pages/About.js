import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - HomeCart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to HomeCart!

At HomeCart, we are dedicated to providing an exceptional shopping experience. We offer high-quality products at competitive prices, backed by outstanding customer service.

Our Mission
To make online shopping easy, enjoyable, and accessible for everyone.

Our Values
Customer Satisfaction: Your satisfaction is our priority.
Quality and Value: We curate only the finest products.
Innovation and Growth: We continuously evolve to enhance your shopping experience.
Why Shop With Us?
Wide Range of Products: Fashion, beauty, electronics, and home goods.
Secure Shopping: Your privacy and security are paramount.
Fast Shipping: Reliable options to get your purchase quickly.
Easy Returns: Simple returns for refunds or exchanges.
Thank you for choosing ShopEase. We look forward to serving you!

Happy Shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
