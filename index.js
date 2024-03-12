import("pdfreader")
  .then((pdfreader) => {
    const { PdfReader } = pdfreader;

    new PdfReader().parseFileItems("sample.pdf", (err, item) => {
      if (err) console.error("error:", err);
      else if (!item) console.warn("end of file");
      else if (item.text) console.log(item.text);
    });
  })
  .catch((err) => {
    console.error("Error loading pdfreader module:", err);
  });