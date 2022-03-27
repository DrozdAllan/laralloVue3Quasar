<?php

namespace App\Http\Controllers;

use App\Events\PrivateMessageEvent;
use Illuminate\Http\Request;

class PrivateChannelController extends Controller
{
    /**
     * @param Request $request
     * @return void
     */
    public function privateChannel(Request $request)
    {
        PrivateMessageEvent::dispatch($request['channelName'], auth()->user()->name, $request['message'], date("H:i:s"));
    }
}
