"use client";
import React from "react";
import { CircularPhoto } from "../atoms/CircularPhoto";
import { EffectHoc } from "./hoc/Effect.hoc";

export function Teste() {
  return (
    <>
      <div className="bg-primary-400 w-full h-96 mt-64">aew</div>
    </>
  );
}

export const TesteHOC = EffectHoc(Teste);
