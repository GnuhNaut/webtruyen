<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{

    public function search(Request $request){
        $search = $request->input('search');
        $story = DB::table('stories')
            ->select(DB::raw('stories.name as name, stories.created_at as time, stories.id as storyId'))
            ->where('name', 'like', '%' . $search . '%')
            ->get();
        foreach ($story as $key => $item) {
            $item->title = $item->name;
            $item->link = "/truyen/" . $item->storyId ;
        }
        return response()->json([
            'search' => $story
        ],200);
    }
}
