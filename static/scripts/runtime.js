function showRuntime() {
    const runtimeSpan = document.getElementById("runtime_span");
    if (!runtimeSpan) return;

    const startDate = new Date("01/10/2025 8:00:00");
    const now = new Date();
    const elapsed = now - startDate;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    runtimeSpan.innerHTML = `${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`;
}

// 每秒更新一次运行时间
setInterval(showRuntime, 1000);