import Footer from "@/components/footer/Footer";
import SectionHeading from "@/components/Ui/section-heading/SectionHeading";
import React from "react";

export default function page() {
  return (
    <div className=" container top-padding">
      <SectionHeading
        title="Your dashboard"
        text="Feedbacks will appear here"
      />
      <Footer />
    </div>
  );
}
