import { useState, useEffect } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  projectName: string;
  duration: string;
  participants: string;
  skills: string[];
  details: [
    {
      title: string;
      description?: string[];
    },
  ];
  link?: string;
  cover?: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : '알수없는 에러');
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return { projects, loading, error };
};
