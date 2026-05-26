import { useState, useEffect, useCallback } from "react";
import { api } from "../lib/api";

export type Project = {
  id: number;
  name: string;
  client: string;
  type: "Residencial" | "Comercial" | "Interiores" | "Reforma";
  status: "Em andamento" | "Revisão" | "Concluído" | "Rascunho";
  area: number;
  rooms: number;
  cover: string;
  progress: number;
  description?: string;
  created_at: string;
  updated_at: string;
};

export type CreateProjectInput = {
  name: string;
  client: string;
  type: "Residencial" | "Comercial" | "Interiores" | "Reforma";
  status: "Em andamento" | "Revisão" | "Concluído" | "Rascunho";
  area: number;
  rooms: number;
  cover?: string;
  progress?: number;
  description?: string;
};

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await api.get<Project[]>("/api/projects");
      setProjects(data);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar projetos.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createProject = async (input: CreateProjectInput) => {
    setError(null);
    try {
      const newProj = await api.post<Project>("/api/projects", input);
      setProjects((prev) => [newProj, ...prev]);
      return newProj;
    } catch (err: any) {
      setError(err.message || "Erro ao criar projeto.");
      throw err;
    }
  };

  const updateProject = async (id: number, input: Partial<CreateProjectInput>) => {
    setError(null);
    try {
      const updatedProj = await api.put<Project>(`/api/projects/${id}`, input);
      setProjects((prev) => prev.map((p) => (p.id === id ? updatedProj : p)));
      return updatedProj;
    } catch (err: any) {
      setError(err.message || "Erro ao atualizar projeto.");
      throw err;
    }
  };

  const deleteProject = async (id: number) => {
    setError(null);
    try {
      await api.delete(`/api/projects/${id}`);
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err: any) {
      setError(err.message || "Erro ao excluir projeto.");
      throw err;
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    isLoading,
    error,
    refresh: fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  };
}
