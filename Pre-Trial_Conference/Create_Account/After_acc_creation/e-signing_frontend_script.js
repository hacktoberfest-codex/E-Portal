const documentInput = document.getElementById('documentInput');
const signatureCanvas = document.getElementById('signatureCanvas');
const signedDocumentContainer = document.getElementById('signedDocumentContainer');
const downloadLink = document.getElementById('downloadLink');
const ctx = signatureCanvas.getContext('2d');

let documentFile = null;
let signatureData = null;

documentInput.addEventListener('change', (e) => {
    documentFile = e.target.files[0];
});

function clearSignature() {
    ctx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    signatureData = null;
}

function signDocument() {
    if (!documentFile || !signatureData) {
        alert('Please upload a document and provide a signature.');
        return;
    }

    // Send the documentFile and signatureData to the server for processing.
    // In a real application, you would send this data to the server via AJAX or fetch.

    // Simulate server processing (delayed response)
    setTimeout(() => {
        // Assuming the server returns a signed document in response
        const signedDocumentBlob = new Blob(['Simulated signed document content'], { type: 'application/pdf' });
        const signedDocumentUrl = URL.createObjectURL(signedDocumentBlob);

        // Display the signed document and enable download
        signedDocumentContainer.style.display = 'block';
        downloadLink.href = signedDocumentUrl;
        downloadLink.style.display = 'block';
    }, 2000);
}

// Signature drawing logic (simplified)
let isDrawing = false;

signatureCanvas.addEventListener('mousedown', () => {
    isDrawing = true;
    ctx.beginPath();
});

signatureCanvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    ctx.lineTo(e.clientX - signatureCanvas.getBoundingClientRect().left, e.clientY - signatureCanvas.getBoundingClientRect().top);
    ctx.stroke();
});

signatureCanvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath();
    signatureData = signatureCanvas.toDataURL(); // Capture the signature as a base64-encoded image
});

