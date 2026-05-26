<?php

namespace Database\Seeders;

use App\Models\User;
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
        User::factory()->create([
            'name'     => 'Admin ArchFlow',
            'email'    => 'admin@archflow.com',
            'password' => bcrypt('password123'),
        ]);

        // Usuário extra de teste
        User::factory()->create([
            'name'     => 'Test User',
            'email'    => 'test@archflow.com',
            'password' => bcrypt('password123'),
        ]);
    }
}
