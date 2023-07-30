import { memo } from "react";
import Image from "next/image";

import foto from "../../../assets/jonatas-header.jpeg";

import * as S from "./CircularPhoto.styles";

export const CircularPhoto = memo(() => (
  <S.Container>
    <S.Circle>
      <Image
        alt="Jonatas"
        src={foto}
        className="w-52 h-52 object-cover rounded-full"
      />
    </S.Circle>
  </S.Container>
));
