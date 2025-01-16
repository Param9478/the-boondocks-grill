import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import menu from '../../assets/menu-1.jpg';
import DesertMenu from '../../assets/Desert-menu.jpg';
import TakeoutSpecial from '../../assets/takeout-deals.jpg';
import RenderPDFSection from './RenderPdfSection';
import RenderMenuItems from './RenderMenuItems';

const MenuViewer = ({ MenuFile }) => {
  const menuCategories = [
    {
      id: 'full-menu',
      title: 'Full Menu',
      type: 'pdf',
      pdfUrl: MenuFile,
      previewImage: menu, // Optional preview image
    },
    {
      id: 'takeout-special',
      title: 'Take Out Special',
      type: 'items',
      image: TakeoutSpecial,
      items: [
        {
          category: 'Takeout Deals',
          dishes: [
            {
              name: 'Wow Pasta Meal',
              price: '32',
              description: '2 Baked Spaghetti or Lasagna + 2 Cans of Pop',
            },
            {
              name: 'Pizza and Wings',
              price: '35',
              description:
                'Large Pizza (up to 3 toppings) + 10 Chicken Wings + 2 Cans Pop',
            },
            {
              name: '2-2-2 Calzone',
              price: '34',
              description: '2 Calzone + 2 Side Fries + 2 Can Pop',
            },
            {
              name: 'Wings ',
              price: '28',
              description:
                'Hot, Honey Garlic, Teriyaki, Sweet Chilli, BBQ, Salt & Pepper, Crispy',
            },
          ],
        },
      ],
    },
    {
      id: 'dessert-menu',
      title: 'Dessert Menu',
      type: 'items',
      image: DesertMenu,
      items: [
        {
          category: 'Sweet Treats',
          dishes: [
            {
              name: 'Colossal Carrot Cake',
              price: '7.00',
              // description:
              //   'A towering slice of moist carrot cake layered with creamy frosting and a hint of spice.',
            },
            {
              name: 'Deep Apple Pie',
              price: '7.00',
              // description:
              //   'Classic apple pie with a buttery, flaky crust and a sweet cinnamon-spiced apple filling.',
            },
            {
              name: 'Chocolate Fudge Cake',
              price: '6.00',
              // description:
              //   'Rich and decadent chocolate cake with a smooth fudge frosting, perfect for chocolate lovers.',
            },
            {
              name: 'Salted Caramel Cheesecake',
              price: '7.00',
              // description:
              //   'Creamy cheesecake topped with a luscious salted caramel drizzle and a hint of sea salt.',
            },
            {
              name: 'French Cream Cheesecake',
              price: '7.00',
              // description:
              //   'Velvety cheesecake with a rich, creamy texture and a subtle hint of vanilla.',
            },
            {
              name: 'Banana Cream Pie',
              price: '6.00',
              // description:
              //   'Creamy banana filling in a crisp crust, topped with whipped cream and banana slices.',
            },
          ],
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [pdfExpanded, setPdfExpanded] = useState(false);

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % menuCategories.length);
    setPdfExpanded(false);
  };

  const prevCategory = () => {
    setActiveCategory(
      (prev) => (prev - 1 + menuCategories.length) % menuCategories.length
    );
    setPdfExpanded(false);
  };

  const handleDownloadPDF = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const currentCategory = menuCategories[activeCategory];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center my-12">
          <h5 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Discover our delicious offerings
          </h5>
        </div>

        <div className="relative">
          {/* Navigation Buttons - Now responsive */}
          {!pdfExpanded && (
            <div className="flex justify-between items-center mb-4 sm:hidden">
              <button
                onClick={prevCategory}
                className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Category title for mobile */}
              <span className="font-bold text-xl text-gray-700">
                {currentCategory.title}
              </span>

              <button
                onClick={nextCategory}
                className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl overflow-hidden">
                {currentCategory.type === 'pdf' ? (
                  <RenderPDFSection
                    pdfExpanded={pdfExpanded}
                    setPdfExpanded={setPdfExpanded}
                    handleDownloadPDF={handleDownloadPDF}
                    category={currentCategory}
                  />
                ) : (
                  <RenderMenuItems category={currentCategory} />
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Desktop navigation buttons - hidden on mobile */}
          {!pdfExpanded && (
            <>
              <button
                onClick={prevCategory}
                className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextCategory}
                className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {!pdfExpanded && (
          <div className="flex justify-center gap-2 mt-6">
            {menuCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === activeCategory ? 'bg-yellow-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
MenuViewer.propTypes = {
  MenuFile: PropTypes.string.isRequired,
};

export default MenuViewer;
