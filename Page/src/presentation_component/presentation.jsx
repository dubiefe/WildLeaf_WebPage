import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.mjs?url";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

import './presentation.css'
import presentation_pdf from "../assets/presentation_pdf.pdf"
import download_icon from "../assets/download.svg"

function Presentation() {
    const [ nbPages, setNbPages ] = useState(null);
    const [ currentPage, setCurrentPage ] = useState(1);

    const containerRef = useRef(null);
    const [pdfDimensions, setPdfDimensions] = useState({ width: 1, height: 1 });
    const [scale, setScale] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const onDocumentLoadSuccess = async (pdf) => {
        setNbPages(pdf.numPages);
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        setPdfDimensions({ width: viewport.width, height: viewport.height });
    };

    const updateScale = () => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const targetWidth = container.clientWidth;
        const targetHeight = container.clientHeight;

        const scaleX = targetWidth / pdfDimensions.width;
        const scaleY = targetHeight / pdfDimensions.height;

        setScale(Math.min(scaleX, scaleY));
    };

    useEffect(() => {
        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, [pdfDimensions]);

    const nextPage = () => {
        if (currentPage < nbPages) {
            setCurrentPage(currentPage + 1);
            setIsLoading(true);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setIsLoading(true);
        }
    };

    return (
        <>
            <div id="presentation_container">
                <div id="embed_container" ref={containerRef}>
                    <div style={{ position: "relative", flex: 1, width: "100%" }}>
                        {isLoading && (
                            <div id="loading_container">
                                <span>Loading...</span>
                            </div>
                        )}
                        <Document file={presentation_pdf} onLoadSuccess={onDocumentLoadSuccess}>
                            {scale > 0 && (<Page pageNumber={currentPage} scale={scale} onRenderSuccess={() => setIsLoading(false)}/>)}
                        </Document>
                    </div>
                </div>
                <div id="options_container">
                    <div style={{width:"60px"}}></div>
                    <div id="pages_container">
                        <button onClick={prevPage} disabled={currentPage === 1}>{"<"}</button>
                        <p>{currentPage} / {nbPages}</p>
                        <button onClick={nextPage} disabled={currentPage === nbPages}>{">"}</button>
                    </div>
                    <div style={{width:"60px"}}>
                        <a class="button" href={presentation_pdf} download="WildLeaf_Presentation" title="download the presentation"><img src={download_icon} alt="download" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Presentation