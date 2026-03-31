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

let cachedProjects: Project[] | null = null;
let fetchPromise: Promise<Project[]> | null = null;

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>(cachedProjects ?? []);
  const [loading, setLoading] = useState(cachedProjects === null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedProjects !== null) return;

    if (!fetchPromise) {
      fetchPromise = fetch('/api/projects')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch');
          return res.json();
        })
        .then((data: Project[]) => {
          cachedProjects = data;
          return data;
        })
        .catch((err) => {
          fetchPromise = null;
          throw err;
        });
    }

    fetchPromise
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : '알수없는 에러');
        setLoading(false);
      });
  }, []);

  return { projects, loading, error };
};
