import React from "react";
import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
// import resumePDF from "/resume.pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const CV = ({ handleClose, show }) => {
    const showHideClassName = show ? "display-block" : "display-none";
    return (
        <div id="CV" className={showHideClassName}>
            <div className="cover" onClick={handleClose} />
            <div className="CV-main">
                <div className="popup-buttons">
                    <span
                        className="CV-close popup-button"
                        onClick={handleClose}
                    >
                        <AiOutlineClose size={"24px"} />
                    </span>
                    <span className="CV-download popup-button" onClick={null}>
                        <a
                            href="resume.pdf"
                            download={"Lucas-Graham-resume.pdf"}
                        >
                            <AiOutlineDownload size={"24px"} />
                        </a>
                    </span>
                </div>
                <Document
                    file={"resume.pdf"}
                    loading={
                        <div className="loading">
                            <p>Loading...</p>
                        </div>
                    }
                >
                    <Page
                        pageNumber={1}
                        width={960}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                </Document>
            </div>
        </div>
    );
};

export default CV;
