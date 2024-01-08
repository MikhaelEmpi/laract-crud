<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\MahasiswaStoreRequest;
use Illuminate\Support\Facades\Storage;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //All data
        $mahasiswas = Mahasiswa::all();

        //Return JSON response
        return response()->json([
            'mahasiswas' => $mahasiswas
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MahasiswaStoreRequest $request)
    {
        try {
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();

            // Create Mahasiswa Data
            Mahasiswa::create([
                'npm' => $request->npm,
                'nama' => $request->nama,
                'kelas' => $request->kelas,
                'jurusan' => $request->jurusan,
                'no_hp' => $request->no_hp,
                'image' => $imageName,
            ]);

            // Save image in storage folder
            Storage::disk('public')->put($imageName, file_get_contents($request->image));

            // Return JSON Response
            return response()->json([
                'message' => 'Data successfully created.'
            ], 200);
            
        } catch (\Exception $e) {
            // Return JSON response
            return response()->json([
                'messages' => "Something wrong!"
            ],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Mahasiswa detail
        $mahasiswa = Mahasiswa::find($id);
        if(!$mahasiswa){
            return response()->json([
                'message' => 'Mahasiswa not found.'
            ],404);
        }

        // Return JSON Response
        return response()->json([
            'mahasiswa' => $mahasiswa
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MahasiswaStoreRequest $request, $id)
    {
        try {
            // Find mahasiswa
            $mahasiswa = Mahasiswa::find($id);
            if(!$mahasiswa){
                return response()->json([
                    'message' => 'Data not found'
                ],404);
            }

            $mahasiswa->npm = $request->npm;
            $mahasiswa->nama = $request->nama;
            $mahasiswa->kelas = $request->kelas;
            $mahasiswa->jurusan = $request->jurusan;
            $mahasiswa->no_hp = $request->no_hp;
            $mahasiswa->image = $request->image;

            if($request->image){
                // Public storage
                $storage = Storage::disk('public');

                // Old image delete
                if($storage->exists($mahasiswa->image))
                $storage->delete($mahasiswa->image);

                // Image name
                $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
                $mahasiswa->image = $imageName;

                // Image save in public folder
                $storage->put($imageName, file_get_contents($request->image));
            }

            // Update Mahasiswa
            $mahasiswa->save();

            // Return JSON Response if Mahasiswa found
            return response()->json([
                'message' => 'Data successfully updated!'
            ],200);

        } catch (\Exception $e) {
            // Return JSON Response
            return response()->json([
                'message' => 'Something wrong'
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $mahasiswa = Mahasiswa::find($id);
        if(!$mahasiswa){
            return response()->json([
                'message' => 'Mahasiswa not found'
            ],404);
        }

        // Public storage
        $storage = Storage::disk('public');

        // Image delete
        if($storage->exists($mahasiswa->image))
        $storage->delete($mahasiswa->image);

        // Delete mahasiswa
        $mahasiswa->delete();

        // Return JSON Response
        return response()->json([
            'message' => 'Mahasiswa successfully deleted'
        ],200);
    }
}
