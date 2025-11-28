export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  gitHub: string;
};

export type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};
