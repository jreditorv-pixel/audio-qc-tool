function runQC() {
    const statusEl = document.getElementById("qcStatus");
    const detailsEl = document.getElementById("qcDetails");

    // Simulated QC status
    statusEl.textContent = "Passed with Warnings";

    // Clear previous results
    detailsEl.innerHTML = "";

    // List of QC parameters with sample statuses
    const qcParameters = [
        { name: "File Format", status: "✔ Acceptable", type: "pass" },
        { name: "Sample Rate", status: "✔ Acceptable", type: "pass" },
        { name: "Speech Presence", status: "✔ Detected", type: "pass" },
        { name: "Clipping", status: "❌ Detected", type: "fail" },
        { name: "Background Noise", status: "⚠ Medium", type: "warning" },
        { name: "Loudness", status: "✔ Acceptable", type: "pass" },
        { name: "Speaker Consistency (TTS)", status: "✔ Single Speaker", type: "pass" },
        { name: "Intelligibility (ASR)", status: "✔ Good", type: "pass" },
        { name: "Perceptual Quality", status: "⚠ Fair", type: "warning" }
    ];

    qcParameters.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("qcItem");
        if(item.type === "fail") div.classList.add("fail");
        if(item.type === "warning") div.classList.add("warning");
        div.textContent = `${item.name}: ${item.status}`;
        detailsEl.appendChild(div);
    });
}
