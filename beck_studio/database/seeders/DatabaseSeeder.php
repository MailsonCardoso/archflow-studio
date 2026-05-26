<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Usuário Admin padrão para testes
        $admin = User::factory()->create([
            'name'     => 'Admin ArchFlow',
            'email'    => 'admin@archflow.com',
            'password' => bcrypt('password123'),
        ]);

        // Usuário extra de teste
        $testUser = User::factory()->create([
            'name'     => 'Test User',
            'email'    => 'test@archflow.com',
            'password' => bcrypt('password123'),
        ]);

        // Criando projetos para o Admin
        $admin->projects()->create([
            'name' => 'Residência Gávea',
            'client' => 'Mariana Souza',
            'type' => 'Residencial',
            'status' => 'Em andamento',
            'area' => 350.50,
            'rooms' => 4,
            'progress' => 85,
            'cover' => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            'description' => 'Projeto de residência unifamiliar contemporânea integrada com a natureza na Gávea.',
        ]);

        $admin->projects()->create([
            'name' => 'Escritório Loft',
            'client' => 'Inova Tech',
            'type' => 'Comercial',
            'status' => 'Concluído',
            'area' => 120.00,
            'rooms' => 2,
            'progress' => 100,
            'cover' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
            'description' => 'Design de interiores e otimização de espaço para sede corporativa de startup.',
        ]);

        $admin->projects()->create([
            'name' => 'Apartamento Ipanema',
            'client' => 'Carlos Drummond',
            'type' => 'Interiores',
            'status' => 'Revisão',
            'area' => 90.00,
            'rooms' => 2,
            'progress' => 40,
            'cover' => 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
            'description' => 'Reforma completa de apartamento com estética minimalista e cores neutras.',
        ]);

        // Criando projetos para o usuário de teste
        $testUser->projects()->create([
            'name' => 'Reforma Cozinha Campo',
            'client' => 'Beatriz Costa',
            'type' => 'Reforma',
            'status' => 'Rascunho',
            'area' => 45.00,
            'rooms' => 1,
            'progress' => 10,
            'cover' => 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
            'description' => 'Ampliação e reforma da cozinha de uma casa de campo, mesclando o rústico ao moderno.',
        ]);
    }
}
