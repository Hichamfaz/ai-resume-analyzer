// Type definitions for pdfjs-dist
// This file provides type definitions for pdfjs-dist to avoid TypeScript errors

declare module "pdfjs-dist" {
  export const GlobalWorkerOptions: {
    workerSrc: string;
  };
  
  export function getDocument(params: any): Promise<any>;
  
  export default pdfjsLib;
}

declare const pdfjsLib: any;
export default pdfjsLib;