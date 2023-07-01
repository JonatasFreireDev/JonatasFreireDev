import { Container } from "@/components/atoms/Container";
import { useRepositories } from "@/service/repositories/useRepositories";

export const Projects = () => {
  const { data, error, isLoading } = useRepositories();

  return <Container title="Projetos">aoba</Container>;
};
