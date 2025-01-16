import Header from '../header';
// import PDFMenuViewer from './PdfMenuViewer';
import MenuFile from '../../assets/menu-image.pdf';
import MenuViewer from './MenuViewer';

export default function Menu() {
  return (
    <div>
      <Header
        title="Our Menu"
        content="Explore our carefully curated selection of dishes"
        imgSrc="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fullWidth
      />
      {/* <PDFMenuViewer pdfFile={MenuFile} /> */}
      <MenuViewer MenuFile={MenuFile} />
    </div>
  );
}
