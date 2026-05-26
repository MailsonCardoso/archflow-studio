<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $projects = $request->user()->projects()->latest()->get();
        return response()->json($projects);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'client' => 'required|string|max:255',
            'type' => 'required|in:Residencial,Comercial,Interiores,Reforma',
            'status' => 'required|in:Em andamento,Revisão,Concluído,Rascunho',
            'area' => 'required|numeric|min:0',
            'rooms' => 'required|integer|min:0',
            'progress' => 'nullable|integer|between:0,100',
            'cover' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        
        // Se nenhuma capa for enviada, colocamos uma imagem padrão do Unsplash adequada ao tipo
        if (empty($data['cover'])) {
            $data['cover'] = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
        }

        $project = $request->user()->projects()->create($data);

        return response()->json($project, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Project $project)
    {
        // Garante que o projeto pertence ao usuário autenticado
        if ($project->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Não autorizado.'], 403);
        }

        return response()->json($project);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        // Garante que o projeto pertence ao usuário autenticado
        if ($project->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Não autorizado.'], 403);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'client' => 'sometimes|required|string|max:255',
            'type' => 'sometimes|required|in:Residencial,Comercial,Interiores,Reforma',
            'status' => 'sometimes|required|in:Em andamento,Revisão,Concluído,Rascunho',
            'area' => 'sometimes|required|numeric|min:0',
            'rooms' => 'sometimes|required|integer|min:0',
            'progress' => 'nullable|integer|between:0,100',
            'cover' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $project->update($validator->validated());

        return response()->json($project);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Project $project)
    {
        // Garante que o projeto pertence ao usuário autenticado
        if ($project->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Não autorizado.'], 403);
        }

        $project->delete();

        return response()->json(['message' => 'Projeto excluído com sucesso.']);
    }
}
