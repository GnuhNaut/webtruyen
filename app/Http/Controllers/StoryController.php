<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Story;

class StoryController extends Controller
{
    public function index(){
        
    }

    public function getIndex(){
        $truyendecu = $this->getStoryByCategory('Truyện Ma');
        $truyenvip = $this->getStoryByCategory('Lịch Sử');
        $truyenmoicapnhat = $this->getStoryByCategory('Kiếm Hiệp');
        $truyenfull = $this->getStoryByCategory('full');
        $truyenngan = $this->getStoryByCategory('Tiên Hiệp');
        $truyenngontinh = $this->getStoryByCategory('Ngôn Tình');
        $truyenteen = $this->getStoryByCategory('Truyện Teen');
        $truyentienhiep = $this->getStoryByCategory('Tiên Hiệp');
        return response()->json([
            'truyendecu' => $truyendecu,
            'truyenvip' => $truyenvip,
            'truyencapnhat' => $truyenmoicapnhat,
            'truyenfull' => $truyenfull,
            'truyenngan' => $truyenngan,
            'truyenngontinh' => $truyenngontinh,
            'truyenteen' => $truyenteen,
            'truyentienhiep' => $truyentienhiep
        ], 200);
    }   

    public function getStoryByCategory(string $category){
        try {
            $ans = DB::table('stories')
                ->join('categories','categories.id','stories.category_id')
                ->select(DB::raw('stories.name as name, stories.created_at as time, stories.id as storyId'))
                ->where('categories.name', $category)
                ->limit(5)
                ->get();
            $i = 0;
            foreach ($ans as $key => $item) {
                $i++;
                $item->title = $item->name;
                $item->text = $item->name;
                $item->link = "/truyen/" . $item->storyId ;
                $item->chuong = "chuong " . $i;
                $item->src = "/images/logo.png";
            }
            // return response()->json([
            //     'truyen' => $ans
            // ],200);
            return $ans;

        } catch (Exception $exception) {
            return null;
        }
    }

    public function getStory(Request $request){
        $id = $request->input('id');
        $ans = DB::table('chapters')
                ->select(DB::raw('title, created_at as time, id as chapId, story_id as storyId'))
                ->where('chapters.story_id', $id)
                ->get();
        $name = DB::table('stories')
                ->select(DB::raw('name'))
                ->where('id', $id)
                ->get();
        $i = 0;
        foreach ($name as $key => $item) {
           $storyName = $item->name;
        }
        foreach ($ans as $key => $item) {
            $i++;
            $item->text = $item->title;
            $item->link = "/doctruyen/" . $item->storyId . "/" . $item->chapId;
            $item->chuong = "chuong " . $i;
            $item->src = "/images/logo.png";
        }
        return response()->json([
                'truyen' => $ans,
                'storyName' => $storyName
            ],200);
    }

    public function getChapter(Request $request){
        $storyId = $request->input('storyId');
        $chapId = $request->input('chapId');
         $chap = DB::table('chapters')
                ->select(DB::raw('title, id as chapId, content, story_id as storyId'))
                ->where('id', $chapId)
                ->get();
        $story = DB::table('stories')
                ->select(DB::raw('name, id as storyId'))
                ->where('id', $storyId)
                ->get();
        $i = 0;
        foreach ($story as $key => $item) {
            $item->link = '/truyen/' . $item->storyId;
        }
        foreach ($chap as $key => $item) {
            $i++;
            $item->link = "/doctruyen/" . $item->storyId . "/" . $item->chapId;
            $item->chuong = "chuong " . $i;
            $item->src = "/images/logo.png";
        }
        return response()->json([
                'chap' => $chap,
                'truyen' =>$story
            ],200);
    }
}
