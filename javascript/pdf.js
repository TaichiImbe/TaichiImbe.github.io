// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url = 'pro2-05.pdf';
// Loaded via <script> tag, create shortcut to access PDF.js exports.

// The workerSrc property shall be specified.
PDFJS.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@1.10.100/build/pdf.worker.js';
PDFJS.cMapUrl = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@1.10.100/cmaps/';
PDFJS.cMapPacked = true;

var pageNum = 1;
var pdf = null
const loadingTask = PDFJS.getDocument(url);
loadingTask.then(function (pdf_) {
  pdf = pdf_;
  pageRender(pageNum);
});
function pageRender(pageNum) {
  pdf.getPage(pageNum).then(function (page) {
  var scale = 1;
  var viewport = page.getViewport(scale);
  var canvas = document.getElementById('pdfCan');
  var context = canvas.getContext('2d');
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  var renderContext = {
    canvasContext: context,
    viewport: viewport
  };
  page.render(renderContext);
});
}
