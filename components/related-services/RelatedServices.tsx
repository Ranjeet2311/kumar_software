import React, { useMemo } from "react";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import CustomCarousel from "../Ui/custom-carousel/CustomCarousel";
import { maxFourSlide } from "@/utils/CarouselResponsiveness";
import { servicesList } from "@/utils/List";
import Card from "../Ui/card/Card";
import classes from "./RelatedServices.module.scss";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { slugify } from "@/utils/Slugify";

export default function RelatedServices() {
  const { t } = useTranslation();

  const randomServices = useMemo(() => {
    const shuffled = [...servicesList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12">
          <SectionHeading
            customClass="mb-4 pb-2 pb-lg-4"
            title={t("landing_page.Related services")}
            text={t("landing_page.interest you")}
          />
        </div>
      </div>
      <div className="row">
        {randomServices.map(
          ({
            title,
            description,
            image,
          }: {
            title: string;
            description: string;
            image: string;
          }) => (
            <div
              key={`services.${title}`}
              className="col-12 col-md-6 col-lg-4 mb-4"
            >
              <Card
                customImageClass={classes.related_card_img}
                img={image}
                title={t(`${slugify(title)}.title`)}
                description={t(`${slugify(title)}.description`)}
                url={`/services/${slugify(title)}`}
                btnText={
                  <span className="d-flex align-items-center justify-content-center mb-0">
                    {t("Read more")}{" "}
                    <ArrowRight
                      size={25}
                      className={`ms-2 ${classes.arrow_icon}`}
                    />
                  </span>
                }
                showBtn={true}
                btnCss={classes.btn}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
