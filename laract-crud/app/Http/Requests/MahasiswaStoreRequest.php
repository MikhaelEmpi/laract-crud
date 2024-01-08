<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MahasiswaStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if (request()->isMethod('post')) {
            return [
                'npm' => 'required|string|max:10',
                'nama' => 'required|string|max:255',
                'kelas' => 'required|string|max:8',
                'jurusan' => 'required|string|max:255',
                'no_hp' => 'required|string|max:20',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ];
        } else {
            return [
                'npm' => 'required|string|max:10',
                'nama' => 'required|string|max:255',
                'kelas' => 'required|string|max:8',
                'jurusan' => 'required|string|max:255',
                'no_hp' => 'required|string|max:20',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ];
        }
    }

    public function messages()
    {
        if(request()->isMethod('post'))
        {
            return [
                'npm.required' => 'NPM is required!',
                'nama.required' => 'Nama is required!',
                'kelas.required' => 'Kelas is required!',
                'jurusan.required' => 'Jurusan is required!',
                'no_hp.required' => 'Nomor HP is required!',
                'image.required' => 'Image is required!',
            ];
        } else {
            return [
                'npm.required' => 'NPM is required!',
                'nama.required' => 'Nama is required!',
                'kelas.required' => 'Kelas is required!',
                'jurusan.required' => 'Jurusan is required!',
                'no_hp.required' => 'Nomor HP is required!',
            ];
        }
    }
}
