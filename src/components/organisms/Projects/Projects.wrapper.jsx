"use client";
import { QueryClient, QueryClientProvider } from "react-query";

import { Projects } from "./Projects";

const queryClient = new QueryClient();

export const ProjectsWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <Projects />
  </QueryClientProvider>
);
