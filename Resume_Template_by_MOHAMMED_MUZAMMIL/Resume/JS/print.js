function printCV() {
  printDiv = "#preview-sc";
  $("*").addClass("no-print");
  $(printDiv + " *").removeClass("no-print");
  $(printDiv).removeClass("no-print");

  parent = $(printDiv).parent();
  while ($(parent).length) {
    $(parent).removeClass("no-print");
    parent = $(parent).parent();
  }
  window.print();
}

function downloadAsPDF() {
  const printDiv = "#preview-sc";
  const originalStyles = getComputedStyle(document.querySelector(printDiv));

  document.querySelector(printDiv).style.width = "100%";

  if (typeof html2pdf !== "undefined") {
    const options = {
      margin: 10,
      filename: "your_cv.pdf",
      image: { type: "jpeg", quality: 1 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait", width: 210 },
    };

    const content = document.querySelector(printDiv).outerHTML;

    html2pdf(content, options).outputPdf((pdf) => {
      const blob = new Blob([pdf], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = options.filename;
      link.click();
    });
    
  } else {
    console.error(
      "html2pdf.js is not available. Make sure to include the library in your project."
    );
  }
}
