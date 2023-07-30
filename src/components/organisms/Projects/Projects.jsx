"use client";
import { Container } from "@/components/atoms/Container";
import { IconLink } from "@/components/atoms/IconLink";
import { useRepositories } from "@/service/repositories/useRepositories";

import { BsGithub } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { Card } from "@/components/molecules/Card";

import { RowTextKeyValue } from "@/components/atoms/RowTextKeyValue";

import { Swiper, SwiperSlide } from "swiper/react";

import { PropagateLoader } from "react-spinners";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

import { useTranslation } from "@/locales";

export const Projects = () => {
  const { data: repos, error, isLoading } = useRepositories();
  const { t } = useTranslation();

  if (isLoading) {
    return <PropagateLoader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <Container title={t("smallProjects.title")}>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        scrollbar={{ draggable: true }}
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          980: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="w-full !px-20"
      >
        {repos?.map((rep) => (
          <SwiperSlide key={rep.id}>
            <Card title={rep.name}>
              <div className="flex flex-col w-full justify-center">
                <p className="mb-2">{rep.description}</p>
                <RowTextKeyValue
                  keyText={t("smallProjects.card.createdAt")}
                  valueText={new Date(rep.created_at).toLocaleDateString()}
                />
                <RowTextKeyValue
                  keyText={t("smallProjects.card.updatedAt")}
                  valueText={new Date(rep.pushed_at).toLocaleDateString()}
                />
                <RowTextKeyValue
                  keyText={t("smallProjects.card.github.key")}
                  valueText={
                    <IconLink
                      side="right"
                      href={rep.html_url}
                      icon={BsGithub}
                      content={t("smallProjects.card.github.value")}
                    />
                  }
                />
                {rep.homepage && (
                  <RowTextKeyValue
                    keyText={t("smallProjects.card.demo.key")}
                    valueText={
                      <IconLink
                        side="right"
                        href={rep.homepage}
                        icon={BiLinkAlt}
                        content={t("smallProjects.card.demo.value")}
                      />
                    }
                  />
                )}
                <RowTextKeyValue
                  keyText={t("smallProjects.card.language")}
                  valueText={rep.language}
                />
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
