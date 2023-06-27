import React from "react";

import * as S from "./Techs.styles";

import { Paper } from "@/components/atoms";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";

export const Techs = () => {
  return (
    <S.Container className="flex flex-row gap-5">
      <Paper border="md" className="hover:text-primary-400 p-3">
        <FaReact size={40} />
      </Paper>
      <Paper border="md" className="hover:text-primary-400 p-3">
        <FaCss3Alt size={40} />
      </Paper>
      <Paper border="md" className="hover:text-primary-400 p-3">
        <FaHtml5 size={40} />
      </Paper>
      <Paper border="md" className="hover:text-primary-400 p-3">
        <FaNodeJs size={40} />
      </Paper>
    </S.Container>
  );
};
