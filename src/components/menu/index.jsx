import Header from '../header';
import PDFMenuViewer from './PDFMenuViewer'; // Import the PDFMenuViewer component
import MenuFile from '../../assets/menu-image.pdf';

export default function Menu() {
  return (
    <div>
      <Header
        title="Our Menu"
        content="Explore our carefully curated selection of dishes"
        imgSrc="https://images.unsplash.com/photo-1511978293554-7b92f19bd77d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fullWidth
      />
      <PDFMenuViewer pdfFile={MenuFile} />
    </div>
  );
}
