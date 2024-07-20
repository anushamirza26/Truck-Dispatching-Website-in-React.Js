import React, { useEffect } from 'react';
import './BlogPage.css';
import { Link, Route, Router } from 'react-router-dom'; // Import Link from react-router-dom
import ReadMoreBlog from './ReadMoreBlog';

function BlogPage() {
 
  <Router>
    <Route path="/ReadMoreBlog" element={<ReadMoreBlog/>} />
  </Router>
 
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', scrollToTop);
    }

    return () => {
      if (scrollToTopBtn) {
        scrollToTopBtn.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
  
    <div>
      <div className="full-width-photo">
        <img style={{height:'400px'}} src="/cc articles.jpg" alt="Full Width Photo" />
        <div className="text-overlay">
          <h1>Cargo Captains Articles</h1>
        </div>
      </div>
  <div className='rt'>
      <div className="grid-container">
        <div className="grid-item"> 
          <img src="/div 1.jpg" alt="div1" />
          <div className="grid-item-content">
            <h2>How To Start A Trucking Business in 2024 – Complete Guide</h2>
            <p>Our guide will help you start a trucking business in 2024. We’ve covered all the bases so that you can get your business on the road.</p>
            <Link to="/ReadMoreBlog?content=content1">Read More</Link>
          </div>
        </div>

        <div className="grid-item"> 
          <img src="/div 2.jpg" alt="div2" />
          <div className="grid-item-content">
            <h2>How To Be A Truck Dispatcher From Home</h2>
            <p>How To Be A Truck Dispatcher From Home How To Dispatch Trucks From Home Post-pandemic, many jobs have been shifted to remote, cutting out many</p>
            <Link to="/ReadMoreBlog?content=content2">Read More</Link>
          </div>
        </div>

        <div className="grid-item"> 
          <img src="/div 3.jpg" alt="div3" />
          <div className="grid-item-content">
            <h2>Average Fuel Mileage for Semi Trucks</h2>
            <p>Average Fuel Mileage For Semi Trucks Which Semi Truck Gets The Best Fuel Mileage Semi-trucks get an average of 6.5 miles/gallon. This number depends on</p>
            <Link to="/ReadMoreBlog?content=content3">Read More</Link>
          </div>
        </div>

        <div className="grid-item"> 
          <img src="/div 4.jpg" alt="div4" />
          <div className="grid-item-content">
            <h2>What Kind of Insurance Do Truck Drivers Need</h2>
            <p>What Kind of Insurance Do Truck Drivers Need What Insurance Do Truck Drivers Need Insurance is necessary for truckers and trucking businesses. The specific type</p>
            <Link to="/ReadMoreBlog?content=content4">Read More</Link>
          </div>
        </div>

        <div className="grid-item"> 
          <img src="/div 5.jpg" alt="div5" />
          <div className="grid-item-content">
            <h2>Top Reasons to Be an Owner-Operator</h2>
            <p>Top Reasons to Be an Owner-Operator Reasons To Be An Owner Operator Truck Driver The truck industry is growing fast. Drivers are increasingly switching over</p>
            <Link to="/ReadMoreBlog?content=content5">Read More</Link>
          </div>
        </div>

        <div className="grid-item"> 
          <img src="/div 6.jpg" alt="div6" />
          <div className="grid-item-content">
            <h2>How To Become An Owner Operator</h2>
            <p>How to Become an Owner Operator Steps To Become An Owner Operator Truck Driver Becoming an owner operator truck driver is attractive because owner operators</p>
            <Link to="/ReadMoreBlog?content=content6">Read More</Link>
          </div>
        </div>

        <div className="grid-item"> 
          <img src="/div 7.jpg" alt="div7" />
          <div className="grid-item-content">
            <h2>How To Become A Truck Dispatcher</h2>
            <p>How To Become A Truck Dispatcher How To Become A Truck Dispatcher Being a truck dispatcher means negotiating, booking loads, handling paperwork, arranging and coordinating</p>
            <Link to="/ReadMoreBlog?content=content7">Read More</Link>
          </div>
        </div>

        <div className="grid-item"> 
          <img src="/div 8.jpg" alt="div8" />
          <div className="grid-item-content">
            <h2>Why Owner Operators Hire Truck Dispatch Companies</h2>
            <p>Why Owner Operators Hire Truck Dispatch Companies How To Choose A Dispatch Service For Owner Operators On the road to becoming a successful owner-operator, you’ll</p>
            <Link to="/ReadMoreBlog?content=content8">Read More</Link>
          </div>
        </div>
      </div>

      <img
        src="/scroll top arrow.png"
        alt="Arrow Icon"
        className="scroll-to-top"
        id="scrollToTopBtn"
      />
    </div>
     </div>
  );
}

export default BlogPage;