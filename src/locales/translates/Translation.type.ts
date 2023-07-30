export interface Translation {
  welcome: {
    title: string;
  };
  aboutMe: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
  };
  techs: {
    title: string;
    frontend: {
      title: string;
    };
    backend: {
      title: string;
    };
    others: {
      title: string;
    };
  };
  smallProjects: {
    title: string;
    card: {
      createdAt: string;
      updatedAt: string;
      github: {
        key: string;
        value: string;
      };
      demo: {
        key: string;
        value: string;
      };
      language: string;
    };
  };
}
