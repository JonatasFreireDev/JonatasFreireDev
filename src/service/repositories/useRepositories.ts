import { useQuery } from "react-query";

import { IRepositories } from "./repositories.types";

export const useRepositories = () => {
  const favorites = [
    "Catalog",
    "GoToDo.Service",
    "Gympoint",
    "InfinitScroll",
    "JogoDaForca",
    "MyInvestments",
  ];

  const { data, error, isLoading } = useQuery<IRepositories>("repoData", () =>
    fetch("https://api.github.com/users/JonatasFreireDev/repos", {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }).then((res) => res.json())
  );

  return {
    data: data?.filter((repo) => favorites.includes(repo.name)),
    error,
    isLoading,
  };
};
