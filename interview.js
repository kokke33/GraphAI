import { spawn } from "child_process";

// graphai コマンドを直接親プロセスの標準入出力に渡す
const process = spawn("graphai", ["src/interview_SE.yaml"], {
    stdio: "inherit", // 親プロセスの stdin, stdout, stderr を子プロセスに引き継ぐ
});

// プロセス終了時の処理
process.on("close", (code) => {
    console.log(`Process exited with code ${code}`);
});

// エラーハンドリング
process.on("error", (err) => {
    console.error("Failed to start subprocess.", err);
});
