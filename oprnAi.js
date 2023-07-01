'use Strict'
// 変数の定義
//モジュールの読み込み
const dotenv = require('dotenv').config();
const fs = require('fs');
const http = require('http');

//httpサーバー
const server = http.createServer();

//環境変数の読み込み
const env = process.env;

//テスト出力
console.log(env.OPENAI_API_KEY);