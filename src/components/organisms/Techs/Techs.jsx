"use client";
import React, { useCallback, useMemo, useState } from "react";

import { Container } from "@/components/atoms/Container";
import { Card } from "@/components/molecules/Card";
import { CardTech } from "@/components/molecules/CardTech";
import { ParagraphTitle } from "@/components/atoms/ParagraphTitle";
import { Paragraph } from "@/components/atoms/Paragraph";

import { techs } from "./Techs.const";

import * as S from "./Techs.styles";

export const Techs = () => {
  const [techActive, setTechActive] = useState(undefined);
  const handleTechActive = useCallback((name) => setTechActive(name), []);

  const activeTech = useMemo(
    () =>
      [...techs.backend, ...techs.frontend, ...techs.others].find(
        (tech) => tech.name == techActive
      ),
    [techActive]
  );

  return (
    <Container size="md" title={"Tecnologias"}>
      <S.TechsContent>
        <Card title={"FrontEnd"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techs.frontend.map(({ Icon, name }) => (
              <CardTech
                key={name}
                Icon={Icon}
                handleActive={() => handleTechActive(name)}
              />
            ))}
          </div>
        </Card>

        <Card title={"BackEnd"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techs.backend.map(({ Icon, name }) => (
              <CardTech
                key={name}
                Icon={Icon}
                handleActive={() => handleTechActive(name)}
              />
            ))}
          </div>
        </Card>

        <Card title={"Outros"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techs.others.map(({ Icon, name }) => (
              <CardTech
                key={name}
                Icon={Icon}
                handleActive={() => handleTechActive(name)}
              />
            ))}
          </div>
        </Card>
      </S.TechsContent>

      {activeTech && (
        <div className="flex mt-10 gap-5 w-4/5 items-start">
          <CardTech Icon={activeTech?.Icon} />
          <div>
            <ParagraphTitle content={activeTech.name} />
            <Paragraph text={activeTech.description} />
          </div>
        </div>
      )}
    </Container>
  );
};
