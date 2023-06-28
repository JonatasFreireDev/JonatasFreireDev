"use client";
import React, { useCallback, useMemo, useState } from "react";

import { Container, Paragraph, ParagraphTitle } from "@/components/atoms";
import { techs } from "./Techs.const";

import * as S from "./Techs.styles";
import { Card } from "@/components/molecules/Card/Card";
import { CardTech } from "@/components/molecules/CardTech/CardTech";

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
          {techs.frontend.map(({ Icon, name }) => (
            <CardTech
              key={name}
              Icon={Icon}
              handleActive={() => handleTechActive(name)}
            />
          ))}
        </Card>

        <Card title={"BackEnd"}>
          {techs.backend.map(({ Icon, name }) => (
            <CardTech
              key={name}
              Icon={Icon}
              handleActive={() => handleTechActive(name)}
            />
          ))}
        </Card>

        <Card title={"Outros"}>
          {techs.others.map(({ Icon, name }) => (
            <CardTech
              key={name}
              Icon={Icon}
              handleActive={() => handleTechActive(name)}
            />
          ))}
        </Card>
      </S.TechsContent>

      {activeTech && (
        <div className="flex mt-10 gap-5 w-4/5 ">
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
