<?php

namespace App\Http\Controllers;

use App\Events\ChatMessageEvent;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    /**
     * @param Request $request
     * @return void
     */
    public function create(Request $request)
    {
        if (auth()->check()) {
            ChatMessageEvent::dispatch(auth()->user()->name, $request['message'], date("H:i:s"));
        } else {
            ChatMessageEvent::dispatch('Anonymous', $request['message'], date("H:i:s"));
        }
    }
}
