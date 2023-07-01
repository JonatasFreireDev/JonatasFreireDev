import { useQuery } from "react-query";

import { IRepositories } from "./repositories.types";

export const useRepositories = () => {
  const { data, error, isLoading } = useQuery<IRepositories>("repoData", () =>
    fetch("https://api.github.com/users/JonatasFreireDev/repos", {
      next: {
        revalidate: 60 * 1,
      },
    }).then((res) => res.json())
  );

  return { data, error, isLoading };
};
